const now = new Date();
console.log(now);
console.log(typeof now);
console.log("Year",now.getFullYear());
console.log("month",now.getMonth());
console.log("Date",now.getDate());
console.log("Day",now.getDay());
console.log("Hours",now.getHours());
console.log("Min",now.getMinutes());
console.log("Sec",now.getSeconds());
console.log("timeStamp",now.getTime());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());