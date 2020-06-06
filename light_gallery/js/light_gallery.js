let linkArr = document.querySelectorAll('a[data-lightgallery]');

function showBigImg(event) {
    event.preventDefault();
    createGalleryHtml(event.target);
}

function createGalleryHtml(el) {
    let src = el.closest('a').getAttribute('href');

    let galleryBg = document.createElement('div');
    galleryBg.className = 'light_gallery_bg';

    let oneSlide = document.createElement('div');
    oneSlide.className = 'light_gallery_one_slide';

    let img = document.createElement('img');
    img.setAttribute('src', src);

    let galleryWrapper = document.createElement('div');
    galleryWrapper.className = 'light_gallery_wrapper';

    let galleryInner = document.createElement('div');
    galleryInner.className = 'light_gallery_inner';

    let galleryTopNav = document.createElement('div');
    galleryTopNav.className = 'light_gallery_top_nav';

    let closeBtn = document.createElement('button');
    closeBtn.className = 'close_btn';
    closeBtn.innerHTML = 'X';
    closeBtn.addEventListener('click', removeGallery);

    galleryTopNav.append(closeBtn);
    galleryInner.append(galleryTopNav);
    oneSlide.append(img);
    galleryWrapper.append(oneSlide);
    galleryInner.append(galleryWrapper);
    document.body.prepend(galleryBg);
    document.body.prepend(galleryInner);

    function removeGallery() {
        galleryInner.remove();
        galleryBg.remove();
    }
}

linkArr.forEach((el) => {
    el.addEventListener('click', showBigImg);
});