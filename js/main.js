
function substring(str,needle){
    let reg = new RegExp(needle);
    let r = reg.exec(str);
    return r ? r.index : -1 ;
}
console.log(substring('hello','ll'))