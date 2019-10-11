import {url, country_code, apiKey} from '../config/rest_config';
import {ToastAndroid} from 'react-native'

export async function getArticles(category='general') {

    try{
        let article = await fetch(`${url}?country=${country_code}&category=${category}`,{
            headers: {
                'X-API-KEY': apiKey
            }
        })

        let result = await article.json()
        console.log(result.articles)

        return result.articles;
    }catch{
        throw error;
        
    }

}