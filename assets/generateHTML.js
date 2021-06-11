const fs = require("fs")

const htmlTop = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>Team Summary</title>
    <style>
        .row .col {
            padding: 0;
        }
        .card .card-content .card-title i {
            line-height: 0;
        }
    </style>
</head>
<body>
    <header class = "row blue">
        <div class = "col s12 center">
            <h1 class = "white-text">Team Info</h1>
        </div>
    </header>
    <div class = "row container">
        <div class = "col s12"></div>`

const htmlBottom = `        </div>
</div> 
</body>
</html>`


function generateHTML(list) {

    let middleString = ""

    list.forEach(employee => {
        employee.populateExtraHTMLData();
        const {role, name, id, email, extra, color, icon} = employee
        const string = `            <div class = "col s12 m4 card">
        <div class = "card-content ${color} white-text">
            <span class = "card-title"><i class="material-icons">${icon}</i> ${role}</span>
        </div>
        <div class = "card-content white black-text">
            <div>
                <span class = "name">${name}</span>
            </div>
            <div>
                <span class = "id">${id}</span>
            </div>
            <div>
                <span class = "email">${email}</span>
            </div>
            <div>
                <span class = "extra">${extra}</span>
            </div>
        </div>
    </div>\n`
    middleString += string;
    });

    const fullHtml = `${htmlTop}\n${middleString}\n${htmlBottom}`

    fs.writeFile("index.html", fullHtml, (err) => {
        if (err) throw err;
        console.log("File saved as index.html")

    })
}

module.exports = generateHTML
