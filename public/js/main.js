// # Challenge 1 - DOM
let body = document.body;
body.style.backgroundColor = "bisque";

// Titre
let divTitre = document.createElement('div');
let titre = document.createElement('h1');
titre.style.marginTop = "2%";
titre.innerHTML = `Quizz sur les spécialités culinaires`;
titre.style.textAlign = "center";
divTitre.append(titre);

// Contenu
let divContenu = document.createElement('div');
divContenu.style.margin = "3%"

let specialite = "";
let spans;

for (let i = 0; i < 14; i++) {
    // Créer un div pour chaque question
    let div = document.createElement('div');
    div.style.margin = "3% 0%";

    // Radio
    let input1 = document.createElement('input');
    input1.setAttribute('type', "radio");
    input1.style.margin = "0% 1%";
    let input2 = document.createElement('input');
    input2.setAttribute('type', "radio");
    input2.style.margin = "0% 1%";
    let input3 = document.createElement('input');
    input3.setAttribute('type', "radio");
    input3.style.margin = "0% 1%";

    //br
    let br = document.createElement('br');

    // Labels
    let label1 = document.createElement('label');
    label1.style.marginRight = "2%";
    let label2 = document.createElement('label');
    label2.style.marginRight = "2%";
    let label3 = document.createElement('label');
    label3.style.marginRight = "2%";

    // Span
    var span = document.createElement('span');

    // contenu
    switch(i){
        case 0: // Italie
            specialite = "Pizza";
            input1.setAttribute('name', "pizza");
            input2.setAttribute('name', "pizza");
            input3.setAttribute('name', "pizza");
            label1.innerHTML = `USA`;
            label2.innerHTML = `Italie`;
            label3.innerHTML = `Turquie`;
            break;
        case 1: // Mexique
            specialite = "Quesadilla";
            input1.setAttribute('name', "quesadilla");
            input2.setAttribute('name', "quesadilla");
            input3.setAttribute('name', "quesadilla");
            label1.innerHTML = `Mexique`;
            label2.innerHTML = `Espagne`;
            label3.innerHTML = `Philippines`;
            break;
        case 2: // France
            specialite = "Bouillabaisse";
            input1.setAttribute('name', "bouillabaisse");
            input2.setAttribute('name', "bouillabaisse");
            input3.setAttribute('name', "bouillabaisse");
            label1.innerHTML = `Suisse`;
            label2.innerHTML = `Luxembourg`;
            label3.innerHTML = `France`;
            break;
        case 3: // Espagne
            specialite = "Paella";
            input1.setAttribute('name', "paella");
            input2.setAttribute('name', "paella");
            input3.setAttribute('name', "paella");
            label1.innerHTML = `Brésil`;
            label2.innerHTML = `Espagne`;
            label3.innerHTML = `Équateur`;
            break;
        case 4: // Thailande
            specialite = "Soupe Tom Kha Kai";
            input1.setAttribute('name', "soupe");
            input2.setAttribute('name', "soupe");
            input3.setAttribute('name', "soupe");
            label1.innerHTML = `Chine`;
            label2.innerHTML = `Thailande`;
            label3.innerHTML = `Japon`;
            break;
        case 5: // Portugal
            specialite = "Pastel de Belem";
            input1.setAttribute('name', "pastel");
            input2.setAttribute('name', "pastel");
            input3.setAttribute('name', "pastel");
            label1.innerHTML = `Portugal`;
            label2.innerHTML = `Espagne`;
            label3.innerHTML = `Brésil`;
            break;
        case 6: // Chine
            specialite = "Canard laqué";
            input1.setAttribute('name', "canard");
            input2.setAttribute('name', "canard");
            input3.setAttribute('name', "canard");
            label1.innerHTML = `Japon`;
            label2.innerHTML = `Vietnam`;
            label3.innerHTML = `Chine`;
            break;
        case 7: // Irlande
            specialite = "Guinness";
            input1.setAttribute('name', "guinness");
            input2.setAttribute('name', "guinness");
            input3.setAttribute('name', "guinness");
            label1.innerHTML = `Irlande`;
            label2.innerHTML = `Écosse`;
            label3.innerHTML = `Grande-Bretagne`;
            break;
        case 8: // Russie
            specialite = "Bortsh";
            input1.setAttribute('name', "bortsh");
            input2.setAttribute('name', "bortsh");
            input3.setAttribute('name', "bortsh");
            label1.innerHTML = `Pologne`;
            label2.innerHTML = `Russie`;
            label3.innerHTML = `Finlande`;
            break;
        case 9: // Inde
            specialite = "Tikka masala";
            input1.setAttribute('name', "tikka");
            input2.setAttribute('name', "tikka");
            input3.setAttribute('name', "tikka");
            label1.innerHTML = `Afghanistan`;
            label2.innerHTML = `Pakistan`;
            label3.innerHTML = `Inde`;
            break;
        case 10: // Liban
            specialite = "Taboulé";
            input1.setAttribute('name', "taboulé");
            input2.setAttribute('name', "taboulé");
            input3.setAttribute('name', "taboulé");
            label1.innerHTML = `Liban`;
            label2.innerHTML = `Turquie`;
            label3.innerHTML = `Iraq`;
            break;
        case 11: // USA
            specialite = "HotDog";
            input1.setAttribute('name', "hotDog");
            input2.setAttribute('name', "hotDog");
            input3.setAttribute('name', "hotDog");
            label1.innerHTML = `Allemagne`;
            label2.innerHTML = `USA`;
            label3.innerHTML = `Lettonie`;
            break;
        case 12: // Belgique
            specialite = "Frites";
            input1.setAttribute('name', "frite");
            input2.setAttribute('name', "frite");
            input3.setAttribute('name', "frite");
            label1.innerHTML = `Belgique`;
            label2.innerHTML = `France`;
            label3.innerHTML = `USA`;
            break;
        case 13: // Araméen
            specialite = "Kutle";
            input1.setAttribute('name', "kutle");
            input2.setAttribute('name', "kutle");
            input3.setAttribute('name', "kutle");
            label1.innerHTML = `Turquie`;
            label2.innerHTML = `Araméen`;
            label3.innerHTML = `Syrie`;
            break;
    };

    // Enoncé
    let p = document.createElement('p');
    p.innerHTML = `D'où cette spécialité est-elle originaire : ${specialite} ?`;

    div.append(p, input1, label1, input2, label2, input3, label3, span, br)
    
    divContenu.append(div);

    spans = divContenu.querySelectorAll('span');
};
let bouton = document.createElement('button');
bouton.innerHTML = `Valider mes réponses`;
bouton.style.borderRadius = "5px";
bouton.style.border = "1px solid gray";
bouton.style.backgroundColor = "BurlyWood";
bouton.style.padding = "0.5% 1%";
bouton.style.fontSize = "15px";
divContenu.append(bouton);

