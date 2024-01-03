let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value ===''){
        alert("Enter a Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();   
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "Li"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function ShowTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
ShowTask();