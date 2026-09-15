const BASE_URL = 'https://6aa7e1fc9b08676cd32b9c0c.mockapi.io/products-data';
function getLocalList() {
  var data = localStorage.getItem('MOCK_PRODUCTS');
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      return DEFAULT_PRODUCTS.slice();
    }
  }
  localStorage.setItem('MOCK_PRODUCTS', JSON.stringify(DEFAULT_PRODUCTS));
  return DEFAULT_PRODUCTS.slice();
}

function saveLocalList(list) {
  localStorage.setItem('MOCK_PRODUCTS', JSON.stringify(list));
}

const adminProductService = {
  getProducts: function () {
    return axios.get(BASE_URL)
      .then(function (res) {
        saveLocalList(res.data);
        return res.data;
      })
      .catch(function (err) {
        console.warn('API error, using local data fallback:', err);
        return getLocalList();
      });
  },

  getProductById: function (id) {
    return axios.get(`${BASE_URL}/${id}`)
      .then(function (res) {
        return res.data;
      })
      .catch(function (err) {
        console.warn('API error, finding in local data fallback:', err);
        var list = getLocalList();
        var item = list.find(function (p) { return String(p.id) === String(id); });
        if (item) return item;
        throw new Error('Khong tim thay san pham');
      });
  },

  addProduct: function (product) {
    return axios.post(BASE_URL, product)
      .then(function (res) {
        return res.data;
      })
      .catch(function (err) {
        console.warn('API error, saving to local data fallback:', err);
        var list = getLocalList();
        var newId = Date.now().toString();
        var newProduct = Object.assign({}, product, { id: newId });
        list.push(newProduct);
        saveLocalList(list);
        return newProduct;
      });
  },

  updateProduct: function (id, product) {
    return axios.put(`${BASE_URL}/${id}`, product)
      .then(function (res) {
        return res.data;
      })
      .catch(function (err) {
        console.warn('API error, updating in local data fallback:', err);
        var list = getLocalList();
        var index = list.findIndex(function (p) { return String(p.id) === String(id); });
        if (index !== -1) {
          list[index] = Object.assign({}, product, { id: id });
          saveLocalList(list);
          return list[index];
        }
        throw new Error('Khong the cap nhat');
      });
  },

  deleteProduct: function (id) {
    return axios.delete(`${BASE_URL}/${id}`)
      .then(function (res) {
        return res.data;
      })
      .catch(function (err) {
        console.warn('API error, deleting from local data fallback:', err);
        var list = getLocalList();
        list = list.filter(function (p) { return String(p.id) !== String(id); });
        saveLocalList(list);
        return { message: 'Da xoa thanh cong' };
      });
  }
};
