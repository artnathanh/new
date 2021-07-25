document.getElementById("nathan").innerHTML = getAge("2000-12-02");
document.getElementById("alex").innerHTML = getAge("1994-02-08");
document.getElementById("umar").innerHTML = getAge("1995-11-12");
document.getElementById("scott").innerHTML = getAge("1999-11-30");
document.getElementById("stephen").innerHTML = getAge("1994-04-17");
document.getElementById("cameron").innerHTML = getAge("2000-09-30");
document.getElementById("michael").innerHTML = getAge("1997-11-26");
document.getElementById("pj").innerHTML = getAge("1997-05-06");
document.getElementById("xander").innerHTML = getAge("1999-04-29");
document.getElementById("truman").innerHTML = getAge("1998-05-14");
document.getElementById("clemens").innerHTML = getAge("1998-02-12");
document.getElementById("lui").innerHTML = getAge("1996-06-19");
document.getElementById("thomas").innerHTML = getAge("1996-12-11");
document.getElementById("grace").innerHTML = getAge("2001-01-26");
document.getElementById("spc").innerHTML = getAge("2000-02-20");

function getAge(birth) {	// birth should be in the format YYYY-MM-DD
	const dob = new Date(birth);
	const now = new Date();
	
	var age = now.getFullYear() - dob.getFullYear();
	var m = now.getMonth() - dob.getMonth();
	if(m < 0 || (m === 0 && now.getDate() < dob.getDate())) {
		age--;
	}
	return age;
}