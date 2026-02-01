import type { Language } from "./constants";

const base = {
	"meta.title": "SmoothCSV - The ultimate CSV editor for macOS & Windows",
	"hero.title": "The Ultimate CSV Editor",
	"hero.description":
		"SmoothCSV is a powerful and intuitive tool for editing CSV files.",
	"easyEditing.title": "Easy Editing",
	"easyEditing.description":
		"Edit your CSV files with an intuitive spreadsheet-like interface.",
	"powerfulTools.title": "Powerful Tools",
	"powerfulTools.description":
		"Find and replace text, sort and filter data, run SQL queries, multi-cell editing, and much more.\nThe command palette gives you quick access to all features.",
	"fast.title": "Lightning Fast",
	"fast.description":
		"Handle large CSV files with blazing speed and efficiency.",
	"crossPlatform.title": "Cross-Platform",
	"crossPlatform.description":
		"SmoothCSV is available for Windows, macOS.\nComing soon to Linux.",
	"getStarted.title": "Ready to Get Started?",
	"getStarted.description":
		"Download SmoothCSV today and start editing your CSV files with ease.",
	"aboutMe.title": "About Me",
	"aboutMe.description":
		"I'm a full- stack developer, crafting SmoothCSV in my spare time.",
	"aboutMe.support":
		"If you like SmoothCSV, feel free to [share it on X](https://x.com/intent/post?text=Check%20out%20%23SmoothCSV%2C%20the%20ultimate%20%23CSVeditor%20for%20macOS%20and%20Windows!&url=https%3A%2F%2Fsmoothcsv.com%2F) about it, [star the repository on GitHub](https://github.com/kohii/smoothcsv3), or [buy me a coffee](https://buymeacoffee.com/kohii).",
	"download.mac": "Download for macOS",
	"download.windows": "Download for Windows",
	"download.linux": "Download for Linux",
	"download.otherDownloads": "Other downloads",
	"download.userInstaller": "User Installer",
	"download.msiInstaller": "MSI Installer",
	"download.portable": "Portable",
	"downloadPage.title": "Download SmoothCSV",
	"downloadPage.viewAllReleases": "View all releases on GitHub",
	"privacy.text":
		"By using SmoothCSV, you agree to the [Privacy Policy](/privacy) and [Terms of Use](/terms).",
	"footer.resources.sourceCode": "Source Code",
	"footer.resources.privacy": "Privacy Policy",
	"footer.resources.terms": "Terms of Use",
	"footer.contact.reportIssue": "Report an Issue",
	"footer.contact.email": "Email",
	"blog.description": "Technical articles about SmoothCSV development",
	"blog.readMore": "Read on {0}",
	"blog.noArticles": "No articles available yet",
};

type UiDictionary = typeof base;

