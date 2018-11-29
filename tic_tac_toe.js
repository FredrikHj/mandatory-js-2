// Generella variabler för samtliga funktioner
let incommingSymbol;
let getImgCirclefile = "circle.png";
let getImgCrossfile = "cross.png";
let circleOrCross = 0;

let getCell1x1 = $("#c1x1").get(0);
let symbolStrC1x1;
let nameOfC1x1;
let arrOfC1x1;

let getCell1x2 = $("#c1x2").get(0);
let symbolStrC1x2;
let nameOfC1x2;
let arrOfC1x2;

let getCell1x3 = $("#c1x3").get(0);
let symbolStrC1x3
let nameOfC1x3;
let arrOfC1x3;

let getCell2x1 = $("#c2x1").get(0);
let symbolStrC2x1;
let nameOfC2x1;
let arrOfC2x1;

let getCell2x2 = $("#c2x2").get(0);
let symbolStrC2x2;
let nameOfC2x2;
let arrOfC2x2;

let getCell2x3 = $("#c2x3").get(0);
let symbolStrC2x3
let nameOfC2x3;
let arrOfC2x3;

let getCell3x1 = $("#c3x1").get(0);
let symbolStrC3x1;
let nameOfC3x1;
let arrOfC3x1;

let getCell3x2 = $("#c3x2").get(0);
let symbolStrC3x2;
let nameOfC3x2;
let arrOfC3x2;

let getCell3x3 = $("#c3x3").get(0);
let symbolStrC3x3
let nameOfC3x3;
let arrOfC3x3;

// Lyssnare för varje knapp & därtill en funktion för att hantera meddelandet om ingen vinst
let getGameCell = $(".gameCellBtn");
for (let i = 0; i < getGameCell.length; i++){
  let listenGameCell = getGameCell[i];
  listenGameCell.addEventListener('click', inGame);
}

