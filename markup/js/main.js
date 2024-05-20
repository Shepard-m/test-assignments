import { renderMap } from "./map.js";
import { TextNavigate } from "./const.js";
import { ProfileContent } from "../pages/profile-content.js";
import { MapContent } from "../pages/map-content.js";
import { TimerContent } from "../pages/timer-content.js";
import { render } from "./render.js";

const timerContent = document.querySelector('.timer__counter');
const container = document.querySelector('.main');
const navigate = document.querySelector('.header__navigate-list');
let component = ProfileContent();
let countTime = '';
const listNavigation = document.querySelectorAll('.header__navigate-item');
render(component, container)


function callTimer(content) {
  let time = 1000;
  let hours = 0;
  let timer = time / 1000;
  return function() {
    let minute = Math.floor(timer / 60);
    if (minute / 60 === 1) {
      minute = 0
      time = 0
      hours += 1;
    }
    time += 1000;
    timer = time / 1000;
    countTime = (hours) + ':' + (minute) + ':' + (Math.floor(timer % 60));
  }
}
  
const setTimer = callTimer(timerContent);

setInterval(setTimer, 1000);

function onSelectPageClick(evt) {
  console.log(evt.target.textContent)
  switch (evt.target.textContent) {
    case TextNavigate.TIMER: 
      container.innerHTML = '';
      component = TimerContent();
      render(component, container);
      const timerContent = document.querySelector('.timer__counter');
      setInterval(() => timerContent.textContent = countTime, 1000)
      listNavigation[2].classList.add('header__navigate-item--active');
      listNavigation[0].classList.remove('header__navigate-item--active');
      listNavigation[1].classList.remove('header__navigate-item--active');
      return;
    case TextNavigate.ACTIVITY: 
      container.innerHTML = '';
      component = ProfileContent();
      render(component, container)
      clearInterval(1);
      listNavigation[2].classList.remove('header__navigate-item--active');
      listNavigation[0].classList.add('header__navigate-item--active');
      listNavigation[1].classList.remove('header__navigate-item--active');
      return;
    case TextNavigate.MAP: 
      container.innerHTML = '';
      component = MapContent();
      render(component, container)
      clearInterval(1);
      const mapContent = document.querySelector('.map__content');
      mapContent.innerHTML = ''
      renderMap(mapContent)
      listNavigation[2].classList.remove('header__navigate-item--active');
      listNavigation[0].classList.remove('header__navigate-item--active');
      listNavigation[1].classList.add('header__navigate-item--active');
      return;
    default: 
      console.log(evt.target.className + 'R');
  }
}
console.log(navigate)
navigate.addEventListener('click', onSelectPageClick);
