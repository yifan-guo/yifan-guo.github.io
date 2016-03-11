<script>
        $(document).ready(defaultInitialize);

function defaultInitialize() {
    var url = window.location.toString();
    var tournament = delineate(url);
    var att = document.createAttribute('selected');
    document.getElementById(tournament).setAttributeNode(att);
}
function delineate(str) {
    var n = str.indexOf('=') + 1;
    return (str.substring(n));
}
</script>