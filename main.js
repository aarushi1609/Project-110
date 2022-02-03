prediction_1 = "";
prediction_2 = "";

Webcam.set({
    height: 300,
    width: 250,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#webcam-div");

function take_snapshot()
{
    Webcam.snap(function (data_uri)
    {
        document.getElementById("snapshot-div").innerHTML = "<img id='captured-image' src='"+data_uri+"'>";
    })
}

console.log("ml5 version:", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IYfjL_nMR/model.json", modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_prediction_1 = "The first prediction is "+prediction_1;
    speak_prediction_2 = "The second prediction is "+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_prediction_1+speak_prediction_2);
    synth.speak(utterThis);
}