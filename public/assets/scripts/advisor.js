var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
//output.innerHTML = slider.value; // Display the default slider value

console.clear()

var oldValue = 1;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  
  
  
  
  //output.innerHTML = this.value;
  let circle = document.getElementById("Oval1");
    let insp = document.getElementById("Oval2");
    let partici = document.getElementById("Oval3");
    let beau = document.getElementById("Oval4");
    let fun = document.getElementById("Oval5");
 // console.log(circle.getAttribute('r'), this.value);
  //console.log(this.value, oldValue)
  let radiustoset;
  
  let sliderValue = Number(this.value);
  
  let message = document.getElementById('trustedAdvisorWhats');
  let percentageCalc = (sliderValue/50)*100;
  if(percentageCalc <  50){
    message.innerText = "What's Expected";
  }else if(percentageCalc >= 50 && percentageCalc <=60){
    message.innerText = "What's Authentic";
  }else if(percentageCalc > 60){
    message.innerText = "What's Emotional";
  }
  
  let currentRadius = Number(circle.getAttribute('r'));
  low_radiustoset = currentRadius + (oldValue - sliderValue);
  circle.setAttribute("r", low_radiustoset);
  
  
  
  let insp_Radius = Number(insp.getAttribute('r'));
  let partici_Radius = Number(partici.getAttribute('r'));
  let beau_Radius = Number(beau.getAttribute('r'));
  let fun_Radius = Number(fun.getAttribute('r'));
  
  
  insp.setAttribute("r", insp_Radius - (oldValue - sliderValue));
  partici.setAttribute("r", partici_Radius - (oldValue - sliderValue));
  beau.setAttribute("r", beau_Radius - (oldValue - sliderValue));
  fun.setAttribute("r", fun_Radius - (oldValue - sliderValue));
  
  
  
  /* if(sliderValue < oldValue){
    console.log('reverse');
     radiustoset = currentRadius - (oldValue - sliderValue);
    
  }else if(sliderValue > oldValue){
    console.log('forward');
    radiustoset = currentRadius + (sliderValue - oldValue);
  } */
    
    
    
  console.log(radiustoset);
  oldValue = Number(this.value);
  
}