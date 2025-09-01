class CategoriesSwiper {
  constructor() {
    this.swiper = document.querySelector(".categories-swiper");
    this.wrapper = this.swiper.querySelector(".categories-list");
    this.slides = this.swiper.querySelectorAll(".categories-item");
    this.prevButton = document.querySelector(".categories-prev");
    this.nextButton = document.querySelector(".categories-next");

    this.currentIndex = 0;
    this.isAnimating = false;
    this.slideCount = this.slides.length;

    this.init();
  }

  init() {
    this.calculateDimensions();
    this.bindEvents();
    this.updatePosition(false);
  }

  calculateDimensions() {
    const wrapperStyle = window.getComputedStyle(this.wrapper);
    this.gap = parseInt(wrapperStyle.gap) || 0;
    this.slideWidth = this.slides[0].offsetWidth + this.gap;
    this.wrapperWidth = this.slideWidth * this.slideCount;
  }

  bindEvents() {
    this.prevButton.addEventListener("click", () => this.slidePrev());
    this.nextButton.addEventListener("click", () => this.slideNext());

    window.addEventListener("resize", () => {
      this.calculateDimensions();
      this.updatePosition(false);
    });
  }

  slidePrev() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.currentIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
    this.updatePosition(true);
  }

  slideNext() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.currentIndex = (this.currentIndex + 1) % this.slideCount;
    this.updatePosition(true);
  }

  updatePosition(animate = true) {
    const offset = -this.currentIndex * this.slideWidth;

    if (animate) {
      this.wrapper.style.transition = "transform 0.5s ease";
    } else {
      this.wrapper.style.transition = "none";
    }

    this.wrapper.style.transform = `translateX(${offset}px)`;

    setTimeout(
      () => {
        this.isAnimating = false;
      },
      animate ? 500 : 0
    );
  }
}

// Инициализация
document.addEventListener("DOMContentLoaded", function () {
  new CategoriesSwiper();
});
