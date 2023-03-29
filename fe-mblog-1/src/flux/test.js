
let global = -99;

function func1(){
  let num = 0
  return num
}

console.log(func1())

//파라미터로 넘어온 값과 나가는 값이 다르다 - 변했다.
function func2(num){
  num = num + 1
  return num
}

//numb의 값이 바뀌지 않는다. - 불변성 - 리액트 컨벤션
function func3(){
  let num = 0
  global = num +1
  return global
}

console.log(global)
console.log(global)
console.log(global)
console.log(func2(0))
console.log(func3())
console.log(global)