//redirects to login page if not logged in
    $(document).ready( function() {
        if (!checkCookie()) {
            window.location="login.htm";
        }
    })