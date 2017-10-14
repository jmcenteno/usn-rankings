import Layout from './components/layout';
import data from '../data/data-1.json';

class App {

  constructor(element) {

    this.rootElement = element;
    this.data = data;
    this.toggle = false;

    this.switchData = this.switchData.bind(this);

  }

  render() {

    this.rootElement.innerHTML = Layout(this.data || [], this.switchData);

    const toggleButton = this.rootElement.querySelector('.toggle-btn');

    if (toggleButton) {
      toggleButton.addEventListener('click', this.switchData);
    }

  }

  switchData() {

    window.scroll(0, 0);

    this.toggle = !this.toggle;
    this.data = require(`../data/data-${ !this.toggle ? 1 : 2 }.json`);

    this.render();

  }

}

export default App;
