fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("img").src = data.img;
  })
  .catch((error) => {
    console.log(error);
  });