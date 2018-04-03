//chain of responsibility  职责链模式
let getdata = function () {
  $.ajax({
    type : 'GET',
    url : '',
    success : function(data) {
      dealData(data);                   //职责一
    }
  })
};

let dealData = function (data) {
  let arr = data.split(',');
  saveData(arr);                      //职责二
};

let saveData = function (arr) {
  $.ajax({
    type : 'post',
    url : '',
    success : function (data) {

    }
  })
};

getdata();   //调用总职责
