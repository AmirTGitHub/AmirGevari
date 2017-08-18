const repoTitle = document.querySelectorAll('.works-title');

const repoDesc = document.querySelectorAll('.works-desc')
const repoLink = document.querySelectorAll('.link');
var div = document.querySelectorAll('.works')






var request = new XMLHttpRequest();
request.onreadystatechange = function (){
  if (request.readyState === 4){
        if (request.status === 200){
            var allRepos = JSON.parse(request.responseText);
            console.log(allRepos)
            for(var i = 0 ; i < repoTitle.length; i++){
                repoTitle[i].innerHTML = allRepos[i ].name;
                repoDesc[i].innerHTML = allRepos[i ].description || 'Thie repository does not have any description';
                repoTitle[i].herf = allRepos[i].html_url;

            }
           

        }
    }
}

var urls = 'https://api.github.com/users/AmirTGitHub/repos';

request.open('GET',urls);
request.setRequestHeader('content-type' , 'application/json');
request.send();