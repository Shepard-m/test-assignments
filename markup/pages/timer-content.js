export function TimerContent() {
  return (
    `
      <div class="container">
      <section class="timer">
        <h1 class="visually-hidden">
          Таймер
        </h1>
        <div class="head-content">
          <h2 class="head-content__title">
            Timer
          </h2>
          <ul class="head-content__list">
            <li class="head-content__item">
              <button class="head-content__button head-content__button--active"
                aria-label="переключатель открытия/закрытия таймера">
              </button>
            </li>
            <li class="head-content__item">
              <button class="head-content__button head-content__button--reset" aria-label="сбросить таймер">
              </button>
            </li>
            <li class="head-content__item">
              <button class="head-content__button head-content__button--close" aria-label="закрыть таймер">
              </button>
            </li>
          </ul>
        </div>
        <div class="timer__content">
          <p class="timer__counter">
            0:0:0
          </p>
        </div>
      </section>
    </div>
  `
  )
}