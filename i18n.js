const translations = {
    en: {
        // Navigation
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact'
        },
        // Home page
        home: {
            greeting: 'Hi, I\'m',
            name: 'Xiao Zhou',
            subtitle: 'Software Engineer | Full Stack Developer | Creator',
            viewWork: 'View Work',
            contactMe: 'Contact Me'
        },
        // Widgets
        widgets: {
            clock: 'Clock',
            calendar: 'Calendar',
            weather: 'Weather',
            quote: 'Daily Quote',
            loading: 'Loading...',
            getWeather: 'Getting weather...',
            weatherError: 'Unable to get weather',
            refreshQuote: 'Refresh',
            good: 'Good',
            bad: 'Avoid',
            lunar: 'Lunar'
        },
        // Calendar
        calendar: {
            weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 
                     'July', 'August', 'September', 'October', 'November', 'December']
        },
        // About page
        about: {
            title: 'About Me',
            subtitle: 'Learn more about my story',
            hello: 'Hello, I\'m Xiao Zhou',
            intro: 'A passionate full-stack developer focused on creating elegant and efficient solutions. I believe good code should not only work but also be easy to understand and maintain.',
            developer: 'Developer',
            developerDesc: 'Passionate about programming, focused on creating elegant solutions. Years of development experience with full-stack expertise.',
            designer: 'Designer',
            designerDesc: 'Pursuing the perfect combination of aesthetics and functionality. Focused on user experience, presenting complex features simply.',
            innovator: 'Innovator',
            innovatorDesc: 'Constantly exploring new technologies, pushing boundaries. Maintaining passion for learning, embracing change, pursuing excellence.',
            journey: 'My Journey',
            journeyStart: 'Started Programming',
            journeyStartDesc: 'Discovered programming and was captivated by the magic of code, began self-learning various languages.',
            journeyFullstack: 'Deep into Full Stack',
            journeyFullstackDesc: 'Systematically learned front-end and back-end technologies, participated in multiple real projects.',
            journeyGrowth: 'Continuous Growth',
            journeyGrowthDesc: 'Constantly learning new technologies, sharing knowledge, contributing to the open source community.'
        },
        // Projects page
        projects: {
            title: 'My Projects',
            subtitle: 'Explore my portfolio',
            source: 'Source',
            demo: 'Demo',
            staraiDesc: 'An exciting project showcasing modern web development best practices with the latest tech stack.',
            getstepsDesc: 'Innovative mobile app providing smooth user experience, focused on health tracking and fitness data analysis.',
            devtoolallDesc: 'Open source toolkit helping developers improve efficiency with various utilities and automation scripts.',
            cloudsyncDesc: 'Cloud sync service supporting multi-platform data synchronization and backup for data security.',
            smarthomeDesc: 'Smart home control system supporting multiple device connections and automation scenarios.',
            codereviewDesc: 'AI-powered code review tool that automatically detects issues and provides improvement suggestions.'
        },
        // Skills page
        skills: {
            title: 'Skills',
            subtitle: 'My tech stack and expertise',
            frontend: 'Frontend Development',
            backend: 'Backend Development',
            database: 'Database',
            devops: 'DevOps & Tools',
            tools: 'Common Tools'
        },
        // Contact page
        contact: {
            title: 'Contact Me',
            subtitle: 'Looking forward to connecting',
            info: 'Contact Info',
            email: 'Email',
            sendMessage: 'Send Message',
            name: 'Name',
            namePlaceholder: 'Your name',
            emailPlaceholder: 'your@email.com',
            message: 'Message',
            messagePlaceholder: 'What would you like to say...',
            send: 'Send Message'
        },
        // Footer
        footer: {
            rights: '© 2025 Xiao Zhou. All rights reserved.',
            madeWith: 'Made with ❤️ and ☕'
        },
        // Back to top
        backToTop: 'Back to top'
    },
    zh: {
        // Navigation
        nav: {
            home: '主页',
            about: '关于',
            projects: '项目',
            skills: '技能',
            contact: '联系'
        },
        // Home page
        home: {
            greeting: '你好，我是',
            name: '小周',
            subtitle: '软件工程师 | 全栈开发者 | 创造者',
            viewWork: '查看作品',
            contactMe: '联系我'
        },
        // Widgets
        widgets: {
            clock: '时钟',
            calendar: '日历',
            weather: '天气',
            quote: '每日格言',
            loading: '加载中...',
            getWeather: '获取天气中...',
            weatherError: '无法获取天气信息',
            refreshQuote: '换一条',
            good: '宜',
            bad: '忌',
            lunar: '农历'
        },
        // Calendar
        calendar: {
            weekdays: ['日', '一', '二', '三', '四', '五', '六'],
            months: ['一月', '二月', '三月', '四月', '五月', '六月', 
                     '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        // About page
        about: {
            title: '关于我',
            subtitle: '了解更多关于我的故事',
            hello: '你好，我是小周',
            intro: '一名热爱技术的全栈开发者，专注于创建优雅且高效的解决方案。我相信好的代码不仅要能运行，更要易于理解和维护。',
            developer: '开发者',
            developerDesc: '热爱编程，专注于创建优雅的解决方案。拥有多年的开发经验，熟悉前后端技术栈。',
            designer: '设计师',
            designerDesc: '追求美学与功能的完美结合。注重用户体验，善于将复杂的功能以简洁的方式呈现。',
            innovator: '创新者',
            innovatorDesc: '不断探索新技术，突破边界。保持学习的热情，拥抱变化，追求卓越。',
            journey: '我的历程',
            journeyStart: '开始编程之旅',
            journeyStartDesc: '接触编程，被代码的魅力所吸引，开始自学各种编程语言。',
            journeyFullstack: '深入全栈开发',
            journeyFullstackDesc: '系统学习前后端技术，参与多个实际项目的开发。',
            journeyGrowth: '持续成长',
            journeyGrowthDesc: '不断学习新技术，分享知识，为开源社区贡献力量。'
        },
        // Projects page
        projects: {
            title: '我的项目',
            subtitle: '探索我的作品集',
            source: '源码',
            demo: '演示',
            staraiDesc: '这是一个令人兴奋的项目，展示了现代 Web 开发的最佳实践。采用最新的技术栈，提供流畅的用户体验。',
            getstepsDesc: '创新的移动应用，为用户提供流畅的体验。专注于健康追踪和运动数据分析。',
            devtoolallDesc: '开源工具库，帮助开发者提高效率。包含多种实用工具和自动化脚本。',
            cloudsyncDesc: '云端同步服务，支持多平台数据同步和备份，保障数据安全。',
            smarthomeDesc: '智能家居控制系统，支持多种设备接入和自动化场景配置。',
            codereviewDesc: 'AI 驱动的代码审查工具，自动检测代码问题并提供改进建议。'
        },
        // Skills page
        skills: {
            title: '技能专长',
            subtitle: '我的技术栈和专业能力',
            frontend: '前端开发',
            backend: '后端开发',
            database: '数据库',
            devops: 'DevOps & 工具',
            tools: '常用工具'
        },
        // Contact page
        contact: {
            title: '联系我',
            subtitle: '期待与你交流',
            info: '联系方式',
            email: '邮箱',
            sendMessage: '发送消息',
            name: '姓名',
            namePlaceholder: '你的名字',
            emailPlaceholder: 'your@email.com',
            message: '消息',
            messagePlaceholder: '想说点什么...',
            send: '发送消息'
        },
        // Footer
        footer: {
            rights: '© 2025 小周. 保留所有权利.',
            madeWith: '用 ❤️ 和 ☕ 制作'
        },
        // Back to top
        backToTop: '回到顶部'
    }
};

// Get current language (default: en)
function getCurrentLang() {
    return localStorage.getItem('lang') || 'en';
}

// Set language
function setLang(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations();
}

// Get translation
function t(key) {
    const lang = getCurrentLang();
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

// Apply translations to page
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });
    // Update html lang attribute
    document.documentElement.lang = getCurrentLang() === 'zh' ? 'zh-CN' : 'en';
    // Update language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = getCurrentLang() === 'zh' ? 'EN' : '中';
    }
    // Dispatch event for dynamic content
    window.dispatchEvent(new CustomEvent('langChanged', { detail: getCurrentLang() }));
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
});
