import data from '../data.json';

export default () => Array.from({ length: data.categories.length }).map((u,i) => data.categories[i].name);