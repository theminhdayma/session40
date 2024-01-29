// Kiểm tra local khi trang web được tải
document.addEventListener('DOMContentLoaded', function() {
    checkUser();
});

// Kiểm tra xem tên người dùng đã tồn tại trong local hay chưa
function checkUser() {
    const userName = localStorage.getItem('userName'); // Lấy giá trị tên người dùng từ local
    if (userName) {// Nếu tên người dùng đã tồn tại
        // Ẩn phần tử form thêm người dùng
        document.getElementById('addUserForm').style.display = 'none'; //ẩn
        // Hiển thị phần tử thông tin người dùng
        document.getElementById('userInfo').style.display = 'block'; //hiện
        // Hiển thị tên người dùng
        document.getElementById('userNameDisplay').textContent = "Tên người dùng: " + userName; 
    }
}

// Thêm tên người dùng vào local
function addUser() {
    let userName = document.getElementById('userName').value;
    if (userName) {// Nếu tên người dùng không rỗng
        // Thêm tên người dùng vào local
        localStorage.setItem('userName', userName);
        checkUser();
    }
}

// Xóa tên người dùng khỏi local
function deleteUser() {
    localStorage.removeItem('userName'); // Xóa tên người dùng khỏi local
    // Hiển thị lại form thêm người dùng
    document.getElementById('addUserForm').style.display = 'block'; //hiện
    // Ẩn phần tử thông tin người dùng
    document.getElementById('userInfo').style.display = 'none'; //ẩn
    // Xóa giá trị trường nhập liệu
    document.getElementById('userName').value = ''; 
}
