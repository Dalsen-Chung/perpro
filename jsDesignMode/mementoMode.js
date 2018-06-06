//备忘录模式

// !!!!只针对短时间内数据不变动的情景,此处以分页下的异步请求为例子,通过备忘录模式减少异步请求
/*
**  page : 页码 ，fn : 回调函数
*/
let PageMemento = function () {
  let cache = {};   //缓存容器
  return function (page, fn) {
    if (cache[page]) {
      doSomething(page, cache[page]);    //根据缓存的数据刷新Dom列表
      fn && fn();   //执行回调
    }else{
      $.ajax({
        url : '',
        data : {
          page : page
        },
        success : function (data) {
          cache[page] = data.res;
          doSomething(page, data.res);
          fn && fn();
        },
        error : function () {

        }
      })
    }
  }
}();

let next = document.querySelector('#btn');
next.addEventListener('click',function(){
  let page = $('#page').getPage();
  PageMemento(page,function(){
    console.log('go to next page');
  });
},false);