// Funktioner fär varje cell
function setSymbolOfCell1x1(){
  getCell1x1.removeEventListener('click', inGame);
  let getImgSymbol = $('<img>').get(0); // jq skapa en img
  getImgSymbol.setAttribute('class', 'imgSymbols');

  let name = "Cell1x1"
  if (circleOrCross === 0){
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCirclefile);
    getCell1x1.appendChild(getImgSymbol);
    circleOrCross = 1;
    symbolStr = "Circel";
  }else{
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCrossfile);
    getCell1x1.appendChild(getImgSymbol);
    circleOrCross = 0;
    symbolStr = "Cross";
  }
  nameOfC1x1 = name + symbolStr;
  arrOfC1x1 = [circleOrCross, nameOfC1x1, getCell1x1];
  return arrOfC1x1;
}
function setSymbolOfCell1x2(){
  getCell1x2.removeEventListener('click', inGame);
  let name = "Cell1x2";
  let getImgSymbol = $('<img>').get(0); // jq skapa en img
  getImgSymbol.setAttribute('class', 'imgSymbols');

  if (circleOrCross === 0){
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCirclefile);
    getCell1x2.appendChild(getImgSymbol);
    circleOrCross = 1;
    symbolStr = "Circel";
  }else{
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCrossfile);
    getCell1x2.appendChild(getImgSymbol);
    circleOrCross = 0;
    symbolStr = "Cross";
  }
  nameOfC1x2 = name + symbolStr;
  arrOfC1x2 = [circleOrCross, nameOfC1x2];
  return arrOfC1x2;
}
function setSymbolOfCell1x3(){
  getCell1x3.removeEventListener('click', inGame);
  let name = "Cell1x3";
  let getImgSymbol = $('<img>').get(0); // jq skapa en img
  getImgSymbol.setAttribute('class', 'imgSymbols');

  if (circleOrCross === 0){
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCirclefile);
    getCell1x3.appendChild(getImgSymbol);
    circleOrCross = 1;
    symbolStr = "Circel";
  }else{
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCrossfile);
    getCell1x3.appendChild(getImgSymbol);
    circleOrCross = 0;
    symbolStr = "Cross";
  }
  nameOfC1x3 = name + symbolStr;
  arrOfC1x3 = [circleOrCross, nameOfC1x3];
  return arrOfC1x3;
}
function setSymbolOfCell2x1(){
  getCell2x1.removeEventListener('click', inGame);
  let name = "Cell2x1";
  let getImgSymbol = $('<img>').get(0); // jq skapa en img
  getImgSymbol.setAttribute('class', 'imgSymbols');

  if (circleOrCross === 0){
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCirclefile);
    getCell2x1.appendChild(getImgSymbol);
    circleOrCross = 1;
    symbolStr = "Circel";
  }else{
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCrossfile);
    getCell2x1.appendChild(getImgSymbol);
    circleOrCross = 0;
    symbolStr = "Cross";
  }
  nameOfC2x1 = name + symbolStr;
  arrOfC2x1 = [circleOrCross, nameOfC2x1, getCell2x1];
  return arrOfC2x1;
}
function setSymbolOfCell2x2(){
  getCell2x2.removeEventListener('click', inGame);
  let name = "Cell2x2";
  let getImgSymbol = $('<img>').get(0); // jq skapa en img
  getImgSymbol.setAttribute('class', 'imgSymbols');

  if (circleOrCross === 0){
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCirclefile);
    getCell2x2.appendChild(getImgSymbol);
    circleOrCross = 1;
    symbolStr = "Circel";
  }else{
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCrossfile);
    getCell2x2.appendChild(getImgSymbol);
    circleOrCross = 0;
    symbolStr = "Cross";
  }
  nameOfC2x2 = name + symbolStr;
  arrOfC2x2 = [circleOrCross, nameOfC2x2];
  return arrOfC2x2;
}
function setSymbolOfCell2x3(){
  getCell2x3.removeEventListener('click', inGame);
  let name = "Cell2x3";
  let getImgSymbol = $('<img>').get(0); // jq skapa en img
  getImgSymbol.setAttribute('class', 'imgSymbols');

  if (circleOrCross === 0){
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCirclefile);
    getCell2x3.appendChild(getImgSymbol);
    circleOrCross = 1;
    symbolStr = "Circel";
  }else{
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCrossfile);
    getCell2x3.appendChild(getImgSymbol);
    circleOrCross = 0;
    symbolStr = "Cross";
  }
  nameOfC2x3 = name + symbolStr;
  arrOfC2x3 = [circleOrCross, nameOfC2x3];
  return arrOfC2x3;
}
function setSymbolOfCell3x1(){
  getCell3x1.removeEventListener('click', inGame);
  let name = "Cell3x1"
  let getImgSymbol = $('<img>').get(0); // jq skapa en img
  getImgSymbol.setAttribute('class', 'imgSymbols');

  if (circleOrCross === 0){
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCirclefile);
    getCell3x1.appendChild(getImgSymbol);
    circleOrCross = 1;
    symbolStr = "Circel";
  }else{
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCrossfile);
    getCell3x1.appendChild(getImgSymbol);
    circleOrCross = 0;
    symbolStr = "Cross";
  }
  nameOfC3x1 = name + symbolStr;
  arrOfC3x1 = [circleOrCross, nameOfC3x1, getCell3x1];
  return arrOfC3x1;
}
function setSymbolOfCell3x2(){
  getCell3x2.removeEventListener('click', inGame);
  let name = "Cell3x2";
  let getImgSymbol = $('<img>').get(0); // jq skapa en img
  getImgSymbol.setAttribute('class', 'imgSymbols');

  if (circleOrCross === 0){
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCirclefile);
    getCell3x2.appendChild(getImgSymbol);
    circleOrCross = 1;
    symbolStr = "Circel";
  }else{
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCrossfile);
    getCell3x2.appendChild(getImgSymbol);
    circleOrCross = 0;
    symbolStr = "Cross";
  }
  nameOfC3x2 = name + symbolStr;
  arrOfC3x2 = [circleOrCross, nameOfC3x2];
  return arrOfC3x2;
}
function setSymbolOfCell3x3(){
  getCell3x3.removeEventListener('click', inGame);
  let name = "Cell3x3";
  let getImgSymbol = $('<img>').get(0); // jq skapa en img
  getImgSymbol.setAttribute('class', 'imgSymbols');

  if (circleOrCross === 0){
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCirclefile);
    getCell3x3.appendChild(getImgSymbol);
    circleOrCross = 1;
    symbolStr = "Circel";
  }else{
    incommingSymbol = getImgSymbol.setAttribute("src", getImgCrossfile);
    getCell3x3.appendChild(getImgSymbol);
    circleOrCross = 0;
    symbolStr = "Cross";
  }
  nameOfC3x3 = name + symbolStr;
  arrOfC3x3 = [circleOrCross, nameOfC3x3];
  return arrOfC3x3;
}

