const details = document.getElementById("details")

details.addEventListener("submit", saveToLocalStorage)

function saveToLocalStorage(e){
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("mail").value
    const phone = document.getElementById("phone").value

    const obj ={
        name,
        email,
        phone
    }
    localStorage.setItem("userDetails", JSON.stringify(obj))

    showUserOnScreen(obj)
}
function showUserOnScreen(obj){
    const parentElem = document.getElementById("itemOfList")

    const childElem = document.createElement("li")
    childElem.textContent = obj.name + " - " + obj.email + " - " + obj.phone

    const deleteBtn = document.createElement("button")
    deleteBtn.className = "btn btn-danger btn-sm delete"
    deleteBtn.textContent = "Delete"
    deleteBtn.onclick = () => {
        if(confirm("Are yoy sure?")){
            localStorage.removeItem("userDetails")
            parentElem.removeChild(childElem)
        }
    }

    childElem.appendChild(deleteBtn)

    parentElem.appendChild(childElem)
}


