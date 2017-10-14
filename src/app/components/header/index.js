import template from './template.njk';

/**
 * Header component
 * @param {object} args 
 */
function Header(args) {

  if (!args) {
    throw new Error('Invalid argument');
  }
  
  return template.render({ 
    content: {
      title: args.title || '',
      description: args.description || ''
    }
  });
  
}

export default Header;
