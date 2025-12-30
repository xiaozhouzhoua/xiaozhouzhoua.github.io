const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const html = document.documentElement;

// Scroll to top on refresh
if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
    window.scrollTo(0, 0);
}

// Theme
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Language toggle
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const currentLang = getCurrentLang();
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        setLang(newLang);
        updateDynamicContent();
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        }
    });
});

// Intersection Observer for animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.about-card, .project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.padding = '10px 30px';
        navbar.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.padding = '15px 30px';
        navbar.style.boxShadow = '0 8px 32px var(--shadow-light)';
    }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'var(--gradient-1)';
        this.querySelectorAll('h3, p, .tech-tag, .project-link').forEach(el => el.style.color = 'white');
        const tag = this.querySelector('.project-tag');
        if (tag) { tag.style.background = 'rgba(255, 255, 255, 0.3)'; tag.style.color = 'white'; }
    });
    card.addEventListener('mouseleave', function() {
        this.style.background = '';
        this.querySelector('h3').style.color = '';
        const desc = this.querySelector('.project-description');
        if (desc) desc.style.color = '';
        this.querySelectorAll('.tech-tag, .project-link').forEach(el => el.style.color = '');
        const tag = this.querySelector('.project-tag');
        if (tag) { tag.style.background = ''; tag.style.color = ''; }
    });
});

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => { bar.style.width = width; }, 100);
        }
    });
}, { threshold: 0.5 });
skillBars.forEach(bar => skillObserver.observe(bar));

// Floating shapes parallax
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        shape.style.transform = `translate(${(mouseX - 0.5) * speed}px, ${(mouseY - 0.5) * speed}px)`;
    });
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('visible', window.scrollY > 300);
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========== Lunar Calendar ==========
const lunarInfo = [
    0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0,
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
    0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
    0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
    0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
    0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
    0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
    0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252
];
const lunarMonths = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'];
const lunarDays = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
    '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
    '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];

function getLunarYearDays(year) {
    let sum = 348;
    for (let i = 0x8000; i > 0x8; i >>= 1) sum += (lunarInfo[year - 1900] & i) ? 1 : 0;
    return sum + getLeapDays(year);
}
function getLeapMonth(year) { return lunarInfo[year - 1900] & 0xf; }
function getLeapDays(year) { return getLeapMonth(year) ? ((lunarInfo[year - 1900] & 0x10000) ? 30 : 29) : 0; }
function getLunarMonthDays(year, month) { return (lunarInfo[year - 1900] & (0x10000 >> month)) ? 30 : 29; }

function solarToLunar(year, month, day) {
    const baseDate = new Date(1900, 0, 31);
    const objDate = new Date(year, month - 1, day);
    let offset = Math.floor((objDate - baseDate) / 86400000);
    let lunarYear = 1900, temp = 0;
    for (lunarYear = 1900; lunarYear < 2100 && offset > 0; lunarYear++) {
        temp = getLunarYearDays(lunarYear);
        offset -= temp;
    }
    if (offset < 0) { offset += temp; lunarYear--; }
    const leap = getLeapMonth(lunarYear);
    let isLeap = false, lunarMonth = 1;
    for (lunarMonth = 1; lunarMonth < 13 && offset > 0; lunarMonth++) {
        if (leap > 0 && lunarMonth === (leap + 1) && !isLeap) {
            --lunarMonth; isLeap = true; temp = getLeapDays(lunarYear);
        } else { temp = getLunarMonthDays(lunarYear, lunarMonth); }
        if (isLeap && lunarMonth === (leap + 1)) isLeap = false;
        offset -= temp;
    }
    if (offset === 0 && leap > 0 && lunarMonth === leap + 1) {
        if (isLeap) isLeap = false; else { isLeap = true; --lunarMonth; }
    }
    if (offset < 0) { offset += temp; --lunarMonth; }
    return { month: lunarMonth, day: offset + 1, isLeap };
}
function getLunarDayStr(year, month, day) {
    const lunar = solarToLunar(year, month, day);
    return lunarDays[lunar.day - 1];
}

// ========== Digital Clock ==========
const digitalClock = document.getElementById('digitalClock');
const clockDate = document.getElementById('clockDate');
const clockLunar = document.getElementById('clockLunar');
const clockFortune = document.getElementById('clockFortune');

