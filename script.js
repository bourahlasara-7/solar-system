


const planet =
document.getElementById("planet");


if(planet){


const planetName =
document.getElementById("planet-name");

const planetText =
document.getElementById("planet-text");

const prev =
document.getElementById("prev");

const next =
document.getElementById("next");


const left1 =
document.getElementById("left1");

const left2 =
document.getElementById("left2");

const left3 =
document.getElementById("left3");


const right1 =
document.getElementById("right1");

const right2 =
document.getElementById("right2");

const right3 =
document.getElementById("right3");




const planets = [

{
name:"Sun",
image:"img/sun.jpg",
text:"The Sun is the center of the Solar System. It provides light, heat and energy to every planet around it."
},

{
name:"Mercury",
image:"img/P8.jpg",
text:"Mercury is the closest planet to the Sun and also the smallest planet in the Solar System. A year on Mercury is only 88 Earth days."
},

{
name:"Venus",
image:"img/P2.jpg",
text:"Venus is the hottest planet because of its thick atmosphere. It is often called Earth's sister planet because of its similar size."
},

{
name:"Earth",
image:"img/P1.jpg",
text:"Earth is the third planet from the Sun and the only known world that supports life with oceans, forests and breathable air."
},

{
name:"Moon",
image:"img/moon.jpg",
text:"The Moon is Earth's natural satellite. It affects ocean tides and lights the night sky."
},

{
name:"Mars",
image:"img/P4.jpg",
text:"Mars is known as the Red Planet because of iron oxide on its surface. Scientists believe water once existed there."
},

{
name:"Jupiter",
image:"img/P3.jpg",
text:"Jupiter is the largest planet in the Solar System. It has a giant storm called the Great Red Spot."
},

{
name:"Saturn",
image:"img/P9.jpg",
text:"Saturn is famous for its large icy rings. It is one of the most beautiful planets in the Solar System."
},

{
name:"Uranus",
image:"img/P7.jpg",
text:"Uranus is an icy giant planet with a blue color caused by methane gas in its atmosphere."
},

{
name:"Neptune",
image:"img/P6.jpg",
text:"Neptune is the farthest major planet from the Sun and has the strongest winds in the Solar System."
},

{
name:"Pluto",
image:"img/p5.jpg",
text:"Pluto is a dwarf planet located in the Kuiper Belt. It was once considered the ninth planet."
}

];





let index = 3;




function showPlanet(){

   
    planet.style.opacity = "0";

    setTimeout(() => {

        planet.src = planets[index].image;
        planetName.innerHTML = planets[index].name;
        planetText.innerHTML = planets[index].text;

       
        let l1 = (index - 1 + planets.length) % planets.length;
        let l2 = (index - 2 + planets.length) % planets.length;
        let l3 = (index - 3 + planets.length) % planets.length;

      
        if (l1 < 0) l1 += planets.length;
        if (l2 < 0) l2 += planets.length;
        if (l3 < 0) l3 += planets.length;

        
        left1.src = planets[l1].image;
        left2.src = planets[l2].image;
        left3.src = planets[l3].image;

       
        let r1 = (index + 1) % planets.length;
        let r2 = (index + 2) % planets.length;
        let r3 = (index + 3) % planets.length;

       
        right1.src = planets[r1].image;
        right2.src = planets[r2].image;
        right3.src = planets[r3].image;

     
        planet.style.opacity = "1";

    }, 200);
}



next.onclick = function(){


index++;


if(index >= planets.length){

index = 0;

}


showPlanet();

};





prev.onclick = function(){


index--;


if(index < 0){

index = planets.length - 1;

}


showPlanet();

};





document.addEventListener("keydown",(e)=>{


if(e.key === "ArrowRight"){

next.click();

}


if(e.key === "ArrowLeft"){

prev.click();

}



});





showPlanet();


}