import Axios from '../../../axiosInterseptor';


export const AddProfile = (data) => {
    return new Promise ((resolve, reject) => {
        const url = `profile/` ;
        Axios.post(url, data)
       .then((response) => resolve(response))
       .catch((error) => reject(error))
    } )
}