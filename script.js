const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector(".btn");
const img = document.getElementById("cat-image");

let request = false;

const getCatImage = async function () {
  try {
    if (request) return;
    request = true;
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    if (response.status !== 200) {
      throw new Error("Error: " + response.status);
    }
    const res = await response.json();
    img.src = res[0]?.url;
  } catch (error) {
    console.error(error.message);
  } finally {
    request = false;
  }
}

btn.addEventListener("click", getCatImage);