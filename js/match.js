var code = location.href.split("=")[1];
getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/es.1.json",
    function (tableData) {
        fillTable(tableData.rounds[0].matches);
    }
);

function fillTable(rows) {
    var table = document.querySelector("table");
    var content = "";
    for (var i = 0; i < rows.length; i++) {
        var tr = "<tr>";
        tr += "<td>" + rows[i].date + "</td>";
        tr += "<td>" + rows[i].team1.name + "</td>";
        tr += "<td>" + rows[i].score1 + "</td>";
        tr += "<td>" + rows[i].score2 + "</td>";
        tr += "<td>" + rows[i].team2.name + "</td>";
        tr += "</tr>";
        content += tr;
    }

    table.querySelector("tbody").innerHTML = content;
}