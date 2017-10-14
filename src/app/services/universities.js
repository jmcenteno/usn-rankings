/**
 * An object to represent a list of universities
 * @param {object} args Map that contains list attributes { ranking, description, badge, rankings }
 */
export function UniversityList(args = { ranking, description, badge, rankings: [] }) {
  
  // define object properties
  Object.keys(args).forEach((key) => {
    Object.defineProperty(this, key, {
      value: args[key],
      enumerable: true
    });
  });

}

/**
 * An object to represent a single university
 * @param {object} args Map that contains university attributes { rank, institution, location }
 */
export function University(args = { rank, institution, location }) {

  // define object properties
  Object.keys(args).forEach((key) => {
    Object.defineProperty(this, key, {
      value: args[key],
      enumerable: true
    });
  });

}

// for singleton purposes only
let instance = null;


class UnivertiesService {

  constructor() {

    // singleton logic
    if (!instance) {
      instance = this;
    }

    return instance;

  }

  /**
   * Retrieves the content of JSON data files
   * @param {number} id ID of the list of universities
   * @return Promise
   */
  get(id) {

    return new Promise((resolve, reject) => {

      let data = null;

      // ideally, the data would come from an API
      // since require() doesn't work with dynamic strings, we need a switch statement to get the 
      // data files depending on the value of id
      switch (id) {

        case 1:
          data = require('../../data/data-1.json');
          break;

        case 2:
          data = require('../../data/data-2.json');
          break;

        // ...and so forth :(

        default:
          data = null;

      }

      if (data) {

        // create an array of University objects
        const rankings = (data.rankings || []).map(item => new University(item));

        // create a UniversityList object
        const list = new UniversityList(Object.assign({}, data, { rankings }));

        resolve(list);

      } else {
  
        reject({ message: 'data not found' });
  
      }

    });

  }

}

export default new UnivertiesService();
