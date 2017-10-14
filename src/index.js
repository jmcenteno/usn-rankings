import './main.scss';
import App from './app';
import Universities from './app/services/universities';

export default function init() {

  const rootElement = document.getElementById('content');

  rootElement.innerHTML = 'Please wait...';

  Universities.get(1)
    .then((data) => {

      const app = new App(
        rootElement,
        data
      );

      app.render();

    })
    .catch((error) => {

      rootElement.innerHTML = 'Your request cannot be processed at this time';

      throw error;

    });

}

window.addEventListener('load', init);
