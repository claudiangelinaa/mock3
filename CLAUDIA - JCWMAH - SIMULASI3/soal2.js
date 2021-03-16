let idUser = [{
    username : diki
    password : 54321,
    role : admin, 
}
{
    username : budi
    password : 12345,
    role : user,
}]

function login(){
    let userName = document.getElementById("inputUsername").value
    let pass = document.getElementById("inputPassword").value
    
    for(let i=0; i<idUser.length; i++){
        if(userName == idUser[i].username && pass == idUser[i].password){
            var hasil = window.alert(`${username[i].username} telah login`)
        }
    }
    document.getElementById("result").innerHTML = hasil
}