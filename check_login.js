window.onload = checkCookie;
//gets any cookie stored in website
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        //returns the first occurence of 'firstname' stored in cookie
        if (c.indexOf(name) == 0)
            return c.substr(name.length);
    }
    return "";
}

//updates the "Log in" option
function checkCookie() {
    var firstname = getCookie("firstname").replace('+', '');

    if (firstname != "") {
        updatePage(firstname);
        return true;
    }
    return false;
}

function updatePage(firstname) {
    document.getElementById("login").className = "dropdown";
    document.getElementById("login").innerHTML = "<a class='dropdown-toggle' data-toggle='dropdown'>Hello " + firstname + "!<b class='caret'></b></a><ul class='dropdown-menu'><li><a href='profile.htm'>My Profile</a></li><li><a href='http://localhost/logout.php'>Sign Out</a></li></ul>"
}