if($("h1").text() == "401 Authorization Required") {
  var auth_str = ""; // ここ入力たのむ
  var url = document.URL.replace(/(https?:\/\/)/, function (protcal) {
    return protcal + auth_str;
  });
  location.href = url;
}
