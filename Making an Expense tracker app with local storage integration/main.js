const details = document.getElementById("details")

details.addEventListener("submit", saveToLocalStorage)

function saveToLocalStorage(e){
    e.preventDefault()
    const amount = document.getElementById("amount").value
    const description = document.getElementById("description").value
    const category = document.getElementById("category").value

    const obj = {
        amount,
        description,
        category
    }
    localStorage.setItem("userDetails", JSON.stringify(obj))
    showUserOnScreen(obj)
}

function showUserOnScreen(obj){
    const parentElem = document.getElementById("list")

    const childElem = document.createElement("li")

    childElem.textContent = obj.amount + " - " + obj.category + " - " + obj.description

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete Expense"
    deleteBtn.className = "btn btn-danger btn-sm delete mx-2 my-1"
    deleteBtn.onclick = () => {
        if(confirm("Are you Sure?")){
            localStorage.removeItem("userDetails")
            parentElem.removeChild(childElem)
        }
    }

    const editBtn = document.createElement("input")
    editBtn.type = "button"
    editBtn.className = "btn btn-primary btn-sm mx -2"
    editBtn.value = "Edit Expense"

    editBtn.onclick = () => {
        if(confirm("Are you want to edit?")){
            localStorage.removeItem("userDetails")
            parentElem.removeChild(childElem)
            document.getElementById("amount").value = obj.amount
            document.getElementById("description").value = obj.description
            document.getElementById("category").value = obj.category
        }
    }

    childElem.appendChild(deleteBtn)

    childElem.appendChild(editBtn)

    parentElem.appendChild(childElem)
}
