if (document.getElementsByTagName('h1')[0] && document.getElementsByTagName('h1')[0].innerHTML == "401 Authorization Required") {
  var auth_str = ""; // ここ入力たのむ
  var url = document.URL.replace(/(https?:\/\/)/, function (protcal) {
    return protcal + auth_str;
  });
  location.href = url;
}
