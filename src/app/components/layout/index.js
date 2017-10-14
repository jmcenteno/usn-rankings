// page components
import Header from '../header';
import Badge from '../badge';
import Rankings from '../rankings';
import Advertisement from '../advertisement';

// page template
import template from './template.njk';

/**
 * Main application layout
 * @param {object} data An object that represents a group of universities
 */
function Layout(data = {}) {

  return template.render({
    header: Header({
      title: data.ranking,
      description: data.description
    }),
    badge: Badge({
      src: data.badge,
      alt: data.ranking
    }),
    rankings: Rankings(data.rankings),
    advertisement: Advertisement({
      src: 'http://placehold.it/600x500?text=dummy+ad',
      alt: ''
    })
  });

}

export default Layout;
