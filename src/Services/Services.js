import { API_KEY, endpoint } from "./Config";

export const Services=async(category='general', country='us')=>{
let articles= await fetch(`${endpoint}?country=${country}&category=${category}`,{
    headers:{
        'X-API-KEY': API_KEY
    }
})

let result=await articles.json();
return result.articles
}