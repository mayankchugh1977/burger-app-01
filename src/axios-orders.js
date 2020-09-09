import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-myburger-a5f9d.firebaseio.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;