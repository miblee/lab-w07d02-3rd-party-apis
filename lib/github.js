
const request = require('request');

function get(user, dothiswhenever) {
  const url = {
    url:`https://api.github.com/users/${user}`,
    headers: {
      'User-Agent': 'request'
    }
  }
  request(url, (err, res, body) => {
    if(!err && res.statusCode === 200) {
      const data = JSON.parse(body);
      // console.log(data);
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
