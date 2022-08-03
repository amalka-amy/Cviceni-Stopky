let index = 0
let vteriny = document.querySelector(".vteriny")
let minuty = document.querySelector(".minuty")


setInterval(function(){
    index += 1
    let m = Math.floor(index/60)
    let v = index % 60
    vteriny.textContent = ("0" + v).slice(-2);
    minuty.textContent = ("0" + m).slice(-2);
},100)