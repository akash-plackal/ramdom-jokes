const div = document.querySelector("div");
const btn = document.querySelector("button");
document.addEventListener("DOMContentLoaded", addDadJokes);

async function getDadJokes() {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  return res.data.joke;
}

async function addDadJokes() {
  let joke = await getDadJokes();
  const p = document.createElement("P");
  div.appendChild(p);
  p.innerText = joke;
}

btn.addEventListener("click", addDadJokes);
