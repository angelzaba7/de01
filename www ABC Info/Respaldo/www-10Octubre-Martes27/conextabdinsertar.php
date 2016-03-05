<?php

echo phpversion(); echo "<br>"; 
//echo sqlite3_version(); echo"<br>";
echo sqlite_libversion();  // http://php.net/manual/es/function.sqlite-libversion.php
//echo php_version();
echo "<br>";
print_r(SQLite3::version());  // http://php.net/manual/en/sqlite3.version.php

	//siguiente ejemplo de: http://zetcode.com/db/sqlitephp/ 
	// leer error http://sqlite.1065341.n5.nabble.com/Getting-error-quot-file-is-encrypted-or-is-not-a-database-quot-when-trying-simple-C-example-td75837.html
// Base de datos creada
/*
$dbhandle = sqlite_open('db/freund.db', 0666, $error);
if (!$dbhandle) die ($error);


$stm = "CREATE TABLE Friends (Id integer PRIMARY KEY," . 
       "Name text UNIQUE NOT NULL, Sex text CHECK(Sex IN ('M', 'F')))";
$ok = sqlite_exec($dbhandle, $stm, $error);

if (!$ok)
   die("Cannot execute query. $error");

echo "Database Friends created successfully";

sqlite_close($dbhandle);	
*/

// Insertar datos en bade se datos
/*
$dbhandle = sqlite_open('db/freund.db', 0666, $error);

if (!$dbhandle) die ($error);
    
$stm1 = "INSERT INTO Friends VALUES(1,'Jane', 'F')";
$stm2 = "INSERT INTO Friends VALUES(2,'Thomas', 'M')";
$stm3 = "INSERT INTO Friends VALUES(3,'Franklin', 'M')";

$ok1 = sqlite_exec($dbhandle, $stm1);
if (!$ok1) die("Cannot execute statement.");

$ok2 = sqlite_exec($dbhandle, $stm2);
if (!$ok2) die("Cannot execute statement.");

$ok3 = sqlite_exec($dbhandle, $stm3);
if (!$ok3) die("Cannot execute statement.");

echo "Data inserted successfully";

sqlite_close($dbhandle);

*/

// mostrar datos
/*
$dbhandle = sqlite_open('db/app.db', 0666, $error);

if (!$dbhandle) die ($error);
    
$query = "SELECT Name, Sex FROM Friends";
$result = sqlite_query($dbhandle, $query);
if (!$result) die("Cannot execute query.");


$row = sqlite_fetch_array($result, SQLITE_ASSOC); 
print_r($row);
echo "<br>";

sqlite_rewind($result);
$row = sqlite_fetch_array($result, SQLITE_NUM); 
print_r($row);
echo "<br>";

sqlite_rewind($result);
$row = sqlite_fetch_array($result, SQLITE_BOTH); 
print_r($row);
echo "<br>";

sqlite_close($dbhandle);
*/

?>
<!-- require_once("conecta.php"); -->