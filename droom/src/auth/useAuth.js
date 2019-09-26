// React Component
import axios from 'axios';
// Helper function, useAuth, gets token from local storage and sends authentication header using token.
export default function() {
 const token = localStorage.getItem('token');
 return axios.create({
   headers: {
     'Content-Type': 'application/json',
     Authorization: `${token}`
   }
 })
};
