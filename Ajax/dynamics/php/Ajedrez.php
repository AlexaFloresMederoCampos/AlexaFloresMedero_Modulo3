<?php
$x=$_POST['dato1'];
//$x=10;
$i=1;
echo "<h1>HolaMundo</h1>";
echo"<table border='1'>";
for ($i=1; $i <=$x ; $i++) {
  echo"<tr>";
  for ($j=1; $j <=$x ; $j++) {
    if($i %2 != 0){
      if($j %2 == 0){
        echo"<td><img src='./statics/img/negro.jpg' width='40' height='40' alt='pieza negro'></td>";
      }
      else{
        echo"<td><img src='./statics/img/blanco.jpg' width='40' height='40' alt='pieza blanca'></td>";
      }
    }
    if ($i %2 ==0){
      if($j %2 == 0){
        echo"<td><img src='./statics/img/blanco.jpg' width='40' height='40' alt='pieza blanca'></td>";
      }
      else{
        echo"<td><img src='./statics/img/negro.jpg' width='40' height='40' alt='pieza negra'></td>";
      }
    }
  }
  echo"</tr>";
}
echo"</table>";
?>
