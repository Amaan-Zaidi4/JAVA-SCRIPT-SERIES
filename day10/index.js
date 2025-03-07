


function change(){
    let ele = document.getElementsByTagName("h1");
    ele[0].innerHTML = "Document Object Model (DOM)";
    ele[0].style.backgroundColor = "red";
    ele[0].style.color = "yellow";
    let ele1 = document.getElementsByTagName("p");
    ele1[0].innerHTML = "new paragraph"
    let ele2 = document.getElementById("main");
    ele2.style.display="flex";

}
