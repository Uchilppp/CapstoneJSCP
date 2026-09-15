# RULES - CAPSTONE JAVASCRIPT

## 1. Mục tiêu

Thực hiện bài tập Capstone JavaScript đúng theo yêu cầu trong tài liệu đề bài và tài liệu gợi ý được cung cấp.

Ưu tiên:
- Làm đúng yêu cầu bài tập.
- Code vừa đủ để hoàn thành bài.
- Dễ đọc, dễ hiểu, phù hợp trình độ bài học.
- Không tự ý mở rộng chức năng ngoài đề.
- Không code lan man hoặc tạo kiến trúc phức tạp không cần thiết.

Không được biến bài tập thành một dự án production hoặc framework phức tạp nếu đề bài không yêu cầu.

---

## 2. Nguyên tắc bắt buộc

### 2.1. Bám sát đề bài

Chỉ triển khai các chức năng có trong đề:

### Phần Customer

1. Tạo API Product bằng MockAPI.
2. Xây dựng lớp đối tượng `Products`.
3. Hiển thị danh sách sản phẩm.
4. Lọc sản phẩm theo loại:
   - `samsung`
   - `iphone`
5. Cho phép thêm sản phẩm vào giỏ hàng.
6. Sử dụng đối tượng riêng cho sản phẩm trong giỏ hàng, có `quantity`.
7. Nếu sản phẩm chưa có trong cart:
   - Thêm sản phẩm vào cart.
   - `quantity = 1`.
8. Nếu sản phẩm đã có trong cart:
   - Không thêm object mới.
   - Tăng `quantity` lên 1.
9. Render giỏ hàng.
10. Cho phép tăng/giảm số lượng.
11. Tính và hiển thị tổng tiền.
12. Lưu cart vào `localStorage`.
13. Khi mở lại trang phải load cart từ `localStorage`.
14. Thanh toán thì clear cart.
15. Cho phép xóa sản phẩm khỏi cart.

### Phần Admin

1. Sử dụng Axios để call API.
2. Hiển thị danh sách sản phẩm.
3. Thêm sản phẩm.
4. Xóa sản phẩm.
5. Cập nhật sản phẩm.
6. Validation dữ liệu.
7. Tìm kiếm sản phẩm theo tên.
8. Sắp xếp sản phẩm theo giá:
   - Từ lớn đến bé.
   - Từ bé đến lớn.

### Giao diện

- Sử dụng SASS.
- Có responsive.
- Có phần Customer.
- Có phần Admin.
- Code phải được tổ chức rõ ràng.

---

## 3. Không được tự ý thêm chức năng

Không tự ý thêm các chức năng sau nếu đề bài không yêu cầu:

- Đăng nhập / đăng ký.
- Phân quyền tài khoản.
- Backend riêng.
- Database riêng ngoài MockAPI.
- Thanh toán thật.
- Đặt hàng thật.
- Quản lý đơn hàng.
- Quản lý người dùng.
- Wishlist.
- Review / đánh giá.
- Mã giảm giá.
- Dark mode.
- Animation phức tạp.
- Notification phức tạp.
- Chat.
- JWT.
- Redux.
- TypeScript.
- React / Vue / Angular.
- Node.js backend.
- API hoặc thư viện ngoài những gì cần thiết cho bài.

Nếu một chức năng không nằm trong đề bài hoặc tài liệu gợi ý thì không tự triển khai.

Nếu cần thiết phải thêm để chức năng chính hoạt động, chỉ thêm phần tối thiểu cần thiết.

---

## 4. Không code lan man

Mỗi file chỉ chứa những phần cần thiết cho chức năng của file đó.

Không:
- Tạo quá nhiều class không cần thiết.
- Tạo quá nhiều function chỉ để tách code nhỏ.
- Tạo design pattern phức tạp.
- Tạo service/repository/controller nếu bài không cần.
- Tạo component hoặc module phức tạp.
- Viết code dư thừa.
- Tạo file chỉ để chứa một đoạn code rất nhỏ nếu không có lý do rõ ràng.
- Comment dài dòng giải thích những điều hiển nhiên.

Ưu tiên code đơn giản, trực tiếp và phù hợp với kiến thức JavaScript cơ bản đã học.

---

## 5. Không tự ý thay đổi công nghệ

Ưu tiên sử dụng:

- HTML
- CSS / SASS
- JavaScript
- Axios
- MockAPI
- localStorage

Không tự ý chuyển sang framework hoặc công nghệ khác.

Nếu project hiện tại đã có cấu trúc hoặc thư viện được cung cấp, phải tận dụng cấu trúc hiện tại thay vì tự xây dựng lại toàn bộ.

---

## 6. Cấu trúc thư mục

Theo tài liệu gợi ý:

- `admin/`: code cho phần Quản trị viên.
- `customer/`: code cho phần Người dùng khách hàng.
- `asset/`: hình ảnh, CSS/SASS và tài nguyên dùng chung.
- `index.html`: trang lựa chọn hoặc trang chính của Customer, tùy cấu trúc project hiện tại.

