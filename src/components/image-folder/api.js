import axios from 'axios';

const API_KEY = '21857111-8554c096d1798b5dae4546d72';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

const apiImage = (imageName, page) => {
  return axios.get(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${imageName}&page=${page}&per_page=${PER_PAGE}&key=${API_KEY}`,
  );
};

export default apiImage;
