import axios from 'axios';
export default {
   axiospost(items){
     axios.post('http://192.168.0.5:3000/api/',{ items:items})
    
                        
  .then(function(response){
    console.log(response);
                        })
  .catch(function(error){
    console.log(error);
                      });
   }
}