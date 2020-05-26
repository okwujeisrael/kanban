import Route from '@ember/routing/route';

export default class CardsDetailRoute extends Route {
  model(params) {
    return this.store.findRecord('card', params.cardId);
  }
}
