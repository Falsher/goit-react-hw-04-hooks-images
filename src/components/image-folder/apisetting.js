import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '21857111-8554c096d1798b5dae4546d72';

const apiService = ({ page, imageName }) => {
  return axios.get(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${imageName}&page=${page}&per_page=12&key=${KEY}`,
  );
};

export default apiService;
