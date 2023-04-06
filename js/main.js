function addTwo(a,b){
  let tn = 0;

  while(a || b){
      let n1 = a ? a.val : 0;
      let n2 = b ? b.val : 0;
      let num = n1 + n2 + tn;
      tn = num >= 10 ? 1 : 0;
      num = num >= 10 ? num % 10 : num;
      console.log(num);
      a = a ? a.next : null;
      b = b ? b.next : null;

  }
}


let a = {val:9,next:null};
let b = {val:6,next:null};
let c = {val:2,next:null};
a.next = b;
b.next = c;
let e = {val:5,next:null};
let f = {val:6,next:null};
let g = {val:4,next:null};
let h = {val:6,next:null};
e.next = f;
f.next = g;
g.next = h;

addTwo(a,e);