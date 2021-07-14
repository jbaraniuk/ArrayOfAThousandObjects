    // Declare array and initialize object values
	let objArray = [];
	for (let x = 0; x < 1000; x++) {	
		objArray.push({name: "Justin" + x, value: x});
	}
    
    // Declare upper array and initialize with call function
	let upper = convertToUpper(objArray);
	function convertToUpper(arr) {	
		let upper = [];
		for (let el in arr) 
			upper.push({name: arr[el].name.toUpperCase(), value: arr[el].value * 5, found: []});
		return upper;
	}
    
    // Declare lower array and initialize with call function
	let lower = convertToLower(objArray);
	function convertToLower(arr) {	
		let lower = [];
		for (let el in arr) 
			lower.push({name: arr[el].name.toLowerCase(), value: arr[el].value * 3});
		return lower;
	}

    //  Add lower object values that divide evenly into upper object values
    //  and store upper object parameter found array
	upper = addLowerObjects(upper, lower);
	function addLowerObjects(upper, lower) {
		for (let i = 0; i < 1000; i++) {
			for (let j = 0; j < 1000; j++) {
				if (upper[i].value % lower[j].value == 0)
					upper[i].found.push(lower[j]);
			}
		}
		return upper;
	}
	console.log(upper); 