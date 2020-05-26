import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CardsDetailController extends Controller {
  @action 
  async updateCard(e) {
    e.preventDefault();
    this.model.setProperties({ list: this.model.list, title: this.model.title });
    
    await this.model.save();
    this.transitionToRoute('cards');
    
  }
  
  @action 
  async deleteCard(e) {
    debugger;
    e.preventDefault();
    await this.model.destroyRecord();
    this.transitionToRoute('cards');
  }
}
