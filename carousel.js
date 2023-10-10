const minWidthForScript = 200;
const windowWidth = window.innerWidth;

function setupCarousel(carouselId, prevBtnId, nextBtnId) {
    if (windowWidth >= minWidthForScript) {
        const leftArrow = document.getElementById(prevBtnId);
        const rightArrow = document.getElementById(nextBtnId);
        const carousel = document.getElementById(carouselId);
        const projetos = document.querySelectorAll('.img-series');

        let currentSlide = 0;
        const totalSlides = projetos.length;

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            scrollToSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            scrollToSlide(currentSlide);
        }

        function scrollToSlide(slideIndex) {
            const slideWidth = projetos[0].getBoundingClientRect().width;
            carousel.scrollLeft = slideWidth * slideIndex;
        }

        leftArrow.addEventListener('click', prevSlide);
        rightArrow.addEventListener('click', nextSlide);
    }
}

setupCarousel('carousel', 'prevBtn', 'nextBtn');
setupCarousel('carousel1', 'prevBtn1', 'nextBtn1');
setupCarousel('carousel2', 'prevBtn2', 'nextBtn2');
setupCarousel('carousel3', 'prevBtn3', 'nextBtn3');
setupCarousel('carousel4', 'prevBtn4', 'nextBtn4');
setupCarousel('carousel5', 'prevBtn5', 'nextBtn5');
setupCarousel('carousel6', 'prevBtn6', 'nextBtn6');






function setupSmoothScroll(carouselId) {
    let isDragging = false;
    let startX;
    let scrollLeft;

    const carousel = document.getElementById(carouselId);

    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    carousel.addEventListener('mouseup', () => {
        isDragging = false;
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5; 

        carousel.scrollLeft = scrollLeft - walk;
    });
}


setupSmoothScroll('carousel');
setupSmoothScroll('carousel1');
setupSmoothScroll('carousel2');
setupSmoothScroll('carousel3');
setupSmoothScroll('carousel6');
setupSmoothScroll('carousel5');
setupSmoothScroll('carousel4');
