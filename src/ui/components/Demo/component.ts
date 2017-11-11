import Component, { tracked } from '@glimmer/component';

export default class Demo extends Component {
  @tracked num: number;

  add() {
    const value = this.num || 0;
    this.num = value + 1;
  }
}
