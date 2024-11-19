type Token =
	| {
			type: "text";
			value: string;
	  }
	| {
			type: "link";
			value: string;
			href: string;
	  };

export function tokenizeMarkdownText(input: string): Token[] {
	const tokens: Token[] = [];
	let currentPosition = 0;

	while (currentPosition < input.length) {
		// Look for opening bracket of link
		const linkStart = input.indexOf("[", currentPosition);

		if (linkStart === -1) {
			// No more links, add remaining text as text token
			const remainingText = input.slice(currentPosition);
			if (remainingText) {
				tokens.push({ type: "text", value: remainingText });
			}
			break;
		}

		// Add text before link if exists
		if (linkStart > currentPosition) {
			tokens.push({
				type: "text",
				value: input.slice(currentPosition, linkStart),
			});
		}

		// Find closing bracket and opening parenthesis
		const textEnd = input.indexOf("]", linkStart);
		const hrefStart = input.indexOf("(", textEnd);

		// If we don't find proper markdown link format, treat as text
		if (textEnd === -1 || hrefStart === -1 || hrefStart !== textEnd + 1) {
			tokens.push({
				type: "text",
				value: input.slice(currentPosition, linkStart + 1),
			});
			currentPosition = linkStart + 1;
			continue;
		}

		// Find closing parenthesis
		const hrefEnd = input.indexOf(")", hrefStart);
		if (hrefEnd === -1) {
			tokens.push({
				type: "text",
				value: input.slice(currentPosition, linkStart + 1),
			});
			currentPosition = linkStart + 1;
			continue;
		}

		// Extract link text and href
		const linkText = input.slice(linkStart + 1, textEnd);
		const href = input.slice(hrefStart + 1, hrefEnd);

		tokens.push({
			type: "link",
			value: linkText,
			href: href,
		});

		currentPosition = hrefEnd + 1;
	}

	return tokens;
}