Đối với SASS, tổ chức theo hướng 7-1 nếu project yêu cầu tổ chức SASS.

Không tạo thêm cấu trúc thư mục phức tạp nếu không cần thiết.

---

## 7. Quy tắc xử lý Product

Product phải được xử lý thông qua lớp đối tượng `Products` theo yêu cầu bài.

Khi lấy dữ liệu từ API:
- Chuyển dữ liệu về object phù hợp.
- Sử dụng object đó để render giao diện.
- Không xử lý dữ liệu một cách tùy tiện ở nhiều nơi.

Không tự ý thêm thuộc tính Product nếu không cần thiết.

Nếu API hiện tại đã có các thuộc tính cụ thể thì phải sử dụng đúng các thuộc tính đó.

---

## 8. Quy tắc xử lý Cart

Cart là một mảng chứa các object cart item.

Không push trực tiếp Product vào cart nếu thiếu `quantity`.

Khi thêm sản phẩm:

```text
Nếu sản phẩm chưa tồn tại:
    tạo cart item
    quantity = 1
    push vào cart

Nếu sản phẩm đã tồn tại:
    tăng quantity lên 1
```

Khi tăng/giảm số lượng:
- Tìm sản phẩm theo `id`.
- Thay đổi `quantity`.
- Render lại cart.

Khi xóa:
- Tìm sản phẩm theo `id`.
- Xóa khỏi cart.
- Render lại cart.

Tổng tiền:

```text
tổng tiền = tổng của (price * quantity)
```

Sau mỗi thay đổi cart cần cập nhật giao diện và `localStorage` khi phù hợp.

---

## 9. localStorage

Cart phải được lưu vào `localStorage`.

Khi trang được mở:
- Kiểm tra dữ liệu cart trong `localStorage`.
- Nếu có dữ liệu thì load lại.
- Nếu không có thì sử dụng mảng rỗng.

Khi cart thay đổi:
- Cập nhật lại `localStorage`.

Khi thanh toán:
- Xóa dữ liệu cart.
- Đưa cart về `[]`.
- Render lại giao diện.

Không sử dụng database khác để lưu cart nếu đề không yêu cầu.

---

## 10. API

Customer:
- Call API để lấy danh sách sản phẩm.

Admin:
- Sử dụng Axios để thực hiện các thao tác API:
  - GET
  - POST
  - DELETE
  - PUT/PATCH nếu phù hợp với API hiện tại.

Không tự tạo backend mới.

Không thay đổi endpoint nếu chưa kiểm tra project hiện tại.

Trước khi sửa API code, phải kiểm tra:
- URL API hiện tại.
- Cấu trúc object Product.
- Tên thuộc tính.
- ID của sản phẩm.

---

## 11. Validation

Validation chỉ cần đáp ứng yêu cầu bài.

Kiểm tra các dữ liệu bắt buộc của form Product.

Không cần xây dựng hệ thống validation phức tạp.

Thông báo lỗi phải ngắn gọn, rõ ràng và dễ hiểu.

Không thêm thư viện validation nếu JavaScript cơ bản đã đủ.

---

## 12. Search và Sort

### Search

Tìm kiếm sản phẩm theo tên.

- Không cần xây dựng hệ thống search nâng cao.
- Chỉ cần đáp ứng đúng chức năng đề bài.
- Xử lý trường hợp không có kết quả một cách đơn giản.

### Sort

Cho phép sắp xếp theo giá:

```text
Giá giảm dần: lớn -> bé
Giá tăng dần: bé -> lớn
```

Không thêm các kiểu sort khác nếu đề không yêu cầu.

---

## 13. UI và SASS

Giao diện phải:
- Đủ để demo bài.
- Dễ sử dụng.
- Hiển thị rõ sản phẩm.
- Hiển thị rõ cart.
- Admin dễ thao tác.
- Responsive ở mức cần thiết.

Không cần thiết kế quá cầu kỳ.

Không sao chép một template lớn nếu không cần.

Có thể tham khảo UI trong tài liệu nhưng không được vì tham khảo mà tự ý mở rộng chức năng.

---

## 14. Responsive

Responsive cần đảm bảo:
- Desktop hiển thị đúng.
- Tablet không bị vỡ layout.
- Mobile có thể sử dụng được.
- Product không tràn màn hình.
- Cart không làm vỡ giao diện.

Chỉ xử lý responsive ở mức cần thiết cho bài.

---

## 15. HTML / CSS / JavaScript

Ưu tiên:
- HTML semantic và dễ hiểu.
- Class name rõ ràng.
- JavaScript dễ đọc.
- Function có tên thể hiện đúng nhiệm vụ.
- Tránh code trùng lặp khi có thể xử lý đơn giản.

Không tối ưu quá mức.

Không minify code trong quá trình phát triển.

---

## 16. Comment và ghi chú

Không thêm comment hoặc note lung tung.

Chỉ comment khi:
- Logic thực sự khó hiểu.
- Có đoạn xử lý đặc biệt cần giải thích.

