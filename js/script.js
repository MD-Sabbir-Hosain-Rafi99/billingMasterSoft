// Admin LogIn Section Start
let adminUserName = document.getElementById('adminUserName')
let adminPass = document.getElementById('adminPass')
let adminBtn = document.getElementById('adminBtn')

adminBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    // let adminUserNameValue = adminUserName.value;
    // let adminPassValue = adminPass.value;
    if (adminUserName.value == 'admin' && adminPass.value == 'admin') {
        window.location.href = "admin.html";
    }else{
        alert("Wrong")
    }
})
// Admin LogIn Section End


// Salar LogIn Section Start
let salarUserName = document.getElementById('salarUserName');
let salarPass = document.getElementById('salarPass');
let salarBtn = document.getElementById('salarBtn');

salarBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    if (salarUserName.value == 'salar' && salarPass.value == '123') {
        window.location.href = "salesman.html"
    }else{
        alert("Wrong")
    }
})
// Salar LogIn Section End