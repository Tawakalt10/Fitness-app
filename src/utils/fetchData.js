// export const exerciseOP = async (url) => {
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
//       'x-rapidapi-host': 'exercises-by-api-ninjas.p.rapidapi.com'
//     }
//   });

//   const data = await response.json();
//   return data;
// };


export const exerciseOptions = {
  method: 'GET',
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
    }
};

export const fetchData = async (url, options) =>{
  const response = await fetch(url, options);
  const data = await response.json() ;
  return data;
}