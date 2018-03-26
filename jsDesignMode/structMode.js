//结构型设计模式


//1.外观模式

// 1) 兼容方式：   Dom0级 : document.onclick    Dom2级 : documen.addEventListener()
let bindEvent = function (dom, type, callback) {
  if (dom.addEventListener){    //Dom2级
    dom.addEventListener(type, callback, false);
  }else if (dom.attachEvent) {  //IE9以下
    dom.attachEvent('on'+type,callback);
  }else{     //Dom0级
    dom['on'+type] = callback;
  }
}


// 服务端数据适配

let ajaxAdapter = function (data) {      //后端数据改变后只需要修改数据适配器
  return [data['key1'],data['key2']];
}
$.ajax({
  url : 'a.php',
  success : function (data, status){
    if (data) {
      dosomething(ajaxAdapter(data));
    }
  }
});
