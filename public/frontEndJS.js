console.log('hello');
var wordTemplate = $('#wordtemplate').html();
var wordCompiler = Handlebars.compile(wordTemplate);
console.log('wordTemplate = ', wordTemplate);
console.log('wordCompiler', wordCompiler);

var userTemplate = $('#usertemplate').html();
var userCompiler = Handlebars.compile(userTemplate);

$('#userBtn').on('click', function(evt) {
  console.log('clicked')
  $.ajax({
    url: '/randomuser',
    method: 'GET',
    success: function(data){
      console.log('hey, res= ', data)
      var htmlOutput = userCompiler({ user: data });
      $('#randomuser').html(htmlOutput);
    },
    error: function (err){
      console.log('something broke', err)
    }
  })
})

$('#wordBtn').on('click', function(evt){
  console.log('1. word click');
  $.get('/randomword', function(data){
    console.log('4. i got the response', data);
    console.log(data);
    console.log(wordCompiler({ word: data }));
    var htmlOutput = wordCompiler({ word: data });
    // $('#randomword').html('').append(htmlOutput);
    $('#randomword').html(htmlOutput);
    // $('#randomuser').append(htmlOutput);
  })
})



