import FilterView from '../view/filter-view.js';
import { render } from '../render.js';
import ListEventsView from '../view/list-events.js';
import ItemEventView from '../view/item-event.js';
import EditEventView from '../view/edit-event.js';
export default class BoardPresenter {
  listEventsComponent = new ListEventsView();

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoint()];
    render(new FilterView, this.boardContainer);
    render(this.listEventsComponent, this.boardContainer);
    render(new EditEventView(this.pointsModel, this.boardPoints[0]), this.listEventsComponent.getElement());

    for (let i = 1; i < this.boardPoints.length; i++) {
      render(new ItemEventView(this.pointsModel, this.boardPoints[i]), this.listEventsComponent.getElement());
    }
  }
}
