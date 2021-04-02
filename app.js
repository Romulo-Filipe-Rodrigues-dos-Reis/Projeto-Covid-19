const switchDarkMode = () =>
  document.querySelector("body").classList.toggle("dark-mode");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(async function () {
    await $.get(
      function (response) {
        countryCode = response.country;
        timezone = response.timezone;
        $("#mainSelector").val(response.country).prop("selected", true);
        getAllData();
      },
      "jsonp"
    );
  });
}
