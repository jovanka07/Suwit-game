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

const pGajah = document.querySelector(".gajah");
pGajah.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pGajah.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  console.log("comp :" + pilihanComputer);
  console.log("player :" + pilihanPlayer);
  console.log("hasil :" + hasil);
  const imgComputer = document.querySelector(".img-komputer");
  imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
  const textHasil = document.querySelector(".info");
  textHasil.innerHTML = hasil;
});

const pOrang = document.querySelector(".orang");
pOrang.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pOrang.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  console.log("comp :" + pilihanComputer);
  console.log("player :" + pilihanPlayer);
  console.log("hasil :" + hasil);
  const imgComputer = document.querySelector(".img-komputer");
  imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
  const textHasil = document.querySelector(".info");
  textHasil.innerHTML = hasil;
});

const pSemut = document.querySelector(".semut");
pSemut.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pSemut.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  console.log("comp :" + pilihanComputer);
  console.log("player :" + pilihanPlayer);
  console.log("hasil :" + hasil);
  const imgComputer = document.querySelector(".img-komputer");
  imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
  const textHasil = document.querySelector(".info");
  textHasil.innerHTML = hasil;
});
