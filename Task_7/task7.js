
let filter = document.getElementById("filter")
let itemList = document.getElementById("items")

filter.addEventListener("keyup", filterItems)


function filterItems(e){
    let text = e.target.value.toLowerCase()
    let items =itemList.getElementsByTagName("li")
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent
        let descName = item.childNodes[1].textContent

        if(itemName.toLowerCase().indexOf(text) != -1 || descName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block"
        }
        else{
            item.style.display = "none"
        }
    })

   
}

let form = document.getElementById("addForm")

form.addEventListener("submit", addItem)

function addItem(e){
    e.preventDefault()

    let newItem = document.getElementById("item").value
    let newDesc = document.getElementById("description").value
    let li =document.createElement("li")

    li.className = "list-group-item"
    li.appendChild(document.createTextNode(newItem ))
    li.appendChild(document.createTextNode(newDesc))

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

