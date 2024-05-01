const inputField = document.getElementById("input-field");
const listContainer = document.getElementById("list-container");

function CommentPart() {
    if (inputField.value === "") {
        alert("comment not found")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputField.value;
        listContainer.appendChild(li)
        var span = document.createElement("span");
        span.innerHTML = "&#10005"
        li.appendChild(span)

    
    }
    inputField.value = '';
    saveData()
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showList();
