const BASE_URL = 'https://6aa7e1fc9b08676cd32b9c0c.mockapi.io/products-data';

const DEFAULT_PRODUCTS = [
  {
    "id": "1",
    "name": "iphoneX",
    "price": 1000,
    "screen": "screen 68",
    "backCamera": "2 camera 12 MP",
    "frontCamera": "7 MP",
    "img": "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
    "desc": "Thiết kế mang tính đột phá",
    "type": "iphone"
  },
  {
    "id": "2",
    "name": "Samsung Galaxy M51",
    "price": 3500,
    "screen": "screen 69",
    "backCamera": "Chính 64 MP & Phụ 12 MP, 5 MP, 5 MP",
    "frontCamera": "32 MP",
    "img": "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
    "desc": "Thiết kế đột phá, màn hình tuyệt đỉnh",
    "type": "Samsung"
  },
  {
    "id": "3",
    "name": "Samsung Galaxy M22",
    "price": 45000,
    "screen": "screen 70",
    "backCamera": "Chính 12 MP & Phụ 64 MP, 12 MP",
    "frontCamera": "32 MP",
    "img": "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
    "desc": "Thiết kế mang tính đột phá",
    "type": "Samsung"
  },
  {
    "id": "4",
    "name": "Iphone 11",
    "price": 1000,
    "screen": "screen 54",
    "backCamera": "Camera: Chính 12 MP & Phụ 64 MP, 12 MP",
    "frontCamera": "32 MP",
    "img": "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-pro-max-256gb-didongviet_23.jpg",
    "desc": "Thiết kế đột phá, màn hình tuyệt đỉnh",
    "type": "Iphone"
  }
];

const productService = {
  getProducts: function() {
    return axios.get(BASE_URL)
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.warn('Khong the ket noi MockAPI, su dung du lieu du phong:', error);
        var localData = localStorage.getItem('MOCK_PRODUCTS');
        if (localData) {
          return JSON.parse(localData);
        }
        localStorage.setItem('MOCK_PRODUCTS', JSON.stringify(DEFAULT_PRODUCTS));
        return DEFAULT_PRODUCTS;
      });
  }
};
