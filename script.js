function operations(value1, value2, operator) {
	//all operation types
	if (operator === '+') {
		return value1 + value2;
	} else if (operator === '-') {
		return value1 - value2;
	} else if (operator === '*') {
		return value1 * value2;
	} else if (operator === '/') {
		return value1 / value2;
	} else {
		return "Such operator doesn't exist!";
	};
};

function calculate() {
	//taking inputs
	let operator = document.getElementById('operator').value;
	let input1 = document.getElementById('first').value;
	let input2 = document.getElementById('second').value;
	let answer = document.getElementById('answer');
	//if inputs are empty
	if (input1 === '' || input2 === '' || operator === '') {
		answer.innerHTML = 'One or more entries needed!';
		return true;
	}
	if (input1 === '') {
		input1 = 0;
	} else {
		input1 = parseFloat(input1)
	}
	if (input2 === '') {
		input2 = 0;
	} else {
		input2 = parseFloat(input2)
	}
	//check if inputs are numbers & give result
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	if (numbers.includes(input1) && numbers.includes(input2)) {
		answer.innerHTML = '' + operations(input1, input2, operator);
	} else {
		answer.innerHTML = 'You should enter a number';
		return true;
	}
}

document.getElementById('first').addEventListener("keyup", calculate);
document.getElementById('second').addEventListener("keyup", calculate);
document.getElementById('operator').addEventListener("keyup", calculate);
