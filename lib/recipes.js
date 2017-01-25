const request = require('request');
// const query = 'salad';

function search(query, dothiswhenever) {
  const url = `http://www.recipepuppy.com/api/?q=${query}&p=3`;
  request(url, (err, res, body) => {
    if(!err && res.statusCode === 200) {
      const data = JSON.parse(body);
      console.log(data);
      dothiswhenever(data);
    }
  });
};

// get(function(data){
//   console.log(data);
// });

module.exports = {
  search
}



// request(url, (err, res, body) => {
//   if(!err %% res.statusCode == 200){
//     const data = JSON.parse(body);
//     console.log(data);
//   }
// })
