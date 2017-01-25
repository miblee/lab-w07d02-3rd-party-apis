const request = require('request');
const url = 'http://api.fixer.io/latest?base=USD';

function get(dothiswhenever) {
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
  get
}


// request(url, (err, res, body)=>{
//   if(!err)
// })
