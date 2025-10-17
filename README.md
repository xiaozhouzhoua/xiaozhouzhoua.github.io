# 个人网站

一个采用 macOS 风格设计的现代化个人网站，具有毛玻璃效果、流畅动画和响应式布局。

## ✨ 特性

- 🎨 **macOS 风格设计** - 毛玻璃效果、优雅的动画和现代化的界面
- 🌓 **深色/浅色主题** - 支持主题切换，自动保存偏好设置
- 📱 **完全响应式** - 适配各种屏幕尺寸
- ⚡ **流畅动画** - 平滑的滚动、过渡和交互效果
- 🎯 **自定义光标** - 独特的光标跟随效果（仅桌面端）
- 🔍 **SEO 友好** - 语义化 HTML 结构

## 🚀 快速开始

### 部署到 GitHub Pages

1. **创建 GitHub 仓库**
   ```bash
   cd personal-website
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **关联远程仓库**
   ```bash
   git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 前往仓库设置（Settings）
   - 找到 Pages 部分
   - Source 选择 "main" 分支
   - 点击 Save

4. **访问你的网站**
   - 几分钟后，访问 `https://你的用户名.github.io`

### 本地预览

直接用浏览器打开 `index.html` 文件即可预览。

或使用简单的 HTTP 服务器：

```bash
# Python 3
python3 -m http.server 8000

# 然后访问 http://localhost:8000
```

## 🎨 自定义

### 修改个人信息

编辑 `index.html` 文件：

- **第 18 行**: 修改导航栏 Logo `<div class="logo">ZGP</div>`
- **第 33 行**: 修改名字 `<h1>你好，我是 <span class="highlight">周光平</span></h1>`
- **第 34 行**: 修改职位 `<p class="subtitle">软件工程师 | 全栈开发者 | 创造者</p>`
- **项目部分**: 修改项目卡片内容（第 66-113 行）
- **联系方式**: 更新邮箱、社交媒体链接（第 165-191 行）

### 修改颜色主题

编辑 `styles.css` 文件顶部的 CSS 变量：

```css
:root {
    --primary-color: #007AFF;      /* 主色调 */
    --secondary-color: #5856D6;    /* 次要色调 */
    --accent-color: #FF2D55;       /* 强调色 */
    /* ... 其他颜色 */
}
```

### 添加项目

在 `index.html` 的项目部分添加新的项目卡片：

```html
<div class="project-card glass">
    <div class="project-header">
        <h3>你的项目名称</h3>
        <span class="project-tag">标签</span>
    </div>
    <p class="project-description">项目描述</p>
    <div class="project-tech">
        <span class="tech-tag">技术1</span>
        <span class="tech-tag">技术2</span>
    </div>
    <div class="project-links">
        <a href="#" class="project-link">查看详情 →</a>
    </div>
</div>
```

## 📁 文件结构

```
personal-website/
├── index.html          # 主 HTML 文件
├── styles.css          # 样式表
├── script.js           # JavaScript 交互逻辑
└── README.md          # 说明文档
```

## 🎯 功能说明

- **平滑滚动**: 点击导航链接平滑滚动到对应区域
- **主题切换**: 点击右上角按钮切换深色/浅色主题
- **动画效果**: 滚动时元素淡入动画
- **悬停效果**: 卡片和按钮的交互效果
- **自适应导航栏**: 滚动时导航栏样式变化
- **技能条动画**: 滚动到技能区域时进度条动画
- **视差效果**: 鼠标移动时背景形状跟随
- **自定义光标**: 桌面端的自定义光标效果

## 🌐 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

注意：毛玻璃效果需要现代浏览器支持 `backdrop-filter` 属性。

## 📝 待办事项

- [ ] 添加实际的项目内容和链接
- [ ] 更新联系方式为真实信息
- [ ] 添加项目截图或图片
- [ ] 优化移动端导航菜单
- [ ] 添加更多动画效果
- [ ] 集成联系表单
- [ ] 添加博客部分

## 📄 许可证

MIT License - 随意使用和修改

---

用 ❤️ 和 ☕ 制作
