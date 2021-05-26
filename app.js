const ul = document.querySelector("ul");
const btn = document.querySelector("button");
document.addEventListener("DOMContentLoaded", addDadJokes);

async function getDadJokes() {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  return res.data.joke;
}

async function addDadJokes() {
  let joke = await getDadJokes();
  const li = document.createElement("li");
  li.append(joke);
  ul.append(li);
}

btn.addEventListener("click", addDadJokes);
