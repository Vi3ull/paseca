import Swiper from "swiper";
import throttle from "@c/utils/throttle/_";

export default function initCarousel($carousel, options) {
  const init = () => {
    const slidesPerView = window.getComputedStyle($carousel, null).getPropertyValue("--carouselSlidesCount");
    const carouselSlidesGap = window.getComputedStyle($carousel, null).getPropertyValue("--carouselSlidesGap");
    const $pagination = $carousel.querySelector(".carousel__pagination");
    
    if (slidesPerView != "auto") options.slidesPerView = slidesPerView;
    if (carouselSlidesGap != "0") options.spaceBetween = parseInt(carouselSlidesGap.replace(/\D+/g,""));
    if ($pagination) options.pagination.el = $pagination;
    
    $carousel.classList.add("carousel--inited");
    const carousel = new Swiper($carousel, options);

    // const group = document.querySelectorAll([data-id=`${carousel.el.dataset.id}`])
    // console.log(carousel);

    // thumbs: {
    //   swiper: thumbsSwiper
    // }

    // const swipeAllSliders = (index) => {
    //   carousel.slideTo(index);
    // }

    // carousel.on('slideChange', () => {
    //   console.log(carousel);
    //   swipeAllSliders(carousel.activeIndex)
    // });
  }

  init();
  
  const optimizedHandler = throttle(init, 250);
  window.addEventListener("resize", optimizedHandler)
};



