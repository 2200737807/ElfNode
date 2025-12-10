# 超炫酷个人引导页

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

## 📁 项目结构

```
ProfileGenie/
├── index.html      # 主页面
├── style.css       # 样式文件
├── app.js          # 核心逻辑
├── config.js       # 配置文件
└── README.md       # 文档
```
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