function first(param){
  console.log(param)
  param()
}
//1급객체

function second(){
  console.log(1)
}

first(second)

//순서대로 꼭 처리가 되어야할 때 
function func1(){
  let num = 1;
  return function func2(){
    return num++
  }
}
function func(){
  let num = 1;
  return function func2(){
    return ++num
  }
}

let account = func1()
console.log(account())
console.log(account)





