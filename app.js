class LandingPage {
    constructor(config) {
        this.config = config;
        this.currentEngine = 'google';
        this.searchEngines = {
            google: 'https://www.google.com/search?q=',
            baidu: 'https://www.baidu.com/s?wd='
        };
        this.init();
    }

    init() {
        this.applyBackground();
        this.renderProfile();
        this.renderSocialLinks();
        this.renderLinks();
        this.initSearch();
        this.initAnimations();
        this.setCurrentYear();
    }

    // 应用背景
    applyBackground() {
        const bg = document.querySelector('.animated-bg');
        const { background } = this.config;

        if (background.type === 'image' && background.image) {
            bg.style.backgroundImage = `url(${background.image})`;
            if (background.blur) {
                bg.style.filter = `brightness(${background.brightness || 0.7}) blur(${background.blur}px)`;
            } else {
                bg.style.filter = `brightness(${background.brightness || 0.7})`;
            }
        } else if (background.type === 'gradient' && background.gradient) {
            bg.style.background = background.gradient;
        }

        if (background.overlay) {
            const overlay = document.querySelector('.gradient-overlay');
            overlay.style.background = background.overlay;
        }
    }

    // 渲染个人资料
    renderProfile() {
        const { profile } = this.config;
        document.getElementById('avatar').src = profile.avatar;
        document.getElementById('name').textContent = profile.name;
        
        // 渲染标签
        if (profile.tags && profile.tags.length > 0) {
            const tagsContainer = document.getElementById('tags');
            tagsContainer.innerHTML = profile.tags.map((tag, index) => `
                <span class="tag" style="animation-delay: ${0.6 + index * 0.1}s">
                    <i class="fas fa-tag tag-icon"></i>
                    ${tag}
                </span>
            `).join('');
        }
        
        if (profile.quote) {
            document.getElementById('quote').textContent = profile.quote;
        }
    }

    // 渲染社交链接
    renderSocialLinks() {
        const container = document.getElementById('socialLinks');
        const { socialLinks } = this.config;

        container.innerHTML = socialLinks.map(link => `
            <a href="${link.url}" class="social-link" target="_blank" rel="noopener noreferrer" 
               title="${link.name}">
                <i class="${link.icon}"></i>
            </a>
        `).join('');
    }

    // 渲染链接网格
    renderLinks() {
        const container = document.getElementById('links');
        const { links } = this.config;

        container.innerHTML = links.map((link, index) => `
            <a href="${link.url}" class="link-card" target="_blank" rel="noopener noreferrer" 
               style="animation-delay: ${0.1 * index}s">
                <i class="${link.icon} link-icon"></i>
                <span class="link-title">${link.title}</span>
            </a>
        `).join('');

        // 添加点击涟漪效果
        this.addRippleEffect();
    }

    // 初始化搜索功能
    initSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const engineBtns = document.querySelectorAll('.engine-btn');

        // 引擎切换
        engineBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                engineBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentEngine = btn.dataset.engine;
                
                // 更新占位符
                searchInput.placeholder = this.currentEngine === 'google' 
                    ? '通往里世界...' 
                    : '通往表世界...';
            });
        });

        // 搜索功能
        const performSearch = () => {
            const query = searchInput.value.trim();
            if (query) {
                const url = this.searchEngines[this.currentEngine] + encodeURIComponent(query);
                window.open(url, '_blank');
                searchInput.value = '';
            }
        };

        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // 添加涟漪效果
    addRippleEffect() {
        const cards = document.querySelectorAll('.link-card');
        
        cards.forEach(card => {
            card.addEventListener('click', function(e) {
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s ease-out';
                ripple.style.pointerEvents = 'none';
                
                const rect = card.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                card.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // 添加涟漪动画
        if (!document.getElementById('ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // 初始化动画
    initAnimations() {
        // 滚动动画
        this.initScrollAnimations();
        
        // 3D倾斜效果
        this.init3DTilt();
    }

    // 滚动动画
    initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.link-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }

    // 3D倾斜效果
    init3DTilt() {
        const cards = document.querySelectorAll('.link-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.05)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // 设置当前年份
    setCurrentYear() {
        document.getElementById('year').textContent = new Date().getFullYear();
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    new LandingPage(window.config);
});
