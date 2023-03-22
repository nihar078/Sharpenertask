const details = document.getElementById("details")

details.addEventListener("submit", saveToLocalStorage)

function saveToLocalStorage(e){
    e.preventDefault()

    // const name = document.getElementById("name").value
    // const email = document.getElementById("mail").value
    // const phone = document.getElementById("phone").value

    //or below 3line use for name .. upper 3 line use for id
    const name = e.target.name.value
    const email = e.target.mail.value
    const phone = e.target.phone.value

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
    deleteBtn.className = "btn btn-danger btn-sm delete mx-2 my-1"
    deleteBtn.textContent = "Delete"
    deleteBtn.onclick = () => {
        if(confirm("Are you sure?")){
            localStorage.removeItem("userDetails")
            parentElem.removeChild(childElem)
        }
    }

    const editBtn = document.createElement("input")
    editBtn.type = "button"
    editBtn.className = "btn btn-sm mx -2"
    editBtn.value = "Edit"

    editBtn.onclick = () =>{
        if(confirm("Are you want to edit?")){
            localStorage.removeItem("userDetails")
            parentElem.removeChild(childElem)
            document.getElementById("name").value = obj.name
            document.getElementById("mail").value = obj.email
            document.getElementById("phone").value = obj.phone
        }
    }
    childElem.appendChild(editBtn)

    childElem.appendChild(deleteBtn)

    parentElem.appendChild(childElem)
}


