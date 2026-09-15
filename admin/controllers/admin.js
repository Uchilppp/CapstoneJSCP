var adminProductList = [];
var currentEditingId = null;

function initAdmin() {
  fetchAdminProducts();
}

function fetchAdminProducts() {
  adminProductService.getProducts()
    .then(function(data) {
      adminProductList = data.map(function(item) {
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
      renderAdminTable(adminProductList);
    })
    .catch(function(error) {
      console.error('Loi khi lay danh sach san pham:', error);
    });
}

function renderAdminTable(list) {
  var tbody = document.getElementById('adminTableBody');
  if (!tbody) return;

  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" class="text-center">Khong co san pham nao</td></tr>';
    return;
  }

  var content = '';
  list.forEach(function(product, index) {
    content += `
      <tr>
        <td>${index + 1}</td>
        <td><strong>${product.name}</strong></td>
        <td>${Number(product.price).toLocaleString()} VND</td>
        <td>
          <img src="${product.img}" alt="${product.name}" class="table-product-img" onerror="this.src='https://via.placeholder.com/60x60?text=No+Img'">
        </td>
        <td>
          <span class="badge-brand ${product.type && product.type.toLowerCase().indexOf('samsung') !== -1 ? 'badge-samsung' : 'badge-iphone'}">
            ${product.type}
          </span>
        </td>
        <td>
          <small>
            Man hinh: ${product.screen}<br>
            Cam sau: ${product.backCamera}<br>
            Cam truoc: ${product.frontCamera}
          </small>
        </td>
        <td><div class="desc-truncate" title="${product.desc}">${product.desc}</div></td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="openEditModal('${product.id}')">Sua</button>
          <button class="btn btn-danger btn-sm" onclick="handleDeleteProduct('${product.id}')">Xoa</button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = content;
}

function validateProductForm() {
  var isValid = true;

  var name = document.getElementById('productName').value.trim();
  var price = document.getElementById('productPrice').value.trim();
  var screen = document.getElementById('productScreen').value.trim();
  var backCamera = document.getElementById('productBackCamera').value.trim();
  var frontCamera = document.getElementById('productFrontCamera').value.trim();
  var img = document.getElementById('productImg').value.trim();
  var desc = document.getElementById('productDesc').value.trim();
  var type = document.getElementById('productType').value.trim();

  // Reset errors
  document.querySelectorAll('.error-feedback').forEach(function(el) {
    el.innerText = '';
  });

  if (!name) {
    document.getElementById('errName').innerText = 'Ten san pham khong duoc de trong';
    isValid = false;
  }

  if (!price) {
    document.getElementById('errPrice').innerText = 'Gia san pham khong duoc de trong';
    isValid = false;
  } else if (isNaN(price) || Number(price) <= 0) {
    document.getElementById('errPrice').innerText = 'Gia phai la so duong lon hon 0';
    isValid = false;
  }

  if (!screen) {
    document.getElementById('errScreen').innerText = 'Thong so man hinh khong duoc de trong';
    isValid = false;
  }

  if (!backCamera) {
    document.getElementById('errBackCamera').innerText = 'Camera sau khong duoc de trong';
    isValid = false;
  }

  if (!frontCamera) {
    document.getElementById('errFrontCamera').innerText = 'Camera truoc khong duoc de trong';
    isValid = false;
  }

  if (!img) {
    document.getElementById('errImg').innerText = 'Hinh anh khong duoc de trong';
    isValid = false;
  } else if (!/^https?:\/\/.+/.test(img)) {
    document.getElementById('errImg').innerText = 'Link hinh anh phai bat dau bang http:// hoac https://';
    isValid = false;
  }

  if (!desc) {
    document.getElementById('errDesc').innerText = 'Mo ta san pham khong duoc de trong';
    isValid = false;
  }

  if (!type) {
    document.getElementById('errType').innerText = 'Vui long chon loai san pham';
    isValid = false;
  }

  return isValid;
}

function handleSaveProduct() {
  if (!validateProductForm()) {
    return;
  }

  var name = document.getElementById('productName').value.trim();
  var price = Number(document.getElementById('productPrice').value.trim());
  var screen = document.getElementById('productScreen').value.trim();
  var backCamera = document.getElementById('productBackCamera').value.trim();
  var frontCamera = document.getElementById('productFrontCamera').value.trim();
  var img = document.getElementById('productImg').value.trim();
  var desc = document.getElementById('productDesc').value.trim();
  var type = document.getElementById('productType').value.trim();

  var productData = {
    name: name,
    price: price,
    screen: screen,
    backCamera: backCamera,
    frontCamera: frontCamera,
    img: img,
    desc: desc,
    type: type
  };

  if (currentEditingId) {
    adminProductService.updateProduct(currentEditingId, productData)
      .then(function() {
        alert('Cap nhat san pham thanh cong!');
        closeProductModal();
        fetchAdminProducts();
      })
      .catch(function(error) {
        alert('Cap nhat san pham that bai!');
        console.error(error);
      });
  } else {
    adminProductService.addProduct(productData)
      .then(function() {
        alert('Them san pham moi thanh cong!');
        closeProductModal();
        fetchAdminProducts();
      })
      .catch(function(error) {
        alert('Them san pham that bai!');
        console.error(error);
      });
  }
}

function handleDeleteProduct(id) {
  var isConfirm = confirm('Ban co chac chan muon xoa san pham nay?');
  if (!isConfirm) return;

  adminProductService.deleteProduct(id)
    .then(function() {
      alert('Da xoa san pham thanh cong!');
      fetchAdminProducts();
    })
    .catch(function(error) {
      alert('Xoa san pham that bai!');
      console.error(error);
    });
}

function openAddModal() {
  currentEditingId = null;
  document.getElementById('modalTitle').innerText = 'Them San Pham Moi';
  document.getElementById('productForm').reset();
  document.querySelectorAll('.error-feedback').forEach(function(el) {
    el.innerText = '';
  });
  document.getElementById('productModal').classList.add('active');
}

function openEditModal(id) {
  currentEditingId = id;
  document.getElementById('modalTitle').innerText = 'Cap Nhat San Pham';
  document.querySelectorAll('.error-feedback').forEach(function(el) {
    el.innerText = '';
  });

  adminProductService.getProductById(id)
    .then(function(product) {
      document.getElementById('productName').value = product.name;
      document.getElementById('productPrice').value = product.price;
      document.getElementById('productScreen').value = product.screen;
      document.getElementById('productBackCamera').value = product.backCamera;
      document.getElementById('productFrontCamera').value = product.frontCamera;
      document.getElementById('productImg').value = product.img;
      document.getElementById('productDesc').value = product.desc;
      document.getElementById('productType').value = product.type;

      document.getElementById('productModal').classList.add('active');
    })
    .catch(function(err) {
      alert('Khong the lay thong tin san pham!');
      console.error(err);
    });
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('active');
}

function handleSearch() {
  var keyword = document.getElementById('searchProduct').value.trim().toLowerCase();
  if (!keyword) {
    applySortAndRender(adminProductList);
    return;
  }

  var searchResults = adminProductList.filter(function(product) {
    return product.name.toLowerCase().includes(keyword);
  });

  applySortAndRender(searchResults);
}

function handleSort() {
  var keyword = document.getElementById('searchProduct').value.trim().toLowerCase();
  var currentList = adminProductList;
  if (keyword) {
    currentList = adminProductList.filter(function(product) {
      return product.name.toLowerCase().includes(keyword);
    });
  }
  applySortAndRender(currentList);
}

function applySortAndRender(list) {
  var sortValue = document.getElementById('sortPrice').value;
  var sortedList = list.slice();

  if (sortValue === 'asc') {
    sortedList.sort(function(a, b) {
      return Number(a.price) - Number(b.price);
    });
  } else if (sortValue === 'desc') {
    sortedList.sort(function(a, b) {
      return Number(b.price) - Number(a.price);
    });
  }

  renderAdminTable(sortedList);
}

document.addEventListener('DOMContentLoaded', function() {
  initAdmin();
});
