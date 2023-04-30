import axios from 'axios';

export default axios.create({
    baseURL: 'https://vsnserver.herokuapp.com/'
});
