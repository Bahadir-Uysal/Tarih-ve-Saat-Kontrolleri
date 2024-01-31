const clock = document.querySelector(".clock");
 
const tick = () => {
    const now = new Date();
    const hours = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    // console.log(hours,min,sec);

    const html = 
    `
    <span>${hours}</span>:
    <span>${min}</span>:
    <span>${sec}</span>
    `
    clock.innerHTML=html

};

setInterval(tick,1000);