if (digitalClock) {
    const h1 = document.getElementById('h1'), h2 = document.getElementById('h2');
    const m1 = document.getElementById('m1'), m2 = document.getElementById('m2');
    
    const solarTerms = [
        { name: 'Minor Cold', nameZh: '小寒', month: 1, day: 5 }, { name: 'Major Cold', nameZh: '大寒', month: 1, day: 20 },
        { name: 'Start of Spring', nameZh: '立春', month: 2, day: 4 }, { name: 'Rain Water', nameZh: '雨水', month: 2, day: 19 },
        { name: 'Awakening', nameZh: '惊蛰', month: 3, day: 6 }, { name: 'Spring Equinox', nameZh: '春分', month: 3, day: 21 },
        { name: 'Clear and Bright', nameZh: '清明', month: 4, day: 5 }, { name: 'Grain Rain', nameZh: '谷雨', month: 4, day: 20 },
        { name: 'Start of Summer', nameZh: '立夏', month: 5, day: 6 }, { name: 'Grain Full', nameZh: '小满', month: 5, day: 21 },
        { name: 'Grain in Ear', nameZh: '芒种', month: 6, day: 6 }, { name: 'Summer Solstice', nameZh: '夏至', month: 6, day: 21 },
        { name: 'Minor Heat', nameZh: '小暑', month: 7, day: 7 }, { name: 'Major Heat', nameZh: '大暑', month: 7, day: 23 },
        { name: 'Start of Autumn', nameZh: '立秋', month: 8, day: 8 }, { name: 'End of Heat', nameZh: '处暑', month: 8, day: 23 },
        { name: 'White Dew', nameZh: '白露', month: 9, day: 8 }, { name: 'Autumn Equinox', nameZh: '秋分', month: 9, day: 23 },
        { name: 'Cold Dew', nameZh: '寒露', month: 10, day: 8 }, { name: 'Frost', nameZh: '霜降', month: 10, day: 24 },
        { name: 'Start of Winter', nameZh: '立冬', month: 11, day: 8 }, { name: 'Minor Snow', nameZh: '小雪', month: 11, day: 22 },
        { name: 'Major Snow', nameZh: '大雪', month: 12, day: 7 }, { name: 'Winter Solstice', nameZh: '冬至', month: 12, day: 22 }
    ];
    const yiListEn = ['Travel', 'Sign contracts', 'Seek wealth', 'Open business', 'Move', 'Renovate', 'Wedding', 'Pray', 'Study', 'Meet friends', 'Invest', 'Interview'];
    const jiListEn = ['Break ground', 'Litigation', 'Long trip', 'Borrow', 'Surgery', 'Stay up late', 'Argue', 'Gamble', 'Take risks', 'Be lazy'];
    const yiListZh = ['出行', '签约', '求财', '开业', '搬家', '装修', '结婚', '祈福', '学习', '会友', '投资', '面试'];
    const jiListZh = ['动土', '诉讼', '远行', '借贷', '手术', '熬夜', '争吵', '赌博', '冒险', '懒惰'];

    function getSolarTerm(month, day, lang) {
        for (const term of solarTerms) {
            if (term.month === month && Math.abs(term.day - day) <= 1) {
                return lang === 'zh' ? term.nameZh : term.name;
            }
        }
        return null;
    }
    function getDailyFortune(date, lang) {
        const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
        const yiList = lang === 'zh' ? yiListZh : yiListEn;
        const jiList = lang === 'zh' ? jiListZh : jiListEn;
        return {
            yi: [yiList[dayOfYear % yiList.length], yiList[(dayOfYear + 3) % yiList.length]],
            ji: [jiList[(dayOfYear + 5) % jiList.length], jiList[(dayOfYear + 7) % jiList.length]]
        };
    }
    function getLunarMonthDay(year, month, day) {
        const lunar = solarToLunar(year, month, day);
        const monthStr = lunarMonths[lunar.month - 1] + '月';
        const dayStr = lunarDays[lunar.day - 1];
        return `${lunar.isLeap ? '闰' : ''}${monthStr}${dayStr}`;
    }
    function updateClock() {
        const now = new Date();
        const timeStr = now.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', hour12: false });
        const [hours, minutes] = timeStr.split(':');
        h1.textContent = hours[0]; h2.textContent = hours[1];
        m1.textContent = minutes[0]; m2.textContent = minutes[1];
    }
    function updateDateInfo() {
        const now = new Date();
        const year = now.getFullYear(), month = now.getMonth() + 1, day = now.getDate();
        const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'en';
        const locale = lang === 'zh' ? 'zh-CN' : 'en-US';
        clockDate.textContent = now.toLocaleString(locale, { timeZone: 'Asia/Shanghai', year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
        const lunarStr = getLunarMonthDay(year, month, day);
        const solarTerm = getSolarTerm(month, day, lang);
        const lunarLabel = lang === 'zh' ? '农历' : 'Lunar';
        clockLunar.innerHTML = `${lunarLabel} ${lunarStr}${solarTerm ? `<span class="solar-term">${solarTerm}</span>` : ''}`;
        const fortune = getDailyFortune(now, lang);
        const goodLabel = lang === 'zh' ? '宜' : 'Good';
        const badLabel = lang === 'zh' ? '忌' : 'Avoid';
        clockFortune.innerHTML = `<span class="good">${goodLabel}: ${fortune.yi.join(' ')}</span><span class="bad">${badLabel}: ${fortune.ji.join(' ')}</span>`;
    }
    updateClock(); updateDateInfo();
    setInterval(updateClock, 1000);
    window.addEventListener('langChanged', updateDateInfo);
}

// ========== Calendar ==========
const calendarDays = document.getElementById('calendarDays');
const calendarMonth = document.getElementById('calendarMonth');
const calendarWeekdays = document.getElementById('calendarWeekdays');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

if (calendarDays && calendarMonth) {
    let currentDate = new Date();
    
    function renderCalendar(date) {
        const year = date.getFullYear(), month = date.getMonth();
        const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'en';
        const monthNames = lang === 'zh' 
            ? ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const weekdays = lang === 'zh' ? ['日', '一', '二', '三', '四', '五', '六'] : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        calendarMonth.textContent = lang === 'zh' ? `${year}年 ${monthNames[month]}` : `${monthNames[month]} ${year}`;
        if (calendarWeekdays) calendarWeekdays.innerHTML = weekdays.map(d => `<span>${d}</span>`).join('');
        
        const firstDay = new Date(year, month, 1), lastDay = new Date(year, month + 1, 0);
        const startDay = firstDay.getDay(), totalDays = lastDay.getDate();
        const prevLastDay = new Date(year, month, 0).getDate();
        const prevMonth = month === 0 ? 12 : month, prevYear = month === 0 ? year - 1 : year;
        const today = new Date(), isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
        
        let html = '';
        for (let i = startDay - 1; i >= 0; i--) {
            const d = prevLastDay - i;
            const lunar = getLunarDayStr(prevYear, prevMonth, d);
            html += `<div class="calendar-day other-month"><span class="solar-day">${d}</span><span class="lunar-day">${lunar}</span></div>`;
        }
        for (let i = 1; i <= totalDays; i++) {
            const isToday = isCurrentMonth && i === today.getDate();
            const lunar = getLunarDayStr(year, month + 1, i);
            html += `<div class="calendar-day${isToday ? ' today' : ''}"><span class="solar-day">${i}</span><span class="lunar-day">${lunar}</span></div>`;
        }
        const remaining = 42 - (startDay + totalDays);
        const nextMonth = month === 11 ? 1 : month + 2, nextYear = month === 11 ? year + 1 : year;
        for (let i = 1; i <= remaining; i++) {
            const lunar = getLunarDayStr(nextYear, nextMonth, i);
            html += `<div class="calendar-day other-month"><span class="solar-day">${i}</span><span class="lunar-day">${lunar}</span></div>`;
        }
        calendarDays.innerHTML = html;
    }
    
    renderCalendar(currentDate);
    if (prevMonthBtn) prevMonthBtn.addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth() - 1); renderCalendar(currentDate); });
    if (nextMonthBtn) nextMonthBtn.addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth() + 1); renderCalendar(currentDate); });
    window.addEventListener('langChanged', () => renderCalendar(currentDate));
}

