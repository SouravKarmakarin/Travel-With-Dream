function login() {
    let loginBtn = document.querySelector(`#login-btn`)
    let a = document.querySelector(`#u1`)
    let b = document.querySelector(`#p1`)
    let num = Number(a.value);
    loginBtn.addEventListener(`click`, (e) => {
        e.preventDefault();
        if (num = 10 && b.value == 'root') {
            document.location = 'home.html'
        } else if (a.value === "" && b.value === "") {
            a.style.color = `red`
            a.style.outline = `1px solid red`
            a.value = `Please enter phone no.`
            b.style.outline = `1px solid red`
            setTimeout(() => {
                a.style.color = null
                a.style.outline = null
                a.value = null
                b.style.outline = null
            }, 3000)
        } else {
            a.style.outline = `1px solid red`
            a.style.color = `red`
            a.value = `Please enter valid phone number.`
            b.style.outline = `1px solid red`
            setTimeout(() => {
                a.style.outline = null
                a.style.color = null
                a.value = null
                b.style.outline = null
            }, 3000)
        }
    })
}
login()


function generateOTP() {
    let dig = '0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++) {
        otp += dig[Math.floor(Math.random() * 10)];
    }
    let OTP = Number(otp);
    return OTP;
}


var otp;
let fg = document.querySelector(`#fg-submit-ph`)
fg.addEventListener(`click`, (e) => {
    e.preventDefault();
    let xx = document.getElementById('u1-fg')
    let x = xx.value;
    if (x.length == 10 && $.isNumeric(x) == true) {
        openotp();
        otp = generateOTP()
        confirm(`Your OTP is:  ${otp}`)
    } else if (x === "") {
        xx.style.color = `red`
        xx.style.outline = `1px solid red`
        xx.value = `....Please enter some value.....⬅`
        setTimeout(() => {
            xx.style.color = null
            xx.style.outline = null
            xx.value = null
        }, 2000)
    } else if ($.isNumeric(x) == false) {
        xx.style.color = `red`
        xx.style.outline = `1px solid red`
        xx.value = `Enter Numbers not any other value.....⬅`
        setTimeout(() => {
            xx.style.color = null
            xx.style.outline = null
            xx.value = null
        }, 2000)
    } else {
        xx.style.color = `red`
        xx.style.outline = `1px solid red`
        xx.value = `please enter a valid phone no.`
        setTimeout(() => {
            xx.style.color = null
            xx.style.outline = null
            xx.value = null
        }, 2000)
    }
})


let otpBtn = document.querySelector(`#fg-submit-otp`)
otpBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    let bb = document.getElementById('otp-mob')
    let b = bb.value;
    let b1 = Number(b);
    if (b1 == otp) {
        document.getElementById('fg-new-pps').style.display = "block";
        document.getElementById('fg').style.display = "none";
        backBl();
    } else if (b === "") {
        bb.style.color = `red`
        bb.style.borderBottom = `2px dashed red`
        bb.value = `   OTP`
        setTimeout(() => {
            bb.style.color = null
            bb.style.borderBottom = null
            bb.value = null
        }, 2000)
    } else {
        bb.style.color = `red`
        bb.style.borderBottom = `2px dashed red`
        bb.value = otp
        setTimeout(() => {
            bb.style.color = null
            bb.style.borderBottom = null
            bb.value = null
        }, 2000)
    }
})


$(".fp").on("click", function () {
    document.getElementById('fg').style.display = "block";
    backBl();
})

function backBl() {
    document.getElementById('main').style.opacity = "0.2";
}
function backNm() {
    document.getElementById('main').style.opacity = "1";
}

openForm = () => {
    document.getElementById('myForm').style.display = "block";
    backBl();
}

let closeForm = () => {
    document.getElementById('myForm').style.display = "none";
    backNm();
}
closeForm();

let closeTab = () => {
    document.getElementById('fg').style.display = "none";
    backNm();
}
closeTab();

function openotp() {
    document.getElementById('otp-open').style.display = "block";
    document.getElementById('phone').style.display = "none";
}

function closeNewPwd() {
    document.getElementById('fg-new-pps').style.display = "none";
    backNm();
}

let popUp = document.getElementById('pop-up');
function closePopup() {
    popUp.classList.remove('open-popup');
    backNm();
}
let newPassBtn = document.querySelector(`#new-pass-btn`)
newPassBtn.addEventListener(`click`,(e)=>{
    e.preventDefault();
    let password = document.querySelector('#new-password');
    let confirmPassword = document.querySelector('#confirm-password');
    let pass = password.value;
    let newpass = confirmPassword.value;
    console.log(password);
    console.log(confirmPassword);
    console.log(pass+"   "+newpass);
    if(pass===newpass){
        popUp.classList.add('open-popup');
        document.getElementById('np-ss').style.display = "none";
        document.getElementById('fg-new-pps').style.display = "none";
    } else if(pass==="" && newpass==="") {
        alert(`wrong`)
    }
})

// function close(){
//     window.location.reload();
// }
