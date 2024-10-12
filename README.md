# Hướng Dẫn Deploy và Code giữa BE và FE

## 1. Thay đổi Domain khi Code Local và Khi Deploy

- **Khi code ở local**:  
  Mở file `index.js` trong thư mục `api` và **đổi domain** như sau:

  ```javascript
  const domain = "http://localhost:9999/api";
  ```

- **Khi commit và deploy lên server**:  
  Trước khi commit, **đổi lại domain** về:

  ```javascript
  const domain = "https://foodtrip-server.onrender.com/api";
  ```

- **Các đầu API**: Các API được định nghĩa trong thư mục `api` để tiện quản lý và deploy.

---

## 2. Quy tắc trả về dữ liệu trong API từ BE

Khi xây dựng API từ phía **Backend**, API cần **trả về dữ liệu với cấu trúc chuẩn** dưới đây, bất kể request thành công hay lỗi:

1. **`status`**: Mã trạng thái HTTP (VD: 200, 201, 400, 404,...).
2. **`message`**: Thông báo **bằng tiếng Việt** để dễ hiển thị cho người dùng phía FE.
3. **`data`** (nếu có): Các dữ liệu trả về như thông tin `user`, `product`,...

### Ví dụ Response API:

#### Trường hợp thành công:

```json
{
  "status": 200,
  "message": "Lấy dữ liệu thành công",
  "data": {
    "user": {
      "id": 1,
      "name": "Nguyen Van A"
    }
  }
}
```

#### Trường hợp lỗi:

```json
{
  "status": 404,
  "message": "Không tìm thấy sản phẩm"
}
```

---

## 3. Danh Sách Các Status Code Có Thể Trả Về

Dưới đây là các mã trạng thái HTTP thông dụng được sử dụng trong quá trình phát triển API:

### Nhóm 2xx: Thành Công

- **200 OK**: Request thành công và trả về kết quả như mong đợi.
- **201 Created**: Tài nguyên mới đã được tạo thành công.
- **204 No Content**: Request thành công nhưng không có nội dung trả về.

### Nhóm 3xx: Chuyển Hướng

- **301 Moved Permanently**: Tài nguyên đã được di chuyển vĩnh viễn sang URL mới.
- **302 Found**: Tài nguyên tạm thời được chuyển hướng đến URL khác.

### Nhóm 4xx: Lỗi từ Client

- **400 Bad Request**: Request không hợp lệ hoặc thiếu tham số cần thiết.
- **401 Unauthorized**: Người dùng chưa xác thực hoặc xác thực không hợp lệ.
- **403 Forbidden**: Người dùng không có quyền truy cập tài nguyên.
- **404 Not Found**: Không tìm thấy tài nguyên yêu cầu.
- **409 Conflict**: Có xung đột với trạng thái hiện tại của tài nguyên (VD: Trùng lặp dữ liệu).

### Nhóm 5xx: Lỗi từ Server

- **500 Internal Server Error**: Lỗi không xác định từ phía server.
- **502 Bad Gateway**: Server nhận được phản hồi không hợp lệ từ upstream server.
- **503 Service Unavailable**: Server tạm thời không khả dụng.
- **504 Gateway Timeout**: Request tới server khác bị timeout.

---

## 4. Quy định về cấu trúc code BE

- **Tất cả code logic** phải được đặt **bên trong thư mục `Route`**.
- **Không được viết code logic ra ngoài** thư mục này để đảm bảo tổ chức code rõ ràng và dễ quản lý.

---

## 5. Lưu ý khi Deploy

- **Kiểm tra domain** trong `index.js` trước khi commit và deploy:
  - Ở local: `http://localhost:9999/api`
  - Khi deploy: `https://foodtrip-server.onrender.com/api`
- **Đảm bảo API** luôn trả về đúng cấu trúc `status`, `message`, và `data` (nếu cần).

---

Nếu có bất kỳ câu hỏi hay lỗi phát sinh trong quá trình deploy, vui lòng liên hệ với đội ngũ phát triển.

### Giải Thích Chi Tiết:

1. **Phần thay đổi domain**: Hướng dẫn rõ ràng về việc sử dụng domain phù hợp cho môi trường local và production.
2. **Quy tắc trả về dữ liệu**: Đảm bảo mọi API tuân theo một cấu trúc chuẩn với `status`, `message`, và `data`.
3. **Danh sách mã trạng thái HTTP**: Cung cấp cho các lập trình viên backend những mã trạng thái thông dụng nhất để sử dụng trong API.
4. **Quy định về cấu trúc code**: Đảm bảo mọi logic API được tổ chức và viết đúng nơi quy định.
5. **Lưu ý khi deploy**: Nhắc nhở kiểm tra domain trước khi commit để tránh lỗi trong môi trường production.
6. **Liên hệ**: Giúp đảm bảo rằng người dùng biết cách nhận hỗ trợ nếu gặp vấn đề.

Nếu bạn cần thêm bất kỳ chỉnh sửa hoặc bổ sung nào, hãy cho mình biết!