// ========== Weather ==========
const weatherContent = document.getElementById('weatherContent');
if (weatherContent) {
    const CACHE_DURATION = 24 * 60 * 60 * 1000;
    const weatherIcons = { 'Clear': '☀️', 'Sunny': '☀️', 'Partly cloudy': '⛅', 'Cloudy': '☁️', 'Overcast': '☁️', 'Mist': '🌫️', 'Fog': '🌫️', 'Rain': '🌧️', 'Light rain': '🌦️', 'Heavy rain': '🌧️', 'Thunderstorm': '⛈️', 'Snow': '❄️', 'Light snow': '🌨️', 'Heavy snow': '❄️', 'Sleet': '🌨️' };
    
    function getWeatherIcon(condition) {
        for (const [key, icon] of Object.entries(weatherIcons)) {
            if (condition.toLowerCase().includes(key.toLowerCase())) return icon;
        }
        return '🌤️';
    }
    function renderWeather(data) {
        const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'en';
        const location = lang === 'zh' ? '东莞' : 'Dongguan';
        weatherContent.innerHTML = `
            <div class="weather-location"><i class="fas fa-map-marker-alt"></i><span>${location}</span></div>
            <div class="weather-body"><div class="weather-main"><span class="weather-icon">${data.icon}</span><span class="weather-temp">${data.temp}°C</span></div><div class="weather-desc">${data.condition}</div></div>
            <div class="weather-details"><div class="weather-detail"><i class="fas fa-tint"></i><span>${data.humidity}%</span></div><div class="weather-detail"><i class="fas fa-wind"></i><span>${data.windSpeed} km/h</span></div></div>`;
    }
    function getCacheKey(lang) { return `weather_cache_${lang}`; }
    function getCachedWeather(lang) {
        try {
            const cached = localStorage.getItem(getCacheKey(lang));
            if (cached) { const { data, timestamp } = JSON.parse(cached); if (Date.now() - timestamp < CACHE_DURATION) return data; }
        } catch (e) {}
        return null;
    }
    function cacheWeather(data, lang) { try { localStorage.setItem(getCacheKey(lang), JSON.stringify({ data, timestamp: Date.now() })); } catch (e) {} }
    
    async function fetchWeather() {
        const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'en';
        const cached = getCachedWeather(lang);
        if (cached) { renderWeather(cached); return; }
        try {
            const response = await fetch(`https://wttr.in/Dongguan?format=j1&lang=${lang === 'zh' ? 'zh' : 'en'}`);
            const data = await response.json();
            const current = data.current_condition[0];
            const condition = lang === 'zh' && current.lang_zh?.[0] ? current.lang_zh[0].value : current.weatherDesc[0].value;
            const weatherData = { temp: current.temp_C, condition, humidity: current.humidity, windSpeed: current.windspeedKmph, icon: getWeatherIcon(current.weatherDesc[0].value) };
            cacheWeather(weatherData, lang);
            renderWeather(weatherData);
        } catch (error) {
            const errorMsg = lang === 'zh' ? '无法获取天气信息' : 'Unable to get weather';
            weatherContent.innerHTML = `<div class="weather-error"><i class="fas fa-exclamation-circle"></i><span>${errorMsg}</span></div>`;
        }
    }
    fetchWeather();
    window.addEventListener('langChanged', fetchWeather);
}

