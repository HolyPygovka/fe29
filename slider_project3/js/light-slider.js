const defaultOptions = {
    slidesWidth: 300,
    slidesHeight: 200,
    nav: true,
    autoplay: false,
    autoplaySpeed: 2000,
    slides: 2,
    loop: false,

    dots: true,
}
let shift = 0; 

let divs = document.querySelectorAll('div');
divs.forEach((el) => el.lightSlider = lightSlider);

function lightSlider(settings = {}) {
    const slidesWidth = settings.slidesWidth || defaultOptions.slidesWidth;
    const slides = settings.slides || defaultOptions.slides;
    const slidesHeight = settings.slidesHeight || defaultOptions.slidesHeight;
    const autoplaySpeed = settings.autoplaySpeed || defaultOptions.autoplaySpeed;
    const nav = settings.nav !== undefined ? settings.nav : defaultOptions.nav;
    const loop = settings.loop !== undefined ? settings.loop : defaultOptions.loop;
    const autoplay = settings.autoplay !== undefined
        ? settings.autoplay : defaultOptions.autoplay;

    transformHtmlSlider(this, slidesWidth, slides, nav, loop);
    setStyle(slidesWidth, slides, slidesHeight);

    if (autoplay) {
        setInterval(nextSlide, autoplaySpeed, slidesWidth, slides);
    }
};

function addNav(slidesWidth, slides, loop) {
    let navBlock = document.createElement('div');
    navBlock.className = 'nav_block';
    
    let prevBtn = document.createElement('button');
    prevBtn.className = 'btn prev';
    prevBtn.innerHTML = '<';
    prevBtn.addEventListener('click', () => prevSlide(slidesWidth, slides));

    let nextBtn = document.createElement('button');
    nextBtn.className = 'btn next';
    nextBtn.innerHTML = '>';
    nextBtn.addEventListener('click', () => nextSlide(slidesWidth, slides, loop));


    navBlock.append(prevBtn);
    navBlock.append(nextBtn);
    mainSlider.append(navBlock);
}
function nextSlide(slidesWidth, slides, loop) {
    let slidersWrapper = 
        document.querySelector('.light_slider .sliders_wrapper');
    let slidersWrapperWidth = slidersWrapper.offsetWidth;
    let slidesArr = slidersWrapper.querySelectorAll('.one_slide');

    if (shift > -(slidersWrapperWidth
        - slidesWidth * slides)) {
            shift -= slidesWidth;
            let activeIndex;
            slidesArr.forEach((el, index) => {
                if (el.classList.contains('active')) {
                    activeIndex = index;
                }
            });

            slidesArr[activeIndex].classList.remove('active');
            slidesArr[activeIndex+1].classList.add('active');
            slidersWrapper.style.transform = `translateX(${shift}px)`;
    }

    if (loop && slidesArr[slidesArr.length-1].classList.contains('active')) {
        function sdvig() {
            slidersWrapper.style.transition = 'none';
            slidersWrapper.style.transform = `translateX(0px)`;
        }
        setTimeout(sdvig, 1000);
        
    } else {
        slidersWrapper.style.transform = `translateX(${shift}px)`;
    }
}

function prevSlide(slidesWidth, slides) {
    let slidersWrapper = 
        document.querySelector('.light_slider .sliders_wrapper');
    if ( shift < 0 ) {
            shift += slidesWidth;
    }
    slidersWrapper.style.transform = `translateX(${shift}px)`;
}
function transformHtmlSlider(mainSlider, slidesWidth, slides, nav, loop) {
    mainSlider.classList.add('light_slider');

    let slidesHtml = mainSlider.innerHTML;

    if (loop) {
        let firstClone = mainSlider
        .querySelector('div:first-child').outerHTML;
        slidesHtml += firstClone;
    }
    
    mainSlider.innerHTML = `<div class="sliders_window">
        <div class="sliders_wrapper">${slidesHtml}</div>
    </div>`;

    if (nav) {
        addNav(slidesWidth, slides, loop);
    }
}
function setStyle(slidesWidth, slides, slidesHeight) {
    let slidersWindow = document
    .querySelector('.light_slider .sliders_window');

    slidersWindow.style.width = 
        `${slidesWidth * slides}px`;
    slidersWindow.style.height = `${slidesHeight}px`;

    let slidesArr = document
        .querySelectorAll('.light_slider .sliders_wrapper>div');
    let sliders_wrapper = document
        .querySelector('.light_slider .sliders_wrapper');

    /*const firstSlideClone = slidesCollection[0];
    let slidesArr = Array.from(slidesCollection);
    slidesArr.push(firstSlideClone);*/

    sliders_wrapper.style.width = 
        `${slidesArr.length * slidesWidth}px`;
    slidesArr.forEach((el, index) => {
        el.classList.add('one_slide');
        if (index === slidesArr.length - 1) el.classList.add('cloned');
        if (index < slides) el.classList.add('active');

        el.style.width = `${slidesWidth}px`;
        el.style.height = `${slidesHeight}px`;
    });
}