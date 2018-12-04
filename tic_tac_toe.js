let circleOrCross = 0;
let arrOfCell;

// Lyssnare för varje knapp & därtill en funktion för att hantera meddelandet om ingen vinst
let getGameCell = $(".gameCellBtn");
for (let i = 0; i < getGameCell.length; i++){
  let listenGameCell = getGameCell[i];
  listenGameCell.addEventListener('click', setSymbolOfCells);
}
//Funktioner fär celler baserat på cellen jag klickar i
function setSymbolOfCells(e){
  addResetBtn();
  let targetCell = e.target;
  let incommingSymbol;
  let getImgCirclefile = "circle.png";
  let getImgCrossfile = "cross.png";
  let nameOfCell = targetCell.id;
  let symbolName;
  //let capiNameOfCell = nameOfCell.charAt(0).toUpperCase()+nameOfCell.slice(1);

  targetCell.removeEventListener('click', setSymbolOfCells);
  let getImgSymbol = $('<img>').get(0);
  $(getImgSymbol).addClass("imgSymbols");

  if (circleOrCross === 0){
    circleOrCross = 1;
    symbolStr = "Circel";
    symbolName = nameOfCell + symbolStr;
    incommingSymbol = $(getImgSymbol).attr("src", getImgCirclefile);
    $(getImgSymbol).attr("id", symbolName);
    $(targetCell).append(getImgSymbol);
  }else{
    circleOrCross = 0;
    symbolStr = "Cross";
    symbolName = nameOfCell + symbolStr;
    incommingSymbol = $(getImgSymbol).attr("src", getImgCrossfile);
    $(getImgSymbol).attr("id", symbolName);
    $(targetCell).append(getImgSymbol);
  }
  gamningPlayer(circleOrCross);
  decideWinner();
}
function decideWinner(){
 // Vinn linjen rederazs ut över vunna celler.
 let lineName;
  let getCellName1x1Ci = $("#cell1x1").attr("id") + "Circel";
  console.log(getCellName1x1Ci);
  let getCellName1x1Cr = $("#cell1x1").attr("id") + "Cross";
  let getImgC1x1Ci = $("#cell1x1Circel").attr("id");
  console.log(getImgC1x1Ci);
  let getImgC1x1Cr = $("#cell1x1Cross").attr("id");

  let getCellName1x2Ci = $("#cell1x2").attr("id") + "Circel";
  let getCellName1x2Cr = $("#cell1x2").attr("id") + "Cross";
  let getImgC1x2Ci = $("#cell1x2Circel").attr("id");
  let getImgC1x2Cr = $("#cell1x2Cross").attr("id");

  let getCellName1x3Ci = $("#cell1x3").attr("id") + "Circel";
  let getCellName1x3Cr = $("#cell1x3").attr("id") + "Cross";
  let getImgC1x3Ci = $("#cell1x3Circel").attr("id");
  let getImgC1x3Cr = $("#cell1x3Cross").attr("id");

  let getCellName2x1Ci = $("#cell2x1").attr("id") + "Circel";
  let getCellName2x1Cr = $("#cell2x1").attr("id") + "Cross";
  let getImgC2x1Ci = $("#cell2x1Circel").attr("id");
  let getImgC2x1Cr = $("#cell2x1Cross").attr("id");

  let getCellName2x2Ci = $("#cell2x2").attr("id") + "Circel";
  let getCellName2x2Cr = $("#cell2x2").attr("id") + "Cross";
  let getImgC2x2Ci = $("#cell2x2Circel").attr("id");
  let getImgC2x2Cr = $("#cell2x2Cross").attr("id");

  let getCellName2x3Ci = $("#cell2x3").attr("id") + "Circel";
  let getCellName2x3Cr = $("#cell2x3").attr("id") + "Cross";
  let getImgC2x3Ci = $("#cell2x3Circel").attr("id");
  let getImgC2x3Cr = $("#cell2x3Cross").attr("id");

  let getCellName3x1Ci = $("#cell3x1").attr("id") + "Circel";
  let getCellName3x1Cr = $("#cell3x1").attr("id") + "Cross";
  let getImgC3x1Ci = $("#cell3x1Circel").attr("id");
  let getImgC3x1Cr = $("#cell3x1Cross").attr("id");

  let getCellName3x2Ci = $("#cell3x2").attr("id") + "Circel";
  let getCellName3x2Cr = $("#cell3x2").attr("id") + "Cross";
  let getImgC3x2Ci = $("#cell3x2Circel").attr("id");
  let getImgC3x2Cr = $("#cell3x2Cross").attr("id");

  let getCellName3x3Ci = $("#cell3x3").attr("id") + "Circel";
  let getCellName3x3Cr = $("#cell3x3").attr("id") + "Cross";
  let getImgC3x3Ci = $("#cell3x3Circel").attr("id");
  let getImgC3x3Cr = $("#cell3x3Cross").attr("id");

  // Y Led
  if(getCellName1x1Ci === getImgC1x1Ci && getCellName1x2Ci === getImgC1x2Ci && getCellName1x3Ci === getImgC1x3Ci ||
    getCellName1x1Cr === getImgC1x1Cr && getCellName1x2Cr === getImgC1x2Cr && getCellName1x3Cr === getImgC1x3Cr){
      lineName = "winLine" + "y1";
      setWinnerLine(lineName);
      winnerPlayer();
  }
  if(getCellName2x1Ci === getImgC2x1Ci && getCellName2x2Ci === getImgC2x2Ci && getCellName2x3Ci === getImgC2x3Ci ||
    getCellName2x1Cr === getImgC2x1Cr && getCellName2x2Cr === getImgC2x2Cr && getCellName2x3Cr === getImgC2x3Cr){
      lineName = "winLine" + "y2";
      setWinnerLine(lineName);
      winnerPlayer();
  }
  if(getCellName3x1Ci === getImgC3x1Ci && getCellName3x2Ci === getImgC3x2Ci && getCellName3x3Ci === getImgC3x3Ci ||
    getCellName3x1Cr === getImgC3x1Cr && getCellName3x2Cr === getImgC3x2Cr && getCellName3x3Cr === getImgC3x3Cr){
      lineName = "winLine" + "y3";
      setWinnerLine(lineName);
      winnerPlayer();
  }
  // X led
  if(getCellName1x1Ci === getImgC1x1Ci && getCellName2x1Ci === getImgC2x1Ci && getCellName3x1Ci === getImgC3x1Ci ||
    getCellName1x1Cr === getImgC1x1Cr && getCellName2x1Cr === getImgC2x1Cr && getCellName3x1Cr === getImgC3x1Cr){
      lineName = "winLine" + "x1";
      setWinnerLine(lineName);
      winnerPlayer();
  }
  if(getCellName1x2Ci === getImgC1x2Ci && getCellName2x2Ci === getImgC2x2Ci && getCellName3x2Ci === getImgC3x2Ci ||
    getCellName1x2Cr === getImgC1x2Cr && getCellName2x2Cr === getImgC2x2Cr && getCellName3x2Cr === getImgC3x2Cr){
      lineName = "winLine" + "x2";
      setWinnerLine(lineName);
      winnerPlayer();
  }
  if(getCellName1x3Ci === getImgC1x3Ci && getCellName2x3Ci === getImgC2x3Ci && getCellName3x3Ci === getImgC3x3Ci ||
    getCellName1x3Cr === getImgC1x3Cr && getCellName2x3Cr === getImgC2x3Cr && getCellName3x3Cr === getImgC3x3Cr){
      console.log("grae");
      lineName = "winLine" + "x3";
      setWinnerLine(lineName);
      winnerPlayer();
  }
  // Z rotation
  if(getCellName1x1Ci === getImgC1x1Ci && getCellName2x2Ci === getImgC2x2Ci && getCellName3x3Ci === getImgC3x3Ci ||
   getCellName1x1Cr === getImgC1x1Cr && getCellName2x2Cr === getImgC2x2Cr && getCellName3x3Cr === getImgC3x3Cr){
      console.log("grae");
      lineName = "winLine" + "z1";
      setWinnerLine(lineName);
      winnerPlayer();
  }
  if(getCellName3x1Ci === getImgC3x1Ci && getCellName2x2Ci === getImgC2x2Ci && getCellName1x3Ci === getImgC1x3Ci ||
   getCellName3x1Cr === getImgC3x1Cr && getCellName2x2Cr === getImgC2x2Cr && getCellName1x3Cr === getImgC1x3Cr){
      console.log("grae");
      lineName = "winLine" + "z2";
      setWinnerLine(lineName);
      winnerPlayer();
  }
  // Redera ut vinnarlinjen enligt: y1, y2, y3 | x1, x2, x3 | z1 eller z2!
  function setWinnerLine(lineName){
    console.log(lineName);
    let getWinLinePlace = $("#gameBox").get(0);
    let createWinline = $('<div></div>').get(0);
    $(createWinline).addClass("winPlayer");
    $(createWinline).attr("id", lineName);
    $(getWinLinePlace).append(createWinline);
    stopListenAtDivs();
  }
  function stopListenAtDivs(){
    // Stoppa all lysning vid vinst
    let getDivElement = $("div");
    for (let i = 0; i < getDivElement.length; i++) {
      let stopListenAtDiv = getDivElement[i];
      stopListenAtDiv.removeEventListener('click', setSymbolOfCells);
    }
  }
}
function gamningPlayer(circleOrCross, ){
  // Vem spelar och vinner
  let getPlayer1PElement = $("#player1").get(0);
  let getPlayer2PElement = $("#player2").get(0);
  let currentPlayer;
  if (circleOrCross !== 1){
    $("#player1").css("color", "green");
    $("#player2").css("color", "red");
    currentPlayer = getPlayer2PElement.textContent;
  }else{
    $("#player2").css("color", "green");
    $("#player1").css("color", "red");
    currentPlayer = getPlayer1PElement.textContent;
  }
  return currentPlayer;
}
function winnerPlayer(currentPlayer){

  // Ge ett vinnst meddelande efter om en div element skapas för strecket
  let getPlaceWinnerPlayer = $("#wonPlayer").get(0);
  let ifWinnerLineShow = $(".winPlayer").get(0).className;
  console.log(ifWinnerLineShow);
  if (ifWinnerLineShow === "winPlayer"){
    let winnerPlayer = "Vinnst för: " + gamningPlayer();
    getPlaceWinnerPlayer.textContent = winnerPlayer;
  console.log("fawerfg");
    $("#wonPlayer").css("width", "170px");
    $("#player1").css("color", "black");
    $("#player2").css("color", "black");
  }
}

function addResetBtn(){
  let getResetBtnPlace = $("#playerInfoBox").get(0);
  let createResetBtn = $("<button></button>").get(0);
  let getResetBtnIfExist = $('#resetBtn').get(0);
  $(createResetBtn).attr("id", "resetBtn");
  createResetBtn.textContent = "Nytt parti";

  if (getResetBtnIfExist === undefined){
    $(getResetBtnPlace).append(createResetBtn);
  }
  createResetBtn.addEventListener('click', function resetGame(){
    location.reload();
  });
}
