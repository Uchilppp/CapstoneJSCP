var productList = [];
var cart = [];

function init() {
  loadCartFromStorage();
  fetchProductList();
  renderCartBadge();
}

function fetchProductList() {
  productService.getProducts()
    .then(function(data) {
      productList = data.map(function(item) {
        return new Products(
          item.id,
          item.name,
          item.price,
          item.screen,
          item.backCamera,
          item.frontCamera,
          item.img,
          item.desc,
          item.type
        );
      });
      renderProducts(productList);
    })
    .catch(function(error) {
      console.error('Loi khi tai danh sach san pham:', error);
    });
}

function renderProducts(products) {
  var productContainer = document.getElementById('productList');
  if (!productContainer) return;

  if (products.length === 0) {
    productContainer.innerHTML = '<div class="empty-message">Khong co san pham phu hop.</div>';
    return;
  }

  var content = '';
  products.forEach(function(product) {
    content += `
      <div class="product-card">
        <div class="product-img-wrap">
          <img src="${product.img}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/250x250?text=No+Image'">
        </div>
        <div class="product-info">
          <span class="product-brand ${product.type && product.type.toLowerCase().indexOf('samsung') !== -1 ? 'brand-samsung' : 'brand-iphone'}">${product.type}</span>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-desc">${product.desc}</p>
          <div class="product-specs">
            <div><strong>Man hinh:</strong> ${product.screen}</div>
            <div><strong>Camera sau:</strong> ${product.backCamera}</div>
            <div><strong>Camera truoc:</strong> ${product.frontCamera}</div>
          </div>
          <div class="product-bottom">
            <span class="product-price">${Number(product.price).toLocaleString()} VND</span>
            <button class="btn btn-primary" onclick="addToCart('${product.id}')">Them vao gio</button>
          </div>
        </div>
      </div>
    `;
  });

  productContainer.innerHTML = content;
}

function filterProducts() {
  var select = document.getElementById('selectType');
  var selectedType = select ? select.value.toLowerCase().trim() : 'all';

  if (selectedType === 'all') {
    renderProducts(productList);
    return;
  }

  var filteredList = productList.filter(function(product) {
    return product.type && product.type.toLowerCase().trim() === selectedType;
  });

  renderProducts(filteredList);
}

function addToCart(productId) {
  var product = productList.find(function(item) {
    return String(item.id) === String(productId);
  });

  if (!product) return;

  var existingIndex = cart.findIndex(function(item) {
    return String(item.product.id) === String(productId);
  });

  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    var newCartItem = new CartItem(product, 1);
    cart.push(newCartItem);
  }

  saveCartToStorage();
  renderCartBadge();
  renderCart();
  showNotification('Da them san pham vao gio hang');
  alert('Da them san pham vao gio hang');
}

function renderCart() {
  var cartBody = document.getElementById('cartTableBody');
  var cartTotalElement = document.getElementById('cartTotal');
  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = '<tr><td colspan="6" class="text-center">Gio hang dang trong</td></tr>';
    if (cartTotalElement) cartTotalElement.innerText = '0 VND';
    return;
  }

  var content = '';
  var total = 0;

  cart.forEach(function(item, index) {
    var itemTotal = item.product.price * item.quantity;
    total += itemTotal;

    content += `
      <tr>
        <td>${index + 1}</td>
        <td>
          <img src="${item.product.img}" alt="${item.product.name}" class="cart-item-img">
          <span>${item.product.name}</span>
        </td>
        <td>${Number(item.product.price).toLocaleString()} VND</td>
        <td>
          <div class="quantity-control">
            <button class="btn-qty" onclick="changeQuantity('${item.product.id}', -1)">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="btn-qty" onclick="changeQuantity('${item.product.id}', 1)">+</button>
          </div>
        </td>
        <td>${Number(itemTotal).toLocaleString()} VND</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="removeFromCart('${item.product.id}')">Xoa</button>
        </td>
      </tr>
    `;
  });

  cartBody.innerHTML = content;
  if (cartTotalElement) {
    cartTotalElement.innerText = Number(total).toLocaleString() + ' VND';
  }
}

function changeQuantity(productId, delta) {
  var index = cart.findIndex(function(item) {
    return String(item.product.id) === String(productId);
  });

  if (index === -1) return;

  var newQty = cart[index].quantity + delta;

  if (newQty > 0) {
    cart[index].quantity = newQty;
  } else {
    var confirmDelete = confirm('Ban co muon xoa san pham nay khoi gio hang khong?');
    if (confirmDelete) {
      cart.splice(index, 1);
    }
  }

  saveCartToStorage();
  renderCart();
  renderCartBadge();
}

function removeFromCart(productId) {
  var index = cart.findIndex(function(item) {
    return String(item.product.id) === String(productId);
  });

  if (index === -1) return;

  cart.splice(index, 1);
  saveCartToStorage();
  renderCart();
  renderCartBadge();
}

function clearCart() {
  if (cart.length === 0) {
    alert('Gio hang dang trong!');
    return;
  }

  var confirmClear = confirm('Ban co chac chan muon xoa toan bo gio hang khong?');
  if (confirmClear) {
    cart = [];
    saveCartToStorage();
    renderCart();
    renderCartBadge();
  }
}

function showNotification(message, type) {
  var toast = document.getElementById('toastNotification');
  if (!toast) return;

  toast.innerText = message;
  toast.className = 'toast-notification show' + (type ? ' ' + type : '');

  setTimeout(function() {
    toast.className = 'toast-notification';
  }, 3500);
}

function checkout() {
  if (cart.length === 0) {
    showNotification('Gio hang cua ban dang trong!', 'error');
    alert('Gio hang cua ban dang trong!');
    return;
  }

  cart = [];
  saveCartToStorage();
  renderCart();
  renderCartBadge();
  closeCartModal();

  showNotification('Thanh toan don hang thanh cong! Cam on quy khach.');
  alert('Thanh toan don hang thanh cong! Cam on quy khach.');
}

function saveCartToStorage() {
  localStorage.setItem('CART_LIST', JSON.stringify(cart));
}

function loadCartFromStorage() {
  var storedCart = localStorage.getItem('CART_LIST');
  if (storedCart) {
    try {
      cart = JSON.parse(storedCart);
    } catch (e) {
      cart = [];
    }
  } else {
    cart = [];
  }
}

function renderCartBadge() {
  var badge = document.getElementById('cartBadge');
  if (!badge) return;

  var totalQty = cart.reduce(function(sum, item) {
    return sum + item.quantity;
  }, 0);

  badge.innerText = totalQty;
}

function openCartModal() {
  var modal = document.getElementById('cartModal');
  if (modal) {
    renderCart();
    modal.classList.add('active');
  }
}

function closeCartModal() {
  var modal = document.getElementById('cartModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  init();
});
