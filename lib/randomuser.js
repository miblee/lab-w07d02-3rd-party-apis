const request = require('request');
const url = 'https://randomuser.me/api/'


function get(dothiswhenever) {
  request(url, (err, res, body) => {
    if(!err && res.statusCode === 200) {
      const data = JSON.parse(body);
      // console.log(data);
      dothiswhenever(data);
    }
  });
};

module.exports = {
  get
}
