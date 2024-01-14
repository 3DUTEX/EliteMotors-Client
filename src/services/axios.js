import axios from 'axios';

const baseURL = 'https://brave-handbag-dove.cyclic.app';

export default axios.create({
  baseURL,
});
