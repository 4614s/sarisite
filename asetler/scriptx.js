//Sarisite giriş yapılmış sayfa JS dosyası
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
