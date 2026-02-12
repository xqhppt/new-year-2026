// 新年快乐网页的交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 烟花动画
    function createFirework() {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.animationDuration = (Math.random() * 2 + 3) + 's';
        document.body.appendChild(firework);
        
        // 移除动画完成后的元素
        setTimeout(() => {
            firework.remove();
        }, 5000);
    }
    
    // 每2秒创建一个烟花
    setInterval(createFirework, 2000);
    
    // 祝福语轮播
    const wishes = [
        '新年快乐！',
        '万事如意！',
        '身体健康！',
        '财源广进！',
        '阖家幸福！',
        '龙年大吉！'
    ];
    
    let wishIndex = 0;
    const wishElement = document.getElementById('wishes');
    if (wishElement) {
        setInterval(() => {
            wishIndex = (wishIndex + 1) % wishes.length;
            wishElement.textContent = wishes[wishIndex];
        }, 3000);
    }
    
    // 鼠标点击特效
    document.body.addEventListener('click', function(e) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    });
});