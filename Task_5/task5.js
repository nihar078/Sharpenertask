let itemList = document.querySelector("#items")
// console.log(itemList)

// 1.parentElement
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = "#f4f4f4"

// 2.lastElementChild
console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent = "hello 4"

//3.lastChild
// console.log(itemList.lastChild)


//4. create a child
let newLi = document.createElement("li")
let newLiText = document.createTextNode("Hello world")
// itemList.appendChild(newLiText)  // this is add in last
// itemList.appendFirstChild(newLiText)
itemList.innerHTML = '<li class="list-group-item">Item 1</li><li class="list-group-item">Item 2</li><li class="list-group-item">Item 3</li><li class="list-group-item">Item 4</li>'
itemList.innerHTML = '<li class="list-group-item">Hello world</li>' + itemList.innerHTML

//5. firstElementChild
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent = "Item 0"

// 6. firstChild
console.log(itemList.firstChild)
itemList.firstChild.style.color = "blue"

//7. nextSibling
console.log(itemList.nextSibling)

//8. nextElementSibling
console.log(itemList.nextElementSibling)

//9. previousSibling
console.log(itemList.previousSibling)

//10. previousElementSibling
console.log(itemList.previousElementSibling)

//11. createElment

let newDiv = document.createElement("div")

newDiv.className = "Hello"

newDiv.id = "Hello1"

//12. setAttribute
newDiv.setAttribute = ("title, hello div")

// 13. createTextNode
let newDivText = document.createTextNode("HEllo Word")

// 14. appendChild
newDiv.appendChild(newDivText)

// i
let container = document.querySelector("header .container")
let h1 = document.querySelector("header h1")

newDiv.style.fontSize = "30px"
container.insertBefore(newDiv, h1)

// ii
let newDiv2 = document.createElement("div")
newDiv2.className = "hello"
newDiv2.id = "hello2"
// newDiv2.setAttribute("title, hello div2")

let newDiv2Text = document.createTextNode("HEllo word")
newDiv2.appendChild(newDiv2Text)



let listGroup = document.querySelector("div .list-group")
let l = document.querySelector("div li")
newDiv2.style.fontWeight = "bold" 
listGroup.insertBefore(newDiv2, l)

