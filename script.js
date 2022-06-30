/* .js files add interaction to your website */

factList = [
  "On average, 37% of paint is plastic polymers.",
  "Micro-leakage of paint occurs during the application, maintenance, or erosion of a painted surface.",
  "Macro-leakage of paint occurs when the painted object reaches the end of its life.",
  "The total estimated leakage of paint per year is around 7.2 Mt/year, of which 1.9 Mt end up in oceans or waterways.",
  "Paint is the lead contributor to the microplastics in the ocean, making up about 58% of it."
];


var displayMessage =document.getElementById("message");

var inputBtn = document.getElementById("inputBtn");

var index = 0;

inputBtn.addEventListener("click", displayMotivation);

function displayMotivation(){
  displayMessage.innerHTML =   factList[index];
  index++;
  if(index==factList.length)
  {
  index=0;
  }
}

