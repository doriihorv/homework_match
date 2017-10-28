var code = location.href.split("=")[1];
getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/es.1.json",
    function (tableData) {
        fillTable(tableData.rounds);
    }
);

function fillTable(rows) {
    var table = document.querySelector("table");
    var content = "";
    var params = (new URL(document.location)).searchParams;
    var codename = params.get("name");
    var tr;
    for (var k in rows) {
        if (rows[k]["matches"]) {
            for (var i = 0; i < rows[k].matches.length; i++) {
                tr = "";
                if (codename == rows[k].matches[i].team1.name || codename == rows[k].matches[i].team2.name) {
                    tr += "<tr>";
                    tr += "<td>" + rows[k].matches[i].date + "</td>";
                    tr += "<td>" + rows[k].matches[i].team1.name + "</td>";
                    tr += "<td>" + rows[k].matches[i].score1 + "</td>";
                    tr += "<td>" + rows[k].matches[i].score2 + "</td>";
                    tr += "<td>" + rows[k].matches[i].team2.name + "</td>";
                    tr += "</tr>";
                    content += tr;
                }
            }
        }
    }
    table.querySelector("tbody").innerHTML = content;
}