function stopListenAtDivs(){
  let getDivElement = $('div');
  for (let i = 0; i < getDivElement.length; i++) {
    let stopListenAtDiv = getDivElement[i];
    stopListenAtDiv.removeEventListener('click', inGame);
  }
}
// Redera ut vinnarlinjen
let getWinLinePlace = $("#gameBox").get(0);
function winLineY1(){
  let createWinline = $('<div></div>').get(0); // jq skapa en div
  createWinline.setAttribute("class", "winPlayer");
  createWinline.setAttribute("id", "winLineY1");
  getWinLinePlace.appendChild(createWinline);
  stopListenAtDivs();
}
function winLineY2(){
  let createWinline = $('<div></div>').get(0); // jq skapa en div
  createWinline.setAttribute("class", "winPlayer");
  createWinline.setAttribute("id", "winLineY2");
  getWinLinePlace.appendChild(createWinline);
  stopListenAtDivs();
}
function winLineY3(){
  let createWinline = $('<div></div>').get(0); // jq skapa en div
  createWinline.setAttribute("class", "winPlayer");
  createWinline.setAttribute("id", "winLineY3");
  getWinLinePlace.appendChild(createWinline);
  stopListenAtDivs();
}
function winLineX1(){
  let createWinline = $('<div></div>').get(0); // jq skapa en div
  createWinline.setAttribute("class", "winPlayer");
  createWinline.setAttribute("id", "winLineX1");
  getWinLinePlace.appendChild(createWinline);
  stopListenAtDivs();
}

// Ändra y TILL x M.M. PÅ NEDAN
function winLineX2(){
  let createWinline = $('<div></div>').get(0); // jq skapa en div
  createWinline.setAttribute("class", "winPlayer");
  createWinline.setAttribute("id", "winLineX2");
  getWinLinePlace.appendChild(createWinline);
  stopListenAtDivs();
}
function winLineX3(){
  let createWinline = $('<div></div>').get(0); // jq skapa en div
  createWinline.setAttribute("class", "winPlayer");
  createWinline.setAttribute("id", "winLineX3");
  getWinLinePlace.appendChild(createWinline);
  stopListenAtDivs();
}
function winLineZ1(){
  let createWinline = $('<div></div>').get(0); // jq skapa en div
  createWinline.setAttribute("class", "winPlayer");
  createWinline.setAttribute("id", "winLineZ1");
  getWinLinePlace.appendChild(createWinline);
  stopListenAtDivs();
}
function winLineZ2(){
  let createWinline = $('<div></div>').get(0); // jq skapa en div
  createWinline.setAttribute("class", "winPlayer");
  createWinline.setAttribute("id", "winLineZ2");
  getWinLinePlace.appendChild(createWinline);
  stopListenAtDivs();
}

