fetch("/api/products/")
  .then(response => {
    if (!response.ok) {
      throw new Error("Products fetch failed");
    }

    return response.json();
  })

  .then(products => {
    const container = document.getElementById("product-list");

    if (!container) {
      return;
    }

    if (products.length === 0) {
      container.innerHTML = "<p>No products available.</p>";
      return;
    }

    
    let html = "";

    products.forEach(product => {
      html += `
        <div class="product-card">

          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
          </div>

          <div class="product-info">
            <h3>${product.name}</h3>

            <p class="price">₹${product.price}</p>

            <p class="size">
              Size: ${product.size || "Not specified"}
            </p>

            <button onclick="viewProduct(${product.id})">
              View Details
            </button>
          </div>

        </div>
      `;
    });

    
    container.innerHTML = html;
  })

  
  .catch(error => {
    console.error("Product fetch error:", error);

    const container = document.getElementById("product-list");

    if (container) {
      container.innerHTML =
        "<p>Unable to load products. Please try again.</p>";
    }
  });



function viewProduct(id) {
  window.location.href = "/product-details/?id=" + id;
}


function memberLogin() {
  window.location.href = "/login/";
}
