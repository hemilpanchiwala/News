import {url, country_code, category, apiKey} from '../config/rest_config';

export async function getArticles() {

    try{
        let article = await fetch(`${url}?country=${country_code}&
        category=${category}&apiKey=${apiKey}`)

        let result = await article.json()

        return result.articles;
    }catch{
        throw error;
        
    }

}