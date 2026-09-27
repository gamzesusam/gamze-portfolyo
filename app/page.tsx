export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#3a2a2a]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFF9F2]/90 backdrop-blur border-b border-[#F3E6D5]">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-bold text-lg text-[#800020]">Gamze Susam</span>
          <div className="flex gap-6 text-sm font-medium text-[#800020]/80">
            <a href="#hakkimda" className="hover:text-[#D45060]">Hakkımda</a>
            <a href="#egitim" className="hover:text-[#D45060]">Eğitim</a>
            <a href="#yetenekler" className="hover:text-[#D45060]">Yetenekler</a>
            <a href="#projeler" className="hover:text-[#D45060]">Projeler</a>
            <a href="#iletisim" className="hover:text-[#D45060]">İletişim</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 bg-gradient-to-b from-[#FFF9F2] to-[#F3E6D5]"
      >
        <p className="text-[#D45060] font-medium mb-2">Merhaba, ben</p>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-[#800020]">
          Gamze Susam
        </h1>
        <p className="text-xl text-[#3a2a2a]/80 mb-8">Büyük Veri Analisti</p>
        <p className="max-w-xl text-[#3a2a2a]/70 mb-10">
          Veriyi anlamlandırmayı, sayılar arasındaki hikayeyi bulmayı ve
          teknolojiyle çözümler üretmeyi seviyorum.
        </p>
        <div className="flex gap-4">
          <a
            href="#projeler"
            className="px-6 py-3 bg-[#D45060] text-white rounded-full font-medium hover:bg-[#800020] transition"
          >
            Projelerimi Gör
          </a>
          <a
            href="#iletisim"
            className="px-6 py-3 border border-[#D45060] text-[#800020] rounded-full font-medium hover:bg-[#F3E6D5] transition"
          >
            İletişime Geç
          </a>
        </div>
      </section>

      {/* Hakkımda */}
      <section id="hakkimda" className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-8 text-[#800020]">Hakkımda.</h2>
        <p className="leading-relaxed mb-4 text-[#3a2a2a]/90">
          Lisede <strong>Bilişim Teknolojileri</strong> bölümünü okuyarak bilgisayar
          alanında temel eğitimimi aldım. Bu süreçte <strong>HTML</strong>,{" "}
          <strong>CSS</strong> ve <strong>JavaScript</strong> ile web geliştirme
          üzerine ilk projelerimi hazırladım.
        </p>
        <p className="leading-relaxed mb-4 text-[#3a2a2a]/90">
          Şu anda <strong>Manisa Celal Bayar Üniversitesi</strong>'nde eğitimime
          devam ediyor, <strong>C#</strong>, <strong>SQL</strong> ve{" "}
          <strong>Python</strong> dillerini öğrenerek veri analizi ve yazılım
          geliştirme alanında kendimi geliştiriyorum.
        </p>
        <p className="leading-relaxed text-[#3a2a2a]/90">
          Amacım, veriyi doğru şekilde işleyip anlamlı sonuçlar çıkaran{" "}
          <strong>Büyük Veri Analisti</strong> olarak projelerde yer almak.
        </p>
      </section>

      {/* Eğitim */}
      <section id="egitim" className="bg-[#F3E6D5] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-[#800020]">Eğitim.</h2>
          <div className="space-y-6">
            <div className="bg-[#FFF9F2] rounded-2xl p-6 border border-[#D45060]/20">
              <h3 className="text-lg font-semibold text-[#800020]">
                Manisa Celal Bayar Üniversitesi
              </h3>
              <p className="text-sm text-[#D45060] mb-2">
                Büyük Veri Analitiği · Devam Ediyor
              </p>
              <p className="text-[#3a2a2a]/80 text-sm">
                C#, SQL ve Python dersleri ile veri analizi, veritabanı yönetimi
                ve yazılım geliştirme üzerine eğitim alıyorum.
              </p>
            </div>
            <div className="bg-[#FFF9F2] rounded-2xl p-6 border border-[#D45060]/20">
              <h3 className="text-lg font-semibold text-[#800020]">
                Bilişim Teknolojileri (Lise)
              </h3>
              <p className="text-sm text-[#D45060] mb-2">Mezun</p>
              <p className="text-[#3a2a2a]/80 text-sm">
                HTML, CSS ve JavaScript ile temel web geliştirme eğitimi aldım,
                iki web sitesi projesi geliştirdim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Yetenekler */}
      <section id="yetenekler" className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-2 text-[#800020]">Yetenekler.</h2>
        <p className="text-[#3a2a2a]/60 mb-10">Kullandığım diller ve araçlar</p>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#D45060]">
              Web Geliştirme
            </h3>
            <p className="text-[#3a2a2a]/80">HTML · CSS · JavaScript</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#D45060]">
              Programlama & Veri
            </h3>
            <p className="text-[#3a2a2a]/80">C# · SQL · Python</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#D45060]">
              Veri Analizi
            </h3>
            <p className="text-[#3a2a2a]/80">
              Excel · Veri Görselleştirme · İstatistiksel Analiz
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#D45060]">
              Araçlar
            </h3>
            <p className="text-[#3a2a2a]/80">Git · VS Code · Visual Studio</p>
          </div>
        </div>
      </section>

      {/* Projeler */}
      <section id="projeler" className="bg-[#F3E6D5] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-[#800020]">Projeler.</h2>
          <p className="text-[#3a2a2a]/60 mb-10">Geliştirdiğim bazı çalışmalar</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#FFF9F2] rounded-2xl p-6 border border-transparent hover:border-[#D45060] transition">
              <h3 className="text-xl font-semibold mb-2 text-[#800020]">
                Maaş Tahminleme Projesi
              </h3>
              <p className="text-[#3a2a2a]/80 mb-3 text-sm">
                Farklı mesleklere ait değişkenler üzerinden maaş tahmini yapan
                bir veri analizi projesi.
              </p>
              <p className="text-xs text-[#D45060] font-medium">
                Python · Veri Analizi
              </p>
            </div>
            <div className="bg-[#FFF9F2] rounded-2xl p-6 border border-transparent hover:border-[#D45060] transition">
              <h3 className="text-xl font-semibold mb-2 text-[#800020]">
                Web Siteleri
              </h3>
              <p className="text-[#3a2a2a]/80 mb-3 text-sm">
                Lise döneminde HTML, CSS ve JavaScript kullanarak geliştirdiğim
                iki web sitesi projesi.
              </p>
              <p className="text-xs text-[#D45060] font-medium">
                HTML · CSS · JavaScript
              </p>
            </div>
            <div className="bg-[#FFF9F2] rounded-2xl p-6 border border-transparent hover:border-[#D45060] transition">
              <h3 className="text-xl font-semibold mb-2 text-[#800020]">
                Öğrenci Başarı Analizi
              </h3>
              <p className="text-[#3a2a2a]/80 mb-3 text-sm">
                Ders çalışma süresi, devamsızlık ve sınav notları arasındaki
                ilişkiyi inceleyen bir veri seti üzerinde analiz çalışması.
              </p>
              <p className="text-xs text-[#D45060] font-medium">
                Python · SQL · Veri Görselleştirme
              </p>
            </div>
            <div className="bg-[#FFF9F2] rounded-2xl p-6 border border-transparent hover:border-[#D45060] transition">
              <h3 className="text-xl font-semibold mb-2 text-[#800020]">
                Kütüphane Otomasyonu
              </h3>
              <p className="text-[#3a2a2a]/80 mb-3 text-sm">
                Kitap ödünç alma/verme süreçlerini takip eden basit bir
                veritabanı tabanlı otomasyon sistemi.
              </p>
              <p className="text-xs text-[#D45060] font-medium">
                C# · SQL
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikalar & Deneyim */}
      <section id="deneyim" className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-10 text-[#800020]">
          Sertifikalar & Deneyim.
        </h2>
        <ul className="space-y-4">
          <li className="flex gap-3 items-start">
            <span className="text-[#D45060] mt-1">●</span>
            <span className="text-[#3a2a2a]/85">
              Python ile Veri Analizine Giriş — Online Eğitim Sertifikası
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-[#D45060] mt-1">●</span>
            <span className="text-[#3a2a2a]/85">
              SQL Temelleri ve Veritabanı Yönetimi Sertifikası
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-[#D45060] mt-1">●</span>
            <span className="text-[#3a2a2a]/85">
              Üniversite bünyesinde düzenlenen veri analitiği atölyesine katılım
            </span>
          </li>
        </ul>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="bg-[#F3E6D5] py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-[#800020]">İletişim.</h2>
          <p className="text-[#3a2a2a]/70 mb-10">
            Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:gamze.serra@gmail.com"
              className="px-6 py-3 bg-[#D45060] text-white rounded-full font-medium hover:bg-[#800020] transition"
            >
              Email Gönder
            </a>
            <a
              href="https://www.linkedin.com/in/gamze-susam-2897a1403"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#D45060] text-[#800020] rounded-full font-medium hover:bg-[#FFF9F2] transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/gamzeserra3-wq"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#D45060] text-[#800020] rounded-full font-medium hover:bg-[#FFF9F2] transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#800020]/60 text-sm py-10 bg-[#FFF9F2]">
        © 2026 Gamze Susam. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}