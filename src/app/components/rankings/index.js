import template from './template.njk';
import './styles.scss';

/**
 * Rankings component
 * @param {object} data Collection of universities [{ rank, institution, location }] 
 */
function Rankings(data = []) {

  if (data.constructor !== Array) {
    throw new Error('Invalid argument');
  }
  
  return template.render({ 
    data
  });
  
}

export default Rankings;
