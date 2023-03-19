let form = document.getElementById("addForm")
let itemList = document.getElementById("items")

// form submit event
form.addEventListener("submit", addItem)

itemList.addEventListener("click", removeItem)

// delete event

function addItem(e){
    e.preventDefault()

    let newItem = document.getElementById("item").value

    let li = document.createElement("li")

    li.className = "list-group-item"
    li.appendChild(document.createTextNode(newItem))
    
    let deleteBtn = document.createElement("button")

    deleteBtn.className ="btn btn-danger btn-sm float-right delete"
    deleteBtn.appendChild(document.createTextNode("X"))

    let editBtn = document.createElement("button")
    editBtn.className = "btn btn-sm float-right mx-2 edit"
    editBtn.appendChild(document.createTextNode("Edit"))
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)


    itemList.appendChild(li)
}

function removeItem(e){
    // console.log(1)
    if(e.target.classList.contains("delete")){
        if(confirm("Are You Sure?")){
            let li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}