document.addEventListener("DOMContentLoaded", () => {
  const minusBtn = document.querySelector("#minus");
  const plusBtn = document.querySelector("#plus");
  const quantityValue = document.getElementById("quantityValue");

  if (quantityValue) {
    let totalQuantity = parseInt(quantityValue.textContent);
    function decreaseQuantity() {
      if (totalQuantity > 1) {
        totalQuantity--;
        quantityValue.textContent = totalQuantity;
      } else {
        totalQuantity = 0;
        quantityValue.textContent = totalQuantity;
        window.alert("Item has been removed from the list.");
      }
    }

    // Function to increase the quantity
    function increaseQuantity() {
      totalQuantity++;
      quantityValue.textContent = totalQuantity;
    }

    minusBtn.addEventListener("click", decreaseQuantity);
    plusBtn.addEventListener("click", increaseQuantity);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cancelBtn = document.getElementById("cancel");
  const checkoutBtn = document.getElementById("cobtn");

  if (cancelBtn) {
    cancelBtn.addEventListener("click", function () {
      window.location.href = "../HTML/Main.html";
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
      window.alert("Thank you for your purchase!");
      window.alert("Returning to main website");
      window.location.href = "../HTML/Main.html";
    });
  }
});
