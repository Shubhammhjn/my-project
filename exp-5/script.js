const filter = document.getElementById("filter");
const products = document.querySelectorAll(".product");

function filterProducts() {
  const selected = filter.value;

  products.forEach(product => {
    const category = product.getAttribute("data-category");

    if (selected === "all" || category === selected) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Run once on page load
filterProducts();

// Run when dropdown changes
filter.addEventListener("change", filterProducts);
