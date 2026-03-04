document.addEventListener('DOMContentLoaded', () => {
    // --- 1. サイドメニューの制御 ---
    const menuOpen = document.getElementById('menuOpen');
    const menuClose = document.getElementById('menuClose');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const menuLinks = document.querySelectorAll('.side-menu a');

    // メニューを開く
    function openMenu() {
        if (sideMenu && overlay) {
            sideMenu.classList.add('open');
            overlay.classList.add('show');
        }
    }

    // メニューを閉じる
    function closeMenu() {
        if (sideMenu && overlay) {
            sideMenu.classList.remove('open');
            overlay.classList.remove('show');
        }
    }

    // イベントの登録（要素が存在する場合のみ）
    if (menuOpen) menuOpen.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // リンククリック時に閉じる
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // --- 2. 商品スライダーの制御 ---
const sliderInner = document.getElementById('sliderInner');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (sliderInner && prevBtn && nextBtn) {
    let currentSlide = 0;
    // 【修正】スライドの総数を 4 に変更（または子要素の数で自動取得）
    const slides = sliderInner.querySelectorAll('.product-slide');
    const totalSlides = slides.length; 

    function updateSlider() {
        // 【修正】1枚の幅は 100% / totalSlides なので、移動量もそれに合わせます
        const offset = currentSlide * (100 / totalSlides);
        sliderInner.style.transform = `translateX(-${offset}%)`;
    }

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });
}
});