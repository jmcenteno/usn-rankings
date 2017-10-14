import template from './template.njk';

/**
 * Badge component
 * @param {object} args { src, alt }
 */
function Badge(args = { src: '', alt: '' }) {

  if (!args) {
    throw new Error('Invalid argument');
  }

  return template.render({ 
    img: {
      src: args.src || '',
      alt: args.alt || ''
    }
  });

}

export default Badge;
