function result(value1, value2, operator) {
	//calculating
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

function operations() {
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

	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	if (numbers.includes(input1) && numbers.includes(input2)) {
		answer.innerHTML = '' + result(input1, input2, operator);
	} else {
		answer.innerHTML = 'You should enter a number';
		return true;
	}
}

document.getElementById('first').addEventListener("keyup", operations);
document.getElementById('second').addEventListener("keyup", operations);
document.getElementById('operator').addEventListener("keyup", operations);



/*

if operator = +       -> add numbers
else if operator = -    -> subtract
else if operator = *    -> multiply
else if operator = /    -> divide
else                    -> insert operator*/ 