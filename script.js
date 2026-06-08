const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{

reveals.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
item.classList.add('active');
}

});

});

for(let i=0;i<40;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top=Math.random()*100+"vh";
heart.style.fontSize=(Math.random()*25+15)+"px";
heart.style.opacity=.25;
heart.style.pointerEvents="none";

heart.animate(
[
{transform:"translateY(0px)"},
{transform:"translateY(-60px)"}
],
{
duration:3000+Math.random()*3000,
iterations:Infinity,
direction:"alternate"
}
);

document.body.appendChild(heart);

}

/* AUTO POSITION ALL PHOTOS */

const allCards =
document.querySelectorAll('.floating-card');

const positions = [
    '5%',
    '38%',
    '70%'
];

allCards.forEach((card,index)=>{

    card.style.top =
    (index * 300 + 100) + 'px';

    card.style.left =
    positions[index % 3];

    card.style.transform =
    `rotate(${Math.random()*14 - 7}deg)`;

});

/* AUTO GALLERY HEIGHT */

const gallery =
document.querySelector('.floating-gallery');

gallery.style.minHeight =
(allCards.length * 320 + 500) + 'px';