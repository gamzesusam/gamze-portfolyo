import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F1F6F9] text-[#212A3E] selection:bg-[#212A3E] selection:text-white">
      {}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F1F6F9]/90 border-b border-[#9BA4B5]/40 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-[#212A3E] tracking-tight hover:opacity-80 transition">
            Gamze Susam
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-[#394867]">
            <a href="#hakkimda" className="hover:text-[#212A3E] transition">Hakkımda</a>
            <a href="#deneyim-egitim" className="hover:text-[#212A3E] transition">Eğitim & Staj</a>
            <a href="#projeler" className="hover:text-[#212A3E] transition">Projeler</a>
            <a href="#sosyal-sorumluluk" className="hover:text-[#212A3E] transition">Sosyal Sorumluluk</a>
            <a href="#iletisim" className="hover:text-[#212A3E] transition">İletişim</a>
          </nav>
        </div>
      </header>

      {}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-left">
        <span className="inline-block py-1 px-3 mb-6 text-xs font-semibold tracking-wider text-[#394867] uppercase bg-[#9BA4B5]/20 rounded-full border border-[#9BA4B5]/40">
          Büyük Veri Analistliği & Portfolyo
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#212A3E] leading-tight mb-6">
          Veriden Değer Üreten, <br />
          <span className="text-[#394867]">Analitik ve Tahmine Dayalı</span> Çözümler.
        </h1>
        <p className="text-lg md:text-xl text-[#394867] leading-relaxed max-w-2xl mb-8">
          Büyük veri analitiği, makine öğrenmesi modellemeleri ve interaktif veri hikâyeciliği (scrollytelling) üzerine odaklanan projeler geliştiriyorum.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projeler"
            className="px-6 py-3 rounded-lg bg-[#212A3E] text-white font-medium text-sm hover:bg-[#394867] shadow-sm transition"
          >
            Projelerimi İncele
          </a>
          <a
            href="https://maasini-en-cok-hangi-faktor-etkiliy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-[#9BA4B5] bg-white font-medium text-sm text-[#212A3E] hover:bg-[#F1F6F9] transition flex items-center gap-2"
          >
            <span>Canlı Veri Hikâyesi</span>
            <span className="text-xs">↗</span>
          </a>
        </div>
      </section>

      {}
      <section id="hakkimda" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#9BA4B5]/40">
        <h2 className="text-2xl font-bold mb-6 text-[#212A3E]">Hakkımda.</h2>
        <div className="space-y-4 text-base md:text-lg leading-relaxed text-[#394867]">
          <p>
            Lise eğitimimi <strong>Özcan Sabancı Mesleki ve Teknik Anadolu Lisesi</strong> bünyesinde <strong>Bilişim Teknolojileri</strong> alanında tamamlayarak bilgisayar bilimleri ve yazılım alanındaki temelimi attım. Bu süreçte <strong>HTML</strong>, <strong>CSS</strong> ve <strong>JavaScript</strong> ile modern web geliştirme üzerine ilk projelerimi hayata geçirdim.
          </p>
          <p>
            Lise son sınıfta <strong>EÜAŞ (Elektrik Üretim A.Ş.)</strong> bünyesinde zorunlu lise stajımı tamamladım.
          </p>
          <p>
            Şu anda <strong>Manisa Celal Bayar Üniversitesi</strong> Teknik Bilimler MYO İstatistik Bölümü, <strong>Büyük Veri Analistliği</strong> programında eğitimime devam ediyorum. Akademik çalışmalarımda <strong>Python</strong>, <strong>SQL</strong> ve <strong>C#</strong> teknolojilerini kullanarak büyük veri analitiği, makine öğrenmesi algoritmaları ve veri görselleştirme odaklı projeler yürütüyorum.
          </p>
          <p>
            Amacım; karmaşık veri yığınlarını işleyerek karar alma mekanizmalarını güçlendiren, aksiyona dönüştürülebilir anlamlı içgörüler üreten yetkin bir <strong>Büyük Veri Analisti</strong> olarak sektöre değer katmaktır.
          </p>
        </div>
      </section>

      {}
      <section id="deneyim-egitim" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#9BA4B5]/40">
        <h2 className="text-2xl font-bold mb-8 text-[#212A3E]">Eğitim ve Deneyim Geçmişi</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-white border border-[#9BA4B5]/40 shadow-sm">
            <span className="text-xs font-bold text-[#394867] uppercase tracking-wide">Önlisans Eğitimi</span>
            <h3 className="text-lg font-bold text-[#212A3E] mt-1">Manisa Celal Bayar Üniversitesi</h3>
            <p className="text-sm font-medium text-[#394867]">Teknik Bilimler MYO — İstatistik / Büyük Veri Analistliği (2025 – Günümüz)</p>
            <p className="mt-3 text-sm text-[#394867]/90 leading-relaxed">
              Veri tabanı mimarisi (SQL), Python ile veri analizi ve makine öğrenmesi modelleme teknikleri üzerine yoğunlaşan akademik müfredat.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#9BA4B5]/40 shadow-sm">
            <span className="text-xs font-bold text-[#394867] uppercase tracking-wide">Lise Stajı</span>
            <h3 className="text-lg font-bold text-[#212A3E] mt-1">EÜAŞ (Elektrik Üretim A.Ş.)</h3>
            <p className="text-sm font-medium text-[#394867]">Stajyer (12. Sınıf Zorunlu Stajı)</p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#9BA4B5]/40 shadow-sm">
            <span className="text-xs font-bold text-[#394867] uppercase tracking-wide">Ortaöğretim</span>
            <h3 className="text-lg font-bold text-[#212A3E] mt-1">Özcan Sabancı Mesleki ve Teknik Anadolu Lisesi</h3>
            <p className="text-sm font-medium text-[#394867]">Bilişim Teknolojileri Alanı — Web Programcılığı</p>
            <p className="mt-3 text-sm text-[#394867]/90 leading-relaxed">
              Web tasarımı ve kodlamanın temelleri (HTML, CSS, JavaScript) ve veritabanı yönetim sistemleri eğitimi.
            </p>
          </div>
        </div>
      </section>

      {}
      <section id="projeler" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#9BA4B5]/40">
        <h2 className="text-2xl font-bold mb-8 text-[#212A3E]">Öne Çıkan Gerçek Projeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Proje 1 */}
          <div className="p-6 rounded-xl bg-white border border-[#9BA4B5]/40 shadow-sm flex flex-col justify-between hover:border-[#394867] transition">
            <div>
              <span className="text-xs font-semibold text-[#394867] uppercase">Scrollytelling & Veri Gazeteciliği</span>
              <h3 className="text-lg font-bold text-[#212A3E] mt-1 mb-2">
                Küresel Lokasyon ve Şirket Ölçeği Maaş Analizi
              </h3>
              <p className="text-sm text-[#394867]/90 leading-relaxed mb-4">
                Kaggle üzerindeki 250.000 çalışan verisi incelenerek eğitilen Random Forest modeliyle gelir uçurumunu belirleyen faktörlerin interaktif görselleştirmesi.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-[#394867] mb-4">
                <span className="bg-[#F1F6F9] px-2.5 py-1 rounded border border-[#9BA4B5]/30">Next.js</span>
                <span className="bg-[#F1F6F9] px-2.5 py-1 rounded border border-[#9BA4B5]/30">Random Forest</span>
                <span className="bg-[#F1F6F9] px-2.5 py-1 rounded border border-[#9BA4B5]/30">Vercel</span>
              </div>
            </div>
            <a
              href="https://maasini-en-cok-hangi-faktor-etkiliy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#212A3E] hover:text-[#394867] hover:underline inline-flex items-center gap-1"
            >
              Canlı Projeyi Ziyaret Et →
            </a>
          </div>

          {}
          <div className="p-6 rounded-xl bg-white border border-[#9BA4B5]/40 shadow-sm flex flex-col justify-between hover:border-[#394867] transition">
            <div>
              <span className="text-xs font-semibold text-[#394867] uppercase">Makine Öğrenmesi (15.001 x 20)</span>
              <h3 className="text-lg font-bold text-[#212A3E] mt-1 mb-2">
                Yapay Zekanın Mesleklere Etkisi ve İş Gücü Otomasyon Riski
              </h3>
              <p className="text-sm text-[#394867]/90 leading-relaxed mb-4">
                Mesleklerin yapay zeka adaptasyon oranı, beceri gereksinimi ve gelir trendleri kullanılarak tehdit düzeyinin (Düşük, Orta, Yüksek) çoklu modellerle sınıflandırılması.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-[#394867] mb-4">
                <span className="bg-[#F1F6F9] px-2.5 py-1 rounded border border-[#9BA4B5]/30">XGBoost</span>
                <span className="bg-[#F1F6F9] px-2.5 py-1 rounded border border-[#9BA4B5]/30">Random Forest</span>
                <span className="bg-[#F1F6F9] px-2.5 py-1 rounded border border-[#9BA4B5]/30">Decision Tree</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#9BA4B5]">Araştırma & Modelleme Projesi</span>
          </div>

          {}
          <div className="p-6 rounded-xl bg-white border border-[#9BA4B5]/40 shadow-sm flex flex-col justify-between hover:border-[#394867] transition">
            <div>
              <span className="text-xs font-semibold text-[#394867] uppercase">Sağlık Analitiği & Optimizasyon</span>
              <h3 className="text-lg font-bold text-[#212A3E] mt-1 mb-2">
                Hastane İş Yükü Tahmini ile Kaynak Planlama Ar-Ge'si
              </h3>
              <p className="text-sm text-[#394867]/90 leading-relaxed mb-4">
                Poliklinik randevuları, acil servis yoğunluğu ve yatak doluluk oranlarının modellenmesiyle sağlık personeli ve oda kapasitesi kaynak planlamasının optimize edilmesi.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-[#394867] mb-4">
                <span className="bg-[#F1F6F9] px-2.5 py-1 rounded border border-[#9BA4B5]/30">Python</span>
                <span className="bg-[#F1F6F9] px-2.5 py-1 rounded border border-[#9BA4B5]/30">Zaman Serisi</span>
                <span className="bg-[#F1F6F9] px-2.5 py-1 rounded border border-[#9BA4B5]/30">Optimizasyon</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#9BA4B5]">Ar-Ge & Kapasite Tahmini</span>
          </div>

          {}
          <div className="p-6 rounded-xl bg-white border border-[#9BA4B5]/40 shadow-sm flex flex-col justify-between hover:border-[#394867] transition">
            <div>
              <span className="text-xs font-semibold text-[#394867] uppercase">Web Geliştirme Temelleri</span>
              <h3 className="text-lg font-bold text-[#212A3E] mt-1 mb-2">
                Özcan Sabancı MTAL Web Arayüz Çalışmaları
              </h3>
              <p className="text-sm text-[#394867]/90 leading-relaxed mb-4">
                Bilişim Teknolojileri alan eğitiminde modern web standartlarına uygun arayüz kodlama, veritabanı sorgu entegrasyonları ve dinamik web sayfası tasarımları.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-[#394867] mb-4">
                <span className="bg-[#F1F6F9] px-2.5 py-1 rounded border border-[#9BA4B5]/30">HTML5/CSS3</span>
                <span className="bg-[#F1F6F9] px-2.5 py-1 rounded border border-[#9BA4B5]/30">JavaScript</span>
                <span className="bg-[#F1F6F9] px-2.5 py-1 rounded border border-[#9BA4B5]/30">SQL</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#9BA4B5]">Temel Bilişim Portfolyosu</span>
          </div>

        </div>
      </section>

      {}
      <section id="sosyal-sorumluluk" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#9BA4B5]/40">
        <div className="p-8 rounded-2xl bg-white border border-[#9BA4B5]/40 shadow-sm">
          <span className="text-xs font-bold text-[#394867] uppercase tracking-wide">
            MCBÜ Sosyal Sorumluluk Projeleri Sergisi (2026 Bahar)
          </span>
          <h2 className="text-2xl font-bold text-[#212A3E] mt-2 mb-4">
            Dijital Çağdan Önce Oyunlar: Çocuklar İçin Eğitici Atölye
          </h2>
          <p className="text-base text-[#394867] leading-relaxed mb-6">
            Erken yaşta yoğun dijital ekran kullanımına alternatif oluşturmak amacıyla 5–6 yaş okul öncesi çocuklarla teknolojisiz oyunlar, renkli legolarla yön kodlama, geleneksel istop ile algoritma geliştirme ve yüzey gerilimi odaklı basit bilim deneyleri gerçekleştirilmiştir.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-[#F1F6F9] border border-[#9BA4B5]/30 mb-6">
            <div>
              <p className="text-xs text-[#9BA4B5] font-semibold">Hedef Kitle</p>
              <p className="text-sm font-bold text-[#212A3E]">5–6 Yaş Okul Öncesi</p>
            </div>
            <div>
              <p className="text-xs text-[#9BA4B5] font-semibold">Proje Danışmanı</p>
              <p className="text-sm font-bold text-[#212A3E]">Öğr. Gör. Nur Erdem</p>
            </div>
            <div>
              <p className="text-xs text-[#9BA4B5] font-semibold">Hata Belirleme Başarısı</p>
              <p className="text-sm font-bold text-[#394867]">%75 (2. Denemede)</p>
            </div>
            <div>
              <p className="text-xs text-[#9BA4B5] font-semibold">İletişim & Sabır Kazanımı</p>
              <p className="text-sm font-bold text-[#394867]">%90 Rol Geçişinde</p>
            </div>
          </div>

          <div className="text-xs text-[#394867]/80 border-t border-[#9BA4B5]/40 pt-4">
            <strong>Proje Ekibi:</strong> Gamze Susam, Cansu Taşdemir, Kübra Önaybırak, Cansu Akkaya
          </div>
        </div>
      </section>

      {}
      <footer id="iletisim" className="max-w-4xl mx-auto px-6 py-12 border-t border-[#9BA4B5]/40 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#394867]">
        <p>© 2026 Gamze Susam. Tüm hakları saklıdır.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/gamzesusam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#212A3E] transition font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#212A3E] transition font-medium"
          >
            LinkedIn
          </a>
          <a
            href="mailto:gamze.serra3@gmail.com"
            className="hover:text-[#212A3E] transition font-medium"
          >
            E-Posta
          </a>
        </div>
      </footer>
    </main>
  );
}