// var showdown  = require('showdown'),
// converter = new showdown.Converter(),
// text      = '#hello, markdown!',
// html      = converter.makeHtml(text);


const repoTitle = document.querySelectorAll('.works-title');
const repoDesc = document.querySelectorAll('.works-desc')
const repoLink = document.querySelectorAll('.link');
var div = document.querySelectorAll('.works')
// console.log(div)

var repoNameRetrive = []



var request = new XMLHttpRequest();
request.onreadystatechange = function (){
  if (request.readyState === 4){
        if (request.status === 200){
            
                var allRepos = JSON.parse(request.responseText);
                // console.log(allRepos)
                for(var i = 0 ; i < repoTitle.length; i++){
                    repoDesc[i].innerHTML = allRepos[i ].description || 'Thie repository does not have any description';
                    // repoTitle[i].herf = allRepos[i].html_url;
                    var anchors = document.createElement('a')
                    anchors.target = '_blank'
                    anchors.setAttribute('href' , allRepos[i].html_url)
                    anchors.innerHTML = allRepos[i].name;
                    // repoTitle[i].innerHTML = anchors.innerHTML;
                    repoTitle[i].appendChild(anchors);
                    repoNameRetrive.push(allRepos[i].name)
                    
                    
                    
                }
           
            
        }
    }
}
var urls = 'https://api.github.com/users/AmirTGitHub/repos';

request.open('GET',urls);
request.setRequestHeader('content-type' , 'application/json');
request.send();



var readmeClick = document.querySelector('#work1')
var repoName = document.getElementById('repoTitle')
var repoReadme = document.getElementById('repoReadme')

console.log(repoName)
readmeClick.addEventListener('click' , getReadMe)


function getReadMe(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function (){
      if (request.readyState === 4){
            if (request.status === 200){
                // const readme = JSON.parse(request.responseText)
                console.log(request)
                repoReadme.innerText = request.responseText;
                

               
    
            }
        }
    }

    var urls = 'https://raw.githubusercontent.com/AmirTGitHub/' + repoNameRetrive[2] +'/master/README.md';
    
    request.open('GET',urls);
    request.setRequestHeader('Accept' , 'application/vnd.github.VERSION.raw');
    request.send();
}