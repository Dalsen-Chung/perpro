let canvas = document.querySelector('#canvas');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
console.log(width+'**'+height);
let ctx = canvas.getContext('2d');
console.log(ctx);
ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);
