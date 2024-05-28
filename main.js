 setInterval(function () {let url = 'https://coffee.alexflipnote.dev/random.json'
 fetch(url , {method:"GET",})
   .then((response) => response.json())
 .then(data => {
 image=data
 let coffee =document.getElementById('img')
 coffee.src=data.file
 console.log(coffee);
 coffee.append(coffee)
  });
 }, 2000); 