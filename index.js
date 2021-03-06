setTimeout(showPage, 500);

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainDiv").style.display = "block";
}

function updateClock() {
  var now = new Date(), 
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  time = now.getHours().toString().padStart(2,"0") + ':' + now.getMinutes().toString().padStart(2,"0") + ':' + now.getSeconds().toString().padStart(2,"0");
  
  date = [now.getDate(),
          months[now.getMonth()],
          now.getFullYear()].join(' ');
  
  document.getElementById('time').innerHTML = [date, time].join(' | ');
  
  setTimeout(updateClock, 1000);
}
  setTimeout(updateClock, 1000);
