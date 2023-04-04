function delNum(Arr,target){
    if(Object.prototype.toString.call(Arr) !== '[object Array]') return 0;
    let r = new RegExp(target,'g');
    let temps = Arr.join(',').replace(r,'');
    r = /\d+/g;
    return temps.match(r).length;
}
let num1 = [0,1,2,2,3,0,4,2];
let val = 2;

console.log(delNum(num1,val));