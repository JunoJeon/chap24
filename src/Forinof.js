

let arr=Array(10)
for(let i=0;i<arr.length;i++){
	arr[i]=parseInt(Math.random()*100);
}
//console.log(arr)
for(let i in arr){// 배열의 인덱스
	process.stdout.write(arr[i]+",");
}
console.log()
for(let v of arr){// 배열의 값
	process.stdout.write(v+",");	
}