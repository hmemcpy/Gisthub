// Please make this better, send a PR! :)

(function(){
  "use strict";

  var githubLogo = document.querySelector('.octicon-logo-github');
  var gistLogo = document.querySelector('.octicon-logo-gist');
  var link = githubLogo.parentElement;

  githubLogo.addEventListener('click', function(){
    link.href = 'http://github.com';
  });

  gistLogo.addEventListener('click', function(){
    link.href = 'http://gist.github.com';
  });
})();
