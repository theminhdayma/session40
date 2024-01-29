var joins = [];

function join(){
    let joinName = document.getElementById("joinName").value;
    let joinPassword = document.getElementById("joinPassword").value;

    const join = {
        id: joins.length + 1,
        name: joinName,
        password: joinPassword,
    }

    joins.push(join);

    localStorage.setItem("joins", JSON.stringify(joins));

    joinName.value = "";
    joinPassword.value = "";
}

function logIn(){
    let logInName = document.getElementById("logInName").value;
    let logInPassword = document.getElementById("logInPassword").value;

    for(let i=0; i<joins.length; i++){
        if(joins[i].name == logInName && joins[i].password == logInPassword){
            alert("Đăng nhập thành công");
        }else{
            alert("Đăng nhập thất bại");
        }
    }

    logInName.value = "";
    logInPassword.value = "";
}