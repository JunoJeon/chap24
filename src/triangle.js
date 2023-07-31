

function trinagle(test) {
	for (let i=0; i<5; i++){
		for (let j=0; j<5; j++) {
			if (test(i, j))
				process.stdout.write('*')
			else 
				process.stdout.write(' ')
		}
		
		console.log()
	}
}


console.log("1.")
trinagle(function(i, j) { //익명 함수
	return i>=j
});
console.log("2.")
trinagle(function(i, j) { //익명 함수
	return i<=j
});
console.log("3.")
trinagle(function(i, j) { //익명 함수
	return i+j<=4
});
console.log("4.")
trinagle(function(i, j) { //익명 함수
	return i+j>=4
});
console.log("Rec.")
trinagle(function(i, j) { //익명 함수
	return i==0 || j==0 || i==4 || j==4
});
console.log("Cro.")
trinagle(function(i, j) { //익명 함수
	return i==j || i+j==4
});

