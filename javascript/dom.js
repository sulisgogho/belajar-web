const body = document.body;

const btn = document.getElementById("btn");

console.log(btn);

const defaultText = "Klik Disini";
btn.innerText = defaultText;

btn.style.background = "yellow";
btn.style.padding = "10px";

let nama = document.createElement("h2");

function munculNama() {
  nama.innerText = "Sulistyowati Munawaroh";
  body.append(nama);
  nama.style.color = "red";
}

function ubahWarna() {
  nama.style.color = "blue";
}
