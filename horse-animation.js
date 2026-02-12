// 马年动画效果
class HorseAnimation {
    constructor() {
        this.horsesContainer = document.getElementById('horsesContainer'); // 修复：使用正确的ID
        this.horseCount = 3; // 马的数量
        this.init();
    }

    init() {
        // 创建奔跑的马
        for (let i = 0; i < this.horseCount; i++) {
            this.createHorse(i);
        }
        
        // 开始动画
        this.startAnimation();
    }

    createHorse(index) {
        const horse = document.createElement('div');
        horse.className = 'horse';
        horse.style.setProperty('--delay', `${index * 2}s`);
        horse.style.setProperty('--duration', `${8 + Math.random() * 4}s`);
        
        // 马的 SVG 路径（简化版）
        const horseSvg = `
            <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
                <path fill="#DAA520" d="M20,30 C15,25 10,20 15,15 C20,10 25,15 30,20 C35,25 40,30 45,25 C50,20 55,15 60,20 C65,25 70,30 75,35 C80,40 85,45 80,50 C75,55 70,50 65,45 C60,40 55,35 50,40 C45,45 40,50 35,45 C30,40 25,35 20,30 Z"/>
                <path fill="#B8860B" d="M15,15 C12,12 8,10 10,8 C12,6 15,8 18,12 C21,16 24,20 22,22 C20,24 18,22 15,15 Z"/>
                <path fill="#CD853F" d="M30,20 L35,15 L40,18 L35,22 L30,20 Z"/>
                <path fill="#DAA520" d="M45,25 L50,20 L55,22 L50,27 L45,25 Z"/>
                <path fill="#B8860B" d="M60,20 L65,15 L70,18 L65,22 L60,20 Z"/>
                <path fill="#DAA520" d="M75,35 L80,30 L85,32 L80,37 L75,35 Z"/>
            </svg>
        `;
        
        horse.innerHTML = horseSvg;
        this.horsesContainer.appendChild(horse);
    }

    startAnimation() {
        // 添加鼠标交互效果
        document.addEventListener('mousemove', (e) => {
            const horses = document.querySelectorAll('.horse');
            horses.forEach(horse => {
                const rect = horse.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                
                const distanceX = (mouseX - centerX) / 100;
                const distanceY = (mouseY - centerY) / 100;
                
                horse.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
            });
        });
    }
}

// 页面加载完成后初始化马年动画
document.addEventListener('DOMContentLoaded', () => {
    // 确保容器存在
    if (document.getElementById('horsesContainer')) {
        new HorseAnimation();
    }
});