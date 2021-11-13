import axios from "axios";

const KEY = 'AIzaSyC8gxEuly48OM6M_IjURznGnIijY-2Vh_4';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});