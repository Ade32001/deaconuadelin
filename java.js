const audio= new Audio();
 audio.src="./muzica.mp3"
 audio.volume=0.03;
var count=0;

var buton = document.getElementById('btn');
buton.addEventListener('click', function play() {
        if(count==0)
    {
        audio.play();
        buton.textContent='Opreste Muzica';
        count=1;
    }
    else{
    audio.pause();
    buton.textContent='Reporneste Muzica';
    count=0;
    }
}
);
const p = document.querySelector("p")
const letters = p.innerText.split('')
var html= "";
letters.forEach(letter => {
    var classes="";
    if(letter !=" ")
    {
        classes="litera";
    }
    html= html + `<span class='${classes}'>${letter}</span>`
});
p.innerHTML=html;

const jslitera = document.querySelectorAll(".litera")
jslitera.forEach(cod =>{
    cod.addEventListener("mouseover",function(event){
        this.classList.add("active")
    })
    cod.addEventListener("mouseout",function(event){
        this.classList.remove("active")
    })
})
