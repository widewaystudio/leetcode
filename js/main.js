 function twoN(Arr,t){
    let temp = [];
    if(Object.prototype.toString.call(Arr) !== '[object Array]' || Arr.length < 2 ) return temp;
    let l = Arr.length;
    let obj = {};
    for(let i = 0; i < l; i++){
        let a = t - Arr[i];
        if(typeof obj[a] === 'number'){
            return temp.concat(obj[a],i);
        }else{
            obj[Arr[i]] = i;
        }

    }

    return temp;

 }

 console.log(twoN([2,7,11,15],9))