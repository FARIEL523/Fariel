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
  <p style="text-align: center; font-weight: bold;">10 TEKS</p>
  
  <img src="Calibri" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>
  <img src="TimesNewRoman" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>
  <img src="Arial" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>
  <img src="Helvetica" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>
  <img src="Garamond" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>
  <img src="CourierNew" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>
  <img src="ComicSans" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>
  <img src="Verdana" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>
  <img src="Georgia" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>
  <img src="Roboto" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>

              <p style="text-align: center; font-weight: bold;">10 GAMBAR</p>
  <p style="text-align: center;">1. JPEG</p>
  <img src="FotoMeme.jpg" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>

  <p style="text-align: center;">2. PNG</p>
  <img src="FotoMeme.png" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>

  <p style="text-align: center;">3. GIF</p>
  <img src="FotoMeme.gif" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>

  <p style="text-align: center;">4. BMP</p>
  <img src="FotoMeme.bmp" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>

  <p style="text-align: center;">5. SVG</p>
  <img src="FotoMeme.svg" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>

  <p style="text-align: center;">6. TIFF</p>
  <img src="FotoMeme.tiff" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>

  <p style="text-align: center;">7. WEBP</p>
  <img src="FotoMeme.webp" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>

  <p style="text-align: center;">8. HEIC</p>
  <img src="FotoMeme.heic" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>

  <p style="text-align: center;">9. RAW</p>
  <img src="FotoMeme_1744979634.raw" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>

  <p style="text-align: center;">10. PDF</p>
  <img src="FotoMeme.pdf" alt="10 Teks" width="300" style="display: block; margin: auto;"><br><br>

                <p style="text-align: center; font-weight: bold;">10 AUDIO</p>
  <p style="text-align: center;">1. MP3</p>
  <audio controls style="display: block; margin: auto;"> <source src="dark-guitar-130435.mp3" type="audio/mpeg"> </audio>

  <p style="text-align: center;">2. WAV</p>
  <audio controls style="display: block; margin: auto;"> <source src="dark-guitar-130435.wav" type="audio/mpeg"> </audio>

  <p style="text-align: center;">3. AAC</p>
  <audio controls style="display: block; margin: auto;"> <source src="dark-guitar-130435.aac" type="audio/mpeg"> </audio>
  
  <p style="text-align: center;">4. OGG</p>
  <audio controls style="display: block; margin: auto;"> <source src="dark-guitar-130435.ogg" type="audio/mpeg"> </audio>

  <p style="text-align: center;">5. FLAC</p>
  <audio controls style="display: block; margin: auto;"> <source src="dark-guitar-130435.flac" type="audio/mpeg"> </audio>

  <p style="text-align: center;">6. ALAC</p>
  <audio controls style="display: block; margin: auto;"> <source src="dark-guitar-130435.m4a" type="audio/mpeg"> </audio>

  <p style="text-align: center;">7. AIFF</p>
  <audio controls style="display: block; margin: auto;"> <source src="dark-guitar-130435.aiff" type="audio/mpeg"> </audio>

  <p style="text-align: center;">8. DSD</p>
  <audio controls style="display: block; margin: auto;"> <source src="dark-guitar-130435.mp3" type="audio/mpeg"> </audio>

  <p style="text-align: center;">9. WMA</p>
  <audio controls style="display: block; margin: auto;"> <source src="dark-guitar-130435.wma" type="audio/mpeg"> </audio>

  <p style="text-align: center;">10. OPUS</p>
  <audio controls style="display: block; margin: auto;"> <source src="dark-guitar-130435.opus" type="audio/mpeg"> </audio>


`;

  }
}
