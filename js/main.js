
function iphoneNumber(nums){
    let obj ={
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz'
    }
    nums += '';
    let r = /\d/g;
    let rw = /\w/g;
    let rb = /^\b/;
    let rm = /(?=\B)/g;
    let ra = /\w+/g;
    let temp = [];
    if(nums.length != 2 || !obj[nums[0]] || !obj[nums[1]]) return temp;
    let n1 = nums[0];
    let n2 = nums[1];
    let ss = obj[n1].match(rw);
    let str = '';
    let ts = '';
    let nl = ss.length;
    for(let i = 0; i< nl; i++){
        ts = obj[n2];
        if(i > 0){
            str += ',';
        }
        str += ts.replace(rm,','+ ss[i]).replace(rb,ss[i]);
    }
    return str.match(ra);

}

console.log(iphoneNumber('23'));