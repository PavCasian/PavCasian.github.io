<?php
session_start();
include('muqHeader.html');
include('../shareCode/mysqlLink.php');

 function validate_string_INT_comma( $s ){
	 $v = null;
	 if( isset($s) ){
		 $v = explode( ',', $s );
	 }
	 
		 foreach($v as $key => $value) {
			 if( is_numeric($value) === false ) {  //when don't use is_bool because there is not filter_var_array function to accurately indicate the array to be containing TRUE or FALSE values
				 return null;
			 }
		 }
		 return $s;
 }
 
 if($_SERVER['REQUEST_METHOD']=='POST'):
 
 $useTime = validate_string_INT_comma( $_POST['useTime'] );
 $usedM = validate_string_INT_comma( $_POST['usedM'] );
 $freqRate = validate_string_INT_comma( $_POST['freqRate'] );
 $dateTime = $_SESSION['dateTime'];
 $taskTime = (time() - $_SESSION['startTime'])/60;
  
 $sql = "INSERT INTO muq
      (dateTime, taskTime, useTime, usedM, freqRate)
      VALUES('$dateTime', $taskTime, '$useTime', '$usedM', '$freqRate')";
 $link = connectDB();
 @mysqli_query($link, $sql);
 $_SESSION['currID'] = @mysqli_insert_id( $link);
 @mysqli_close( $link);
 ?>

 <script> myPage.innerHTML = debrief; </script>
 
<?php
else:
    $_SESSION['dateTime'] = date( "Y-m-d h:i:s" );
	$_SESSION['startTime'] = time();
?>

   <script>welcome();</script>

<?php
endif;
include('muqFooter.html');
?>