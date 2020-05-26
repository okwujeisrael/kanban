import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CardsController extends Controller {
  @tracked title;
  @tracked currentCard;
  
  @action
  async updateCard(list) {
    await this.store.createRecord('card', {
      list, title: this.title
    }).save();
    this.currentCard.destroyRecord();

  }
  
  @action
  draggedOver(dragEvent) {
    dragEvent.preventDefault();
    dragEvent.dataTransfer.dropEffect = "move";
  }
  
  @action
  beginDrag(card) {
    this.set('title', card.title);
    this.set('currentCard', card);
  }
}
