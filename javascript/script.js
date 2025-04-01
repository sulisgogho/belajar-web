async function getPrakiraanCuaca(kodeWilayah) {
  const url = `https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${kodeWilayah}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); // Tampilkan data di konsol
    tampilkanPrakiraanCuaca(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function tampilkanPrakiraanCuaca(data) {
  if (data && data.data && data.data[0] && data.data[0].cuaca && data.data[0].cuaca[0] && data.data[0].cuaca[0][0]) {
    const cuaca = data.data[0].cuaca[0][2]; // Ambil data cuaca pertama

    // Lakukan manipulasi DOM untuk menampilkan data di halaman web
    const cuacaHariIniElement = document.getElementById("cuaca-hari-ini");
    if (cuacaHariIniElement) {
      cuacaHariIniElement.innerHTML = `
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">${cuaca.local_datetime}</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Prakiraan Cuaca</a>
              <p class="mt-2 text-gray-500 flex flex-col">
                <img src="${cuaca.image}" alt="Cuaca" class="inline-block mr-2">${cuaca.weather_desc} (${cuaca.weather_desc_en})
              </p>
            </div>
            <div class="p-8 border-t border-gray-200 md:border-t-0 md:border-l">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-sm font-medium text-gray-500">Suhu</p>
                  <p class="text-lg font-semibold">${cuaca.t}°C</p>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-500">Kelembaban</p>
                  <p class="text-lg font-semibold">${cuaca.hu}%</p>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-500">Kecepatan Angin</p>
                  <p class="text-lg font-semibold">${cuaca.ws} km/jam</p>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-500">Arah Angin</p>
                  <p class="text-lg font-semibold">${cuaca.wd} (${cuaca.wd_deg}°)</p>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-500">Tutupan Awan</p>
                  <p class="text-lg font-semibold">${cuaca.tcc}%</p>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-500">Jarak Pandang</p>
                  <p class="text-lg font-semibold">${cuaca.vs_text} (vs: ${cuaca.vs})</p>
                </div>
              </div>
              <div class="mt-4">
                <p class="text-sm font-medium text-gray-500">Waktu Analisis</p>
                <p class="text-lg font-semibold">${cuaca.analysis_date}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  } else {
    console.error("Data prakiraan cuaca tidak valid atau tidak lengkap.");
  }
}

getPrakiraanCuaca("35.13.09.2012"); // Ganti dengan kode wilayah yang sesuai
