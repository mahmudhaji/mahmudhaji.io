// function Register(){
//     // let email= document.querySelector('#email').value;
//     // let password= document.querySelector('#password').value;


//     localStorage.setItem('userEmail',email);
//     localStorage.setItem('userPassowrd',password);

let form=document.querySelector('#form1');
form.addEventListener('submit',function(event){
    event.preventDefault();
    let email= document.querySelector('#email').value;
    let password= document.querySelector('#password').value;

    let Register={email:email,password,password};
    
    let Reg=JSON.parse(localStorage.getItem('Reg'))||[];
    Reg.push(Register);

    localStorage.setItem('Reg',JSON.stringify(Reg));
    alert("regester successfully");
    form1.reset();

});



