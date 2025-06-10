//Sarısite giris yapılmış sayfa js kodları
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
}

console.log("SarıSite gizli bölgeye hoş geldin! Burası sadece meraklılara açık.");
