let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let listJob = JSON.parse(localStorage.getItem("jobs")) || [];

// Thêm mới công việc
function createJob() {
  // Lấy gí trị từ ô input
  let inputValue = $("#inputValue").value;
  // Trong JS, những giá trị nào mặc định nhận giá trị là False: undefined, NaN, 0, "", null, false
  if (!inputValue) {
    alert("Tên công việc không được để trống");
  } else {
    // Thiết kế đối tượng công việc
    const job = {
      id: Math.ceil(Math.random() * 10000000),
      name: inputValue,
      status: false,
    };

    // Push công việc vào mảng
    listJob.push(job);

    // Lưu dữ liệu lên local
    localStorage.setItem("jobs", JSON.stringify(listJob));

    // CLear giá trị trong ô input
    $("#inputValue").value = "";

    // Gọi hàm render danh sách công việc
    render();
  }
}

// Lắng nghe sự kiện submit form
$("#form").addEventListener("submit", function (e) {
  // Ngăn chặn sự kiện load lại trang của form
  e.preventDefault();

  createJob();
});

// Hiển thị danh sách công việc
function render() {
  let ulHtmls = listJob.map(function (job) {
    return `
        <li>
            <span>${job.name}</span>
            <button>Sửa</button>
            <button>Xóa</button>
        </li>
        `;  
  });

  // Chuyển đổi mảng thành chuỗi HTML
  let ulHtml = ulHtmls.join("");

  // Gắn dữ liệu vào trong DOM
  $("#listJob").innerHTML = ulHtml;
}

render();

// Xóa công việc
function handleDelete(id){
    // Lọc ra những bản ghi có id cần xóa
    let newListJob = listJob.filter(function (job){
        return job.id != id;
    });
    // Lưu mới dữ liệu lên local
    localStorage.setItem("jobs", JSON.stringify(newListJob));

    //Gọi lại hmf render
    render();
}

// Cập nhật

// map(): Dùng để lặp qua các phần tử của mảng, trả về một mảng mới có số lượng phần tử = số lượng phần tử của
// mảng cũ nhưng được thay đổi

// let array = [1, 2, 3, 4]; // Output = [2,4,6,8]
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//   newArray.push(array[i] * 2);
// }

// let newNumber = array.map(function (number) {
//   return number * 2;
// });

// console.log("newArr: ", newNumber);