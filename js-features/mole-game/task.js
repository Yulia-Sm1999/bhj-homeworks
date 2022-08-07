let molePoints = document.getElementById('dead');
let moleFails = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) { 
  getHole(i).onclick = () => {
    if (getHole(i).classList.contains('hole_has-mole')) {
      molePoints.textContent = +molePoints.textContent + 1;
      isWin();
    } else {
      moleFails.textContent = +moleFails.textContent + 1;
      isWin();
    };
  }
};

let isWin = () => {
  if (molePoints.textContent == 10) {
    alert('Победа!');
    location.reload()
  };
  
  if (moleFails.textContent == 5) {
    window.alert("Поражение");
    location.reload()
  };
}







