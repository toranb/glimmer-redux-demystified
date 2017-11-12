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

  constructor(args) {
    store.subscribe(() => {
      this.num = store.getState();
    });
    super(args);

    const descriptor = tracked(this, 'num', {
      enumerable: true,
      configurable: false,
      set() {},
      get() {
        return store.getState();
      }
    });
    Object.defineProperty(this, 'num', descriptor);
  }

  add() {
    store.dispatch({type: 'ADD'});
  }
}
