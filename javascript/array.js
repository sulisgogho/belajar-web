const arrayGue = ["❤️", "🔥", "👩"];
console.log(arrayGue);

const arrayKamu = [];
arrayKamu[0] = "😂";
arrayKamu[1] = "🏌️";
arrayKamu[2] = "📷";
console.log(arrayKamu);

const arrayKita = new Array();
arrayKita[0] = "P";
arrayKita[1] = "T";
console.log(arrayKita);

const huruf = arrayKita.includes("T");
console.log(huruf);

const api = arrayGue.includes("🔥");

if (api) {
  const posisiApi = arrayGue.indexOf("🔥");
  console.log(`buah semangka itu ada, dan berada di index ke-${posisiApi}`);
} else {
  console.log("saya gatau posisinya dimana");
}
