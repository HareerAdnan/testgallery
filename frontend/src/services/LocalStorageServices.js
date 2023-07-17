const storeToken = (value) => {
    localStorage.setItem('token', value);
  };
  
  const getToken = () => {
    let token = localStorage.getItem('token');
    return token;
  };
  
  const removeToken = () => {
    localStorage.removeItem('token');
  };
  
  export { storeToken, getToken, removeToken };
  

  // do not use this file if you need token use AuthContext File