// Lấy tất cả các khóa trong localStorage
const keys = Object.keys(localStorage);

// Lấy phần tử danh sách từ DOM
const listElement = document.getElementById("printInfo");

// Lặp qua các khóa và thêm các phần tử mới vào danh sách
keys.forEach(key => {
  const value = localStorage.getItem(key);
  const listItem = document.createElement("li");
  listItem.textContent = `Key: ${key}, Value: ${value}`;
  listElement.appendChild(listItem);
});