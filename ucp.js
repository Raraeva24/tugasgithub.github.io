function updateDateTime() {
    var greetingElement = document.getElementById("greeting");
    var dateTimeElement = document.getElementById("datetime");

    var currentDate = new Date();

    var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var day = days[currentDate.getDay()];

    var date = currentDate.getDate();

    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    var month = months[currentDate.getMonth()];

    var year = currentDate.getFullYear();

    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();

    var greeting = getGreeting(hour);

    var dateTimeString = day + ', ' + date + ' ' + month + ' ' + year + ' - ' + hour + ':' + minute + ':' + second;

    greetingElement.textContent = greeting;
    dateTimeElement.textContent = dateTimeString;

    setTimeout(updateDateTime, 1000);
  }

  function getGreeting(hour) {
    if (hour < 12) {
      return 'Selamat pagi';
    } else if (hour < 18) {
      return 'Selamat siang';
    } else {
      return 'Selamat malam';
    }
  }

  updateDateTime();