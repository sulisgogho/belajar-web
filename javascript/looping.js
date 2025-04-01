// Buat perulangan dari suatu variable bertipe array
/* contoh:
const x = [3, 5, 12]

loop data...
totalnilai adalah 20 karena 3+5+12 = 20 

looping data tersebut menggunakan for, while & do while
dan munculkan juga jumlah hasil penambahan semua angka yang ada di dalam arrya tersebut seperti pada contoh

*/

// for
const looping1 = () => {
  const x = [1, 3, 5];
  let total = 0;
  let detail = "";
  for (let i = 0; i < x.length; i++) {
    total += x[i];
    detail += x[i];

    if (i < x.length - 1) {
      detail += " + ";
    }
  }

  console.log("total nilai adalah ", total, "karena ", detail, "=", total);
};

looping1();

// while

function looping2() {
  const x = [2, 3, 4];
  let total = 0;
  let detail = "";
  let i = 0;
  while (i < x.length) {
    total += x[i];
    detail += x[i];

    if (i < x.length - 1) {
      detail += " + ";
    }
    i++;
  }
  console.log("total nilai adalah ", total, "karena ", detail, "=", total);
}
looping2();

// do while
const looping3 = () => {
  const x = [3, 4, 5];
  let detail = "";
  let total = 0;

  let i = 0;
  do {
    total += x[i];
    detail += x[i];

    if (i < x.length - 1) {
      detail += " + ";
    }
    i++;
  } while (i < x.length);
  console.log("total nilai adalah ", total, "karena ", detail, "=", total);
};
looping3();

// for of, for in, foreach, map

const pacarSaya = ["agnes", "putri", "marino", "angela", "vexana"];

console.log("ini pakai for of");
for (let pacar of pacarSaya) {
  console.log(pacar);
}

console.log("ini pakai for in");
for (let pacar in pacarSaya) {
  console.log(pacar);
}

console.log("ini pakai foreach");
pacarSaya.forEach((pacar) => {
  console.log(pacar);
});

console.log("ini pakai map");
pacarSaya.map((pacar) => {
  console.log(pacar);
});
