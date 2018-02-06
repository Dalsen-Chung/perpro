function InitBar(TargetClass,father_C,bar_C){
  this.TargetClass = TargetClass;
  this.fatherClass = father_C;
  this.bar_C = bar_C;
  this.barLen = 0;
  this.bindEvent = function(){
    document.addEventListener('mousewheel',this.mousewheel);
  };
  this.mousewheel = function(e){
    let event = e || window.event;
    console.log(e);
  }
  this.initBarLen = function(){
    let father_len = document.getElementsByClassName(this.TargetClass)[0].clientHeight;
    let fa_scroll_len = document.getElementsByClassName(this.fatherClass)[0].clientHeight;
    let scrollBar = document.getElementsByClassName(this.bar_C)[0];
    console.log(scrollBar.clientHeight);
    scrollBar.style.height = (fa_scroll_len - father_len + fa_scroll_len) + 'px';
  }
}

let bar = new InitBar('menu','aside-scroll','scrollbar');
bar.initBarLen();
bar.bindEvent();
