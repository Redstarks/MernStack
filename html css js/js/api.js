let list =[];
fetch('https://jsonplaceholder.typicode.com/todos')
.then((response) => response.json())
.then((data) => list = data)
.then(()=> {
    console.log(list);
    buildTable(list)

    function buildTable(data){
        let table = document.getElementById('myTable')

        for (let i = 0; i < data.length; i++){
            let row = `<tr>
                <td>${data[i].id}</td>  
                <td>${data[i].userId}</td>  
                <td>${data[i].title}</td>
                <td>${data[i].completed}</td>
            </tr>
            `
            table.innerHTML += row
        }
    }
})