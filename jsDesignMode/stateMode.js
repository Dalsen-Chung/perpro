//状态模式     ---以超级玛丽的运动状态为案例 ，jump、move、shoot、squat    减少条件判断分支，若有新增的分支条件状态则编写在stateObj对象中
let MarryState = function () {
  let _state = {};  //内部状态私有变量
  let stateObj = {
    jump : function () {
      console.log('I am jumping');
    },
    move : function () {
      console.log('I am moving');
    },
    shoot : function () {
      console.log('I am shooting');
    },
    squat : function () {
      console.log('squat');
    }
  };

  let Action = {
    changeState : function (actionArr) {
      let arr = actionArr;
      let len = arr.length;
      let i = 0;
      if (len){
        _state = {};
        for (;i < len ; i++){
            _state[arr[i]] = true;
        }
      }
      return this;
    },
    goes : function () {
      console.log('触发一次动作');
      for ( let key in _state){
        if( _state.hasOwnProperty(key)){
          stateObj[key] && stateObj[key]();
        }
      }
      return this;
    }
  };

  return {
    change : Action.changeState,
    execute :Action.goes
  }
}

let ms = new MarryState();
ms.change(['move','jump']).execute().change(['shoot','squat']).execute();
