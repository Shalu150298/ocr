import Axios from 'axios';


export const abstract = (data) => {
    return new  Promise ((resolve, reject) => {
        const url = 'http://product.cloudstrats.ai:3030/api/akshar-ai/ab-summarizer/';
        const headers = {
           
            "CLIENT-KEY":"3G6XuF4cIEHh7o5zhUYGNmeK8FRSoPbU5sShkFCL",
           "CLIENT-SECRET":"2m8aGC56EOHdRaZNbb6dy2lIJZxhMvP1rXzhnzDa4dEpKTb89f"
         }; 

         Axios.post(url, data, {headers:headers})
         .then((response) => resolve(response))
         .catch((error) => reject(error));
    }) 
}