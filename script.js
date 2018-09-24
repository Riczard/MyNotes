var notes = document.getElementById("notes");

var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();

    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText)
        addEmptyNote();
    };
    ourRequest.send();

});

function addEmptyNote(){
    notes.insertAdjacentHTML("beforeend","test");
}