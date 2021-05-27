const imgDiv = document.querySelector("imgDiv");
const p = document.querySelector("p");
const btn = document.querySelector("button");
document.addEventListener("DOMContentLoaded", getDadJokes);

async function getDadJokes() {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  const joke = res.data.joke;
  return (p.innerText = joke);
}

// async function addDadJokes() {
//   let joke = await getDadJokes();
//   const p = document.createElement("P");
//   div.appendChild(p);
//   p.innerText = joke;
// }

btn.addEventListener("click", getDadJokes);
