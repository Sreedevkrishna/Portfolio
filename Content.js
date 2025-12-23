var typed = new Typed(".text",{
    strings:["Full stack developer", "freelancer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0"
}
function closemenu(){
    sidemenu.style.right = "-200px"
}