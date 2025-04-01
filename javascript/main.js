// let salam = "Halo, Selamat Malam";

// alert(salam);
// let nama = prompt("Siapa Namamu??");

// alert(salam + " " + nama);

// let umur = prompt("Berapa umurmu?");
// if (umur <= 5) {
//   alert("kamu masih balita");
// } else if (umur <= 12) {
//   alert("kamu masih anak-anak");
// } else if (umur <= 22) {
//   alert("kamu masih remaja");
// } else {
//   alert("kamu sudah dewasa");
// }

// let sabun = 23000;
// let shampo = 40000;
// let diskonSabun = (5 / 100) * sabun;
// let diskonShampo = (10 / 100) * shampo;

// let totalBelanja = sabun + shampo - (diskonSabun + diskonShampo);

// alert(`harga sabun adalah ${sabun}, lalu harga shampo  ${shampo} sementara total diskon yang didapat adalah ${diskonSabun + diskonShampo} sehingga total belanjaan yang perlu dibayarkan adalah ${totalBelanja}`);

// TUGAS KECIL
/*  
1. prompt untuk mengetahui saldo akhr dari apa yang diinputkan oleh user
2. menentukan hari dari apa yang ada saat ini di pc kalian
*/

// let saldoAwal = 500000;
// let uangKeluar = parseInt(prompt("Masukkan uang yang anda gunakan"));
// let saldoAkhir = saldoAwal - uangKeluar;

// alert(`Sisa uang anda adalah senilai Rp.${saldoAkhir} `);

let date = new Date();
let indexHari = date.getDay();
let hari = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];
console.log(hari[indexHari]);

alert(`hari ini adalah hari ${hari[indexHari]}`);

console.log(document.title);

document.title = "desyanti amelia";
