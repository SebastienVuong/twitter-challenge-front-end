import {API_HOST} from './config';
import superagent from 'superagent';

class Api {
    
    getTweets = (fromWho, howMany) => {
        return superagent
        .get(`${API_HOST}/tweets?account=${fromWho}&count=${howMany}`)
        .then(res => res.body)
    }
    
}

export default new Api();