// ========== Daily Quote ==========
const quoteContent = document.getElementById('quoteContent');
if (quoteContent) {
    const quotesEn = [
        { text: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson' },
        { text: 'Simplicity is prerequisite for reliability.', author: 'Edsger W. Dijkstra' },
        { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
        { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
        { text: 'Premature optimization is the root of all evil.', author: 'Donald Knuth' },
        { text: 'Good code is its own best documentation.', author: 'Steve McConnell' },
        { text: 'Programming isn\'t about what you know; it\'s about what you can figure out.', author: 'Chris Pine' },
        { text: 'The best error message is the one that never shows up.', author: 'Thomas Fuchs' },
        { text: 'Deleted code is debugged code.', author: 'Jeff Sickel' },
        { text: 'If debugging is the process of removing bugs, then programming must be the process of putting them in.', author: 'Edsger W. Dijkstra' }
    ];
    const quotesZh = [
        { text: '代码是写给人看的，顺便能在机器上运行。', author: 'Harold Abelson' },
        { text: '简单是可靠的先决条件。', author: 'Edsger W. Dijkstra' },
        { text: '先让代码工作，再让它正确，最后让它快。', author: 'Kent Beck' },
        { text: '任何傻瓜都能写出计算机能理解的代码，优秀的程序员写出人能理解的代码。', author: 'Martin Fowler' },
        { text: '过早优化是万恶之源。', author: 'Donald Knuth' },
        { text: '好的代码本身就是最好的文档。', author: 'Steve McConnell' },
        { text: '编程不是关于你知道什么，而是关于你能弄清楚什么。', author: 'Chris Pine' },
        { text: '最好的错误消息是永远不会出现的那个。', author: 'Thomas Fuchs' },
        { text: '删除代码比写代码更能提升软件质量。', author: 'Jeff Sickel' },
        { text: '如果调试是消除bug的过程，那么编程一定是把bug放进去的过程。', author: 'Edsger W. Dijkstra' }
    ];
    
    function getDailyQuote() {
        const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'en';
        const quotes = lang === 'zh' ? quotesZh : quotesEn;
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
        return quotes[dayOfYear % quotes.length];
    }
    function renderQuote(quote) {
        const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'en';
        const refreshText = lang === 'zh' ? '换一条' : 'Refresh';
        const quotes = lang === 'zh' ? quotesZh : quotesEn;
        quoteContent.innerHTML = `<div class="quote-body"><div class="quote-text">${quote.text}</div><div class="quote-author">${quote.author}</div></div><button class="quote-refresh" id="refreshQuote"><i class="fas fa-sync-alt"></i> ${refreshText}</button>`;
        document.getElementById('refreshQuote').addEventListener('click', () => renderQuote(quotes[Math.floor(Math.random() * quotes.length)]));
    }
    renderQuote(getDailyQuote());
    window.addEventListener('langChanged', () => renderQuote(getDailyQuote()));
}

// Update dynamic content on language change
function updateDynamicContent() {
    if (typeof updateDateInfo === 'function') updateDateInfo();
}
