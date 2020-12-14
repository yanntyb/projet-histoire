let noms = ["yann","jean","emma","lucie","jule","clement","marie"];
let obj = ["ordi","tele","coussin","fenetre","maison","telephone","lit"];
let temp = ["11°","15°","1°","-6°","3°","24°"];
let lieux = ["felleries","paris","avesnes","fourmis","lion","lille"];
let verbe = ["joue","coure","danse","vole","paye","bois","ecrit"];

let button = document.getElementById("gene");
let span = document.getElementById("histoire");
let input = document.getElementById("name");

function aleaLen(liste){
    let len = liste.length - 1;
    return Math.trunc(Math.random() * len);
}

function geneHist(){
    let phrase = [];
    let name = noms[aleaLen(noms)];
    let objet = obj[aleaLen(obj)];
    let temperature = temp[aleaLen(temp)];
    let place = lieux[aleaLen(lieux)];
    let verb = verbe[aleaLen(verbe)];
    let article = "";
    let prepo = "";
    switch (objet){
        case "telephone":
            prepo = "avec";
            article = "un";
            break
        case "ordi":
            prepo = "avec";
            article = "un";
            break
        case "tele":
            prepo = "avec";
            article = "une";
            break
        case "coussin":
            prepo = "avec";
            article = "un";
            break
        case "fenetre":
            prepo = "à coté d'";
            article = "une";
            break
        case "maison":
            prepo = "dans";
            article = "une";
            break
        case "lit":
            prepo = "sur";
            article = "un";
    }

    phrase.push(name,verb,prepo,article,objet,",il fait",temperature,"à",place);
    return phrase.join(" ");
}

button.addEventListener("click",function (){
    span.innerHTML += "<br>";
    span.innerHTML += input.value;
    span.innerHTML += " " + geneHist();
})