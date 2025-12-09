import FilterView from '../view/filter-view.js';
import TaskControlView from '../view/control-view.js';
import TaskInfoView from '../view/info-view.js';
import { render, RenderPosition } from '../render.js';
import ListEventsView from '../view/list-events.js';
import ItemEventView from '../view/item-event.js';
import EditEventView from '../view/edit-event.js';
import CreateEventView from '../view/create-event.js';


export default class BoardPresenter {
  listEventsComponent = new ListEventsView();

  constructor({boardContainer, controlContainer, infoContainer}) {
    this.boardContainer = boardContainer;
    this.controlContainer = controlContainer;
    this.infoContainer = infoContainer;
  }

  init() {
    render(new TaskInfoView, this.infoContainer , RenderPosition.AFTERBEGIN);
    render(new TaskControlView, this.controlContainer);
    render(new FilterView, this.boardContainer);
    render(this.listEventsComponent, this.boardContainer);
    render(new EditEventView, this.listEventsComponent.getElement());
    render(new CreateEventView, this.listEventsComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new ItemEventView, this.listEventsComponent.getElement());
    }
  }
}
