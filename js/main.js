const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datatime", thisYear)
year.textContent = thisYear



var menubtn = document.getElementById ("menubtn")
var navbarlink = document.getElementById ("navbarlink")
var menu = document.getElementById ("menu")

navbarlink.style.right = "-250px";

menubtn.onclick = function (){
    if (navbarlink.style.right == "-250px"){
        navbarlink.style.right = "0";
        menu.src = "img/close.PNG";
    }
    else {
        navbarlink.style.right = "-250px";  
        menu.src = "img/menu1.PNG";
    }
}


























// function sendMail() {
//     var params = {
//         name: document.getElementById("name").value,
//         name: document.getElementById("email").value,
//         name: document.getElementById("message").value,
//     };

//     const serviceID = "service_cmjmsoa";
//     const templateID = "template_c2wqtqc";

//     emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
       
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("message").value = "";
//             console.log(res);
//             alert("your message sent successfully");
//         }
//     )
//     .catch((err) => console.log(err));
// }
