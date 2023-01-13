let stats = false; //js script untuk hide navbar collapse
let mode = "dark"; //js script untuk status awal darkmode
function dropNavbar() {
  stats = !stats; //setiap js button click akan merubah display navbar collapse
  if (stats) {
    document.getElementById("collapse").style.display = "block"; //collapse muncul
  } else {
    document.getElementById("collapse").style.display = "none"; //collapse sembuyi
  }
}
function darkMode() {
  if (mode === "dark") {
    mode = "light"; //kalo dari dark mode diganti jadi light 
    document.getElementById("body").style.backgroundColor = "#0b0a19"; //body diganti darkmode
    const collection = document.getElementsByClassName("change");
    for (let i = 0; i < collection.length; i++) { //semua class change akan diubah warnanya jadi putih
      collection[i].style.color = "white";
    }
    document.getElementById("border_dark").style.border = "1px solid white"

  } else if (mode === "light") { //kebalikan
    mode = "dark";
    document.getElementById("body").style.backgroundColor = "white";
    const collection = document.getElementsByClassName("change");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.color = "black";
    }
    document.getElementById("border_dark").style.border = "1px solid black"
  }
}
//untuk fitur scroll top
window.addEventListener("scroll", function(){
  if(window.scrollY==0){ //jika page mentok atas
    document.getElementById("myBtn").style.display = "none" //fitur go top hilang
  } else { //kalo gak mentok atas
    document.getElementById("myBtn").style.display = "block" //fiturnya keluar
  }
});
function goTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); //function jika dipencet auto keatas
}
