function searchItems() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let products = document.getElementById("productList").getElementsByClassName("card");

  for (let i = 0; i < products.length; i++) {
    let title = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    if (title.includes(input)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}


// Banner faqat bir marta ko‘rinadi
window.addEventListener("load", () => {
  const banner = document.getElementById("welcomeBanner");
  if (banner) {
    setTimeout(() => {
      banner.classList.add("hide");
    }, 2000); // 2 sekunddan keyin yo‘qoladi
  }
});

// Sotib olish modal kodlari
let selectedProduct = "";

function openModal(productName) {
  selectedProduct = productName;
  document.getElementById("modalTitle").innerText = productName + " sotib olish";
  document.getElementById("buyModal").style.display = "flex";
  document.getElementById("confirmationMsg").style.display = "none";
  document.getElementById("userIdInput").value = "";
}

function closeModal() {
  document.getElementById("buyModal").style.display = "none";
}

function confirmPurchase() {
  let userId = document.getElementById("userIdInput").value.trim();
  if (userId === "") {
    alert("❌ Iltimos ID kiriting!");
    return;
  }
  document.getElementById("confirmationMsg").style.display = "block";

  // 3 sekunddan keyin modal yopiladi
  setTimeout(() => {
    closeModal();
  }, 3000);
}



