// Use Prompt to put user Input, it works like alert

		var one = prompt("Enter the first number", "100?"); /// 100 is default value, it can be changed
		var two = prompt("Enter the second number");
		one = parseInt(one);
		two = parseInt(two);
		if (one == two)
			document.write(one + " is equal to " + two + ".");
		else if (one<two)
			document.write(one + " is less than " + two + ".");
		else
			document.write(one + " is greater than " + two + ".");