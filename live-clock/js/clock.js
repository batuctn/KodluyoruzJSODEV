let uName = prompt("Adınızı lutfeder misiniz?");
document.querySelector("#myName").innerHTML = `${uName}`;

let timeDiv = document.getElementById("myClock");
function showTime() {
  const weekday = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  // We create a new Date object and assign it to a variable called "time".
  var time = new Date(),
    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),
    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),
    seconds = time.getSeconds(),
    day = weekday[time.getDay()];

  timeDiv.innerHTML = `
    ${harold(hours)}:${harold(minutes)}:${harold(seconds)} ${day}
    `;

  function harold(standIn) {
    if (standIn < 10) {
      standIn = "0" + standIn;
    }
    return standIn;
  }
}
setInterval(showTime, 1000);
