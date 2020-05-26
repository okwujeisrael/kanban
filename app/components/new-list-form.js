import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NewListFormComponent extends Component {
  @tracked title;
  @tracked list;
  
  @service store;
  
  @action
  async save(e) {
    e.preventDefault(); 
    await this.store.createRecord('card', {
      list: this.list, 
      title: this.title,
    }).save();
    this.list = '';
    this.title = '';
  }

}
