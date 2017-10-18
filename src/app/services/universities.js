import data from '../../data';

/**
 * An object to represent a list of universities
 * @param {object} args Map that contains list attributes { ranking, description, badge, rankings }
 */
export function UniversityList(args = { ranking: '', description: '', badge: '', rankings: [] }) {

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
export function University(args = { rank: 0, institution: '', location: '' }) {

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

      if (data[id]) {

        // create an array of University objects
        const rankings = (data[id].rankings || []).map(item => new University(item));

        // ...and sort it by rank
        rankings.sort((a, b) => a.rank - b.rank);

        // create a UniversityList object
        // merge rankings with data object
        const list = new UniversityList(Object.assign({}, data[id], { rankings }));

        resolve(list);

      } else {

        reject(new Error('Could not obtain data'));

      }

    });

  }

}

export default new UnivertiesService();
