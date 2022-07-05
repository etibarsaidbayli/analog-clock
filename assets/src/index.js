const deg = 6;
const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");

setInterval(() => {
  let day = new Date();

  let hours = day.getHours() * 30;
  let minutes = day.getMinutes() * deg;
  let seconds = day.getSeconds() * deg;
  
  hr.style.transform = `rotateZ(${hours + minutes / 12}deg)`;
  mn.style.transform = `rotateZ(${minutes}deg)`;
  sc.style.transform = `rotateZ(${seconds}deg)`;
});
