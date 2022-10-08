let text1 = document.getElementById('text-1')
let text2 = document.getElementById('text-2')

let count = 0
let count2 = 0

function inc1() {
	text1.textContent = count + 1
	count += 1
}

function inc2() {
	text1.textContent = count + 2
	count += 2
}

function inc3() {
	text1.textContent = count + 3
	count += 3
}

function inc_1() {
	text2.textContent = count2 + 1
	count2 += 1
}

function inc_2() {
	text2.textContent = count2 + 2
	count2 += 2
}

function inc_3() {
	text2.textContent = count2 + 3
	count2 += 3
}

function n_game() {
	count = 0
	count2 = 0
	text1.textContent = count
	text2.textContent = count2
}