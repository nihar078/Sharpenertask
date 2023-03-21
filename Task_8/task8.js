let details = document.getElementById("details")

details.addEventListener("submit", saveToLocalStorage)

function saveToLocalStorage(e){
    e.preventDefault()
    // const name = e.target.name.value
    const name = document.getElementById("name").value
    // const email = e.target.mail.value
    const email = document.getElementById("mail").value
    // const phone = e.target.phone.value
    const phone = document.getElementById("phone").value

    const date = e.target.date.value

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("phone", phone)
    localStorage.setItem("date", date)
}