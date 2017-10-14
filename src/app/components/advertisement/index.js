import template from './template.njk';
import './styles.scss';

/**
 * Advertisement component
 * @param {object} args { src, alt }
 */
function Advertisement(args = { src: '', alt: '' }) {

  if (!args) {
    throw new Error('Invalid argument');
  }

  return template.render({
    img: {
      src: args.src || 'http://placehold.it/600x500?text=dummy+ad',
      alt: args.alt || ''
    }
  });

}

export default Advertisement;
