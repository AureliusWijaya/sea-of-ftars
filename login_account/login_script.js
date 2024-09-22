const wrapper = document.querySelector('.wrapper');
const login = document.querySelector('.login-link');
const register = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');


// swap antara register dan login
register.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});


login.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

// di remove ketika icon close ditekan
iconClose.addEventListener('click', ()=>{
    window.location.href="../aol.html";
});

function validateForm(event)
{
    var email = document.getElementById("email").value;
    if(email==" ")
    {
        alert("asddasasd");
    }
}


