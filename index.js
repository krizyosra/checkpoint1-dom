let plus = document.querySelectorAll(".fa-plus-circle");
let qte = document.querySelectorAll(".quantity");
let total = document.getElementsByClassName("total");
let price = document.querySelectorAll(".unit-price");
let sous = document.querySelectorAll(".fa-minus-circle")
let like = document.querySelectorAll(".fa-heart")
let trash = document.querySelectorAll(".fa-trash-alt")
let card = document.querySelectorAll(".card")
/*console.log(card)
console.log (trash)
console.log(like)
console.log(sous)
*/
console.log(total)
/*console.log(plus)
console.log(qte)
console.log(totalprice)
console.log(price)
*/

for (let i = 0; i < card.length; i++){


    plus[i].addEventListener("click", add);


let totalPRICE = 0;
function add() {
  qte[i].textContent++;
  totalPRICE += parseInt(price[i].textContent);
  total[0].textContent = totalPRICE;
}

sous[i].addEventListener('click', dec)

function dec(){
    if (qte[i].textContent>0){
    qte[i].textContent--;
  totalPRICE -= parseInt(price[i].textContent);
  total[0].textContent = totalPRICE;

 
}
else alert("la quantité doit etre supérieur à 0")

}


like[i].addEventListener('click', heart)
function heart(){

    if (like[i].style.color=="black"){
    like[i].style.color="red"
    }
    else
    like[i].style.color="black"
}

trash[i].addEventListener('click', remove)

function remove(){

    card[i].parentNode.removeChild(card[i])
    totalPRICE -= parseInt(price[i].textContent)*qte[i].textContent;
  total[0].textContent = totalPRICE;


}



}

