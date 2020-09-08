var pt = document.getElementById('pt_flag');
var en = document.getElementById('en_flag');

pt.onclick = changePT;
en.onclick = changeEN;

function changePT() {
  console.log("change PT");
  document.getElementById('pt').style.display = "flex";
  document.getElementById('en').style.display = 'none';
  document.getElementById('pt_flag').style.display = 'none';
  document.getElementById('en_flag').style.display = "inline";
}

function changeEN() {
  console.log("change EN");
  document.getElementById('en').style.display = 'flex';
  document.getElementById('pt').style.display = 'none';
  document.getElementById('en_flag').style.display = 'none';
  document.getElementById('pt_flag').style.display = "inline";
}