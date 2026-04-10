let inventory = [];

// Show image
function showImage() {
    let name = document.getElementById("productName").value.toLowerCase();
    let img = document.getElementById("previewImg");

    if (name.includes("laptop")) {
        img.src = "https://cdn-icons-png.flaticon.com/512/2920/2920277.png";
    } 
    else if (name.includes("mouse")) {
        img.src = "https://cdn-icons-png.flaticon.com/512/3523/3523063.png";
    } 
    else if (name.includes("keyboard")) {
        img.src = "https://cdn-icons-png.flaticon.com/512/103/103776.png";
    } 
    else if (name.includes("phone")) {
        img.src = "https://cdn-icons-png.flaticon.com/512/15/15874.png";
    } 
    else if (name.includes("camera")) {
        img.src = "https://cdn-icons-png.flaticon.com/512/1042/1042339.png";
    } 
    else {
        img.src = "https://cdn-icons-png.flaticon.com/512/565/565547.png";
    }
}

// Add product
function addProduct() {
    let name = document.getElementById("productName").value.trim();
    let qty = parseInt(document.getElementById("productQty").value);

    if (!name || isNaN(qty)) {
        alert("Enter valid details");
        return;
    }

    let product = inventory.find(p => p.name.toLowerCase() === name.toLowerCase());

    if (product) {
        product.qty += qty;
    } else {
        inventory.push({ name, qty });
    }

    updateTable();
}

// Sell product
function sellProduct() {
    let name = document.getElementById("sellName").value.trim();
    let qty = parseInt(document.getElementById("sellQty").value);

    let product = inventory.find(p => p.name.toLowerCase() === name.toLowerCase());

    if (!product) {
        alert("Product not found");
        return;
    }

    if (product.qty < qty) {
        alert("Not enough stock");
        return;
    }

    product.qty -= qty;

    updateTable();
}

// Update table
function updateTable() {
    let table = document.querySelector("#inventoryTable tbody");
    table.innerHTML = "";

    inventory.forEach(p => {
        table.innerHTML += `
            <tr>
                <td>${p.name}</td>
                <td>${p.qty}</td>
            </tr>
        `;
    });
}
