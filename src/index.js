import 'main.scss';
import App from './app';

export function init() {

  const app = new App(
    document.getElementById('content')
  );

  app.render();

}

window.addEventListener('load', init);
