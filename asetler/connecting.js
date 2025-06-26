const y = document.createElement("p");
y.id = "yukleniyor";
document.body.appendChild(y);


let a = 0;
const t = setInterval(() => {
  y.textContent = "Yükleniyor" + ".".repeat(a++ % 4);
}, 400);

setTimeout(() => { 
  clearInterval(t);
  const errText = document.createElement("div");
  errText.innerHTML = `
    <div style="padding:20px;display:flex;justify-content:center;align-items:center;">
      <p style="color:red;font-weight:bold">
        Error 504: SarıSite'ye ulaşılamıyor. En kısa sürede düzelteceğiz.
      </p>
    </div>
  `;
  document.body.appendChild(errText);
}, 20000);

setTimeout(() => {
  alert("Sarısite hiç ilgi görmediği ve ziyaret edilmediği için hostingi gereksiz bulunmuştur ve geçici olarak kapanmıştır.");
}, 20200);
