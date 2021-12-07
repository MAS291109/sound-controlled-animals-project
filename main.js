function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/O1zJlzMhc/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
  }
  var dog = 0;
  var cat = 0;
  var cow = 0;
  var lion = 0;

  function gotResults(error, results) {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random()* 255) +1;
      random_number_g = Math.floor(Math.random()* 255) +1;
      random_number_b = Math.floor(Math.random()* 255) +1;

      document.getElementById("result_audio").innerHTML = 'Voice detected is of  - '+ results[0].label;
      document.getElementById("animal_result_count").innerHTML = '  Detected Dog : '+dog+ '   Detected Cat : '+cat+ '   Detected Cow :'+cow+ '   Detected Lion :'+lion;
      document.getElementById("result_audio").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("animal_result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    }
     var img = document.getElementById('animal_img');

     if (results[0].label == "Barking") {
      img.src = 'dog_gif.gif';
      dog = dog+1;
    } else if (results[0].label == "Mooing") {
      img.src = 'cow_gif.gif';
      cow = cow + 1;
    }
      else if (results[0].label == "Meowing") {
        img.src = 'cat_gif.gif';
        cat = cat + 1;
      }
        else if (results[0].label == "Roar") {
          img.src = 'lion_gif.gif';
          lion = lion + 1;
      }
       else{
      img.src = 'listen.gif';
    }
  }
