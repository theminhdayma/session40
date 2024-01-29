    // Học lưu trữ dữ liệu trong local

    // Kiểu dũ liệu JSON là gì ? Uứng dụng của nó
    //1. Chuyển đổi kiểu dữ liệu Javascript sang kiểu JSON
    let users = {
        id: 1,
        name: "Nguyễn Thế Minh",
        age: 18,
    };

    let user = [
        {
            id: 1,
            name: "Nguyễn Thế Minh",
            age: 18,
        },
        {
            id: 1,
            name: "Nguyễn Thế Minh",
            age: 18,
        }
    ];
    let userJson = JSON.stringify(users);
    console.log("Kiểu dữ liệu sau khi chuyển đổi là: ", userJson);

    //2. Chuyển đổi từ kiểu json sang javaScript 
    let userJS = JSON.parse(userJson);
    console.log("Dữ liệu sau khi chuyển sang javascript: ", userJS);

    // Lưu trữ  dữ liệu lên lacol
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(user));

    // Lấy dữ liệu từ localStorage
    let listUser = localStorage.getItem("users");
    //Cách 1:
    // let listUserParser1 = JSON.parse(listUser);
    // Cách 2:
    let listUserParser2 = JSON.parse(localStorage.getItem("users"));

    console.log("Dữ liệu sau khi lấy ra từ localStorage là: ", listUser);
    console.log("Dữ liệu sau khi lấy ra từ localStorage là: ", listUserParser2);

    // Xóa dữ liệu khỏi localStorage theo key
    localStorage.removeItem("users");

    // Xóa tất cả dữ liệu khỏi localStorage
    localStorage.clear();

    //Xây dựng ứng dụng todoList
    //1. Thêm mới công việc lên local và hiển thị danh sách ra ngoài giao diện
    //2. Có 1 nút khi click vào nút Delete hiển thị model xác nhận xóa
    // Nếu cancel thì xóa
    //Nếu OK thì xóa
    //3. Khi click vào nút Sửa thì hiển thị tên công việc lên ô input và tiến hành sửa


    

    // Thêm mới sessionStorage 
    const userLogin = {
        id: 1,
        name: "Nguyễn Thế Minh",
    };

    sessionStorage.setItem("userLogin", JSON.stringify(userLogin));



