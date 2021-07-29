window.body.onload = myFunction();
let myVar
function myFunction() {
    myVar = setTimeout(showPage, 2000);
}
function showPage(){
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
}
