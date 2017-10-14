import Layout from './components/layout';
import Universities from './services/universities';

let instance = null;

class App {

  constructor(element, data) {

    if (!instance) {
      instance = this;
    }

    this.rootElement = element;
    this.data = data;
    this.toggle = false;

    this.switchData = this.switchData.bind(this);

    return instance;

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

    Universities.get(!this.toggle ? 1 : 2)
      .then((data) => {
        this.data = data;
        this.render();
      })
      .catch((error) => {
        throw new Error(error.message);
      });

  }

}

export default App;
