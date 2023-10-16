
document.querySelector("form").addEventListener("submit", myFunc);
let taskArr = [];

function myFunc(e) {
    e.preventDefault()
    let taskName = document.querySelector("#task").value;
    let priorityName = document.querySelector("#priority").value;
    // console.log(taskName,priorityName)   

    let taskObj = {
        task: taskName,
        priority: priorityName,
    }

    taskArr.push(taskObj);
    // console.log(taskArr);
    displayTable(taskArr)

    function displayTable(taskArr){
        document.querySelector("tbody").innerHTML = "";
        taskArr.map(function(elem) {
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

            c3.addEventListener("click", function(eve){
                eve.target.parentNode.remove();
            })
        
            row.append(c1,c2,c3);
            document.querySelector("tbody").append(row);
    });
    }
}




