const startDate = new Date("08/15/2018 9:45:00");
console.log(startDate);

const now = new Date();

const diff = now.getTime()-startDate.getTime();
console.log(diff);

const mins = Math.round(diff/1000/60);
console.log(mins);

const hours = Math.round(mins/60);
console.log(`${hours} saat önce videolar çekilmeye başlandı. `);

const days = Math.round(hours/24);
console.log(days);

const years = Math.round(days/365);
console.log(years);