export const ui = {
	en: base,
	ja: {
		"meta.title": "SmoothCSV - macOS & Windows 向けの最強のCSVエディター",
		"hero.title": "The Ultimate CSV Editor",
		"hero.description":
			"SmoothCSV は 高機能・高性能な CSV ファイルエディターです。",
		"easyEditing.title": "直感的な操作性",
		"easyEditing.description":
			"スプレッドシートのような使い慣れたインターフェイスで CSV ファイルを快適に編集できます。",
		"powerfulTools.title": "豊富な機能",
		"powerfulTools.description":
			"検索、置換、ソート、フィルタ、SQL、複数セル同時編集など、豊富な機能を搭載。\nすべての機能にコマンドパレットから素早くアクセスできます。",
		"fast.title": "超高速",
		"fast.description": "大容量ファイルでもすぐに開き、編集できます。",
		"crossPlatform.title": "クロスプラットフォーム",
		"crossPlatform.description":
			"Windows、macOS に対応。\nLinux にも対応予定です。",
		"getStarted.title": "Ready to Get Started?",
		"getStarted.description":
			"SmoothCSV を今すぐダウンロードして、CSV ファイルを思い通りに編集しましょう。",
		"aboutMe.title": "About Me",
		"aboutMe.description":
			"フルスタックエンジニアとして働きながら、個人で SmoothCSV を開発しています。",
		"aboutMe.support":
			"SmoothCSV を気に入っていただけましたら、[X でのシェア](https://x.com/intent/post?text=Check%20out%20%23SmoothCSV%2C%20the%20ultimate%20%23CSVeditor%20for%20macOS%20and%20Windows!&url=https%3A%2F%2Fsmoothcsv.com%2F) や [GitHub でのスター](https://github.com/kohii/smoothcsv3)、[コーヒーの支援](https://buymeacoffee.com/kohii) をしていただけると幸いです。",
		"download.mac": "macOS 版をダウンロード",
		"download.windows": "Windows 版をダウンロード",
		"download.linux": "Linux 版をダウンロード",
		"download.otherDownloads": "他のダウンロードオプション",
		"download.userInstaller": "ユーザーインストーラー",
		"download.msiInstaller": "MSI インストーラー",
		"download.portable": "ポータブル",
		"downloadPage.title": "SmoothCSV をダウンロード",
		"downloadPage.viewAllReleases": "GitHub ですべてのリリースを見る",
		"privacy.text":
			"SmoothCSV を使用することで、[プライバシーポリシー](/privacy) と [利用規約](/ja/terms) に同意したことになります。",
		"footer.resources.sourceCode": "ソースコード",
		"footer.resources.privacy": "プライバシーポリシー",
		"footer.resources.terms": "利用規約",
		"footer.contact.reportIssue": "問題を報告",
		"footer.contact.email": "メール",
		"blog.description": "SmoothCSV の開発に関する技術記事",
		"blog.readMore": "{0} で読む",
		"blog.noArticles": "まだ記事がありません",
	},
	"zh-cn": {
		"meta.title": "SmoothCSV - macOS 与 Windows 上终极 CSV 编辑器",
		"hero.title": "终极 CSV 编辑器",
		"hero.description": "SmoothCSV 是一款功能强大且直观的 CSV 文件编辑工具。",
		"easyEditing.title": "轻松编辑",
		"easyEditing.description":
			"使用类似电子表格的直观界面，顺畅编辑 CSV 文件。",
		"powerfulTools.title": "强大工具",
		"powerfulTools.description":
			"查找和替换文本、排序和筛选数据、运行 SQL 查询、多单元格编辑等功能应有尽有。\n命令面板可让你快速访问所有功能。",
		"fast.title": "闪电般快速",
		"fast.description": "以惊人速度高效处理大型 CSV 文件。",
		"crossPlatform.title": "跨平台",
		"crossPlatform.description":
			"SmoothCSV 提供 Windows 与 macOS 版本。\nLinux 版本即将推出。",
		"getStarted.title": "准备好开始了吗？",
		"getStarted.description": "立即下载 SmoothCSV，轻松自如地编辑 CSV 文件。",
		"aboutMe.title": "关于我",
		"aboutMe.description": "我是一名全栈开发者，在业余时间打造 SmoothCSV。",
		"aboutMe.support":
			"如果你喜欢 SmoothCSV，欢迎[在 X 上分享](https://x.com/intent/post?text=Check%20out%20%23SmoothCSV%2C%20the%20ultimate%20%23CSVeditor%20for%20macOS%20and%20Windows!&url=https%3A%2F%2Fsmoothcsv.com%2F)、[在 GitHub 上加星](https://github.com/kohii/smoothcsv3)，或[请我喝杯咖啡](https://buymeacoffee.com/kohii)。",
		"download.mac": "下载 macOS 版本",
		"download.windows": "下载 Windows 版本",
		"download.linux": "下载 Linux 版本",
		"download.otherDownloads": "其他下载选项",
		"download.userInstaller": "用户安装程序",
		"download.msiInstaller": "MSI 安装程序",
		"download.portable": "便携版",
		"downloadPage.title": "下载 SmoothCSV",
		"downloadPage.viewAllReleases": "在 GitHub 上查看所有版本",
		"privacy.text":
			"使用 SmoothCSV 即表示你同意[隐私政策](/privacy)和[使用条款](/terms)。",
		"footer.resources.sourceCode": "源代码",
		"footer.resources.privacy": "隐私政策",
		"footer.resources.terms": "使用条款",
		"footer.contact.reportIssue": "报告问题",
		"footer.contact.email": "电子邮件",
		"blog.description": "关于 SmoothCSV 开发的技术文章",
		"blog.readMore": "在 {0} 阅读",
		"blog.noArticles": "暂无文章",
	},
	fr: {
		"meta.title": "SmoothCSV - L'éditeur CSV ultime pour macOS et Windows",
		"hero.title": "L'éditeur CSV ultime",
		"hero.description":
			"SmoothCSV est un outil puissant et intuitif pour modifier vos fichiers CSV.",
		"easyEditing.title": "Édition facile",
		"easyEditing.description":
			"Modifiez vos fichiers CSV avec une interface intuitive proche d'un tableur.",
		"powerfulTools.title": "Outils puissants",
		"powerfulTools.description":
			"Rechercher/remplacer, trier et filtrer les données, exécuter des requêtes SQL, éditer plusieurs cellules et bien plus.\nLa palette de commandes offre un accès rapide à toutes les fonctionnalités.",
		"fast.title": "Ultra rapide",
		"fast.description":
			"Gérez de gros fichiers CSV avec une vitesse fulgurante.",
		"crossPlatform.title": "Multiplateforme",
		"crossPlatform.description":
			"SmoothCSV est disponible sur Windows et macOS.\nBientôt disponible sur Linux.",
		"getStarted.title": "Prêt à vous lancer ?",
		"getStarted.description":
			"Téléchargez SmoothCSV dès aujourd'hui et commencez à modifier vos CSV facilement.",
		"aboutMe.title": "À propos de moi",
		"aboutMe.description":
			"Je suis développeur full-stack et je crée SmoothCSV sur mon temps libre.",
		"aboutMe.support":
			"Si vous aimez SmoothCSV, n'hésitez pas à [le partager sur X](https://x.com/intent/post?text=Check%20out%20%23SmoothCSV%2C%20the%20ultimate%20%23CSVeditor%20for%20macOS%20and%20Windows!&url=https%3A%2F%2Fsmoothcsv.com%2F), [ajouter une étoile sur GitHub](https://github.com/kohii/smoothcsv3), ou [m'offrir un café](https://buymeacoffee.com/kohii).",
		"download.mac": "Télécharger pour macOS",
		"download.windows": "Télécharger pour Windows",
		"download.linux": "Télécharger pour Linux",
		"download.otherDownloads": "Autres téléchargements",
		"download.userInstaller": "Installateur utilisateur",
		"download.msiInstaller": "Installateur MSI",
		"download.portable": "Portable",
		"downloadPage.title": "Télécharger SmoothCSV",
		"downloadPage.viewAllReleases": "Voir toutes les versions sur GitHub",
		"privacy.text":
			"En utilisant SmoothCSV, vous acceptez la [politique de confidentialité](/privacy) et les [conditions d'utilisation](/terms).",
		"footer.resources.sourceCode": "Code source",
		"footer.resources.privacy": "Politique de confidentialité",
		"footer.resources.terms": "Conditions d'utilisation",
		"footer.contact.reportIssue": "Signaler un problème",
		"footer.contact.email": "E-mail",
		"blog.description": "Articles techniques sur le développement de SmoothCSV",
		"blog.readMore": "Lire sur {0}",
		"blog.noArticles": "Aucun article pour le moment",
	},
	it: {
		"meta.title": "SmoothCSV - L'editor CSV definitivo per macOS e Windows",
		"hero.title": "L'editor CSV definitivo",
		"hero.description":
			"SmoothCSV è uno strumento potente e intuitivo per modificare file CSV.",
		"easyEditing.title": "Modifica semplice",
		"easyEditing.description":
			"Modifica i tuoi CSV con un'interfaccia intuitiva simile a un foglio di calcolo.",
		"powerfulTools.title": "Strumenti potenti",
		"powerfulTools.description":
			"Trova e sostituisci il testo, ordina e filtra i dati, esegui query SQL, modifica più celle e molto altro.\nLa command palette offre accesso rapido a tutte le funzioni.",
		"fast.title": "Fulmineo",
		"fast.description":
			"Gestisci file CSV di grandi dimensioni con velocità ed efficienza.",
		"crossPlatform.title": "Multipiattaforma",
		"crossPlatform.description":
			"SmoothCSV è disponibile per Windows e macOS.\nLa versione Linux è in arrivo.",
		"getStarted.title": "Pronto a iniziare?",
		"getStarted.description":
			"Scarica oggi SmoothCSV e inizia a modificare facilmente i tuoi file CSV.",
		"aboutMe.title": "Chi sono",
		"aboutMe.description":
			"Sono uno sviluppatore full-stack e realizzo SmoothCSV nel tempo libero.",
		"aboutMe.support":
			"Se ti piace SmoothCSV, [condividilo su X](https://x.com/intent/post?text=Check%20out%20%23SmoothCSV%2C%20the%20ultimate%20%23CSVeditor%20for%20macOS%20and%20Windows!&url=https%3A%2F%2Fsmoothcsv.com%2F), [metti una stella su GitHub](https://github.com/kohii/smoothcsv3) o [offrimi un caffè](https://buymeacoffee.com/kohii).",
		"download.mac": "Scarica per macOS",
		"download.windows": "Scarica per Windows",
		"download.linux": "Scarica per Linux",
		"download.otherDownloads": "Altri download",
		"download.userInstaller": "Installatore utente",
		"download.msiInstaller": "Installatore MSI",
		"download.portable": "Portatile",
		"downloadPage.title": "Scarica SmoothCSV",
		"downloadPage.viewAllReleases": "Visualizza tutte le versioni su GitHub",
		"privacy.text":
			"Usando SmoothCSV accetti l'[informativa sulla privacy](/privacy) e i [termini di utilizzo](/terms).",
		"footer.resources.sourceCode": "Codice sorgente",
		"footer.resources.privacy": "Informativa sulla privacy",
		"footer.resources.terms": "Termini di utilizzo",
		"footer.contact.reportIssue": "Segnala un problema",
		"footer.contact.email": "Email",
		"blog.description": "Articoli tecnici sullo sviluppo di SmoothCSV",
		"blog.readMore": "Leggi su {0}",
		"blog.noArticles": "Nessun articolo disponibile",
	},
	es: {
		"meta.title": "SmoothCSV - El editor CSV definitivo para macOS y Windows",
		"hero.title": "El editor CSV definitivo",
		"hero.description":
			"SmoothCSV es una herramienta potente e intuitiva para editar archivos CSV.",
		"easyEditing.title": "Edición sencilla",
		"easyEditing.description":
			"Edita tus CSV con una interfaz intuitiva similar a una hoja de cálculo.",
		"powerfulTools.title": "Herramientas potentes",
		"powerfulTools.description":
			"Busca y reemplaza texto, ordena y filtra datos, ejecuta consultas SQL, edita varias celdas y mucho más.\nLa paleta de comandos te da acceso rápido a todas las funciones.",
		"fast.title": "Ultrarrápido",
		"fast.description":
			"Procesa archivos CSV enormes con una velocidad y eficiencia increíbles.",
		"crossPlatform.title": "Multiplataforma",
		"crossPlatform.description":
			"SmoothCSV está disponible para Windows y macOS.\nPróximamente en Linux.",
		"getStarted.title": "¿Listo para empezar?",
		"getStarted.description":
			"Descarga SmoothCSV hoy y comienza a editar tus CSV con facilidad.",
		"aboutMe.title": "Sobre mí",
		"aboutMe.description":
			"Soy un desarrollador full-stack y creo SmoothCSV en mi tiempo libre.",
		"aboutMe.support":
			"Si te gusta SmoothCSV, [compártelo en X](https://x.com/intent/post?text=Check%20out%20%23SmoothCSV%2C%20the%20ultimate%20%23CSVeditor%20for%20macOS%20and%20Windows!&url=https%3A%2F%2Fsmoothcsv.com%2F), [dale una estrella en GitHub](https://github.com/kohii/smoothcsv3) o [invítame a un café](https://buymeacoffee.com/kohii).",
		"download.mac": "Descargar para macOS",
		"download.windows": "Descargar para Windows",
		"download.linux": "Descargar para Linux",
		"download.otherDownloads": "Otras descargas",
		"download.userInstaller": "Instalador de usuario",
		"download.msiInstaller": "Instalador MSI",
		"download.portable": "Portátil",
		"downloadPage.title": "Descargar SmoothCSV",
		"downloadPage.viewAllReleases": "Ver todas las versiones en GitHub",
		"privacy.text":
			"Al usar SmoothCSV aceptas la [política de privacidad](/privacy) y los [términos de uso](/terms).",
		"footer.resources.sourceCode": "Código fuente",
		"footer.resources.privacy": "Política de privacidad",
		"footer.resources.terms": "Términos de uso",
		"footer.contact.reportIssue": "Reportar un problema",
		"footer.contact.email": "Correo electrónico",
		"blog.description": "Artículos técnicos sobre el desarrollo de SmoothCSV",
		"blog.readMore": "Leer en {0}",
		"blog.noArticles": "Aún no hay artículos",
	},
	de: {
		"meta.title": "SmoothCSV - Der ultimative CSV-Editor für macOS & Windows",
		"hero.title": "Der ultimative CSV-Editor",
		"hero.description":
			"SmoothCSV ist ein leistungsstarkes und intuitives Tool zum Bearbeiten von CSV-Dateien.",
		"easyEditing.title": "Einfache Bearbeitung",
		"easyEditing.description":
			"Bearbeite deine CSV-Dateien mit einer intuitiven, tabellenähnlichen Oberfläche.",
		"powerfulTools.title": "Leistungsstarke Werkzeuge",
		"powerfulTools.description":
			"Text suchen und ersetzen, Daten sortieren und filtern, SQL-Abfragen ausführen, mehrere Zellen bearbeiten und vieles mehr.\nDie Befehlspalette bietet schnellen Zugriff auf alle Funktionen.",
		"fast.title": "Blitzschnell",
		"fast.description":
			"Verarbeite große CSV-Dateien mit beeindruckender Geschwindigkeit und Effizienz.",
		"crossPlatform.title": "Plattformübergreifend",
		"crossPlatform.description":
			"SmoothCSV ist für Windows und macOS verfügbar.\nLinux folgt bald.",
		"getStarted.title": "Bereit loszulegen?",
		"getStarted.description":
			"Lade SmoothCSV noch heute herunter und bearbeite deine CSV-Dateien ganz entspannt.",
		"aboutMe.title": "Über mich",
		"aboutMe.description":
			"Ich bin Full-Stack-Entwickler und arbeite in meiner Freizeit an SmoothCSV.",
		"aboutMe.support":
			"Wenn dir SmoothCSV gefällt, [teile es auf X](https://x.com/intent/post?text=Check%20out%20%23SmoothCSV%2C%20the%20ultimate%20%23CSVeditor%20for%20macOS%20and%20Windows!&url=https%3A%2F%2Fsmoothcsv.com%2F), [gib auf GitHub einen Stern](https://github.com/kohii/smoothcsv3) oder [spendiere mir einen Kaffee](https://buymeacoffee.com/kohii).",
		"download.mac": "Für macOS herunterladen",
		"download.windows": "Für Windows herunterladen",
		"download.linux": "Für Linux herunterladen",
		"download.otherDownloads": "Weitere Downloads",
		"download.userInstaller": "Benutzer-Installer",
		"download.msiInstaller": "MSI-Installer",
		"download.portable": "Portabel",
		"downloadPage.title": "SmoothCSV herunterladen",
		"downloadPage.viewAllReleases": "Alle Versionen auf GitHub ansehen",
		"privacy.text":
			"Durch die Nutzung von SmoothCSV akzeptierst du die [Datenschutzerklärung](/privacy) und die [Nutzungsbedingungen](/terms).",
		"footer.resources.sourceCode": "Quellcode",
		"footer.resources.privacy": "Datenschutzerklärung",
		"footer.resources.terms": "Nutzungsbedingungen",
		"footer.contact.reportIssue": "Problem melden",
		"footer.contact.email": "E-Mail",
		"blog.description": "Technische Artikel über die Entwicklung von SmoothCSV",
		"blog.readMore": "Auf {0} lesen",
		"blog.noArticles": "Noch keine Artikel verfügbar",
	},
	ru: {
		"meta.title": "SmoothCSV — лучший CSV-редактор для macOS и Windows",
		"hero.title": "Лучший CSV-редактор",
		"hero.description":
			"SmoothCSV — мощный и интуитивно понятный инструмент для работы с CSV-файлами.",
		"easyEditing.title": "Простое редактирование",
		"easyEditing.description":
			"Редактируйте CSV-файлы в знакомом интерфейсе, похожем на электронные таблицы.",
		"powerfulTools.title": "Мощные инструменты",
		"powerfulTools.description":
			"Поиск и замена текста, сортировка и фильтрация данных, выполнение SQL-запросов, редактирование нескольких ячеек и многое другое.\nКомандная палитра обеспечивает быстрый доступ ко всем функциям.",
		"fast.title": "Молниеносная скорость",
		"fast.description":
			"Обрабатывайте большие CSV-файлы с потрясающей скоростью и эффективностью.",
		"crossPlatform.title": "Кроссплатформенность",
		"crossPlatform.description":
			"SmoothCSV доступен для Windows и macOS.\nВерсия для Linux появится позже.",
		"getStarted.title": "Готовы начать?",
		"getStarted.description":
			"Скачайте SmoothCSV уже сегодня и редактируйте CSV-файлы без лишних усилий.",
		"aboutMe.title": "Обо мне",
		"aboutMe.description":
			"Я full-stack разработчик и создаю SmoothCSV в свободное время.",
		"aboutMe.support":
			"Если вам нравится SmoothCSV, [поделитесь им в X](https://x.com/intent/post?text=Check%20out%20%23SmoothCSV%2C%20the%20ultimate%20%23CSVeditor%20for%20macOS%20and%20Windows!&url=https%3A%2F%2Fsmoothcsv.com%2F), [поставьте звёздочку на GitHub](https://github.com/kohii/smoothcsv3) или [угостите меня кофе](https://buymeacoffee.com/kohii).",
		"download.mac": "Скачать для macOS",
		"download.windows": "Скачать для Windows",
		"download.linux": "Скачать для Linux",
		"download.otherDownloads": "Другие загрузки",
		"download.userInstaller": "Пользовательский установщик",
		"download.msiInstaller": "MSI-установщик",
		"download.portable": "Портативная",
		"downloadPage.title": "Скачать SmoothCSV",
		"downloadPage.viewAllReleases": "Все версии на GitHub",
		"privacy.text":
			"Используя SmoothCSV, вы соглашаетесь с [политикой конфиденциальности](/privacy) и [условиями использования](/terms).",
		"footer.resources.sourceCode": "Исходный код",
		"footer.resources.privacy": "Политика конфиденциальности",
		"footer.resources.terms": "Условия использования",
		"footer.contact.reportIssue": "Сообщить о проблеме",
		"footer.contact.email": "Электронная почта",
		"blog.description": "Технические статьи о разработке SmoothCSV",
		"blog.readMore": "Читать на {0}",
		"blog.noArticles": "Пока нет доступных статей",
	},
	ko: {
		"meta.title": "SmoothCSV - macOS와 Windows를 위한 최고의 CSV 편집기",
		"hero.title": "궁극의 CSV 편집기",
		"hero.description":
			"SmoothCSV는 CSV 파일 편집을 위한 강력하고 직관적인 도구입니다.",
		"easyEditing.title": "쉬운 편집",
		"easyEditing.description":
			"스프레드시트와 같은 익숙한 인터페이스로 CSV 파일을 편하게 편집하세요.",
		"powerfulTools.title": "강력한 도구",
		"powerfulTools.description":
			"텍스트 찾기/바꾸기, 정렬과 필터, SQL 쿼리 실행, 다중 셀 편집 등 다양한 기능을 제공합니다.\n명령 팔레트로 모든 기능에 빠르게 접근하세요.",
		"fast.title": "매우 빠른 속도",
		"fast.description":
			"대용량 CSV 파일도 놀라운 속도로 효율적으로 처리합니다.",
		"crossPlatform.title": "크로스 플랫폼",
		"crossPlatform.description":
			"SmoothCSV는 Windows와 macOS에서 사용할 수 있습니다.\nLinux 버전도 곧 제공될 예정입니다.",
		"getStarted.title": "지금 시작해 볼까요?",
		"getStarted.description":
			"지금 SmoothCSV를 내려받고 CSV 파일을 손쉽게 편집하세요.",
		"aboutMe.title": "소개",
		"aboutMe.description":
			"저는 풀스택 개발자로, 여가 시간에 SmoothCSV를 만들고 있습니다.",
		"aboutMe.support":
			"SmoothCSV가 마음에 들었다면 [X에서 공유](https://x.com/intent/post?text=Check%20out%20%23SmoothCSV%2C%20the%20ultimate%20%23CSVeditor%20for%20macOS%20and%20Windows!&url=https%3A%2F%2Fsmoothcsv.com%2F), [GitHub에서 스타](https://github.com/kohii/smoothcsv3) 또는 [커피 한 잔 후원](https://buymeacoffee.com/kohii)을 부탁드립니다.",
		"download.mac": "macOS용 다운로드",
		"download.windows": "Windows용 다운로드",
		"download.linux": "Linux용 다운로드",
		"download.otherDownloads": "기타 다운로드",
		"download.userInstaller": "사용자 설치 프로그램",
		"download.msiInstaller": "MSI 설치 프로그램",
		"download.portable": "포터블",
		"downloadPage.title": "SmoothCSV 다운로드",
		"downloadPage.viewAllReleases": "GitHub에서 모든 릴리스 보기",
		"privacy.text":
			"SmoothCSV를 사용하면 [개인정보 처리방침](/privacy)과 [이용 약관](/terms)에 동의하는 것으로 간주합니다.",
		"footer.resources.sourceCode": "소스 코드",
		"footer.resources.privacy": "개인정보 처리방침",
		"footer.resources.terms": "이용 약관",
		"footer.contact.reportIssue": "문제 신고",
		"footer.contact.email": "이메일",
		"blog.description": "SmoothCSV 개발에 관한 기술 글",
		"blog.readMore": "{0}에서 읽기",
		"blog.noArticles": "아직 게시된 글이 없습니다",
	},
	pt: {
		"meta.title": "SmoothCSV - O editor CSV definitivo para macOS e Windows",
		"hero.title": "O editor CSV definitivo",
		"hero.description":
			"SmoothCSV é uma ferramenta poderosa e intuitiva para editar arquivos CSV.",
		"easyEditing.title": "Edição fácil",
		"easyEditing.description":
			"Edite seus arquivos CSV com uma interface intuitiva parecida com uma planilha.",
		"powerfulTools.title": "Ferramentas poderosas",
		"powerfulTools.description":
			"Localize e substitua texto, ordene e filtre dados, execute consultas SQL, edite várias células e muito mais.\nO painel de comandos dá acesso rápido a todos os recursos.",
		"fast.title": "Muito rápido",
		"fast.description":
			"Lide com arquivos CSV grandes com velocidade e eficiência impressionantes.",
		"crossPlatform.title": "Multiplataforma",
		"crossPlatform.description":
			"SmoothCSV está disponível para Windows e macOS.\nEm breve também no Linux.",
		"getStarted.title": "Pronto para começar?",
		"getStarted.description":
			"Baixe o SmoothCSV hoje e comece a editar seus CSVs com facilidade.",
		"aboutMe.title": "Sobre mim",
		"aboutMe.description":
			"Sou um desenvolvedor full-stack e crio o SmoothCSV no meu tempo livre.",
		"aboutMe.support":
			"Se você gosta do SmoothCSV, [compartilhe no X](https://x.com/intent/post?text=Check%20out%20%23SmoothCSV%2C%20the%20ultimate%20%23CSVeditor%20for%20macOS%20and%20Windows!&url=https%3A%2F%2Fsmoothcsv.com%2F), [dê uma estrela no GitHub](https://github.com/kohii/smoothcsv3) ou [pague um café para mim](https://buymeacoffee.com/kohii).",
		"download.mac": "Baixar para macOS",
		"download.windows": "Baixar para Windows",
		"download.linux": "Baixar para Linux",
		"download.otherDownloads": "Outros downloads",
		"download.userInstaller": "Instalador de usuário",
		"download.msiInstaller": "Instalador MSI",
		"download.portable": "Portátil",
		"downloadPage.title": "Baixar SmoothCSV",
		"downloadPage.viewAllReleases": "Ver todas as versões no GitHub",
		"privacy.text":
			"Ao usar o SmoothCSV você concorda com a [política de privacidade](/privacy) e os [termos de uso](/terms).",
		"footer.resources.sourceCode": "Código-fonte",
		"footer.resources.privacy": "Política de privacidade",
		"footer.resources.terms": "Termos de uso",
		"footer.contact.reportIssue": "Relatar um problema",
		"footer.contact.email": "E-mail",
		"blog.description": "Artigos técnicos sobre o desenvolvimento do SmoothCSV",
		"blog.readMore": "Ler em {0}",
		"blog.noArticles": "Ainda não há artigos disponíveis",
	},
} satisfies Record<Language, UiDictionary>;
