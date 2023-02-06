
const list = document.getElementById('listOfImages');
const button = document.getElementById("btn");

button.addEventListener("click", function () {

  fetch("https://dog.ceo/api/breeds/image/random")
   
    .then(function (response) {
      return response.json();
    })
   
    .then((data) => {
      console.log(data);
      let img = document.createElement("img");
      img.src = data.message;
      let li = document.createElement("li");
      li.appendChild(img);
      list.append(li);
    })
  
    .catch((error) => console.log(error));
});