let divs = divContenu.querySelectorAll('div');

let div1Inputs = divs[0].querySelectorAll('input');
let div2Inputs = divs[1].querySelectorAll('input');
let div3Inputs = divs[2].querySelectorAll('input');
let div4Inputs = divs[3].querySelectorAll('input');
let div5Inputs = divs[4].querySelectorAll('input');
let div6Inputs = divs[5].querySelectorAll('input');
let div7Inputs = divs[6].querySelectorAll('input');
let div8Inputs = divs[7].querySelectorAll('input');
let div9Inputs = divs[8].querySelectorAll('input');
let div10Inputs = divs[9].querySelectorAll('input');
let div11Inputs = divs[10].querySelectorAll('input');
let div12Inputs = divs[11].querySelectorAll('input');
let div13Inputs = divs[12].querySelectorAll('input');
let div14Inputs = divs[13].querySelectorAll('input');

body.prepend(divTitre, divContenu);

let resultat = 0;

// Fonctionnalité
bouton.addEventListener('click', function(){
    for (let i = 0; i < divs.length; i++) {
        switch(i){
            case 0: // Italie
                spans[0].style.marginLeft = "10%";
                if(div1Inputs[1].checked === true){
                    resultat += 3;
                    spans[0].style.color = "green";
                    spans[0].innerHTML = `Bonne Réponse !`;
                } else {
                    resultat -= 1;
                    spans[0].style.color = "red";
                    spans[0].innerHTML = `Dommage. La réponse correcte était : Italie`;
                };
                break;
            case 1: // Mexique
                spans[1].style.marginLeft = "5%";
                if(div2Inputs[0].checked === true){
                    resultat += 3;
                    spans[1].style.color = "green";
                    spans[1].innerHTML = `Bonne Réponse !`;
                } else {
                    resultat -= 1;
                    spans[1].style.color = "red";
                    spans[1].innerHTML = `Dommage. La réponse correcte était : Mexique`;
                };
                break;
            case 2: // France
                spans[2].style.marginLeft = "6%";
                if(div3Inputs[2].checked === true){
                    resultat += 3;
                    spans[2].style.color = "green";
                    spans[2].innerHTML = `Bonne Réponse !`;
                } else {
                    resultat -= 1;
                    spans[2].style.color = "red";
                    spans[2].innerHTML = `Dommage. La réponse correcte était : France`;
                };
                break;
            case 3: // Espagne
                spans[3].style.marginLeft = "7.5%";
                if(div4Inputs[1].checked === true){
                    resultat += 3;
                    spans[3].style.color = "green";
                    spans[3].innerHTML = `Bonne Réponse !`;
                } else {
                    resultat -= 1;
                    spans[3].style.color = "red";
                    spans[3].innerHTML = `Dommage. La réponse correcte était : Espagne`;
                };
                break;
            case 4: // Thailande
                spans[4].style.marginLeft = "8%";
                if(div5Inputs[1].checked === true){
                    resultat += 3;
                    spans[4].style.color = "green";
                    spans[4].innerHTML = `Bonne Réponse !`;
                } else {
                    resultat -= 1;
                    spans[4].style.color = "red";
                    spans[4].innerHTML = `Dommage. La réponse correcte était : Thailande`;
                };
                break;
            case 5: // Portugal
                spans[5].style.marginLeft = "8%";
                if(div6Inputs[0].checked === true){
                    resultat += 3;
                    spans[5].style.color = "green";
                    spans[5].innerHTML = `Bonne Réponse !`;
                } else {
                    resultat -= 1;
                    spans[5].style.color = "red";
                    spans[5].innerHTML = `Dommage. La réponse correcte était : Portugal`;
                };
                break;
            case 6: // Chine
                spans[6].style.marginLeft = "9%";
                if(div7Inputs[2].checked === true){
                    resultat += 3;
                    spans[6].style.color = "green";
                    spans[6].innerHTML = `Bonne Réponse !`;
                } else {
                    resultat -= 1;
                    spans[6].style.color = "red";
                    spans[6].innerHTML = `Dommage. La réponse correcte était : Chine`;
                };
                break;
            case 7: // Irlande
                spans[7].style.marginLeft = "4.5%";
                if(div8Inputs[0].checked === true){
                    resultat += 3;
                    spans[7].style.color = "green";
                    spans[7].innerHTML = `Bonne Réponse !`;
                } else {
                    resultat -= 1;
                    spans[7].style.color = "red";
                    spans[7].innerHTML = `Dommage. La réponse correcte était : Irlande`;
                };
                break;
            case 8: // Russie
                spans[8].style.marginLeft = "7%";
                if(div9Inputs[1].checked === true){
                    resultat += 3;
                    spans[8].style.color = "green";
                    spans[8].innerHTML = `Bonne Réponse !`;
                } else {
                    resultat -= 1;
                    spans[8].style.color = "red";
                    spans[8].innerHTML = `Dommage. La réponse correcte était : Russie`;
                };
                break;
            case 9: // Inde
                spans[9].style.marginLeft = "6.5%";
                if(div10Inputs[2].checked === true){
                    resultat += 3;
                    spans[9].style.color = "green";
                    spans[9].innerHTML = `Bonne Réponse !`;
                } else {
                    resultat -= 1;
                    spans[9].style.color = "red";
                    spans[9].innerHTML = `Dommage. La réponse correcte était : Inde`;
                };
                break;
            case 10: // Liban
                spans[10].style.marginLeft = "9.5%";
                if(div11Inputs[0].checked === true){
                    resultat += 3;
                    spans[10].style.color = "green";
                    spans[10].innerHTML = `Bonne Réponse !`;
                } else {
                    resultat -= 1;
                    spans[10].style.color = "red";
                    spans[10].innerHTML = `Dommage. La réponse correcte était : Liban`;
                };
                break;
            case 11: // USA
                spans[11].style.marginLeft = "6.7%";
                if(div12Inputs[1].checked === true){
                    resultat += 3;
                    spans[11].style.color = "green";
                    spans[11].innerHTML = `Bonne Réponse !`;
                } else {
                    resultat -= 1;
                    spans[11].style.color = "red";
                    spans[11].innerHTML = `Dommage. La réponse correcte était : USA`;
                };
                break;
            case 12: // Belgique
                spans[12].style.marginLeft = "7.5%";
                if(div13Inputs[0].checked === true){
                    resultat += 3;
                    spans[12].style.color = "green";
                    spans[12].innerHTML = `Bonne Réponse !`;
                } else {
                    resultat -= 1;
                    spans[12].style.color = "red";
                    spans[12].innerHTML = `Dommage. La réponse correcte était : Belgique`;
                };
                break;
            case 13: // Araméen
                spans[13].style.marginLeft = "7%";
                if(div14Inputs[1].checked === true){
                    resultat += 3;
                    spans[13].style.color = "green";
                    spans[13].innerHTML = `Bonne Réponse !`;
                } else {
                    resultat -= 1;
                    spans[13].style.color = "red";
                    spans[13].innerHTML = `Dommage. La réponse correcte était : Araméen ;)`;
                };
                break;
        };
    };
    console.log(resultat)
    setTimeout(function(){ 
        if(resultat === 42){
            alert(`Excellent ! Vous avez obtenu un score parfait de ${resultat}/42 !`); 
        } else if (resultat >= 31) {
            alert(`Bravo ! Vous avez obtenu un score de ${resultat} points sur 42`); 
        } else if (resultat > 21) {
            alert(`Bien, vous avez obtenu la raisonable note de ${resultat}/42`); 
        } else if (resultat === 21) {
            alert(`Ouuuff.. Vous avez obtenu tout juste la moitié ${resultat}/42`); 
        } else if (resultat < 21) {
            alert(`Un résultat pas très bon... ${resultat} points sur 42 ^^'`); 
        }
    }, 3000);
});
