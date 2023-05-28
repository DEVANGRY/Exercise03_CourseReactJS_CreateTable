let getValueCol = () => {
    let colValue = document.getElementById("input_col").value;
    return colValue;
};
let getValueRow = () => {
    let rowValue = document.getElementById("input_row").value;
    return rowValue;
};
let table = document.getElementById("target");

var isFirstTableCreate = false;

let handleCreateTable = (x, y) => {
    if (isFirstTableCreate) {
        document.querySelector("#col_table").innerHTML = "";
        document.querySelector("#body_table").innerHTML = "";
        isFirstTableCreate = false;
    }
    for (let i = 0; i < x; i++) {
        document.getElementById("col_table").innerHTML += `<td>Column ${
            i + 1
        } </td>`;
    }
    for (let i = 0; i < y; i++) {
        document.getElementById("body_table").innerHTML += `<tr id =${i}>
                    </tr>`;
        for (let j = 0; j < x; j++) {
            document.getElementById(`${i}`).innerHTML += `<tr>
                        <td>Row ${i + 1} Colum ${j + 1}</td></tr>`;
        }
    }
    isFirstTableCreate = true;
};
