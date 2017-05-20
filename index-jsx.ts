import app from './index-zero';
import { updateElement } from './vdom-jsx';
import ComponentBase from './component';

export class Component extends ComponentBase {
  protected initVdom() {
    this.updateElement =  updateElement.bind(this);
  }
}

export default app;
