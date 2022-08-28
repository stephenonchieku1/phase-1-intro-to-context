// Your code here
 
function calculatePayroll(arrayOfEmployees) {
    return arrayOfEmployees.reduce((acc, rec) => {
      return acc + allWagesFor(rec);
    }, 0);
  }
  function wagesEarnedOnDate(employee, date) {
    let hoursWorked = hoursWorkedOnDate(employee, date);
    let wages = hoursWorked * employee.payPerHour;
    return parseFloat(wages.toString());
  }
  
  function allWagesFor(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })
  
    let payableamount = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)
  
    return payableamount
  }
 

let arrayofarrays = [
    ["queen", "jema", "student", 300],
    ["een", "ema", "student", 300],
  ];
  
  function createEmployeeRecord(array) {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3],
  ];
  
  function createEmployeeRecords(twoRows) {
    return twoRows.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(employee, dateStamp) {
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(dateStamp.split(" ")[1], 10),
      date: dateStamp.split(" ")[0],
    });
    return employee;
  }
  
  function createTimeOutEvent(employee, dateStamp) {
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(dateStamp.split(" ")[1], 10),
      date: dateStamp.split(" ")[0],
    });
  
    return employee;
  }
  
  function hoursWorkedOnDate(employee, date) {
    let employeeInRecordsMatching = employee.timeInEvents.find(function (e) {
      return e.date === date;
    });
  
    let employeeOutRecordsMatching = employee.timeOutEvents.find(function (e) {
      return e.date === date;
    });
  
    return (
      (employeeOutRecordsMatching.hour - employeeInRecordsMatching.hour) / 100
    );
  }
  
 