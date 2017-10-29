var tableData = [];

getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/es.1.clubs.json",
    function (data) {
        tableData = data.clubs;
        fillTable(tableData);
    }
);

function fillTable(rows) {
    var table = document.querySelector("table");
    var content = "";
    for (var i = 0; i < rows.length; i++) {
        var tr = "<tr>";
        tr += "<td>" + (i + 1) + "</td>";
        tr += "<td>" + rows[i].key + "</td>";
        tr += "<td>" + rows[i].name + "</td>";
        tr += "<td>" + rows[i].code + "</td>";
        tr += '<td><a class="btn btn-primary" href="match.html?name=' + rows[i].name + '">match</a></td>';
        tr += "</tr>";
        content += tr;
    }

    table.querySelector("tbody").innerHTML = content;
}

document.querySelector("#sort-btn").addEventListener("click", function () {
    tableData.sort(function (a, b) {
        if (!a.code) {
            return -1;
        } else if (!b.code) {
            return 1;
        }
        return a.code.localeCompare(b.code);
    });
    fillTable(tableData);
});

document.querySelector("#sort-btn-name").addEventListener("click", function () {
    tableData.sort(function (a, b) {
        if (!a.name) {
            return -1;
        } else if (!b.name) {
            return 1;
        }
        return a.name.localeCompare(b.name);
    });
    fillTable(tableData);
});

document.querySelector("#sort-btn-key").addEventListener("click", function () {
    tableData.sort(function (a, b) {
        if (!a.key) {
            return -1;
        } else if (!b.key) {
            return 1;
        }
        return a.key.localeCompare(b.key);
    });
    fillTable(tableData);
});


document.querySelector("#searchbtn").addEventListener("click", function () {

    var str = document.querySelector("#searchtxt").value;
    var trs = document.querySelectorAll("#data-table tr");
    var keresesalap = document.querySelector("#kereses").value;
    var keresesertek = 0;
    if (keresesalap == "key") {
        keresesertek = 1;
    } else if (keresesalap == "name") {
        keresesertek = 2;
    } else if (keresesalap == "code") {
        keresesertek = 3;
    }

    //console.log(str);
    for (var i = 1; i < trs.length; i++) {
        //console.log((trs[i].children[1].textContent).indexOf(str));
        trs[i].style.display = "table-row";
        if ((trs[i].children[keresesertek].textContent).indexOf(str) <= -1) {
            trs[i].style.display = "none";
        }
    }
});