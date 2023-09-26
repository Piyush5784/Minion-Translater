var btnTranslate = document.querySelector("#btn-translate");
var input = document.querySelector("#txt-input");
var outerDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

btnTranslate.addEventListener("click", function evenHandler() {
    clickHandler();
})

function getURL(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured" + error);
}

function clickHandler() {
    var text = input.value;
    fetch(getURL(text))
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outerDiv.innerText = translatedText;
        })
        .catch(errorHandler);
}