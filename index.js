$(document).ready(function (){
});

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  const req = new HMLHttpRequest();
  req.open('GET','https://api.github.com/search/repositories?q=${searchTerms}`')
  req.send
}
