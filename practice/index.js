const count = document.querySelector('#counter>p')
let c = 0
const name = document.querySelector('#counter>p')
let remainer = (c%2)
console.log(count.textContent)

function incr() {
 	console.log("increement called")
 	if (c >= 25) {
 		alert("number should not be greater than 25")
     }
     else
     {
        c++
				count.textContent = c
   }

function remainer()
{
	if(remainer==0){
		console.log(`${c} is even`)
	}
	else{
		console.log(`${c} is odd`)
	}
}
}

function inc1 ()
{
    console.log("inc1 called")
	c=c+2
 count.textContent=c
}
function inc2() {
	c += 3
	count.textContent=c
}
function inc3() {
	c += 4
count.textContent=c
}