//享元模式  --- 分页中，若每页显示10条数据，则每次操作都是针对这10个dom操作，旨在减少dom操作，提高渲染速度。
let dom = null;
