name_arr = [];
price_arr = [];
about_arr = [];
image_arr = [];
function save() {
  username = document.getElementById("username").value;
  price = document.getElementById("price").value;
  about = document.getElementById("about").value;
  image = document.getElementById("image").value;

  localStorage.setItem("name", username);
  localStorage.setItem("price", price);
  localStorage.setItem("about", about);
  localStorage.setItem("image", image);
}
