window.addEventListener("load", init);

const kepLista = ["kepek/kep1.jpg","kepek/kep2.jpg","kepek/kep3.jpg"];
const szamol = 0;

function init(){
    const articleELEM = document.querySelector("article");
    
    for (let index = 0; index < kepLista.length; index++) {
        articleELEM.innerHTML += `<div><img src='${kepLista[index]}' alt='kepek'></div>`;
    }

    const articleKis = document.querySelectorAll("article img");
    console.log(articleKis);
    for (let index = 0; index < articleKis.length; index++) {
        articleKis[index].addEventListener("click", function(){
            const articleNagy = document.querySelectorAll("section div img");
            articleNagy[0].src = event.target.src;
        });
    }
    
    const jobb = querySelectorAll("section bal");
    const bal = querySelectorAll("section jobb");

    jobb[0].addEventListener("click", function(){
        if(""){
            
        }else{
            
        }
    });

    bal[0].addEventListener("click", function(){
        if(""){
            
        }else{
            
        }
    });

}


