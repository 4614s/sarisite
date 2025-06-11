let kodlar = [
        "a7uk3djbjy",
        "46ka1b4dpu",
        "x9pm2qwtv3",
        "bz8l0rnkye",
        "q1wj5zemfv",
        "tc6nsd0rka",
        "m3plq9bshx",
        "v8gy2nxqzt",
      ];

      document.getElementById("buton").addEventListener("click", function (e) {
        e.preventDefault();

        const form = document.getElementById("kodform");

        if (form.checkValidity()) {
          let rastgeleKod = kodlar[Math.floor(Math.random() * kodlar.length)];

          alert(`Sınırsız Kullanımlık, giriş kodunuz: ${rastgeleKod}`);
        } else {
          alert("Lütfen tüm alanları eksiksiz doldurun.");
        }
      });

      function checkPassword() {
        let userPassword = document.getElementById("password").value;

        if (kodlar.includes(userPassword)) {
          alert("Kod doğru! İşlem başarılı.");
          localStorage.setItem("giris", "true");
          setTimeout(function () {
            window.location.href =
              "../21/";
          }, 100);
        } else {
          alert("Hatalı veya eksik kod girdiniz.");
        }
      }