function inGame(e){
  let getResetBtnPlace = $("#playerInfoBox").get(0);
  let createResetBtn = $("<button></button>").get(0);
  let getResetBtnIfExist = $('#resetBtn').get(0);
  console.log(getResetBtnIfExist);
  createResetBtn.setAttribute('id', 'resetBtn');
  createResetBtn.textContent = "Nytt parti";

  let targetCell = e.target;

  if (getResetBtnIfExist === undefined){
  getResetBtnPlace.appendChild(createResetBtn);
  }
  if (targetCell === getCell1x1){
    setSymbolOfCell1x1();
  }
  if (targetCell === getCell1x2){
    setSymbolOfCell1x2();
  }
  if (targetCell === getCell1x3){
    setSymbolOfCell1x3();
  }
  if (targetCell === getCell2x1){
    setSymbolOfCell2x1();
  }
  if (targetCell === getCell2x2){
    setSymbolOfCell2x2();
  }
  if (targetCell === getCell2x3){
    setSymbolOfCell2x3();
  }
  if (targetCell === getCell3x1){
    setSymbolOfCell3x1();
  }
  if (targetCell === getCell3x2){
    setSymbolOfCell3x2();
  }
  if (targetCell === getCell3x3){
    setSymbolOfCell3x3();
  }
  // Vem spelar och vinner
  let getPlayer1PElement = $("#player1").get(0);
  let getPlayer2PElement = $("#player2").get(0);
  let currentPlayer;
  if (circleOrCross !== 1){
    getPlayer1PElement.setAttribute('style', 'color: green');
    getPlayer2PElement.setAttribute('style', 'color: red');
    currentPlayer = getPlayer2PElement.textContent;
  }else{
    getPlayer2PElement.setAttribute('style', 'color: green');
    getPlayer1PElement.setAttribute('style', 'color: red');
    currentPlayer = getPlayer1PElement.textContent;
  }

  // Ge ett vinnst meddelande efter om en div element skapas för strecket
  let getPlaceWinnerPlayer = $("#wonPlayer").get(0);
  function getStrPlayerWinner(){
    //let ifWinnerLineShow = document.querySelector('.winPlayer').className;
    let ifWinnerLineShow = $(".winPlayer").get(0).className;
    if (ifWinnerLineShow === "winPlayer"){
      let winnerPlayer = "Vinnst för: " + currentPlayer;
      getPlaceWinnerPlayer.setAttribute('style', 'width: 170px;');
      getPlaceWinnerPlayer.textContent = winnerPlayer;
      getPlayer1PElement.setAttribute('style', 'color: black')
      getPlayer2PElement.setAttribute('style', 'color: black')
    }
  }

 // Vinn linjen rederazs ut över vunna celler. Y led
  if(nameOfC1x1 === "Cell1x1Circel" && nameOfC1x2 === "Cell1x2Circel" && nameOfC1x3 === "Cell1x3Circel" ||
    nameOfC1x1 === "Cell1x1Cross" && nameOfC1x2 === "Cell1x2Cross" && nameOfC1x3 === "Cell1x3Cross"){
    winLineY1();
    getStrPlayerWinner();
  }
  if(nameOfC2x1 === "Cell2x1Circel" && nameOfC2x2 === "Cell2x2Circel" && nameOfC2x3 === "Cell2x3Circel" ||
    nameOfC2x1 === "Cell2x1Cross" && nameOfC2x2 === "Cell2x2Cross" && nameOfC2x3 === "Cell2x3Cross"){
    winLineY2();
    getStrPlayerWinner();
  }
  if(nameOfC3x1 === "Cell3x1Circel" && nameOfC3x2 === "Cell3x2Circel" && nameOfC3x3 === "Cell3x3Circel" ||
    nameOfC3x1 === "Cell3x1Cross" && nameOfC3x2 === "Cell3x2Cross" && nameOfC3x3 === "Cell3x3Cross"){
    winLineY3();
    getStrPlayerWinner();
  }
 // Vinn linjen rederazs ut över vunna celler. X led
  if(nameOfC1x1 === "Cell1x1Circel" && nameOfC2x1 === "Cell2x1Circel" && nameOfC3x1 === "Cell3x1Circel" ||
    nameOfC1x1 === "Cell1x1Cross" && nameOfC2x1 === "Cell2x1Cross" && nameOfC3x1 === "Cell3x1Cross"){
    winLineX1();
    getStrPlayerWinner();
  }
  if(nameOfC1x2 === "Cell1x2Circel" && nameOfC2x2 === "Cell2x2Circel" && nameOfC3x2 === "Cell3x2Circel" ||
     nameOfC1x2 === "Cell1x2Cross" && nameOfC2x2 === "Cell2x2Cross" && nameOfC3x2 === "Cell3x2Cross"){
    winLineX2();
    getStrPlayerWinner();
  }
  if(nameOfC1x3 === "Cell1x3Circel" && nameOfC2x3 === "Cell2x3Circel" && nameOfC3x3 === "Cell3x3Circel" ||
     nameOfC1x3 === "Cell1x3Cross" && nameOfC2x3 === "Cell2x3Cross" && nameOfC3x3 === "Cell3x3Cross"){
    winLineX3();
    getStrPlayerWinner();
  }
  // Vinn linjen rederazs ut över vunna celler. Z led
   if(nameOfC3x1 === "Cell3x1Circel" && nameOfC2x2 === "Cell2x2Circel" && nameOfC1x3 === "Cell1x3Circel" ||
      nameOfC3x1 === "Cell3x1Cross" && nameOfC2x2 === "Cell2x2Cross" && nameOfC1x3 === "Cell1x3Cross"){
      winLineZ2();
      getStrPlayerWinner();
   }
   if(nameOfC1x1 === "Cell1x1Circel" && nameOfC2x2 === "Cell2x2Circel" && nameOfC3x3 === "Cell3x3Circel" ||
      nameOfC1x1 === "Cell1x1Cross" && nameOfC2x2 === "Cell2x2Cross" && nameOfC3x3 === "Cell3x3Cross"){
      winLineZ1();
      getStrPlayerWinner();
   }

  createResetBtn.addEventListener('click', function resetGame(){
    location.reload();
  });
}
