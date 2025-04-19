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

  
  <p style="text-align: center; font-weight: bold;">10 JENIS TEKS</p>
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


              <p style="text-align: center; font-weight: bold;">10 JENIS GAMBAR</p>
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

                <p style="text-align: center; font-weight: bold;">10 JENIS AUDIO</p>
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

              <p style="text-align: center; font-weight: bold;">10 VIDEO</p>
  <p style="text-align: center;">1. MP4</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="Kucing.mp4" type="video/mp4"></video>

  <p style="text-align: center;">2. AVI</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="Kucing.avi" type="video/mp4"></video>

  <p style="text-align: center;">3. MOV</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="Kucing.mov" type="video/mp4"></video>

  <p style="text-align: center;">4. MKV</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="Kucing.mkv" type="video/mp4"></video>

  <p style="text-align: center;">5. WMV</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="Kucing.wmv" type="video/mp4"></video>

  <p style="text-align: center;">6. FLV</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="Kucing.flv" type="video/mp4"></video>

  <p style="text-align: center;">7. WEBM</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="Kucing.webm" type="video/mp4"></video>

  <p style="text-align: center;">8. AVCHD</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="Kucing.avchd.mts" type="video/mp4"></video>

  <p style="text-align: center;">9. MPEG-2</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="Kucing.mpg" type="video/mp4"></video>

  <p style="text-align: center;">10. 3GP</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="Kucing.3gp" type="video/mp4"></video>


              <p style="text-align: center; font-weight: bold;">10 JENIS ANIMASI</p>
  <p style="text-align: center;">1. 2D</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="Animasi2D.mp4" type="video/mp4"></video>

  <p style="text-align: center;">2. 3D</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="Animasi3D.mp4" type="video/mp4"></video>

  <p style="text-align: center;">3. STOP MOTION</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="AnimasiStopMotion.mp4" type="video/mp4"></video>

  <p style="text-align: center;">4. MOTION GRAPHICS</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="AnimasiMotionGraphics.mp4" type="video/mp4"></video>

  <p style="text-align: center;">5. INFOGRAFIS</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="AnimasiInfografis.mp4" type="video/mp4"></video>

  <p style="text-align: center;">6. WHITEBOARD</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="AnimasiWhiteboard.mp4" type="video/mp4"></video>

  <p style="text-align: center;">7. EXPLAINER</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="AnimasiExplainer.mp4" type="video/mp4"></video>

  <p style="text-align: center;">8. ROTOSCOPE</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="AnimasiRotoscope.mov" type="video/mp4"></video>

  <p style="text-align: center;">9. CLAY</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="AnimasiClay.mov" type="video/mp4"></video>

  <p style="text-align: center;">10. BONEKA</p>
  <video width="320" height="240" controls style="display: block; margin: 0 auto;"><source src="AnimasiBoneka.mp4" type="video/mp4"></video>


`;

  }
}
