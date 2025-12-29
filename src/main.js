import BoardPresenter from './presenter/board-presenter.js';
import PointModel from './model/points-model.js';

const siteTripEventsElement = document.querySelector('.trip-events');

const pointsModel = new PointModel();


const boardPresenter = new BoardPresenter({
  boardContainer: siteTripEventsElement,
  pointsModel,
});

boardPresenter.init();
