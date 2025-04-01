// cara 1
const sum1 = new Function("x", "y", "console.log(x+y)");

// cara 2
function sum2(x, y) {
  console.log(x + y);
}

// cara 3
const sum3 = (x, y) => {
  console.log(x + y);
};

sum1(1, 1);
sum2(2, 3);
sum3(3, 6);


/* TUGAS BESAR:
1. MEMBUAT PERHITUNGAN MATEMATIKA
 - luas lingkaran
 - luas segtiga
 - luas persegi panjnag
 - luas jajar genjang
 
2. MENGHITUNG TOTAL GAJI YANG DI DAPAT DALAM 1 BULAN DENGAN INPT MINIMAL :
 - nama karyawan
 - gaji perhari
 - jumlah hari masuk kerja

*/

// TUGAS 1 : MEMBUAT PERHITUNGAN MATEMATIKA
const lingkaran = (r) => {
  console.log("Luas Lingkaran = ", Math.PI * r * r);
};

lingkaran(7);

function segitiga() {
  let a = 7;
  let t = 4;
  const luas = (a * t) / 2;
  console.log("Luas segitiga = ", luas);
}
segitiga();

const persegiPanjang = new Function("p", "l", "console.log('luas persegi panjang = ', p*l)");
persegiPanjang(6, 5);

const jajarGenjang = () => {
  let a = 4;
  let t = 5;
  const luas = a * t;
  console.log("luas Jajar Genjang  = ", luas);
};
jajarGenjang();

// TUGAS 2 : MENGHITUNG TOTAL GAJI YANG DI DAPAT DALAM 1 BULAN DENGAN INPT MINIMAL

const Gaji = () => {
  let name = "Sulis";
  let dailySalary = 115000;
  let workDays = 30;
  const totalSalary = dailySalary * workDays;
  console.log("Nama : ", name);
  console.log("Total Gaji", totalSalary);
};
Gaji();
