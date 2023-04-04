function duplicate(Arr){
    if(Object.prototype.toString.call(Arr) !== '[object Array]') return 0;
    let reg = /(\d).*\1/g;
    let r = /\d+/g;
    let s = Arr.join(',').replace(reg,'$1');
    console.log(s);
    return s.match(r).length;
}

console.log(duplicate([0,0,1,1,1,2,2,3,3,4]));