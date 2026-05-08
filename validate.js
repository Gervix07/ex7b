function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  // ตรวจสอบความยาว 10 หลัก และใช้ Regular Expression เช็คว่าเป็นตัวเลข 0-9 เท่านั้น
  if (sid.length == 10 && /^[0-9]+$/.test(sid)) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  // เช็คว่าไม่ใช่ตัวเลข หรือ ค่าน้อยกว่า 1 หรือ ค่ามากกว่า 10
  if (isNaN(candi) || candi < 1 || candi > 10) {
    return false;
  } else {
    return true;
  }
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}