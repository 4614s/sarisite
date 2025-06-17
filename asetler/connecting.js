const y = document.createElement("p");
y.id = "yukleniyor";
document.body.appendChild(y);


let a = 0;
const t = setInterval(() => {
  y.textContent = "Yükleniyor" + ".".repeat(a++ % 4);
}, 400);

setTimeout(() => {
  clearInterval(t); 
  y.insertAdjacentHTML("afterend", `
    <div style="padding:20px;display:flex;justify-content:center;align-items:center;">
      <p style="color:red;font-weight:bold">
        Error 504: SarıSite'ye ulaşılamıyor. En kısa sürede düzelteceğiz.
      </p>
    </div>
  `);
}, 20000);
