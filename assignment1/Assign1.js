/*

*/
// Runs createTable() when widow first opens.
window.addEventListener("load", (event) => {
    
    
    createTable();
});

form = document.getElementById("table_form");

form.addEventListener("submit", function (event) {
	// Stop form submission
	event.preventDefault();

    // Removes previous table
    const removeTable = document.querySelector("table");
    removeTable.remove();

    // Runs function with updated values for rows and cols
	createTable(document.getElementById("row").value, document.getElementById("col").value);
});


// Creates multiplication table
function createTable(rows = 10, cols = 10) {
    
    let tableDec;

    const elem = document.getElementById("MultiTable");
    tableDec = document.createElement("table");

    elem.appendChild(tableDec);

    for(let i = 0; i < rows; i++){
        const rowDec = document.createElement("tr");
        tableDec.appendChild(rowDec);

        for(let j = 0; j < cols; j++){
            const dataDec = document.createElement("td");
            rowDec.appendChild(dataDec);
            const dataNode = document.createTextNode((i+1) + "x" + (j + 1) + "=" + ((i+1)*(j+1)));
            dataDec.appendChild(dataNode);
        }
    }

}

