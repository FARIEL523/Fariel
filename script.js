function tampilkan(halaman) {
  const konten = document.getElementById('konten');

  if (halaman === 'home') {
    konten.innerHTML = `
      <h2>Home</h2>
      <p>Halo! Saya Fariel. Ini adalah web pribadi saya.</p>
      <img src="kelasTIB.jpeg" alt="Foto Kelas" width="300"><br><br>
    `;
  } else if (halaman === 'about') {
    konten.innerHTML = `
      <h2>About</h2>
      <p>Nama saya Muhammad Fariel Gifari. Saya suka belajar pemrograman dan membuat konten lucu!</p>
        <img src="Ipin.jpeg" alt="Foto Lucu" width="300"><br><br>

    `;
  } else if (halaman === 'contact') {
    konten.innerHTML = `
      <h2>Contact</h2>
      <p>Email: fariel@example.com</p>
      <p>Instagram: @farielgifari</p>
    `;
  } else if (halaman === 'tugas') {
    konten.innerHTML = `                     
  <h2>Tugas</h2>
  <p>Berikut adalah tugas saya:</p>
  <ul>
    <li><a href="UTS_SISMUL_FARIEL.pdf" target="_blank">UTS Sistem Multimedia (PDF)</a></li>
    <li><a href="FORMAT_AUDIO_POPULER.pdf" target="_blank">Tugas 1 - (PDF)</a></li>
  </ul>

   <p>10 TEKS<p>

  <audio controls>
    <source src="Musik.mp3" type="audio/mpeg">
  </audio>

   <video width="320" height="240" controls>
    <source src="Video.mp4" type="video/mp4">
  </video>
`;

  }
}
