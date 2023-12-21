const audio= new Audio();
 audio.src="./muzica.mp3"
 audio.volume=0.3;
var count=0;

var buton = document.getElementById('btn');
buton.addEventListener('click', function play() {
        if(count==0)
    {
        audio.play();
        buton.textContent='Stop Music';
        count=1;
    }
    else{
    audio.pause();
    buton.textContent='ReStart Music';
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
jslitera.forEach(nodul =>{
    nodul.addEventListener("mouseover",function(event){
        this.classList.add("active")
    })
    nodul.addEventListener("mouseout",function(event){
        this.classList.remove("active")
    })
})
