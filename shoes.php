<? include_once ('header.php');?>
<section class="shoes-content">
  <div class="shoes-block">
    <h2 class="shoes-title">Обувь</h2>
    <p class="shoes-text">Главная / Обувь</p>
  </div>
  <div class="price-container">
    <button class="shoes-costs">3 076₽ - 334 485 ₽</button>
    <button class="shoes-brand">Бренд
  <svg width="19" height="19" viewBox="0 0 20 20" fill="none">
    <path d="M5 7L10 12L15 7" stroke="#000" stroke-width="2"/>
  </svg>
</button>
    <button class="shoes-size">Размер
      <svg width="19" height="19" viewBox="0 0 20 20" fill="none">
    <path d="M5 7L10 12L15 7" stroke="#000" stroke-width="2"/>
  </svg>
    </button>
  </div>
  <div class="price-filter-container">
    <p class="price-filter-text">Цена</p>
    <div class="range-wrapper">
      <input class="custom-range" type="range" min="0" max="334485" step="1" value="0">
      <input class="custom-range" type="range" min="0" max="334485" step="1" value="334485">
    </div>
    <div class="costs-contant">
      <div class="costs-price">
        <p class="costs-price-text">От</p>
        <button class="costs-price-button">
          <p class="costs-price-button-text">3 076</p>
          <p class="costs-price-button-text">₽</p>
        </button>
      </div>
      <div class="costs-price">
        <p class="costs-price-text">До</p>
        <button class="costs-price-button">
          <p class="costs-price-button-text">334485</p>
          <p class="costs-price-button-text">₽</p>
        </button>
      </div>
    </div>
    <div class="footer-price-filter">
      <button class="footer-price-filter-button-reset">
        <p class="footer-price-filter-text1">Сбросить</p>
      </button>
      <button class="footer-price-filter-button-complite">
        <p class="footer-price-filter-text">Готово</p>
      </button>
      </div>
  </div>
</section>
<? include_once('footer.php');?>