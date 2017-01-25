const request = require('request');
const url = 'http://randomword.setgetgo.com/get.php';

// request('http://randomword.setgetgo.com/get.php', function(error, response, body){
//   if(!error && response.statusCode === 200){
//     const data = JSON.parse(body);
//     console.log(data.results[0].email);
//   }
// })


function get(cb) {
  request(url, (err, res, body) => {
    if(!err && res.statusCode === 200) {
      // const data = JSON.parse(body);
      // console.log(body);
      cb(body);
    }
  });
};




module.exports = {
  get
}
