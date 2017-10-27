function getJson(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("get", url);

<<<<<<< HEAD
  xhr.onload = function (ev) {
=======
  xhr.onload = function(ev) {
>>>>>>> 91d6106119b45850ae91f75dfd812d2cfa28febe
    var footballData = JSON.parse(ev.target.response);
    callback(footballData);
  };
  xhr.send();
}