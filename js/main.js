const inputs = document.querySelectorAll(".form-control");
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');


function AddClass(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function RemoveClass(){
   let parent = this.parentNode.parentNode;
   if(this.value == ''){
       parent.classList.remove("focus");
   }
}

inputs.forEach(input => {
   input.addEventListener("focus", AddClass);
   input.addEventListener("blur", RemoveClass);
});


togglePassword.addEventListener('click', function showPass(x) {
    // toggle the type attribute
    console.log(x.target);
    const type = password.getAttribute('type') == 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
