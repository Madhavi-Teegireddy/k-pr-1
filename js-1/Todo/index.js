
document.querySelector("form").addEventListener("submit", myFunc);
// let taskArr = [];

// let taskArr =JSON.parse(localStorage.getItem("todoList")); 
    // displayTable(taskArr);

    let taskArr;
    if(localStorage.getItem("todoList") == null) {
        taskArr = []
    }else{
        taskArr = JSON.parse(localStorage.getItem("todoList"))
    }
    displayTable(taskArr);


function myFunc(e) {
    e.preventDefault();
    let taskName = document.querySelector("#task").value;
    let priorityName = document.querySelector("#priority").value;
    // console.log(taskName,priorityName);   

    let taskObj = {
        task: taskName,
        priority: priorityName,
    }

    taskArr.push(taskObj);
    // console.log(taskArr);
    localStorage.setItem("todoList",JSON.stringify(taskArr))

    displayTable(taskArr)

}


function displayTable(taskArr){
    document.querySelector("tbody").innerHTML = "";
    taskArr.map(function(elem,index) {
        let row = document.createElement("tr");

        let c1 = document.createElement("td");
        c1.innerText = elem.task;

        let c2 = document.createElement("td");
        c2.innerText = elem.priority;
        if(elem.priority == "High"){
            c2.style.backgroundColor = "red";
        }else{
            c2.style.backgroundColor = "yellow";
        }

        let c3 = document.createElement("td");
        c3.innerText = "Delete";
        c3.style.backgroundColor = "pink";
        c3.style.color = "red";

        c3.addEventListener("click", function(){
            // eve.target.parentNode.remove();
            deleteRow()
        })
    
        row.append(c1,c2,c3);
        document.querySelector("tbody").append(row);
});
}
function deleteRow(index) {
    taskArr.splice(index,1)
    localStorage.setItem("todoList", JSON.stringify(taskArr))
    console.log(taskArr)
    displayTable(taskArr)
}




