setInterval(function() {
  // Mengambil Waktu
  const waktu = new Date()
  
  // Mengambil Jam
  const jam = waktu.getHours()
  // Mengambil Menit
  const menit = waktu.getMinutes()
  // Mengambil Detik
  const detik = waktu.getSeconds()
  
  document.getElementById("jam").innerHTML =
  `${jam} : ${menit} : ${detik}`
  
  console.log(`${jam} : ${menit} : ${detik}`)
}, 1000);