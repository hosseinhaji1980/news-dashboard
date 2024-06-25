import axios from 'axios';

const createUser = async (userData) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:5002/api/users',
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.e30.PATsNE1-F260RzIRgS1DNKZ8VI9IuNVharEHSdCBW5Q'
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
};
export default createUser;

