let nums = [1,0,-1,0,-2,2];
let target = 0;
let nums1 = [2,2,2,2,2];
let tar1 = 8;

function fourN(Arr,t){
    let newA = Arr.sort((a,b)=>a-b);
    let l = Arr.length;
    let sums = chekf(newA,t);
    let max = newA[l-1];
    let min = newA[0];
    sums = redu(sums,max,min);
    console.log(sums);

}
function redu(Arr,max,min){
    let reg = /(?<=:)-?\d+/g;
    let l = Arr.length;
    let obj = {};
    let temps = [];
    for(let i = 0; i < l; i++){
        let o = chuli(Arr[i]);
        let k = o.key;
        if(o.sum >= min && o.sum <= max){
            if(!obj[k]){
                obj[k] = {};
                obj[k].t = o.target;
                obj[k].sum = o.sum;
                obj[k].id = find(o,o.sum);
                obj[k].flg = false;
            }else{
                if(!obj[k].flg){
                    let id = find(o,obj[k].sum);
                    let rflg = constrast(obj[k].id,id);
                    if(rflg){
                        obj[k].flg = true;
                    }

                }else{
                    continue;
                }

            }
        }else{
            continue;
        }
    }

    for(let key in obj){
        if(obj[key].flg === true){
            temps.push(obj[key].t);
        }
    }
    return temps;
}

function find(obj,target){
    let A = obj.val;
    let id = obj.i;
    let l  =  A.length;
    let r = '';
    for(let i = l-1; i >=0; i--){
        if(A[i] == target){
            r += (id[i] + ',');
        }
    }
    return r;
}
function constrast(a,b){
    let A = b.split(',');
    let l = A.length;
    let flg = false;
    if(b.length <= a.length){
        for(let i = 0; i < l; i++){
            let r = new RegExp(A[i]);
            if(!r.test(a)){
                flg = true;
            }
        }
    }else{
        flg = true;
    }
    return flg;
}
function chuli(s){
    let obj = {};
    let reg = /-?\d+/g;
    let num = s.match(reg);
    let l = num.length;
    obj.i = [];
    obj.val = [];
    for(let i = 0; i < l-1; i++){
        if(i < 3){
            obj.i.push(+num[i]);
        }else if(i < 6){
            obj.val.push(+num[i]);
        }

    }
    obj.target = [].concat(obj.val,+num[6]).sort((a,b)=>a-b);
    obj.key = obj.target.join('');
    obj.sum = +num[6];
    return obj;
}
function chekf(Arr,res){
    let c = 0;
    let len = Object.prototype.toString.call(Arr) === "[object Array]" ? Arr.length : 0;
    let temp = [];
    if(len == 0) return temp;
    for(let i=0;i < len; i++){
        for(let j = i+1;j<len;j++){
            for(let g = j+1;g < len; g++){
                let n = res - (Arr[i] + Arr[j] + Arr[g]);
                let s = i + " " + j + " " + g + "|" + Arr[i] + " " + Arr[j] + " " + Arr[g] + ":" + n;
                temp.push(s);
            }
        }
    }
    return temp;
}

fourN(nums,target);
fourN(nums1,tar1)