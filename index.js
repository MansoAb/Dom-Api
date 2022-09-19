const p = document.createElement("p");
const url = document.createElement("a");
const url1 = document.createElement("a");
const url2 = document.createElement("a");
const container = document.createElement("div");

url.textContent = "intocode";
url1.textContent = "google";
url2.textContent = "instagram";
p.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo sapiente hic porro vitae accusantium quisquam quis id, laudantium corporis, architecto, quas quia nemo esse quibusdam eveniet nostrum tenetur nesciunt.";

url.href = "https://learn.javascript.ru/modifying-document";
url1.href = "https://learn.javascript.ru/modifying-document";
url2.href = "https://learn.javascript.ru/modifying-document";

p.style.width = "30%";
p.style.border = "1px solid red";
p.style.borderRadius = "10px";
p.style.padding = "10px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.justifyContent = "space-between";
container.style.width = "30%";
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.flexDirection = "column";

document.body.append(p, container);
container.append(url, url1, url2);
