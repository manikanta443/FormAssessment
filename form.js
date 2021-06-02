const defaultForm = () => {
  document.getElementById('radioOne').checked = true;
	return {
		name: { value: '', touched: false, filled: false },
		email: { value: '', touched: false, filled: false },
		phoneNumber: { value: '', touched: false, filled: false },
		todaysDate: { value: '', touched: false, filled: false },
		overDueDate: { value: '', touched: false, filled: false },
		dateOfEvent: { value: '', touched: false, filled: false },
		timeOfEvent: { value: '', touched: false, filled: false },
		eventLocation: { value: '', touched: false, filled: false },
		typeOfEvent: { value: '', touched: false, filled: false },
		noOfGuests: { value: '', touched: false, filled: false },
		pickUpTime: { value: '', touched: false, filled: false },
		method: { value: 'pickUp', touched: false, filled: false },
	};
};
let formData = defaultForm();
const fieldHandler = (e) => {
	const { name, value } = e.target;
	console.log(name, 'clicked');
	formData[name].value = value;
	formData[name].filled = formData[name].value.length !== 0 && true;
	formData[name].touched = true;
	console.log(name, formData[name].value.length !== 0  ? 'Filled' : 'Not Filled');
};

const formValidation = (formInputs) => {
	let emptyFields = [];
	for (const key in formInputs) {
		if (!formInputs[key].value) {
			emptyFields.push(key);
		}
	}
	return emptyFields;
};

const formHandler = (e) => {
	e.preventDefault();
  alert('Form Submitted');
	const forminfo = formValidation(formData);
	console.log(
		'form fields: ', formData,
		{'counts of empty fields':
		forminfo.length},
		{'empty fields':
		forminfo.join()}
	);
	e.target.reset();
	formData = defaultForm();
};
