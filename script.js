let employees =
JSON.parse(localStorage.getItem("employees")) || [];

function registerEmployee(){

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let birthday =
document.getElementById("birthday").value;

let employee = {
name,
email,
birthday
};

employees.push(employee);

localStorage.setItem(
"employees",
JSON.stringify(employees)
);

alert("Employee Registered");

loadBirthdays();
}

function loginAttendance(){

let loginTime =
new Date().toLocaleString();

localStorage.setItem(
"loginTime",
loginTime
);

document.getElementById(
"attendanceStatus"
).innerHTML =
"Logged In: " + loginTime;
}

function logoutAttendance(){

let logoutTime =
new Date().toLocaleString();

localStorage.setItem(
"logoutTime",
logoutTime
);

document.getElementById(
"attendanceStatus"
).innerHTML =
"Logged Out: " + logoutTime;
}

function applyLeave(){

let date =
document.getElementById("leaveDate").value;

let reason =
document.getElementById("leaveReason").value;

let leaves =
JSON.parse(
localStorage.getItem("leaves")
) || [];

leaves.push({
date,
reason
});

localStorage.setItem(
"leaves",
JSON.stringify(leaves)
);

alert("Leave Applied");
}

function submitReport(){

let report =
document.getElementById("workReport").value;

let reports =
JSON.parse(
localStorage.getItem("reports")
) || [];

reports.push({
date:new Date().toLocaleDateString(),
report:report
});

localStorage.setItem(
"reports",
JSON.stringify(reports)
);

alert("Work Report Submitted");
}

function loadBirthdays(){

let list =
document.getElementById("birthdayList");

list.innerHTML = "";

employees.forEach(emp=>{

let li =
document.createElement("li");

li.innerHTML =
emp.name +
" - " +
emp.birthday;

list.appendChild(li);

});
}

loadBirthdays();