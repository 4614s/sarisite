//Page.js içeriği eski = index.html , /21/ ve scriptx.js içeriğinden fazladır!

if (!location.hostname.includes("sarisite.pages.dev")) {
 document.body.innerHTML = "<h1>Bu içerik yalnızca SarıSite'de çalışır.</h1>";
  console.log("Yetkisiz alan adı: " + location.hostname);
} else {

if(localStorage.getItem("giris") === "true"){
 document.title = `SARISİTE 2.2`;
 document.querySelector("body").innerHTML =        
    `<header>
      
    <p class="sarisite">SARISİTE</p>
    <p style="gap: 1vw" class="ortayahizalananlaryatayda" id="description">
      Burası İlan Sitesi değil. O iş
      <a style="color: black" href="https://www.sahibinden.com/"
        >Sahibindenin</a
      >
      işi. Burası bizim sitemiz.
    </p>
     <input type="search" placeholder="Arama Yapın..." id="arama-cubugu" />
  
    </header>

    <main>

 <article class="kutu">
   <h2 id="hg-mesaji" class="gonderi-baslik">Hoş geldiniz!</h2>
  <button id="isimayarlabutonu" onclick="isimAyarla()">İsim ayarla</button>
 </article>
      
  <article class="kutu">
   <p class="gonderi-kullaniciadi">@SarısiteninKurucusu</p>
   <h2 class="gonderi-baslik">En çok hostingi değişen site = Sarısite</h2>
   <p class="gonderi-paragraf">
    İlk başta glitchdeydik, sonra githuba geçtik, şimdide cloudflare pagestayız. Sonrada vercele geçmeyi düşünüyorum. 🤣 
   </p>
    
  </article>
      
  <article class="kutu">
      <p class="gonderi-kullaniciadi">Sistem Paylaşımı</p>
      <h2 class="gonderi-baslik">SarıSite Güncelleme Notları</h2>
      <p class="gonderi-paragraf">
      <details> 
        <summary>Güncelleme Notları</summary>
        <details>
        <summary>İlk Sarısite'de neler vardı?</summary>
        <b>Neler vardı?</b>
        <ul>
        <li>SARISİTE yazısı</li>
        <li>Arama çubuğu</li>
        <li>Eklemek İstekleriniz yazısı</li>
        <li>Sosyal medya hesapları (youtube ve instagram)</li>
        </ul>
        <b>Neler yoktu?</b>
        <ul>
        <li>Giriş sistemi</li>
        <li>Sürümler</li>
        <li>Gönderiler</li>
        <li>Size özel karşılama yazısı</li>
        <li>Veri depolama <b>(Şuan hala verilerinizi toplamıyoruz :)</b> Merak etmeyin)</li> 
        </ul>
        <details>
        <summary>Sarısitenin ilk halinin fotoğrafı</summary>
        <img src="asetler/ilksarisite.jpg" width="300px" height="550px" />
        Ve ozamanlar Sarısite glitch'de barındırılıyordu.
        </details>
        </details>
        <details>
          <summary>v2.0 Sürümü Yenilikleri</summary>
          <ul>
            <li>Sarısite stili güncellendi</li>
            <li>
              Sarısiteye gönderi paylaşma özelliği geldi <br />
              Ama nedense kimse bu özelliği kullanmadı:(
            </li>
          </ul>
        </details>
        <details>
          <summary>v2.1 Sürümü Yenilikleri</summary>
          <ul>
            <li>
              Giriş kodu artık bir tane değil. Yani Artık Birden fazla giriş
              kodu var! (Güncelleme sebebini anlamadıysanız giriş sayfasındaki
              itiraf bölümünü okuyun.)
            </li>
            <li>
              Bu özellik diğerinden daha önemli: Oturum açık tutma özelliği,
              Örnek Sarısiteye giriş yaptınız ve yanlışlıkla sekmeyi kapattınız
              tekrardan giriş yapmak <del>zorundasınız</del> artık değilsiniz!

              <br />
              <br />
              Uyarı: Çerezler ve site verileri kısmındaki depolanmış verileri
              silmeyin o sizin giriş yapıp yapmadığınızı bildiren veri.
            </li>
          </ul>
        </details>
        <details>
          <summary>v2.1.1 Sürümü Yenilikleri</summary>
          Aslında v2.1.1 Sürümü sayfada sadece birkac stil özelliği ekledi diyebiliriz
         <ul>
           <li>Alt Bilgi (Footer denir) Eklendi. </li>
           <li>Footerda telif yazısı ve bize ulaşın yazısı eklendi.</li>
           <li>Sosyal bağlantılarda footerın en altında.</li>
         </ul>
        </details>
        <details>
          <summary>v2.1.2 Sürümü Yenilikleri</summary>
         Hep böyle küçük güncellemeler yapmamız hoşunuza gidiyor mu? 
          <ul>
            <li>Hoş geldin mesajı eklendi</li>
            <li>Hoş geldin mesajına isminizide yazabilirsiniz.</li>
            <li>Bi anlık unutuyor ama sonra sizi hatırlıyor merak etmeyin.<b>Sarısite sizi hatırlar</b></li> 
          </ul>
        </details>
        <details>
        <summary>v2.2 Sürümü Yenilikleri</summary>
        Tamamen Sarısite'yi baştan yazdık ama görünüşteki 
        tek fark tarayıcınızın adres çubuğunda 4614s.github.io/sarisite/21/
        yerine düz 4614s.github.io/sarisite/ yazması gibi görünebilir ama
        Tek bir sayfada 4 farklı işlev yapabiliyoruz.
        <ul>
        <li>Giriş yapılmamış Sarısite</li>
        <li>Giriş yapılmış Sarısite</li>
        <li>Yükleniyor... yazısı belki Sarısite'ye biraz geç girerseniz diye.</li>
        <li>Hata: Sarısite'ye ulaşılamazsa</li>
        </ul>
        Bunlar kolay gibi görünsede 2 sayfanın kodunu tek bir script dosyasına aktarmak kolay değildi.
        Ve yükleniyor sayfasıda yapıldı <b>tek sayfada 4 işlev!</b>
        </details>
      </details>
        <br />
        Bilgilendirme SarıSite Şuanda v2.2 Sürümünde
      </p>
    
  </article>
      
    <div class="ortayahizalananlaryatayda">
      <button onclick="gonderiolustur()" id="gonderiolustur">
        Gönderi Oluştur
      </button>
    </div>
    <br/>

    </main>
    
    <footer>
      
      <div class="ortayahizalananlaryatayda telifyazisi">
        <p><b>© <span id="year"></span> SARISİTE - Tüm Hakları Saklıdır.</b></p>
      </div>
      <div class="ortayahizalananlaryatayda telifyazisi">
      <a  href="#"
      style="color: black;text-decoration:none;padding: 4px;"
      onclick="bizeUlasin()"> Bize Ulaşın </a>
      </div>
    <h2 class="sosyallinks">Sosyal Bağlantılar</h2>
    <div class="buttons">
      <span class="ytlink linkbuttons">
        <a
          class="linktext"
          href="https://www.youtube.com/@Sar%C4%B1SiteninKurucusu"
        >
          Youtube</a
        >
      </span>
      <span class="inslink linkbuttons">
        <a
          class="linktext"
          href="https://www.instagram.com/sarisiteninkurucusu?igsh=MWJkbGprN2JxeHM3Zw=="> 
          İnstagram</a>
      </span>
      <span class="githublink linkbuttons">
        <a
          class="linktext"
          href="https://github.com/4614s"> 
          Github</a>
      </span>
     <span class="glitchlink linkbuttons">
        <a
          class="linktext"
          href="https://glitch.com/@sarisiteninkurucusu"> 
          Glitch</a>
     </span>
    </div>
    <br/>
    <br/>
      
    </footer>`;
}
else{ 
 document.title = `SARISİTE`;
 document.querySelector("body").innerHTML = 
  ` <div class="ortayahizala">
      <p class="sarisite">SARISİTE</p>
    </div>
    <input
      type="text"
      id="arama-cubugu"
      placeholder="Arama yapın..."
    />
    <br />
    <br />
    <div style="display:flex; justify-content:center; align-item: center; padding: 9px;">
    <a href="../sarisite/giris/" style="color: black:font-size: 1.2rem;">
      Giriş Yap! ve Tüm Özelliklere Eriş</a
    >
    </div>
    <br />
    <div class="ortayahizalananlaryatayda">
      <p class="not">
        Not: Bu sayfa bomboş hatta kodları bile yarım
        <b style="text-decoration: underline"
          >ama sarısite sandığın gibi kötü bir yer değil gerçek SARISİTEye
          girmek için "Giriş Yap! ve Tüm Özelliklere Eriş" Yazısına tıkla!
        </b>
      </p>
    </div>`;
}


function isimAyarla() {
  let isim = prompt("İsminiz (Sadece siz görürsünüz):");
  if (isim) {
    localStorage.setItem("isim", isim);
    mesajGoster(isim);
  }
}

function mesajGoster(isim) {
  document.getElementById("hg-mesaji").innerText = `Hoş geldin, ${isim}!`;
  document.getElementById("isimayarlabutonu").style.display = "none";
}

// DOM tamamen yüklenince kontrol et
document.addEventListener("DOMContentLoaded", () => {
  let kayitliIsim = localStorage.getItem("isim");
  if (kayitliIsim) {
    mesajGoster(kayitliIsim);
  }

  // Yıl güncellemesi
  let tarih = new Date();
  let guncelYil = tarih.getFullYear();
  document.getElementById("year").textContent = guncelYil;
});
 

function gonderiolustur() {
  alert(
    "Gönderi Paylaşmak İçin Sosyal Medya Hesaplarımızdan birinden herhangi bir gönderimizin altına gönderi oluşturacağınızı belirtip başlık + içeriği yorum olarak yazın. En kısa sürede paylaşılır."
  );
}

function bizeUlasin() {
  alert("Bize şu an ulaşamazsınız çünkü biz de bilmiyoruz neredeyiz :)");


console.log("SarıSite gizli bölgeye hoş geldin! Burası sadece meraklılara açık.");
 }
}