Không viết:
- Comment dài.
- Comment mô tả từng dòng code.
- TODO không cần thiết.
- Ghi chú cá nhân.
- Emoji.
- Icon trong code hoặc giao diện nếu đề không yêu cầu.

---

## 17. Khi sửa project hiện tại

Trước khi sửa:
1. Đọc cấu trúc project.
2. Kiểm tra các file hiện có.
3. Kiểm tra code đang hoạt động.
4. Xác định phần nào liên quan đến yêu cầu bài.

Sau đó:
- Chỉ sửa phần cần thiết.
- Không xóa code đang dùng được nếu không có lý do.
- Không viết lại toàn bộ project nếu chỉ cần sửa một chức năng.
- Không tạo file mới nếu file hiện tại có thể xử lý hợp lý.

Nếu code hiện tại đã đáp ứng yêu cầu thì không thay đổi chỉ để làm khác đi.

---

## 18. Khi gặp lỗi

Ưu tiên sửa lỗi trực tiếp.

Quy trình:
1. Xác định lỗi.
2. Tìm file gây lỗi.
3. Kiểm tra nguyên nhân.
4. Sửa tối thiểu.
5. Kiểm tra lại chức năng liên quan.

Không được:
- Viết lại toàn bộ project chỉ vì một lỗi nhỏ.
- Thêm thư viện để che lỗi.
- Thay đổi kiến trúc nếu không cần.

---

## 19. Không tự suy diễn yêu cầu

Nếu đề bài không nói rõ:
- Không tự thêm chức năng.
- Không tự thêm nghiệp vụ.
- Không tự thêm database.
- Không tự thêm API.
- Không tự thêm màn hình.

Nếu có nhiều cách triển khai hợp lệ:
- Chọn cách đơn giản nhất.
- Phù hợp với kiến thức JavaScript của bài.
- Ít file và ít code dư thừa nhất.

Nếu một quyết định có thể làm thay đổi phạm vi bài tập, phải hỏi trước khi thực hiện.

---

## 20. Mức độ hoàn thiện

Mục tiêu là hoàn thành đúng bài tập, không phải xây dựng sản phẩm thương mại.

Thứ tự ưu tiên:

1. Chức năng đúng.
2. Đúng yêu cầu đề.
3. Code dễ hiểu.
4. Giao diện đủ dùng.
5. Responsive.
6. Tổ chức code hợp lý.
7. Sau cùng mới tối ưu nếu thật sự cần.

Không hy sinh sự đơn giản để làm code "xịn" hơn.

---

## 21. Kiểm tra trước khi hoàn thành

Trước khi báo hoàn thành, kiểm tra lần lượt:

### Customer
- [ ] Lấy Product từ API.
- [ ] Có class `Products`.
- [ ] Render danh sách Product.
- [ ] Filter Samsung.
- [ ] Filter iPhone.
- [ ] Add to cart.
- [ ] Không tạo cart item trùng.
- [ ] Quantity hoạt động.
- [ ] Tăng quantity.
- [ ] Giảm quantity.
- [ ] Remove Product.
- [ ] Tính tổng tiền.
- [ ] Lưu cart vào localStorage.
- [ ] Load cart từ localStorage.
- [ ] Thanh toán và clear cart.

### Admin
- [ ] GET danh sách Product.
- [ ] Thêm Product.
- [ ] Xóa Product.
- [ ] Cập nhật Product.
- [ ] Validation.
- [ ] Search theo tên.
- [ ] Sort giá tăng dần.
- [ ] Sort giá giảm dần.

### Giao diện
- [ ] SASS hoạt động.
- [ ] Customer hoạt động.
- [ ] Admin hoạt động.
- [ ] Responsive cơ bản.
- [ ] Không có layout bị vỡ.

---

## 22. Quy tắc đầu ra của Agent

Khi thực hiện task:
- Không giải thích dài dòng nếu không được hỏi.
- Không đưa ra hàng loạt phương án không cần thiết.
- Không tạo tài liệu lý thuyết dài.
- Không thêm icon.
- Không thêm emoji.
- Không thêm note linh tinh.
- Không tự quảng bá hoặc giải thích những thứ ngoài bài.

Khi hoàn thành một task, chỉ cần nêu:
1. Đã làm gì.
2. File nào đã thay đổi.
3. Nếu còn lỗi hoặc phần chưa làm được thì nói rõ.

---

## 23. Quy tắc quan trọng nhất

Bài làm phải **đúng đề, đủ chức năng, vừa sức, dễ hiểu và không vượt quá phạm vi bài tập**.

Nếu một đoạn code không cần thiết để đáp ứng yêu cầu bài thì không viết.

Nếu một chức năng không nằm trong đề thì không thêm.

Nếu có thể giải quyết bằng JavaScript cơ bản thì không dùng giải pháp phức tạp hơn.

Không biến bài tập Capstone JavaScript thành một project có kiến trúc vượt quá nội dung được yêu cầu.
