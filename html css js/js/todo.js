let todo = [];
const readData = () => {
    let form = document.getElementById("form");
    
    let temp = document.getElementById("text").value;
    todo.push(temp);
    let table = document.getElementById("myTable")
    for(i=0;i<todo.length;i++){
        let row = `<tr id = "row">
            <td>${todo[i]}</td> 
            <td><button id="button" onClick="deleteData()">Delete</button>
        </tr>`
        table.innerHTML += row
        todo.pop();
    }
    form.reset();
}

function deleteData() {
    document.getElementById("row").remove()
}