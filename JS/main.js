document.addEventListener("DOMContentLoaded", function () {
  const totalQuantityElement = document.getElementById("totalQuantityElement");
  const addToCart = document.querySelectorAll("#addToCartBtn");

  if (addToCart && totalQuantityElement) {
    let totalQuantity = 0;

    function updateTotalQuantity() {
      totalQuantity++;
      totalQuantityElement.textContent = totalQuantity;
    }

    addToCart.forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        updateTotalQuantity();
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebarBtn = document.querySelector(".sidebar-btn");
  const closeBtn = document.querySelector(".sidebar-close");

  sidebarBtn.addEventListener("click", toggleSidebar);
  closeBtn.addEventListener("click", hideSidebar);

  function toggleSidebar() {
    const sidebar = document.querySelector(".sidebarmenu");
    sidebar.classList.toggle("active");
    sidebar.style.display = "flex";
    document.body.classList.toggle("sidebar-open");
  }

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebarmenu");
    sidebar.classList.remove("active");
    sidebar.style.display = "none";
  }
});
