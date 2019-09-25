import axios from 'axios';

export const axiosWithAuth = ()=>{
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL:'https://droomapi.herokuapp.com/api/sample',
        headers:{
            'Content Type': 'application/json',
            'Authorization': token,
        },
    });  
}
export default axiosWithAuth