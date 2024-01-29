// Kiểm tra local khi trang web được tải
document.addEventListener('DOMContentLoaded', function () {
    // Lấy danh sách công việc từ local
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    renderTodoList(todoList);
});

// Thêm công việc mới
function addJob() {
    const input = document.getElementById('input');
    const title = input.value;

    if (title !== '') {
      // Lấy danh sách công việc từ local
      const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

      // Thêm công việc mới vào danh sách
      todoList.push({ title });

      // Lưu danh sách công việc vào local
      localStorage.setItem('todoList', JSON.stringify(todoList));

      // Hiển thị lại danh sách công việc
      renderTodoList(todoList);

      // Xóa nội dung trong trường nhập liệu
      input.value = '';
    }
}

// Xóa công việc
function deleteJob(index) {
    // Lấy danh sách công việc từ local
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

    // Xóa công việc tại chỉ mục đã cho
    todoList.splice(index, 1);

    // Lưu danh sách công việc vào local
    localStorage.setItem('todoList', JSON.stringify(todoList));

    // Hiển thị lại danh sách công việc
    renderTodoList(todoList);
}

// Hiển thị danh sách công việc
function renderTodoList(todoList) {
    const todoListElement = document.getElementById('todoList');

    // Xóa danh sách công việc hiện tại
    todoListElement.innerHTML = '';

    // Tạo các phần tử li cho từng công việc
    todoList.forEach((job, index) => {
      const li = document.createElement('li');
      li.textContent = job.title;

      // Tạo một nút "x" để xóa công việc
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
      deleteButton.onclick = function () {
        deleteJob(index);
      };

      li.appendChild(deleteButton);
      todoListElement.appendChild(li);
    });
}