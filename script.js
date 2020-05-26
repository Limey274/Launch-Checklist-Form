// Write your JavaScript code here!
window.addEventListener('load', function(){
   let json = [];
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {

         const missionTarget = document.getElementById("missionTarget");
      //   let i = function getRandom(){
      //      return Math.random()
      //   }
         //let index = 0;
               
        missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
           <li>Name: ${json[2].name}</li>
           <li>Diameter: ${json[2].diameter}</li>
           <li>Star: ${json[2].star}</li>
           <li>Distance from Earth: ${json[2].distance}</li>
           <li>Number of Moons: ${json[2].moons}</li>
        </ol>
        <img src="${json[2].image}"></img>
        `

      })

   let form = document.querySelector('form');
  const pilotStatus = document.getElementById('pilotStatus');
     const copilotStatus = document.getElementById('copilotStatus');
     const fuelStatus = document.getElementById('fuelStatus');
     const cargoStatus = document.getElementById('cargoStatus');
 
   form.addEventListener('submit', function(event){

     let pilotName = document.querySelector('input[name=pilotName]');
     let copilotName = document.querySelector('input[name=copilotName]');
     let fuelLevel = document.querySelector('input[name=fuelLevel]');
     let cargoMass = document.querySelector('input[name=cargoMass]');

    

         
     if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
            alert("All fields are required to launch!")
            event.preventDefault();
         }else{
             if (fuelLevel.value <= 10000){
           document.getElementById('faultyItems').style.visibility = 'visible'
           document.getElementById("launchStatus").style.color = "red"
           document.getElementById("launchStatus").innerHTML = "Shuttle NOT ready for launch"
           
           fuelStatus.innerHTML = `Fuel level is too low for launch ` 
            event.preventDefault();
             }else{

                pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
                copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch`
                fuelStatus.innerHTML = `Fuel level high enough for launch`
             }

             if (cargoMass.value >= 10000){
               document.getElementById('faultyItems').style.visibility = 'visible'
            document.getElementById("launchStatus").style.color = "red"
            document.getElementById("launchStatus").innerHTML = "Shuttle NOT ready for launch"
            cargoStatus.innerHTML = `Cargo is too heavy for launch`
            event.preventDefault();

            }else{
               pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
                copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch`
               cargoStatus.innerHTML = `Cargo mass is low enough for launch`
            }
            ;
         
         };
      });
   });
})
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[3].name}</li>
   <li>Diameter: ${json[3].diameter}</li>
   <li>Star: ${json[3].star}</li>
   <li>Distance from Earth: ${json[3].distance}</li>
   <li>Number of Moons: ${json[3].moons}</li>
</ol>
<img src="${json[3].image}"></img>
*/
