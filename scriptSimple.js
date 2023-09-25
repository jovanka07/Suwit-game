function getPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) {
    return "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    return "orang";
  } else {
    return "semut";
  }
}

function getHasil(comp, player) {
  // menentukan rules
  if (player == comp) {
    return "SERI!";
  } else if (player == "gajah") {
    return comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (player == "orang") {
    return comp == "gajah" ? "KALAH!" : "MENANG!";
  } else if (player == "semut") {
    return comp == "orang" ? "KALAH" : "MENANG!";
  }
}

function putar() {
  const classComputer = document.querySelector(".img-komputer");
  const gambar = ["semut", "orang", "gajah"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }

    classComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const imgPilihan = document.querySelectorAll("li img");

imgPilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    console.log("comp :" + pilihanComputer);
    console.log("player :" + pilihanPlayer);
    console.log("hasil :" + hasil);
    putar();
    setTimeout(() => {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
      const textHasil = document.querySelector(".info");
      textHasil.innerHTML = hasil;
    }, 1000);
  });
});
