const addItem = document.getElementById("addItems");

addItem.addEventListener("submit", saveToLocalStorage);

//Add Items
function saveToLocalStorage(e) {
    e.preventDefault()
    const price = e.target.price.value;
    const productName = e.target.productname.value;

    const obj = {
        price,
        productName,
    }

    // Save in crud crud or post request
    axios.post("https://crudcrud.com/api/3cdc4a7220d34a6986d2266a2774b820/Products", obj)
        .then((response) => {
            showUserOnScreen(response.data);
            console.log(response);
            alert("Successfully added the item");
        })
        .catch((err) => {
            console.log(err);
        })
    // Save in local storage
    // localStorage.setItem("detailsOfItems", JSON.stringify(obj));
    // showUserOnScreen(obj);

    // after add item clear the input form
    e.target.price.value = "";
    e.target.productname.value = "";
}

// get request & save item's from crud crud
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/3cdc4a7220d34a6986d2266a2774b820/Products")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                showUserOnScreen(response.data[i]);
            }
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
})

// show on screen
function showUserOnScreen(obj) {
    const parentElem = document.getElementById("listOfItems");

    // createitem
    const childElem = document.createElement("li");
    childElem.textContent = obj.price + " - " + obj.productName;
    childElem.setAttribute("id", obj._id);

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Product";
    deleteBtn.className = "btn btn-danger btn-sm mx-2 my-1";

    //delete function
    deleteBtn.onclick = () => {
        if (confirm("Are you sure?")) {
            axios.delete(`https://crudcrud.com/api/3cdc4a7220d34a6986d2266a2774b820/Products/${obj._id}`)
                .then((response) => {
                    removeItem(response.data);
                    alert("successfully deleted the item");
                })
                .catch((err) => {
                    console.log(err);
                })
            // localStorage.removeItem("userDetails");
            parentElem.removeChild(childElem);
        }
    }

    //remove item function
    function removeItem(){
        const parentElem = document.getElementById("listOfItems");
        const childElemToBeDeleted = document.getElementById(obj._id);
        if(childElemToBeDeleted){
            parentElem.removeChild(childElemToBeDeleted);
        }
        updateTotal() ;  // it will deducted the amount which one we will delete from the product lists and update the amount after delete the product.
    }

    childElem.appendChild(deleteBtn)
    parentElem.appendChild(childElem);

    // update the total value
    updateTotal();

    function updateTotal() {
        const items = parentElem.children;
        let total = 0;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const price = parseFloat(item.textContent.split(" - ")[0]);
            if (!isNaN(price)) {
                total += price;
            }
        }
        const totalElem = document.getElementById("total");
        totalElem.textContent = "Total Value Worth of Products: Rs " + total.toFixed(2);
    }
}


