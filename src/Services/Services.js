import { API_KEY, endpoint,country } from "./Config";

export const Services=async(category='general')=>{
let articles= await fetch(`${endpoint}?country=${country}&category=${category}&apikey=${API_KEY}`)

let result=await articles.json();
articles = null;
return result.articles
}