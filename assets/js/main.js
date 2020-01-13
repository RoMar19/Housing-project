
function getData(url, cb){
var xhr = new XMLHttpRequest;
}

xhr.open("GET", url);
xhr.send();

xhr.onreadystatechange = function(){
    if (this.readyState == 4  && this.status == 200){
        cb(JSON.parse(this.responseText));
    }
};

function getTableHeaders(obj){
    var TableHeaders = [];

    Object.keys(obj).forEach(function(key){
        TableHeaders.push(`<td> ${key} </td>`);
    });
    return(`<tr> ${TableHeaders} </tr>`);
    }

function generatePaginationBottons(next, prev){
    if (next && prev){
        return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
               `<button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (next && !prev){
        return `<button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (!next && prev){
        return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
    }
}

function writeToDocument(url){
    var tableRows = [];
    var el = document.getElementById("data");
    el.innerHTML = "";
    getData(url, function(data){
        var pagination;
        if (data.next || data.previous){
            pagination = generatePaginationBottons(data.next, data.previous)
        }
    });

     data = data.results;
        var tableHeaders = getTableHeaders(data[0]);
        data.forEach(function(item) {
            var dataRow = [];

            Object.keys(item).forEach(function(key){
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`)
            });
                tableRows.push(`<tr>${dataRow}</tr>`);
        });
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`;
}