import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NewCardFormComponent extends Component {
  @tracked title;
  @tracked showForm;
  @service store;
  
  @action
  toggleForm() {
    this.showForm = true;
  }
  
  @action
  async saveCard(e) {
    e.preventDefault();
    await this.store.createRecord('card', {
      list: this.args.list, 
      title: this.title,
    }).save();
    this.title = '';
    this.showForm = false;
  }
}
