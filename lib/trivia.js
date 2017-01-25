const request = require('request');


function get(cb) {
  request('https://www.opentdb.com/api.php?amount=10&category=23', function(err, res, body){
    if(!err && res.statusCode === 200){
      const data = JSON.parse(body);
        // console.log(`question ${i+1}: ${data.results[i].question}`, `answer: ${data.results[i].correct_answer}`)
      // console.log(data.results[0]);
      cb(data)
    }
  })
}

module.exports = {
  get
}
