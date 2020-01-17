import axios from 'axios';

const KEY = 'AIzaSyCxrpUwum1aOddDmVpIKZq00nwSt1iflGo';


export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        key: `${KEY}`
    }
});