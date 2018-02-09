let header = document.querySelector('header');
let section = document.querySelector('section');

function requestData() {
  let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    let data = JSON.stringify(request.response);
    //JSON.stringify() 接收JSON对象 转化为字符串
    //JSON.parse() 接收字符串 转化为JSON对象
    console.log(data);
  }
}
requestData();
