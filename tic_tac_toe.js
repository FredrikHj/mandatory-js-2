let getGameCell = document.querySelectorAll('.gameCellBtn');
  for (let i = 0; i < getGameCell.length; i++){
    let getCellArea = getGameCell[i];
    getCellArea.addEventListener('click', inGame);
  }

  let circleOrCross = 0;

function inGame(e){

  let getResetBtnPlace = document.getElementById('playerInfoBox');
  let getWinLinePlace =  document.getElementById('gameBox');

  let getResetBtnIfExist = document.getElementById('resetBtn');
  let createResetBtn = document.createElement('button');
  createResetBtn.setAttribute('id', 'resetBtn');
  createResetBtn.textContent = "Nytt parti"


  let targetCell = e.target;
  let incommingSymbol;

  let getImgSymbol = document.createElement('img');
  getImgSymbol.setAttribute('class', 'imgSymbols');

  let getImgCirclefile = "circle.png";
  let getImgCrossfile = "cross.png";

  if (getResetBtnIfExist === null){
    getResetBtnPlace.appendChild(createResetBtn);
  }

  let getCell1x1 = document.querySelector('#c1x1');
  let symbolStrC1x1;
  let nameC1x1 = "Cell1x1";
  if (targetCell === getCell1x1){
    getCell1x1.removeEventListener('click', inGame);
    if (circleOrCross === 0){
      incommingSymbol = getImgSymbol.setAttribute("src", getImgCirclefile);
      getCell1x1.appendChild(getImgSymbol);
      circleOrCross = 1;
      symbolStrC1x1 = "Circel";
    }else{
      incommingSymbol = getImgSymbol.setAttribute("src", getImgCrossfile);
      getCell1x1.appendChild(getImgSymbol);
      circleOrCross = 0;
      symbolStrC1x1 = "Cross";
    }
  }
  let nameFrom1x1 = nameC1x1 + symbolStrC1x1;
  console.log(nameFrom1x1);

  let getCell1x2 = document.querySelector('#c1x2');
  let symbolStrC1x2;
  let nameC1x2 = "Cell1x2";
  if (targetCell === getCell1x2){
    getCell1x2.removeEventListener('click', inGame);
    if (circleOrCross === 0){
      incommingSymbol = getImgSymbol.setAttribute("src", getImgCirclefile);
      getCell1x2.appendChild(getImgSymbol);
      circleOrCross = 1;
      symbolStrC1x2 = "Circel"
    }else{
      incommingSymbol = getImgSymbol.setAttribute("src", getImgCrossfile);
      getCell1x2.appendChild(getImgSymbol);
      circleOrCross = 0;
      symbolStrC1x2 = "Cross";
    }
  }
  let nameFrom1x2 = nameC1x2 + symbolStrC1x2;
  // Vem spelar och vinner
  let getPlayer1Str = document.getElementById('player1');
  let getPlayer2Str = document.getElementById('player2');
  if (circleOrCross !== 1){
    getPlayer1Str.setAttribute('style', 'color: green');
    getPlayer2Str.setAttribute('style', 'color: red');
  }else{
    getPlayer2Str.setAttribute('style', 'color: green');
    getPlayer1Str.setAttribute('style', 'color: red');
  }

  // Vinn linjen rederazs ut över vunna celler
  let createWinline = document.createElement('div');
  console.log(nameFrom1x2);

  if(nameFrom1x1 === "Cell1x1Circel"){ // Måste ha 3 vilkor med && emellan
    console.log("Vinst grattis");
    createWinline.setAttribute("id", "winLineY1");
    getWinLinePlace.appendChild(createWinline);
  }

  createResetBtn.addEventListener('click', function resetGame(){
    location.reload();
  });
}
