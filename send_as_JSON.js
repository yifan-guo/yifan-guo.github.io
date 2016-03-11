// JavaScript source code
var form;

form.onsubmit = function (e) {
    e.preventDefault();

    //collect the form data while iterating over the inputs
    var data = {};
    for (var i = 0; i < form.length; i++) {
        var input = form[i];
        if (input.name) {
            data[input.name] = input.value;
        }
    }

    //construct an http request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Content-Type', 'application/json charset=UTF-8');

    //send the collected data as JSON
    xhr.send(JSON.stringify(data));

    xhr.onloadend = function () {
        //done
    };
};