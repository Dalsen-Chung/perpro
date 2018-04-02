//模板方法模式
let BasicAlert = function (data) {

  this.alertTitle = data.title || '提示';    //提示框标题

  this.alertMessage = data.content || '无提示内容';   //提示框内容(文本为主)

  this.alertDiv = document.createElement('div');        //弹框DIV
  this.alertDiv.className = 'dgt-alert';

  this.alertTitleDiv = document.createElement('div');   //弹框标题DIV
  this.alertTitleDiv.className = 'dgt-alert-title';        //设置类名
  this.alertTitleTextDiv = document.createElement('span');  //创建弹框标题内容DIV
  this.alertTitleTextDiv.innerHTML = this.alertTitle;       //将标题写入span中
  this.alertTitleDiv.appendChild(this.alertTitleTextDiv);   //将标题追加进弹框标题DIV

  this.closeTag = document.createElement('span');      //弹框关闭标签
  this.closeTag.innerHTML = 'x';                       //弹框关闭标签内容
  this.closeTag.className = 'dgt-alert-closeTag';      //设置统一的关闭样式
  this.alertTitleDiv.appendChild(this.closeTag);       //关闭标签追加至弹框标题DIV

  this.alertContentDiv = document.createElement('div');   //弹框主体内容DIV
  this.alertContentDiv.className = 'dgt-alert-content';    //类名设置
  this.alertContentSpan = document.createElement('span');  //弹框主体内容span
  this.alertContentSpan.innerHTML = this.alertMessage;     //将提示信息追加至弹框主体内容中
  this.alertContentDiv.appendChild(this.alertContentSpan);

  this.alertBtnArea = document.createElement('div');      //弹框按钮操作区
  this.alertBtnArea.className = 'dgt-alert-btnBlock';     //类名设置
  this.closeBtn = document.createElement('button');       //创建弹框关闭按钮
  this.closeBtn.innerHTML = '关闭';
  this.closeBtn.className = 'dgt-alert-closeBtn';
  this.alertBtnArea.appendChild(this.closeBtn);           //将弹框关闭按钮追加至弹框按钮操作区中

  this.alertDiv.appendChild(this.alertTitleDiv);
  this.alertDiv.appendChild(this.alertContentDiv);
  this.alertDiv.appendChild(this.alertBtnArea);

  this.closeCallBack = data.close || function () {};      //接收关闭弹框回调函数
}
BasicAlert.prototype = {
  init : function() {
      document.body.appendChild(this.alertDiv);
      this.bindEvent();
      this.show();
  },
  bindEvent : function () {
    let me = this;
    this.closeTag.addEventListener('click',function(){
      me.closeCallBack();
      me.hide();
    });
    this.closeBtn.addEventListener('click',function(){
      me.closeCallBack();
      me.hide();
    });
  },
  hide : function () {
    this.alertDiv.style.display = 'none';
  },
  show : function() {
    this.alertDiv.style.display = 'block';
  }
}

let confirmAlert = function (data) {
  BasicAlert.call(this,data);
  this.confirmBtn = document.createElement('button');
  this.confirmBtn.innerHTML = '确定';
  this.confirmBtn.className = 'dgt-alert-confirmBtn';
  this.alertBtnArea.appendChild(this.confirmBtn);
  this.confirmCallBack = data.confirm || function () {};
}
confirmAlert.prototype = Object.create(BasicAlert.prototype);
confirmAlert.prototype.constructor = confirmAlert;
confirmAlert.prototype.init = function () {
  BasicAlert.prototype.init.call(this);    //继承原有方法
};
confirmAlert.prototype.bindEvent = function () {
  let me = this;
  BasicAlert.prototype.bindEvent.call(this);
  this.confirmBtn.addEventListener('click',function(){
    me.confirmCallBack();
    me.hide();
  });
}


export default{
  BasicAlert,
  confirmAlert
}
