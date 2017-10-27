var code = location.href.split("=")[1];
getJson(
<<<<<<< HEAD
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/es.1.json",
    function (tableData) {
        fillTable(tableData.rounds[0].matches);
=======
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/en.1.json",
    function(tableData) {
        fillTable(tableData);
>>>>>>> 91d6106119b45850ae91f75dfd812d2cfa28febe
    }
);

function fillTable(rows) {
<<<<<<< HEAD
    var table = document.querySelector("table");
    var content = "";
    for (var i = 0; i < rows.length; i++) {
        var tr = "<tr>";
        tr += "<td>" + (i + 1) + "</td>";
        tr += "<td>" + rows[i].key + "</td>";
        tr += "<td>" + rows[i].name + "</td>";
        tr += "<td>" + rows[i].code + "</td>";
        tr += '<td><a class="btn btn-primary" href="match.html?code=' + rows[i].code + '">match</a></td>';
        tr += "</tr>";
        content += tr;
    }

    table.querySelector("tbody").innerHTML = content;
=======
    // 
>>>>>>> 91d6106119b45850ae91f75dfd812d2cfa28febe
}