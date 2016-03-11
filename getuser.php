<?php
//$q=$_GET["q"];
//Test if our data came through
if (isset($_POST["player"])) {
	 //Decode our JSON into PHP objects we can use
	$player = json_decode($_POST["player"]);

    //establishing connection to server
    $servername = "localhost";
    $username = "root";
    $password = "different95";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";

    mysqli_select_db($conn, "Players");
    //-----------------------------------

    //$conn = sqlsrv_connect( '(localdb)\MSSQLLocalDB', array( 'Database'=>'Players'));	//connects server to database
    //if (!$conn)
    //{
    //    die('Could not connect: ' . sqlserver_error);
    //}
    ////select database
    //sqlsrv_select_db($conn, "Players");

	$sql = "INSERT INTO PlayerDetails (FirstName, LastName, PhoneNumber, SchoolName, Tournament) 
			VALUES (" . $player->firstname . ", " . $player->lastname . ", " . $player->phonenumber . ", "
			. $player->schoolname . ", " . $player->tournament . ");";

	$result = mysqli_query($conn, $sql);
	//close connection to server
	mysqli_close($conn);

	echo "Successfully registered!";
}
?>