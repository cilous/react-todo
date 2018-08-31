
//  SECTION 2 : deleted duplicate adjacent array
function compress(array) {
	var temp = []
	var check = array[0]
	temp = temp.concat(check)
	for (let i = 1; i < array.length; i++) {
		if (check == array[i]) {
			temp = temp
		} else {
			check = array[i]
			temp = temp.concat(array[i])
		}
	}
	return temp
}

// SECTION 2 : GCD (Greatest Common Divider)
function gcd(x, y) {
	while (y) {
		var temp = y
		y = x % y
		x = temp
	}
	return x
}
//  x  temp  y
// 36 % 63 = 36
// 63 % 36 = 27
// 36 % 27 = 9
// 27 % 9  = 0  







