/*

Input: [1,2,3,4,5]
Output: 15

Input:[2, 4, 9, 1]
Output: 16

*/

/*
- Looping
- Variable
 */
function sum(num) {
  let jumlah = 0;
  for (let i = 0; i < num.length; i++) {
    jumlah += num[i];
  }
  return jumlah;
}

console.log(sum([2, 4, 9, 1]));

// penjelasan
/*
1. kita punya function dengan nama sum
2. dengan parameter num
3. kemudian buat variabel jumlah
4. lalu melakukan perulangan menyesuaikan parameter.lenght
5. lalu selanjutnya menambahkan elemen num kedalam jumlah ==> jumlah += num[i] sama artinya dengan jumlah = jumlah +num[i]
6. selanjutnya return jumlah 
*/
