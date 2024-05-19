export function MapContent() {
  return (
    `
      <div class="container">
        <section class="map">
          <h1 class="visually-hidden">
            Карта
          </h1>
          <div class="head-content">
            <h2 class="head-content__title">
              Timer
            </h2>
            <ul class="head-content__list">
              <li class="head-content__item">
                <button class="head-content__button head-content__button--active"
                  aria-label="переключатель открытия/закрытия карты">
                </button>
              </li>
              <li class="head-content__item">
                <button class="head-content__button head-content__button--reset" aria-label="сбросить карту">
                </button>
              </li>
              <li class="head-content__item">
                <button class="head-content__button head-content__button--close" aria-label="закрыть карту">
                </button>
              </li>
            </ul>
          </div>
          <div class="map__content">
            <img class="map__content-img" src="markup/img/reset-big.svg" alt="" class="map__content-reset">
          </div>
        </section>
      </div>
  `
  )
}