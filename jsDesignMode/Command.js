//命令模式  以canvas绘制为案例
let CanvasCommand = (function(){
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let Action = {
    fillStyle : function (color) {   //填充色彩
      ctx.fillStyle = color;
    },
    fillRect : function (x, y, width, height) {      //填充矩形
      ctx.fillRect(x, y, width, height);
    },
    strokeStyle : function (color) {             //描边色彩
      ctx.strokeStyle = color;
    },
    strokeRect : function (x, y, width, height) {    //描边矩形
      ctx.strokeRect(x, y, width, height);
    },
    fillText : function (text, x, y) {     //填充字体
      ctx.fillText(text, x, y);
    },
    beginPath : function () {                //开启路径
      ctx.beginPath();
    },
    moveTo : function (x, y) {             //移动画笔触点
      ctx.moveTo(x, y);
    },
    lineTo : function (x, y){                  //画笔连线
      ctx.lineTo(x, y);
    },
    arc : function (x, y, r, begin, end, dir){    //绘制弧线
      ctx.arc(x, y, r, begin, end, dir);
    },
    fill : function () {                    //填充
      ctx.fill();
    },
    stroke : function () {                 //描边
      ctx.stroke();
    }
  };

  return {
    excute : function (msg) {
      if (!msg){
        return;
      }
      if (msg.length){
        let len = msg.length;
        let i = 0;
        for (; i < len  ; i++){
          // let command = msg[i].command;
          // let args = Object.prototype.toString.call(msg[i].args) === '[object Array]' ? msg[i].args : [msg[i].args];
          // Action[command].apply(Action,args);
          this.excute(msg[i]);
        }
      }else{
        let command = msg.command;
        let arg = Object.prototype.toString.call(msg.args) === '[object Array]' ? msg.args : [msg.args];
        console.log(arg.length);
        Action[command].apply(Action, arg);
      }
    }
  }
})();

CanvasCommand.excute([                               //执行命令
  {command : 'fillStyle' , args : 'red'},
  {command : 'fillRect' , args : [20, 20, 100, 100]},
  {command : 'fillRect' , args : [120, 120, 100, 100]}
]);
