let getGameCell = document.querySelectorAll('.gameCellBtn');
  for (let i = 0; i < getGameCell.length; i++){
    let getCellArea = getGameCell[i];
    getCellArea.addEventListener('click', inGame);
  }


  let getCell1x1 = document.querySelector('#c1x1');
  let getCell1x2 = document.querySelector('#c1x2');
  let getCell1x3 = document.querySelector('#c1x3');
  let incommingSymbol;

  let getImgSymbol = document.createElement('img');
  getImgSymbol.setAttribute('class', 'imgSymbols');
  let getImgCirclefile = "circle.png";
  let getImgCrossfile = "cross.png";
  let circleOrCross = 0;

    function symbolInCell1x1(Symbolstr){
      if (circleOrCross === 0){
        incommingSymbol = getImgSymbol.setAttribute("src", getImgCirclefile);
        getCell1x1.appendChild(getImgSymbol);
        circleOrCross = 1;
        Symbolstr = "Circel";
      }else{
        incommingSymbol = getImgSymbol.setAttribute("src", getImgCrossfile);
        getCell1x1.appendChild(getImgSymbol);
        circleOrCross = 0;
        Symbolstr = "Cross";
      }
      let name = "Cell1x1" + Symbolstr;
      arrC1x1 = [circleOrCross, name]
      console.log(arrC1x1);
      return arrC1x1;
    }

function inGame(e){
  let targetCell = e.target;
  let getResetBtnPlace = document.getElementById('playerInfoBox');
  let getWinLinePlace =  document.getElementById('gameBox');

  let getResetBtnIfExist = document.getElementById('resetBtn');
    let createResetBtn = document.createElement('button');
    createResetBtn.setAttribute('id', 'resetBtn');
    createResetBtn.textContent = "Nytt parti";

  if (getResetBtnIfExist === null){
    getResetBtnPlace.appendChild(createResetBtn);
  }

  let arrC1x1;
  let arrC1x2;
  if (targetCell === getCell1x1){
    let nameStr1x1 = "";
      getCell1x1.removeEventListener('click', inGame);
    symbolInCell1x1();
    circleOrCross = arrC1x1[0];
    console.log(circleOrCross);
  }

  if (targetCell === getCell1x2){
    let nameStr1x2 = "";
    getCell1x2.removeEventListener('click', inGame);
    function symbolInCell1x2(){
      if (circleOrCross === 0){
        incommingSymbol = getImgSymbol.setAttribute("src", getImgCirclefile);
        getCell1x2.appendChild(getImgSymbol);
        circleOrCross = 1;
        Symbolstr = "Circel"
      }else{
        incommingSymbol = getImgSymbol.setAttribute("src", getImgCrossfile);
        getCell1x2.appendChild(getImgSymbol);
        circleOrCross = 0;
        Symbolstr = "Cross";
      }
      let name = "Cell1x1" + Symbolstr;
      return [circleOrCross, name];
    }
  symbolInCell1x2();
  }



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

/*
  let incomminSymbolStrC1x1 = symbolInCell1x1();
  let incomminSymbolStrC1x2 = symbolInCell1x2();

  if(incomminSymbolStrC1x1 === "Cell1x1Circel" &&  incomminSymbolStrC1x2 === "Cell1x2Cross"){ // Måste ha 3 vilkor med && emellan
    console.log("Vinst grattis");
    createWinline.setAttribute("id", "winLineY1");
    getWinLinePlace.appendChild(createWinline);
  }
*/
  createResetBtn.addEventListener('click', function resetGame(){
    location.reload();
  });

}
