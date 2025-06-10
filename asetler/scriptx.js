//Sarisite giriş yapılmış sayfa JS dosyası
function isimAyarla() {
  let isim = prompt("İsminiz (Sadece siz görürsünüz) :");
 if(isim) {
   localStorage.setItem("isim",isim);
mesajgoster(isim);
 }
}
function mesajgoster(isim) {
  document.getElementById("hg-mesaji").innerText = `Hoş geldin, ${isim}!`;
  document.getElementById("isimayarlabutonu").style.display = "none";
}

let kayitliIsim = localStorage.getItem("isim");
    if (kayitliIsim) {
      mesajGoster(kayitliIsim);
    }
function gonderiolustur() {
  alert(
    "Gönderi Paylaşmak İçin Sosyal Medya Hesaplarımızdan Birinden Her hangi bir gönderimizin altına Gönderi Oluşturacağınızı Belirtip Gönderinizin Başlığını ve içeriğini yorum olarak atın. En Kısa Sürede Paylaşımınız SarıSiteye Eklenecektir."
  );
}
function bizeUlasin() {
alert("Bize şuan ulaşamazsınız çünkü biz de bilmiyoruz nerde olduğumuzu:)");
}

console.log("SarıSite gizli bölgeye hoş geldin! Burası sadece meraklılara açık.");

let tarih = new Date();
let guncelYil = tarih.getFullYear();
document.getElementById("year").textContent = guncelYil;
