export function ProfileContent() {
  return (
    `
    <div class="container">
      <sections class="main-index__container">
        <section class="main-index__column-left">
          <div class="banner">
            <img src="markup/img/banner-img.png" width="1016" height="424" alt="preview" class="banner__img">
            <div class="banner__info">
              <div class="banner__user">
                <a href="#" class="banner__user-name">
                  Jason Anderson
                </a>
                commented:
              </div>
              <div class="banner__comment">
                <p class="banner__comment-text">
                  Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your
                  heart. A life without it is like a sunless garden when the flowers are dead. Because summer is
                  passion, memories, light breeze, the sun that appears on the skin and caresses the face.
                </p>
                <div class="banner__comment-date">
                  – Jason, <data value="05/15/2024 10:30:00 AM">10:30</data> am
                </div>
              </div>
              <div class="banner__comment-info">
                <span class="banner__comment-item banner__comment-watches">
                  432
                </span>
                <span class="banner__comment-item banner__comment-count">
                  47
                </span>
              </div>
            </div>
          </div>
          <div class="posts-default">
            <ul class="posts-default__list">
              <li class="posts-default__item">
                <h2 class="posts-default__title">
                  Sunset Sunset Sunset
                </h2>
                <div class="posts-default__content">
                  <span class="posts-default__data-create">
                    <data value="05/15/2024 10:53:00 AM">53</data> minutes ago
                  </span>
                  <button class="posts-default__button posts-default__button--close">
                    <span class="visually-hidden">
                      открыть пост
                    </span>
                  </button>
                </div>
              </li>
              <li class="posts-default__item">
                <h2 class="posts-default__title">
                  Sunset Sunset Sunset
                </h2>
                <div class="posts-default__content">
                  <span class="posts-default__data-create">
                    <data value="05/15/2024 10:53:00 AM">53</data> minutes ago
                  </span>
                  <button class="posts-default__button posts-default__button--close">
                    <span class="visually-hidden">
                      открыть пост
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section class="main-index__column-rigth">
          <section class="main-index__user user-profile">
            <img src="markup/img/avatar-user.jpg" alt="Hanna Dorman" width="132" height="132" class="main__user-avatar">
            <p class="user-profile__user-name">Hanna Dorman</p>
            <p class="user-profile__user-profession">UX/UI designer</p>
            <ul class="user-profile__social-list">
              <li class="user-profile__social-item">
                <a href="#">
                  <img src="markup/img/telegram-icon.svg" alt="telegram" class="user-profile__social-icon" width="20"
                    height="20">
                </a>
              </li>
              <li class="user-profile__social-item">
                <a href="#">
                  <img src="markup/img/hunt-hunters-icon.svg" alt="hunt hunters" class="user-profile__social-icon"
                    width="20" height="20">
                </a>
              </li>
              <li class="user-profile__social-item">
                <a href="#">
                  <img src="markup/img/twitter-icon.svg" alt="twitter" class="user-profile__social-icon" width="20"
                    height="20">
                </a>

              </li>
            </ul>
          </section>

          <section class="navigate-profile">
            <section class="head">
              <h2 class="head__title">Navigation</h2>
              <button class="head__button head__button--active">
                <span class="visually-hidden">
                  Закрыть блок информации
                </span>
              </button>
            </section>
            <ul class="navigate-profile__list">
              <li class="navigate-profile__item navigate-profile__item--profile">
                <p class="navigate-profile__item-title">
                  <a href="#">
                    My profile
                  </a>
                </p>
              </li>
              <li class="navigate-profile__item navigate-profile__item--balance">
                <p class="navigate-profile__item-title">
                  <a href="#">
                    Balance
                  </a>
                </p>
                <span class="navigate-profile__item-text">
                  $ 1430
                </span>
              </li>
              <li class="navigate-profile__item navigate-profile__item--connections">
                <p class="navigate-profile__item-title">
                  <a href="#">
                    Connections
                  </a>
                </p>
                <p class="notification-message notification-message--red">
                  <span>29</span>
                </p>
              </li>
              <li class="navigate-profile__item navigate-profile__item--friends">
                <p class="navigate-profile__item-title">
                  <a href="#">
                    Friends
                  </a>
                </p>
              </li>
            </ul>
            <ul class="navigate-profile__list">
              <li class="navigate-profile__item navigate-profile__item--events">
                <p class="navigate-profile__item-title">
                  <a href="#">
                    Events
                  </a>
                </p>
                <p class="notification-message notification-message--green">
                  <span>45</span>
                </p>
              </li>
              <li class="navigate-profile__item navigate-profile__item--options">
                <p class="navigate-profile__item-title">
                  <a href="#">
                    Account settings
                  </a>

                </p>
              </li>
            </ul>
          </section>
          <section class="message">
            <section class="head">
              <h2 class="head__title">Navigation</h2>
              <button class="head__button head__button--active">
                <span class="visually-hidden">
                  Закрыть блок сообщений
                </span>
              </button>
            </section>
            <form action="#" method="post" class="message__form">
              <textarea name="message" id="" class="message__value" placeholder="Enter your message...">
              </textarea>
              <button class="message__button">
                Save
              </button>
            </form>
          </section>
        </section>
      </sections>
    </div>
  `
  )
}