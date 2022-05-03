let citiesList;

function getcities(){  
    fetch('http://gigondas:1111/sprietna/ihm/tp4/cities').then( response => {
        if(!response.ok){
           console.log('ERROR');
        }
        return response.json();
        
    }).then(cities =>{
        citiesList = cities;
    })
}

getcities();

let i = 0;

function construct() {

    let article = document.createElement("article");
    article.className = "items";
    article.width = 100
    article.height = 100
    document.getElementById("billets").appendChild(article);
    
    let section_1 = document.createElement("section");
    section_1.className = "name";
    article.appendChild(h1);
    h1.textContent = citiesList[i].name;
}

while(i < citiesList.length){
    construct();
    i++;
}