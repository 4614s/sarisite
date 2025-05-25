//Sarisite giriş yapılmış sayfa JS dosyası
function gonderiolustur() {
  alert(
    "Gönderi Paylaşmak İçin Sosyal Medya Hesaplarımızdan Birinden Her hangi bir gönderimizin altına Gönderi Oluşturacağınızı Belirtip Gönderinizin Başlığını ve içeriğini yorum olarak atın. En Kısa Sürede Paylaşımınız SarıSiteye Eklenecektir."
  );
}
let tarih = new Date();
let guncelYil = tarih.getFullYear();
document.getElementByID("year").textContent = guncelYil;
