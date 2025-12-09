import BoardPresenter from './presenter/board-presenter.js';

const siteTripMainElement = document.querySelector('.trip-main');
const siteTripControlElement = siteTripMainElement.querySelector('.trip-main__trip-controls');
const siteTripEventsElement = document.querySelector('.trip-events');


const boardPresenter = new BoardPresenter({
  boardContainer: siteTripEventsElement,
  controlContainer: siteTripControlElement,
  infoContainer: siteTripMainElement,
});

boardPresenter.init();
