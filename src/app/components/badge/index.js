import template from './template.njk';

/**
 * Badge component
 * @param {object} args 
 */
function Badge(args) {

  if (!args) {
    throw new Error('Invalid argument');
  }

  return template.render({ 
    badge: {
      src: args.src || '',
      alt: args.alt || ''
    }
  });

}

export default Badge;
