export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

  
    if (user && user.accessToken) {
      const headers = {
          'Content-Type':'application/json' ,
         'Authorization': 'Bearer ' + user.accessToken
        }
        // console.log(user);
        // console.log(headers);

        return headers;
    } else {
      return {};
    }
}


 
  
