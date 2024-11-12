# Web SSH Terminal

Ứng dụng Web SSH Terminal cho phép bạn kết nối tới máy chủ VPS Ubuntu từ trình duyệt, sử dụng giao diện dòng lệnh Xterm. Người dùng có thể nhập các thông tin như địa chỉ IP, port, username, và password để kết nối, cũng như ngắt kết nối khi cần thiết.

## Tính năng
- Kết nối SSH đến VPS Ubuntu từ giao diện web.
- Giao diện terminal trực quan sử dụng thư viện Xterm.js.
- Thông báo trạng thái kết nối thành công hoặc thất bại.
- Nút ngắt kết nối khi không cần thiết.

## Yêu cầu hệ thống
- Node.js
- npm (đi kèm với Node.js)

## Cài đặt

1. **Clone repository**
    ```bash
    git clone https://github.com/quandohong28/ssh-term.git
    cd ssh-term
    ```

2. **Cài đặt các gói phụ thuộc**
    ```bash
    npm install
    ```

3. **Chạy ứng dụng**
    ```bash
    node server.js
    ```

4. **Truy cập ứng dụng**
    Mở trình duyệt và truy cập: [http://localhost:3000](http://localhost:3000)

## Sử dụng
1. Nhập `IP`, `Port`, `Username`, và `Password` của VPS vào các ô input.
2. Nhấn **Connect** để kết nối đến VPS.
3. Khi kết nối thành công, bạn có thể nhập các lệnh vào terminal.
4. Để ngắt kết nối, nhấn **Disconnect**.

## Cấu trúc dự án

- **server.js**: Server Node.js dùng Express và Socket.io để quản lý kết nối SSH và giao tiếp với client.
- **public/index.html**: Giao diện người dùng với Xterm.js để hiển thị giao diện dòng lệnh và các điều khiển kết nối.

## Các thư viện sử dụng
- [Express](https://expressjs.com/): Khung công tác web đơn giản cho Node.js.
- [Xterm.js](https://xtermjs.org/): Thư viện giao diện terminal trên web.
- [Socket.io](https://socket.io/): Thư viện cho kết nối thời gian thực giữa server và client.
- [ssh2](https://www.npmjs.com/package/ssh2): Thư viện cho phép thực hiện kết nối SSH từ Node.js.

## Lưu ý bảo mật
- Không chia sẻ thông tin đăng nhập SSH công khai.
- Cân nhắc sử dụng SSH key thay vì mật khẩu.
- Bảo vệ ứng dụng bằng SSL nếu triển khai trên môi trường công khai.

## Đóng góp
Mọi đóng góp đều được hoan nghênh! Vui lòng tạo một pull request hoặc mở một issue để báo lỗi hoặc đề xuất tính năng mới.

## Giấy phép
Dự án này được cấp phép theo [MIT License](LICENSE).
