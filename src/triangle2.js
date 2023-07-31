

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
trinagle((i, j) => i>=j); //array funxtion(람다식)
console.log("2.")
trinagle((i, j) => i<=j);
console.log("3.")
trinagle((i, j) => i+j<=4);
console.log("4.")
trinagle((i, j) => i+j>=4);
console.log("Rec.")
trinagle((i, j) => i==0 || j==0 || i==4 || j==4);
console.log("Cro.")
trinagle((i, j) => i==j || i+j==4);
