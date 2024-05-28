let link="https://rickandmortyapi.com/api/character"
console.log(link);
async function fetchData(){
let res = await  fetch(link)
let data = await res.json()
console.log(data.results);
let datas= data.results
console.log(datas);
let container=document.querySelector('.container')

let cardCOL=document.querySelector('#card-col')


datas.forEach(element => {
let name =document.createElement("p")
let character =document.createElement('img')
let card =document.createElement('div')




 character.src=element.image
 name.innerText=element.name
 console.log(element);
 card.append(name)
 card.append(character)
 card.classList.add("card")
 card.classList.add("col-3")
 cardCOL.append(card)

//  name.append(name)
//  character.append(character)
//  console.log(character);

});


}

fetchData()