# 🎨 ProfileGenie - 超炫酷个人引导页

一个现代化、高性能的个人主页，支持自定义背景、双引擎搜索、响应式布局。

[![GitHub Pages](https://img.shields.io/badge/demo-online-green.svg)](https://new.103000.vip/)

## ✨ 核心特性

- 🎨 **自定义背景** - 支持图片/渐变，可调亮度和模糊
- 🔍 **双引擎搜索** - Google 和百度一键切换
- 🎯 **响应式布局** - 完美适配桌面、平板、手机
- ✨ **炫酷动画** - 3D倾斜、渐变流动、滚动淡入
- 🚀 **极速部署** - 支持 GitHub Pages 一键发布

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/2200737807/ProfileGenie.git
cd ProfileGenie
```

### 2. 自定义配置
编辑 `config.js` 文件：

```javascript
window.config = {
    profile: {
        avatar: '你的头像URL',
        name: '你的名字',
        bio: '你的简介'
    },
    background: {
        type: 'image',
        image: '背景图片URL',
        brightness: 0.7  // 亮度 (0-1)
    },
    links: [
        { title: 'GitHub', icon: 'fab fa-github', url: 'https://...' }
    ]
}
```

### 3. 本地预览
直接用浏览器打开 `index.html` 即可。

### 4. 部署到 GitHub Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

在仓库 `Settings` → `Pages` 中启用 GitHub Pages，选择 `main` 分支。

## 📁 项目结构

```
ProfileGenie/
├── index.html      # 主页面
├── style.css       # 样式文件
├── app.js          # 核心逻辑
├── config.js       # 配置文件
└── README.md       # 文档
```

## 🎨 配置说明

### 背景配置
```javascript
background: {
    type: 'image',           // 'image' 或 'gradient'
    image: '图片URL',         // 背景图片
    gradient: '渐变CSS',      // 渐变背景
    blur: 0,                 // 模糊度 (0-20)
    brightness: 0.7,         // 亮度 (0-1)
    overlay: 'rgba(...)'     // 遮罩层
}
```

### 图标配置
使用 [Font Awesome](https://fontawesome.com/icons) 图标：

```javascript
{
    title: '显示名称',
    icon: 'fab fa-github',   // Font Awesome 类名
    url: 'https://...'
}
```

## 🎯 特效说明

| 特效 | 描述 |
|------|------|
| 名字渐变 | 4色流动渐变 + 加载抖动 |
| 3D倾斜 | 鼠标悬停卡片倾斜效果 |
| 涟漪动画 | 点击扩散水波纹 |
| 滚动淡入 | 元素进入视口时优雅显示 |
| 头像光圈 | 多层呼吸式脉动 |

## 📱 响应式断点

- **桌面端** (>768px) - 社交栏固定右侧
- **平板/手机** (≤768px) - 垂直流式布局

## 🌟 推荐资源

- **背景图片**: [Unsplash](https://unsplash.com/) / [Pexels](https://www.pexels.com/)
- **头像生成**: [DiceBear](https://avatars.dicebear.com/)
- **图标库**: [Font Awesome](https://fontawesome.com/)

## 📄 开源协议

本项目基于 [MIT](LICENSE) 协议开源。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
