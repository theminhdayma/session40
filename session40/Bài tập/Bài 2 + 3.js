var players = [];

function addPlayer() {
    let inputName = document.getElementById("inputName").value;

    const player = {
        id: players.length + 1,
        name: inputName,
    }

    players.push(player); // Lưu vào cuối mảng

    // Lưu vào local storage
    localStorage.setItem("players", JSON.stringify(players));

    // Hiển thị cầu thủ được thêm lên màn hình
    displayPlayer(player);
    
    document.getElementById("inputName").value = "";
}

function deletePlayer() {
    let inputID = document.getElementById("inputID").value;

    for (let i = 0; i < players.length; i++) {
        if (players[i].id.toString() === inputID) {
            players.splice(i, 1);
            break;
        }
    }

    localStorage.setItem("players", JSON.stringify(players));

    // Xóa cầu thủ khỏi màn hình
    removePlayerFromScreen(inputID);

    // Cập nhật lại ID của các cầu thủ còn lại
    updatePlayerIDs();
}

function displayPlayers() {
    let listPlayer = document.getElementById("listPlayer");
    listPlayer.innerHTML = "";

    players.forEach(player => {
        displayPlayer(player);
    });
}

function displayPlayer(player) {
    let listPlayer = document.getElementById("listPlayer");
    let playerInfo = document.createElement("li");
    playerInfo.textContent = "ID: " + player.id + ", Tên: " + player.name;
    playerInfo.id = "player-" + player.id; // Đặt id cho phần tử li cầu thủ
    listPlayer.appendChild(playerInfo);
}

function removePlayerFromScreen(playerID) {
    let playerElement = document.getElementById("player-" + playerID);
    if (playerElement) {
        playerElement.remove();
    }
}

function updatePlayerIDs() {
    let listPlayer = document.getElementById("listPlayer");
    listPlayer.innerHTML = "";

    players.forEach((player, index) => {
        player.id = index + 1;
        displayPlayer(player);
    });

    // Cập nhật lại local storage
    localStorage.setItem("players", JSON.stringify(players));
}

// Lấy danh sách cầu thủ từ local storage
let storedPlayers = localStorage.getItem("players");
if (storedPlayers) {
    players = JSON.parse(storedPlayers);
    displayPlayers();
}