import Component, { tracked } from '@glimmer/component';
import { createStore } from 'redux';

const reducers = (state, action) => {
  if(action.type === 'ADD') {
    return state + 1;
  }
  return state || 0;
};
const store = createStore(reducers);

export default class Demo extends Component {
  @tracked _num: number;
  @tracked('_num')
  get num() {
    return store.getState();
  }

  constructor(args) {
    store.subscribe(() => {
      this._num = store.getState();
    });
    super(args);
  }

  add() {
    store.dispatch({type: 'ADD'});
  }
}
