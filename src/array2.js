

let rect = Array(10)
for (let i=0; i<rect.length; i++) {
	rect[i] = Array(10).fill(0)
}

let count= 0
let forCount = 0

for(;;) {
	forCount++;
	let i = parseInt(Math.random()*10)
	let j = parseInt(Math.random()*10)
	
	
	if(rect[i][j] == 0 ) {
		rect[i][j] = 1
		count++
	}
	if (count == 100)
		break;	
}

console.table(rect)
console.log(`forCount = [${forCount}]`)