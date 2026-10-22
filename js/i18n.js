/* ===== Cambio de idioma del sitio (es, en, ru, be) ===== */
(function () {
    const DEFAULT_LANG = "es";
    const STORAGE_KEY = "lang";

    // El español está escrito directamente en el HTML; aquí solo están las traducciones
    // y los textos que se generan desde JavaScript.
    const ES_JS = {
        "contact.status.sending": "Enviando…",
        "contact.status.sent": "¡Mensaje enviado! Te responderé lo antes posible.",
        "contact.status.error": "No se ha podido enviar el mensaje. Inténtalo de nuevo más tarde.",
        "contact.status.timeout": "El servidor no responde. Inténtalo de nuevo más tarde.",
        "contact.status.noKey": "El formulario todavía no está configurado.",
        "contact.status.fallback": "También puedes escribirme a {email}.",
        "gallery.alt": "Captura del juego {name}",
        "gallery.zoom": "Ampliar captura de {name}",
        "gallery.dialog": "Captura ampliada",
        "lang.label": "Idioma"
    };

    const TRANSLATIONS = {
        en: {
            "contact.status.sending": "Sending…",
            "contact.status.sent": "Message sent! I will get back to you as soon as possible.",
            "contact.status.error": "The message could not be sent. Please try again later.",
            "contact.status.timeout": "The server is not responding. Please try again later.",
            "contact.status.noKey": "The form is not set up yet.",
            "contact.status.fallback": "You can also write to me at {email}.",
            "site.title": "My Portfolio",
            "nav.home": "Home",
            "nav.projects": "Projects",
            "nav.contact": "Contact",
            "footer.rights": "&copy; 2026 Lukashou Siarhei. All rights reserved.",
            "common.location": "Seville, Spain",
            "index.title": "My Portfolio - Game Developer",
            "index.photoCaption": "My photo",
            "index.role": "Unity Developer · Multiplatform Application Development",
            "index.heroExp": "Over 3 years of experience developing mobile apps and games with Unity and C#.",
            "index.about.title": "About Me",
            "index.about.p1": "Unity developer with over 3 years of professional experience building apps and games for mobile devices with Unity and C#.",
            "index.about.p2": "I have worked on projects throughout the entire development cycle: implementing mechanics and features, building interfaces, optimizing performance, fixing bugs and supporting releases. Over the last year I have worked on production-oriented Unity projects in an agile, fast-paced environment.",
            "index.about.p3": "I graduated from the <a href=\"https://www.bsuir.by/en/\">Belarusian State University of Informatics and Radioelectronics (BSUIR)</a> and I am currently studying DAM (Multiplatform Application Development) at Campus Cámara FP Sevilla. I also did an internship at Versus e-Learning, where I gained additional software development experience with ASP.NET and MySQL.",
            "index.about.p4": "I want to keep growing as a developer, broaden my knowledge of application development and join projects where I can combine my Unity experience with new technologies and tools.",
            "index.exp.title": "Work Experience",
            "index.exp.syndicate.meta": "Apr 2025 - May 2026 · Full-time · Remote",
            "index.exp.syndicate.1": "Developed mobile apps for iOS and Android for the entertainment and gaming industry.",
            "index.exp.syndicate.2": "Integrated WebView and redirect systems based on the user's traffic source.",
            "index.exp.syndicate.3": "Built logic to deliver different content and experiences depending on acquisition parameters.",
            "index.exp.syndicate.4": "Prepared, optimized and published apps on Google Play and the App Store.",
            "index.exp.versus.meta": "Jan 2026 - Feb 2026 · Dual VET (internship) · Seville",
            "index.exp.versus.1": "Developed and maintained an internal student management application with ASP.NET MVC and MySQL.",
            "index.exp.versus.2": "Built an email notification system with different types of alerts.",
            "index.exp.versus.3": "Implemented new features, designed the interface, debugged and fixed bugs.",
            "index.exp.elephant.meta": "Aug 2024 - Jan 2025 · Full-time · Remote",
            "index.exp.nv.meta": "Apr 2021 - Aug 2021 · Full-time · Minsk",
            "index.exp.gismart.meta": "Dec 2020 - Feb 2021 · Full-time · Minsk",
            "index.exp.wer.meta": "Dec 2019 - Oct 2020 · Full-time · Minsk",
            "index.exp.wer.1": "Developed games with Unity and C#: mechanics, gameplay, UI and systems.",
            "index.exp.wer.2": "Sole developer during the project's early stage (startup).",
            "index.exp.wer.3": "Git, Trello, integration of analytics SDKs and third-party services.",
            "index.exp.wer.4": "Builds, releases and maintenance of games on Google Play and the App Store.",
            "index.exp.vizor.meta": "Jun 2019 - Aug 2020 · Part-time · Minsk",
            "index.edu.title": "Education",
            "index.edu.fp.title": "Higher Vocational Education (FP Grado Superior)",
            "index.edu.fp.meta": "Centro FP Superior de la Cámara de Comercio de Sevilla · Sep 2025 - Jun 2027",
            "index.edu.fp.degree": "Multiplatform Application Development (DAM)",
            "index.edu.uni.title": "University Studies",
            "index.edu.uni.meta": "<a href=\"https://www.bsuir.by/en/\">BSUIR</a>, Minsk · Sep 2017 - Jul 2021",
            "index.edu.uni.degree": "Information Systems and Technologies (in the video game industry)",
            "index.skills.title": "Professional Skills",
            "index.skills.mobile": "Mobile apps and games",
            "index.skills.perf": "Performance optimization",
            "index.skills.data": "XML, JSON and data serialization",
            "index.skills.sdk": "SDK integrations",
            "index.skills.publish": "Publishing on Google Play / App Store",
            "index.skills.debug": "Debugging and problem solving",
            "index.langs.title": "Languages",
            "index.langs.be": "Belarusian (native)",
            "index.langs.ru": "Russian (native)",
            "index.langs.es": "Spanish (native)",
            "index.langs.en": "English (B2)",
            "index.interests.title": "Interests",
            "index.interests.gamedev": "Game development",
            "index.interests.apps": "Multiplatform app development",
            "index.interests.play": "Playing video games",
            "projects.title": "My Projects - Portfolio",
            "projects.heading": "My Projects",
            "projects.intro": "A selection of my most recent work in game and application development",
            "projects.bmt.p1": "A mobile app for managing shared purchases and splitting expenses between people who live together. It lets you create household groups, record purchases (shared, personal or split between several members) and automatically calculate how much each person has to pay per week or per month.",
            "projects.bmt.p2": "DAM final project, developed in Java by a team of 4 using the Scrum methodology.",
            "projects.bmt.links": "<a href=\"https://github.com/siarheilukashou25-maker/By-Me-Too\">Code on GitHub</a> · <a href=\"https://github.com/siarheilukashou25-maker/Proyecto-Intermodular-By-Me-Too\">Documentation and Kanban board</a>",
            "projects.fullDev": "Full development of this game using Unity and C#.",
            "projects.screw.team": "On this project I worked in a team with a project lead, a game designer and a generalist artist; I was the developer. We started with the game idea and the mechanic; then the game designer wrote the documentation describing what the game would be like and what had to be done. After that, together with the generalist artist, we started developing and designing the game.",
            "projects.passenger.team": "On this project I worked in a team with a game designer and a generalist artist; I was the developer. We started with the game idea and the mechanic; then the game designer wrote the documentation describing what the game would be like and what had to be done. After that, together with the generalist artist, we started developing and designing the game.",
            "projects.qa": "Then we sent it to the QA (testing) team to find all the bugs. After several rounds of testing, we finished the project.",
            "projects.gpCaption": "Game screenshot on Google Play",
            "projects.playable.title": "Playable Ad in Cocos Creator",
            "projects.playable.p1": "A playable ad I made as a technical test for a company: a small physics-based driving game where you have to get the car to the finish line.",
            "projects.playable.p2": "It was my first experience with Cocos Creator and TypeScript, coming from Unity and C#. You can play it right here, directly in your browser.",
            "projects.codeOnGithub": "Code on GitHub",
            "projects.playable.caption": "Web game made with Cocos Creator 3.7 · <a href=\"GameOnCocos/index.html\">Open full screen</a>",
            "projects.other.title": "Other Projects",
            "projects.other.p1": "I have developed more than 50 games, but for various reasons they were not published on Google Play, or the company lost its Google Play account after it was blocked.",
            "projects.other.some": "Some of them:",
            "projects.academic.title": "Academic Projects (DAM)",
            "projects.academic.intro": "Assignments and coursework from the Multiplatform Application Development program, published on <a href=\"https://github.com/siarheilukashou25-maker\">GitHub</a>.",
            "projects.repo.bmi.title": "BMI Calculator",
            "projects.repo.bmi.desc": "A Java Swing desktop application that calculates the Body Mass Index following the MVC pattern.",
            "projects.repo.employees.title": "Employee Management with Files",
            "projects.repo.employees.desc": "Pair assignment: a Java application that creates and queries a binary employee file (listings, salaries, provinces), with time planning and a UML diagram.",
            "projects.repo.employees.stack": "Java · Files · UML",
            "projects.repo.legacy.title": "Legacy Code Refactoring",
            "projects.repo.legacy.desc": "Refactoring of a legacy billing module: renaming parameters with the IDE, JUnit 5 tests and JavaDoc documentation.",
            "projects.repo.esg.title": "ESG Audit and Sustainable Refactoring",
            "projects.repo.esg.desc": "Analysis of a website's environmental impact and measures to reduce it: image optimization, system fonts and fewer network requests.",
            "projects.repo.esg.stack": "Green IT · Web performance",
            "projects.repo.greentech.title": "Sustainable GreenTech MVP",
            "projects.repo.greentech.desc": "Website optimization: removing Bootstrap, jQuery and Google Fonts, native JavaScript, lazy loading, bundling and minification.",
            "projects.repo.deepspace.desc": "MVP of an exoplanet database: an XML catalog validated with XSD and an XQuery query that filters planets by temperature and generates the HTML page.",
            "projects.repo.odoo.title": "Odoo Ecosystem Lab",
            "projects.repo.odoo.desc": "Odoo configuration: importing customers, storable products, quotations, invoices and PDF generation.",
            "projects.repo.qweb.title": "Invoice Report in Odoo (QWeb)",
            "projects.repo.qweb.desc": "A QWeb template for a custom invoice report in Odoo, with an explanation of how it works.",
            "projects.repo.regex.title": "XSD with Regular Expressions",
            "projects.repo.regex.desc": "XML/XSD schema for students of an e-learning school, with email and phone validation using regular expressions.",
            "projects.repo.cloud.title": "Cloud Infrastructure Audit",
            "projects.repo.cloud.desc": "XPath queries over a cloud infrastructure catalog and XSD validation (groups and uniqueness constraints).",
            "projects.repo.xpath.title": "XPath Challenges",
            "projects.repo.xpath.desc": "XPath queries with filters by attributes, values and positions using XPath Notebook.",
            "projects.repo.xquery.title": "Reverse Engineering with XQuery and BaseX",
            "projects.repo.xquery.desc": "XQuery queries over a book catalog: filtering, sorting and aggregations with distinct-values() and count().",
            "projects.repo.activity.title": "UML Activity Diagrams",
            "projects.repo.activity.desc": "Research on UML nodes (fork, decision, join) and modeling of the purchase process with an activity diagram.",
            "projects.repo.state.title": "UML State Diagram",
            "projects.repo.state.desc": "State diagram of a download process: pause, resume, cancellation, retries on network errors and integrity verification.",
            "projects.repo.ssh.title": "Remote Access with SSH and RDP",
            "projects.repo.ssh.desc": "Lab on connecting remotely to an Ubuntu Server virtual machine via SSH and RDP, including troubleshooting host key issues.",
            "projects.repo.syslog.title": "Security and Auditing: Syslog",
            "projects.repo.syslog.desc": "Research on Syslog, event classification by facility and severity, and centralized log management.",
            "projects.repo.syslog.stack": "Systems · Security",
            "contact.title": "Contact - Portfolio",
            "contact.intro": "Have a question or suggestion? Fill in the form and I will get back to you as soon as possible.",
            "contact.name": "Full name",
            "contact.email": "Email",
            "contact.subject": "Subject",
            "contact.message": "Message",
            "contact.send": "Send message",
            "contact.other": "Other ways to reach me",
            "contact.phone": "Phone",
            "contact.location": "Location",
            "index.meta": "Portfolio of Siarhei Lukashou, a Unity and multiplatform application developer with over 3 years of experience in mobile games and apps with C#.",
            "index.photoAlt": "Photo of Siarhei Lukashou",
            "projects.meta": "Projects by Siarhei Lukashou: mobile Unity games published on Google Play, a playable ad you can try in the browser and academic DAM projects.",
            "projects.gpAlt": "Screenshot of the project on Google Play",
            "projects.playable.frame": "Playable ad made with Cocos Creator",
            "contact.meta": "Get in touch with Siarhei Lukashou, a Unity and multiplatform application developer in Seville: contact form, email, phone, LinkedIn, GitHub and Telegram.",
            "contact.namePh": "e.g. Siarhei Lukashou",
            "contact.emailPh": "e.g. youremail@example.com",
            "contact.subjectPh": "e.g. Contract",
            "contact.messagePh": "Describe your questions or suggestions...",
            "gallery.alt": "Screenshot of {name}",
            "gallery.zoom": "Enlarge screenshot of {name}",
            "gallery.dialog": "Enlarged screenshot",
            "lang.label": "Language"
        },
        ru: {
            "contact.status.sending": "Отправка…",
            "contact.status.sent": "Сообщение отправлено! Я отвечу вам как можно скорее.",
            "contact.status.error": "Не удалось отправить сообщение. Попробуйте ещё раз позже.",
            "contact.status.timeout": "Сервер не отвечает. Попробуйте ещё раз позже.",
            "contact.status.noKey": "Форма пока не настроена.",
            "contact.status.fallback": "Также можно написать мне на {email}.",
            "site.title": "Моё портфолио",
            "nav.home": "Главная",
            "nav.projects": "Проекты",
            "nav.contact": "Контакты",
            "footer.rights": "&copy; 2026 Lukashou Siarhei. Все права защищены.",
            "common.location": "Севилья, Испания",
            "index.title": "Моё портфолио - разработчик игр",
            "index.photoCaption": "Моё фото",
            "index.role": "Unity-разработчик · Разработка мультиплатформенных приложений",
            "index.heroExp": "Более 3 лет опыта разработки мобильных приложений и игр на Unity и C#.",
            "index.about.title": "Обо мне",
            "index.about.p1": "Unity-разработчик с более чем 3-летним профессиональным опытом разработки приложений и игр для мобильных устройств на Unity и C#.",
            "index.about.p2": "Участвовал в проектах на всех этапах разработки: реализация механик и функциональности, разработка интерфейсов, оптимизация производительности, исправление ошибок и поддержка релизов. В течение последнего года работал над продакшн-проектами на Unity в гибкой и динамичной среде.",
            "index.about.p3": "Окончил <a href=\"https://www.bsuir.by/en/\">Белорусский государственный университет информатики и радиоэлектроники (БГУИР)</a>, сейчас изучаю DAM (разработку мультиплатформенных приложений) в Campus Cámara FP Sevilla. Также проходил практику в Versus e-Learning, где получил дополнительный опыт разработки ПО на ASP.NET и MySQL.",
            "index.about.p4": "Хочу и дальше расти как разработчик, расширять знания в разработке приложений и участвовать в проектах, где смогу сочетать опыт работы с Unity с новыми технологиями и инструментами.",
            "index.exp.title": "Опыт работы",
            "index.exp.syndicate.meta": "Апр 2025 - Май 2026 · Полная занятость · Удалённо",
            "index.exp.syndicate.1": "Разработка мобильных приложений для iOS и Android для индустрии развлечений и гейминга.",
            "index.exp.syndicate.2": "Интеграция WebView и систем редиректа в зависимости от источника пользователя.",
            "index.exp.syndicate.3": "Логика показа разного контента и пользовательского опыта в зависимости от параметров привлечения.",
            "index.exp.syndicate.4": "Подготовка, оптимизация и публикация приложений в Google Play и App Store.",
            "index.exp.versus.meta": "Янв 2026 - Фев 2026 · FP Dual (практика) · Севилья",
            "index.exp.versus.1": "Разработка и поддержка внутреннего приложения для управления студентами на ASP.NET MVC и MySQL.",
            "index.exp.versus.2": "Система уведомлений по электронной почте с разными типами оповещений.",
            "index.exp.versus.3": "Новый функционал, дизайн интерфейса, отладка и исправление ошибок.",
            "index.exp.elephant.meta": "Авг 2024 - Янв 2025 · Полная занятость · Удалённо",
            "index.exp.nv.meta": "Апр 2021 - Авг 2021 · Полная занятость · Минск",
            "index.exp.gismart.meta": "Дек 2020 - Фев 2021 · Полная занятость · Минск",
            "index.exp.wer.meta": "Дек 2019 - Окт 2020 · Полная занятость · Минск",
            "index.exp.wer.1": "Разработка игр на Unity и C#: механики, геймплей, UI и игровые системы.",
            "index.exp.wer.2": "Единственный разработчик на первом этапе проекта (стартап).",
            "index.exp.wer.3": "Git, Trello, интеграция SDK аналитики и внешних сервисов.",
            "index.exp.wer.4": "Сборки, релизы и поддержка игр в Google Play и App Store.",
            "index.exp.vizor.meta": "Июн 2019 - Авг 2020 · Частичная занятость · Минск",
            "index.edu.title": "Образование",
            "index.edu.fp.title": "Высшее профессиональное образование (FP Grado Superior)",
            "index.edu.fp.meta": "Centro FP Superior de la Cámara de Comercio de Sevilla · Сен 2025 - Июн 2027",
            "index.edu.fp.degree": "Разработка мультиплатформенных приложений (DAM)",
            "index.edu.uni.title": "Высшее образование",
            "index.edu.uni.meta": "<a href=\"https://www.bsuir.by/en/\">БГУИР</a>, Минск · Сен 2017 - Июл 2021",
            "index.edu.uni.degree": "Информационные системы и технологии (в игровой индустрии)",
            "index.skills.title": "Профессиональные навыки",
            "index.skills.mobile": "Мобильные приложения и игры",
            "index.skills.perf": "Оптимизация производительности",
            "index.skills.data": "XML, JSON и сериализация данных",
            "index.skills.sdk": "Интеграция SDK",
            "index.skills.publish": "Публикация в Google Play / App Store",
            "index.skills.debug": "Отладка и решение проблем",
            "index.langs.title": "Языки",
            "index.langs.be": "Белорусский (родной)",
            "index.langs.ru": "Русский (родной)",
            "index.langs.es": "Испанский (родной)",
            "index.langs.en": "Английский (B2)",
            "index.interests.title": "Интересы",
            "index.interests.gamedev": "Разработка игр",
            "index.interests.apps": "Разработка мультиплатформенных приложений",
            "index.interests.play": "Видеоигры",
            "projects.title": "Мои проекты - Портфолио",
            "projects.heading": "Мои проекты",
            "projects.intro": "Подборка моих последних работ в разработке игр и приложений",
            "projects.bmt.p1": "Мобильное приложение для учёта совместных покупок и распределения расходов между людьми, которые живут вместе. Позволяет создавать группы проживания, записывать покупки (общие, личные или на нескольких участников) и автоматически рассчитывать, сколько должен заплатить каждый за неделю или за месяц.",
            "projects.bmt.p2": "Дипломный проект DAM, разработанный на Java командой из 4 человек по методологии Scrum.",
            "projects.bmt.links": "<a href=\"https://github.com/siarheilukashou25-maker/By-Me-Too\">Код на GitHub</a> · <a href=\"https://github.com/siarheilukashou25-maker/Proyecto-Intermodular-By-Me-Too\">Документация и Kanban-доска</a>",
            "projects.fullDev": "Полная разработка этой игры на Unity и C#.",
            "projects.screw.team": "В этом проекте я работал в команде с проджект-лидом, гейм-дизайнером и художником-универсалом; я был разработчиком. Мы начали с идеи игры и механики; затем гейм-дизайнер подготовил документацию о том, какой будет игра и что нужно сделать. После этого вместе с художником мы начали разрабатывать и оформлять игру.",
            "projects.passenger.team": "В этом проекте я работал в команде с гейм-дизайнером и художником-универсалом; я был разработчиком. Мы начали с идеи игры и механики; затем гейм-дизайнер подготовил документацию о том, какой будет игра и что нужно сделать. После этого вместе с художником мы начали разрабатывать и оформлять игру.",
            "projects.qa": "Затем мы передали игру команде QA (тестирования), чтобы найти все ошибки (баги). После нескольких раундов тестирования мы завершили проект.",
            "projects.gpCaption": "Скриншот игры в Google Play",
            "projects.playable.title": "Playable Ad на Cocos Creator",
            "projects.playable.p1": "Играбельная реклама (playable ad), которую я сделал как тестовое задание для компании: небольшая игра про вождение с физикой, в которой нужно довести машину до финиша.",
            "projects.playable.p2": "Это был мой первый опыт работы с Cocos Creator и TypeScript после Unity и C#. В неё можно поиграть прямо здесь, в браузере.",
            "projects.codeOnGithub": "Код на GitHub",
            "projects.playable.caption": "Веб-игра на Cocos Creator 3.7 · <a href=\"GameOnCocos/index.html\">Открыть на весь экран</a>",
            "projects.other.title": "Другие проекты",
            "projects.other.p1": "Я разработал более 50 игр, но по разным причинам они не были опубликованы в Google Play или компания потеряла аккаунт Google Play из-за блокировки.",
            "projects.other.some": "Некоторые из них:",
            "projects.academic.title": "Учебные проекты (DAM)",
            "projects.academic.intro": "Практические и курсовые работы по программе «Разработка мультиплатформенных приложений», опубликованные на <a href=\"https://github.com/siarheilukashou25-maker\">GitHub</a>.",
            "projects.repo.bmi.title": "Калькулятор ИМТ",
            "projects.repo.bmi.desc": "Десктопное приложение на Java Swing, которое рассчитывает индекс массы тела по паттерну MVC.",
            "projects.repo.employees.title": "Управление сотрудниками с помощью файлов",
            "projects.repo.employees.desc": "Работа в паре: приложение на Java, которое создаёт бинарный файл сотрудников и выполняет запросы к нему (списки, зарплаты, провинции), с планированием сроков и UML-диаграммой.",
            "projects.repo.employees.stack": "Java · Файлы · UML",
            "projects.repo.legacy.title": "Рефакторинг legacy-кода",
            "projects.repo.legacy.desc": "Рефакторинг устаревшего модуля выставления счетов: переименование параметров средствами IDE, тесты на JUnit 5 и документация JavaDoc.",
            "projects.repo.esg.title": "ESG-аудит и устойчивый рефакторинг",
            "projects.repo.esg.desc": "Анализ воздействия сайта на окружающую среду и меры по его снижению: оптимизация изображений, системные шрифты и меньше сетевых запросов.",
            "projects.repo.esg.stack": "Green IT · Производительность сайтов",
            "projects.repo.greentech.title": "Устойчивый GreenTech MVP",
            "projects.repo.greentech.desc": "Оптимизация сайта: отказ от Bootstrap, jQuery и Google Fonts, нативный JavaScript, lazy loading, бандлинг и минификация.",
            "projects.repo.deepspace.desc": "MVP базы данных экзопланет: каталог в XML с валидацией по XSD и запрос XQuery, который фильтрует планеты по температуре и генерирует HTML-страницу.",
            "projects.repo.odoo.title": "Лаборатория экосистемы Odoo",
            "projects.repo.odoo.desc": "Настройка Odoo: импорт клиентов, складские товары, коммерческие предложения, счета и генерация PDF.",
            "projects.repo.qweb.title": "Отчёт по счёту в Odoo (QWeb)",
            "projects.repo.qweb.desc": "Шаблон QWeb для собственного отчёта по счёту в Odoo и объяснение его работы.",
            "projects.repo.regex.title": "XSD с регулярными выражениями",
            "projects.repo.regex.desc": "Схема XML/XSD для студентов онлайн-школы с валидацией email и телефона с помощью регулярных выражений.",
            "projects.repo.cloud.title": "Аудит облачной инфраструктуры",
            "projects.repo.cloud.desc": "Запросы XPath к каталогу облачной инфраструктуры и валидация по XSD (группы и ограничения уникальности).",
            "projects.repo.xpath.title": "Задачи по XPath",
            "projects.repo.xpath.desc": "Запросы XPath с фильтрами по атрибутам, значениям и позициям в XPath Notebook.",
            "projects.repo.xquery.title": "Обратная разработка с XQuery и BaseX",
            "projects.repo.xquery.desc": "Запросы XQuery к каталогу книг: фильтрация, сортировка и агрегации с distinct-values() и count().",
            "projects.repo.activity.title": "Диаграммы деятельности UML",
            "projects.repo.activity.desc": "Изучение узлов UML (fork, decision, join) и моделирование процесса покупки с помощью диаграммы деятельности.",
            "projects.repo.state.title": "Диаграмма состояний UML",
            "projects.repo.state.desc": "Диаграмма состояний процесса загрузки: пауза, возобновление, отмена, повторные попытки при сетевых ошибках и проверка целостности.",
            "projects.repo.ssh.title": "Удалённый доступ через SSH и RDP",
            "projects.repo.ssh.desc": "Лабораторная работа по удалённому подключению к Ubuntu Server в виртуальной машине через SSH и RDP с решением проблем с ключами хоста.",
            "projects.repo.syslog.title": "Безопасность и аудит: Syslog",
            "projects.repo.syslog.desc": "Изучение Syslog, классификация событий по facility и severity и централизованное управление логами.",
            "projects.repo.syslog.stack": "Системы · Безопасность",
            "contact.title": "Контакты - Портфолио",
            "contact.intro": "Есть вопрос или предложение? Заполните форму, и я свяжусь с вами как можно скорее.",
            "contact.name": "Полное имя",
            "contact.email": "Электронная почта",
            "contact.subject": "Тема",
            "contact.message": "Сообщение",
            "contact.send": "Отправить сообщение",
            "contact.other": "Другие способы связи",
            "contact.phone": "Телефон",
            "contact.location": "Местоположение",
            "index.meta": "Портфолио Siarhei Lukashou — Unity-разработчика и разработчика мультиплатформенных приложений с опытом более 3 лет в мобильных играх и приложениях на C#.",
            "index.photoAlt": "Фото Siarhei Lukashou",
            "projects.meta": "Проекты Siarhei Lukashou: мобильные игры на Unity, опубликованные в Google Play, playable ad, в который можно поиграть в браузере, и учебные проекты DAM.",
            "projects.gpAlt": "Скриншот проекта в Google Play",
            "projects.playable.frame": "Playable ad на Cocos Creator",
            "contact.meta": "Свяжитесь с Siarhei Lukashou, Unity-разработчиком и разработчиком мультиплатформенных приложений из Севильи: форма, email, телефон, LinkedIn, GitHub и Telegram.",
            "contact.namePh": "Например: Siarhei Lukashou",
            "contact.emailPh": "Например: you@example.com",
            "contact.subjectPh": "Например: Контракт",
            "contact.messagePh": "Опишите ваш вопрос или предложение...",
            "gallery.alt": "Скриншот игры {name}",
            "gallery.zoom": "Увеличить скриншот {name}",
            "gallery.dialog": "Увеличенный скриншот",
            "lang.label": "Язык"
        },
        be: {
            "contact.status.sending": "Адпраўка…",
            "contact.status.sent": "Паведамленне адпраўлена! Я адкажу вам як мага хутчэй.",
            "contact.status.error": "Не ўдалося адправіць паведамленне. Паспрабуйце яшчэ раз пазней.",
            "contact.status.timeout": "Сервер не адказвае. Паспрабуйце яшчэ раз пазней.",
            "contact.status.noKey": "Форма пакуль не наладжана.",
            "contact.status.fallback": "Таксама можна напісаць мне на {email}.",
            "site.title": "Маё партфоліо",
            "nav.home": "Галоўная",
            "nav.projects": "Праекты",
            "nav.contact": "Кантакты",
            "footer.rights": "&copy; 2026 Lukashou Siarhei. Усе правы абаронены.",
            "common.location": "Севілья, Іспанія",
            "index.title": "Маё партфоліо - распрацоўшчык гульняў",
            "index.photoCaption": "Маё фота",
            "index.role": "Unity-распрацоўшчык · Распрацоўка мультыплатформавых праграм",
            "index.heroExp": "Больш за 3 гады досведу распрацоўкі мабільных праграм і гульняў на Unity і C#.",
            "index.about.title": "Пра мяне",
            "index.about.p1": "Unity-распрацоўшчык з больш чым 3-гадовым прафесійным досведам распрацоўкі праграм і гульняў для мабільных прылад на Unity і C#.",
            "index.about.p2": "Удзельнічаў у праектах на ўсіх этапах распрацоўкі: рэалізацыя механік і функцыянальнасці, распрацоўка інтэрфейсаў, аптымізацыя прадукцыйнасці, выпраўленне памылак і падтрымка рэлізаў. На працягу апошняга года працаваў над прадакшн-праектамі на Unity ў гнуткім і дынамічным асяроддзі.",
            "index.about.p3": "Скончыў <a href=\"https://www.bsuir.by/en/\">Беларускі дзяржаўны ўніверсітэт інфарматыкі і радыёэлектронікі (БДУІР)</a>, цяпер вывучаю DAM (распрацоўку мультыплатформавых праграм) у Campus Cámara FP Sevilla. Таксама праходзіў практыку ў Versus e-Learning, дзе атрымаў дадатковы досвед распрацоўкі ПЗ на ASP.NET і MySQL.",
            "index.about.p4": "Хачу і далей расці як распрацоўшчык, пашыраць веды ў распрацоўцы праграм і ўдзельнічаць у праектах, дзе змагу спалучаць досвед працы з Unity з новымі тэхналогіямі і інструментамі.",
            "index.exp.title": "Досвед працы",
            "index.exp.syndicate.meta": "Крас 2025 - Трав 2026 · Поўная занятасць · Аддалена",
            "index.exp.syndicate.1": "Распрацоўка мабільных праграм для iOS і Android для індустрыі забаў і геймінгу.",
            "index.exp.syndicate.2": "Інтэграцыя WebView і сістэм перанакіравання ў залежнасці ад крыніцы карыстальніка.",
            "index.exp.syndicate.3": "Логіка паказу рознага кантэнту і карыстальніцкага досведу ў залежнасці ад параметраў прыцягнення.",
            "index.exp.syndicate.4": "Падрыхтоўка, аптымізацыя і публікацыя праграм у Google Play і App Store.",
            "index.exp.versus.meta": "Студз 2026 - Лют 2026 · FP Dual (практыка) · Севілья",
            "index.exp.versus.1": "Распрацоўка і падтрымка ўнутранай праграмы для кіравання студэнтамі на ASP.NET MVC і MySQL.",
            "index.exp.versus.2": "Сістэма апавяшчэнняў па электроннай пошце з рознымі тыпамі паведамленняў.",
            "index.exp.versus.3": "Новы функцыянал, дызайн інтэрфейсу, адладка і выпраўленне памылак.",
            "index.exp.elephant.meta": "Жн 2024 - Студз 2025 · Поўная занятасць · Аддалена",
            "index.exp.nv.meta": "Крас 2021 - Жн 2021 · Поўная занятасць · Мінск",
            "index.exp.gismart.meta": "Сн 2020 - Лют 2021 · Поўная занятасць · Мінск",
            "index.exp.wer.meta": "Сн 2019 - Кастр 2020 · Поўная занятасць · Мінск",
            "index.exp.wer.1": "Распрацоўка гульняў на Unity і C#: механікі, геймплэй, UI і гульнявыя сістэмы.",
            "index.exp.wer.2": "Адзіны распрацоўшчык на першым этапе праекта (стартап).",
            "index.exp.wer.3": "Git, Trello, інтэграцыя SDK аналітыкі і знешніх сэрвісаў.",
            "index.exp.wer.4": "Зборкі, рэлізы і падтрымка гульняў у Google Play і App Store.",
            "index.exp.vizor.meta": "Чэрв 2019 - Жн 2020 · Частковая занятасць · Мінск",
            "index.edu.title": "Адукацыя",
            "index.edu.fp.title": "Вышэйшая прафесійная адукацыя (FP Grado Superior)",
            "index.edu.fp.meta": "Centro FP Superior de la Cámara de Comercio de Sevilla · Вер 2025 - Чэрв 2027",
            "index.edu.fp.degree": "Распрацоўка мультыплатформавых праграм (DAM)",
            "index.edu.uni.title": "Вышэйшая адукацыя",
            "index.edu.uni.meta": "<a href=\"https://www.bsuir.by/en/\">БДУІР</a>, Мінск · Вер 2017 - Ліп 2021",
            "index.edu.uni.degree": "Інфармацыйныя сістэмы і тэхналогіі (у гульнявой індустрыі)",
            "index.skills.title": "Прафесійныя навыкі",
            "index.skills.mobile": "Мабільныя праграмы і гульні",
            "index.skills.perf": "Аптымізацыя прадукцыйнасці",
            "index.skills.data": "XML, JSON і серыялізацыя даных",
            "index.skills.sdk": "Інтэграцыя SDK",
            "index.skills.publish": "Публікацыя ў Google Play / App Store",
            "index.skills.debug": "Адладка і вырашэнне праблем",
            "index.langs.title": "Мовы",
            "index.langs.be": "Беларуская (родная)",
            "index.langs.ru": "Руская (родная)",
            "index.langs.es": "Іспанская (родная)",
            "index.langs.en": "Англійская (B2)",
            "index.interests.title": "Інтарэсы",
            "index.interests.gamedev": "Распрацоўка гульняў",
            "index.interests.apps": "Распрацоўка мультыплатформавых праграм",
            "index.interests.play": "Відэагульні",
            "projects.title": "Мае праекты - Партфоліо",
            "projects.heading": "Мае праекты",
            "projects.intro": "Падборка маіх апошніх работ у распрацоўцы гульняў і праграм",
            "projects.bmt.p1": "Мабільная праграма для ўліку сумесных пакупак і размеркавання выдаткаў паміж людзьмі, якія жывуць разам. Дазваляе ствараць групы пражывання, запісваць пакупкі (агульныя, асабістыя або на некалькіх удзельнікаў) і аўтаматычна разлічваць, колькі павінен заплаціць кожны за тыдзень або за месяц.",
            "projects.bmt.p2": "Дыпломны праект DAM, распрацаваны на Java камандай з 4 чалавек па метадалогіі Scrum.",
            "projects.bmt.links": "<a href=\"https://github.com/siarheilukashou25-maker/By-Me-Too\">Код на GitHub</a> · <a href=\"https://github.com/siarheilukashou25-maker/Proyecto-Intermodular-By-Me-Too\">Дакументацыя і Kanban-дошка</a>",
            "projects.fullDev": "Поўная распрацоўка гэтай гульні на Unity і C#.",
            "projects.screw.team": "У гэтым праекце я працаваў у камандзе з праджэкт-лідам, гейм-дызайнерам і мастаком-універсалам; я быў распрацоўшчыкам. Мы пачалі з ідэі гульні і механікі; потым гейм-дызайнер падрыхтаваў дакументацыю пра тое, якой будзе гульня і што трэба зрабіць. Пасля гэтага разам з мастаком мы пачалі распрацоўваць і афармляць гульню.",
            "projects.passenger.team": "У гэтым праекце я працаваў у камандзе з гейм-дызайнерам і мастаком-універсалам; я быў распрацоўшчыкам. Мы пачалі з ідэі гульні і механікі; потым гейм-дызайнер падрыхтаваў дакументацыю пра тое, якой будзе гульня і што трэба зрабіць. Пасля гэтага разам з мастаком мы пачалі распрацоўваць і афармляць гульню.",
            "projects.qa": "Потым мы перадалі гульню камандзе QA (тэсціравання), каб знайсці ўсе памылкі (багі). Пасля некалькіх раўндаў тэсціравання мы завяршылі праект.",
            "projects.gpCaption": "Скрыншот гульні ў Google Play",
            "projects.playable.title": "Playable Ad на Cocos Creator",
            "projects.playable.p1": "Гульнявая рэклама (playable ad), якую я зрабіў як тэставае заданне для кампаніі: невялікая гульня пра ваджэнне з фізікай, у якой трэба давесці машыну да фінішу.",
            "projects.playable.p2": "Гэта быў мой першы досвед працы з Cocos Creator і TypeScript пасля Unity і C#. У яе можна пагуляць проста тут, у браўзеры.",
            "projects.codeOnGithub": "Код на GitHub",
            "projects.playable.caption": "Вэб-гульня на Cocos Creator 3.7 · <a href=\"GameOnCocos/index.html\">Адкрыць на ўвесь экран</a>",
            "projects.other.title": "Іншыя праекты",
            "projects.other.p1": "Я распрацаваў больш за 50 гульняў, але па розных прычынах яны не былі апублікаваныя ў Google Play або кампанія страціла акаўнт Google Play з-за блакіроўкі.",
            "projects.other.some": "Некаторыя з іх:",
            "projects.academic.title": "Навучальныя праекты (DAM)",
            "projects.academic.intro": "Практычныя і курсавыя работы па праграме «Распрацоўка мультыплатформавых праграм», апублікаваныя на <a href=\"https://github.com/siarheilukashou25-maker\">GitHub</a>.",
            "projects.repo.bmi.title": "Калькулятар ІМЦ",
            "projects.repo.bmi.desc": "Дэсктопная праграма на Java Swing, якая разлічвае індэкс масы цела паводле патэрна MVC.",
            "projects.repo.employees.title": "Кіраванне супрацоўнікамі з дапамогай файлаў",
            "projects.repo.employees.desc": "Работа ў пары: праграма на Java, якая стварае бінарны файл супрацоўнікаў і выконвае запыты да яго (спісы, заробкі, правінцыі), з планаваннем тэрмінаў і UML-дыяграмай.",
            "projects.repo.employees.stack": "Java · Файлы · UML",
            "projects.repo.legacy.title": "Рэфактарынг legacy-кода",
            "projects.repo.legacy.desc": "Рэфактарынг састарэлага модуля выстаўлення рахункаў: перайменаванне параметраў сродкамі IDE, тэсты на JUnit 5 і дакументацыя JavaDoc.",
            "projects.repo.esg.title": "ESG-аўдыт і ўстойлівы рэфактарынг",
            "projects.repo.esg.desc": "Аналіз уздзеяння сайта на навакольнае асяроддзе і меры па яго зніжэнні: аптымізацыя выяў, сістэмныя шрыфты і менш сеткавых запытаў.",
            "projects.repo.esg.stack": "Green IT · Прадукцыйнасць сайтаў",
            "projects.repo.greentech.title": "Устойлівы GreenTech MVP",
            "projects.repo.greentech.desc": "Аптымізацыя сайта: адмова ад Bootstrap, jQuery і Google Fonts, натыўны JavaScript, lazy loading, бандлінг і мініфікацыя.",
            "projects.repo.deepspace.desc": "MVP базы даных экзапланет: каталог у XML з валідацыяй па XSD і запыт XQuery, які фільтруе планеты па тэмпературы і генеруе HTML-старонку.",
            "projects.repo.odoo.title": "Лабараторыя экасістэмы Odoo",
            "projects.repo.odoo.desc": "Наладка Odoo: імпарт кліентаў, складскія тавары, камерцыйныя прапановы, рахункі і генерацыя PDF.",
            "projects.repo.qweb.title": "Справаздача па рахунку ў Odoo (QWeb)",
            "projects.repo.qweb.desc": "Шаблон QWeb для ўласнай справаздачы па рахунку ў Odoo і тлумачэнне яго работы.",
            "projects.repo.regex.title": "XSD з рэгулярнымі выразамі",
            "projects.repo.regex.desc": "Схема XML/XSD для студэнтаў анлайн-школы з валідацыяй email і тэлефона з дапамогай рэгулярных выразаў.",
            "projects.repo.cloud.title": "Аўдыт воблачнай інфраструктуры",
            "projects.repo.cloud.desc": "Запыты XPath да каталога воблачнай інфраструктуры і валідацыя па XSD (групы і абмежаванні ўнікальнасці).",
            "projects.repo.xpath.title": "Задачы па XPath",
            "projects.repo.xpath.desc": "Запыты XPath з фільтрамі па атрыбутах, значэннях і пазіцыях у XPath Notebook.",
            "projects.repo.xquery.title": "Адваротная распрацоўка з XQuery і BaseX",
            "projects.repo.xquery.desc": "Запыты XQuery да каталога кніг: фільтрацыя, сартаванне і агрэгацыі з distinct-values() і count().",
            "projects.repo.activity.title": "Дыяграмы дзейнасці UML",
            "projects.repo.activity.desc": "Вывучэнне вузлоў UML (fork, decision, join) і мадэляванне працэсу пакупкі з дапамогай дыяграмы дзейнасці.",
            "projects.repo.state.title": "Дыяграма станаў UML",
            "projects.repo.state.desc": "Дыяграма станаў працэсу спампоўкі: паўза, аднаўленне, адмена, паўторныя спробы пры сеткавых памылках і праверка цэласнасці.",
            "projects.repo.ssh.title": "Аддалены доступ праз SSH і RDP",
            "projects.repo.ssh.desc": "Лабараторная работа па аддаленым падключэнні да Ubuntu Server у віртуальнай машыне праз SSH і RDP з вырашэннем праблем з ключамі хоста.",
            "projects.repo.syslog.title": "Бяспека і аўдыт: Syslog",
            "projects.repo.syslog.desc": "Вывучэнне Syslog, класіфікацыя падзей па facility і severity і цэнтралізаванае кіраванне логамі.",
            "projects.repo.syslog.stack": "Сістэмы · Бяспека",
            "contact.title": "Кантакты - Партфоліо",
            "contact.intro": "Ёсць пытанне або прапанова? Запоўніце форму, і я звяжуся з вамі як мага хутчэй.",
            "contact.name": "Поўнае імя",
            "contact.email": "Электронная пошта",
            "contact.subject": "Тэма",
            "contact.message": "Паведамленне",
            "contact.send": "Адправіць паведамленне",
            "contact.other": "Іншыя спосабы сувязі",
            "contact.phone": "Тэлефон",
            "contact.location": "Месцазнаходжанне",
            "index.meta": "Партфоліо Siarhei Lukashou — Unity-распрацоўшчыка і распрацоўшчыка мультыплатформавых праграм з досведам больш за 3 гады ў мабільных гульнях і праграмах на C#.",
            "index.photoAlt": "Фота Siarhei Lukashou",
            "projects.meta": "Праекты Siarhei Lukashou: мабільныя гульні на Unity, апублікаваныя ў Google Play, playable ad, у які можна пагуляць у браўзеры, і навучальныя праекты DAM.",
            "projects.gpAlt": "Скрыншот праекта ў Google Play",
            "projects.playable.frame": "Playable ad на Cocos Creator",
            "contact.meta": "Звяжыцеся з Siarhei Lukashou, Unity-распрацоўшчыкам і распрацоўшчыкам мультыплатформавых праграм з Севільі: форма, email, тэлефон, LinkedIn, GitHub і Telegram.",
            "contact.namePh": "Напрыклад: Siarhei Lukashou",
            "contact.emailPh": "Напрыклад: you@example.com",
            "contact.subjectPh": "Напрыклад: Кантракт",
            "contact.messagePh": "Апішыце ваша пытанне або прапанову...",
            "gallery.alt": "Скрыншот гульні {name}",
            "gallery.zoom": "Павялічыць скрыншот {name}",
            "gallery.dialog": "Павялічаны скрыншот",
            "lang.label": "Мова"
        }
    };

    const textEls = Array.from(document.querySelectorAll("[data-i18n]"));
    const attrEls = Array.from(document.querySelectorAll("[data-i18n-attr]"));

    // Se guarda el contenido original (español) para poder volver a él
    textEls.forEach(function (el) {
        el.dataset.i18nOriginal = el.innerHTML;
    });
    attrEls.forEach(function (el) {
        parseAttrs(el).forEach(function (item) {
            el.dataset["i18nOriginal" + item.attr.replace(/-/g, "")] = el.getAttribute(item.attr) || "";
        });
    });

    function parseAttrs(el) {
        return el.dataset.i18nAttr.split(";").map(function (pair) {
            const parts = pair.split(":");
            return { attr: parts[0].trim(), key: parts[1].trim() };
        });
    }

    function fill(text, vars) {
        return text.replace(/\{(\w+)\}/g, function (match, name) {
            return vars && vars[name] !== undefined ? vars[name] : match;
        });
    }

    let currentLang = DEFAULT_LANG;

    // Devuelve el texto de una clave en el idioma actual (con español como respaldo)
    function t(key, vars) {
        const dict = TRANSLATIONS[currentLang] || {};
        const text = dict[key] !== undefined ? dict[key] : ES_JS[key];
        return text === undefined ? key : fill(text, vars);
    }

    function apply(lang) {
        if (lang !== DEFAULT_LANG && !TRANSLATIONS[lang]) lang = DEFAULT_LANG;
        currentLang = lang;
        const dict = TRANSLATIONS[lang] || {};

        textEls.forEach(function (el) {
            const value = dict[el.dataset.i18n];
            el.innerHTML = lang === DEFAULT_LANG || value === undefined ? el.dataset.i18nOriginal : value;
        });

        attrEls.forEach(function (el) {
            parseAttrs(el).forEach(function (item) {
                const original = el.dataset["i18nOriginal" + item.attr.replace(/-/g, "")];
                const value = dict[item.key];
                let text = lang === DEFAULT_LANG || value === undefined ? original : value;
                if (el.dataset.i18nName && lang !== DEFAULT_LANG) text = fill(text, { name: el.dataset.i18nName });
                el.setAttribute(item.attr, text);
            });
        });

        document.documentElement.lang = lang;
        document.querySelectorAll(".lang-switch [data-lang]").forEach(function (btn) {
            btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
        });
        document.documentElement.classList.remove("i18n-pending");
        document.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang: lang } }));
    }

    function savedLang() {
        try {
            return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
        } catch (e) {
            return DEFAULT_LANG;
        }
    }

    document.querySelectorAll(".lang-switch [data-lang]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const lang = btn.dataset.lang;
            try {
                localStorage.setItem(STORAGE_KEY, lang);
            } catch (e) {}
            apply(lang);
        });
    });

    window.i18n = {
        t: t,
        get lang() {
            return currentLang;
        }
    };

    apply(savedLang());
})();
