<?php
  include('../shareCode/mysqlLink.php');
  include ('muqHeader.html'); 
  
  $link = connectDB();
  @mysqli_close($link);
  if ($link):
  ?>
   <script> pageTitle.innerHTML = 'Media Use Questionnaire (&lt; 10 minutes)'; </script>

      <form class="center" action="muq.php"> <!--why are we not including the centering in the external styling sheet?-->
	        <input class="myButton" type='submit' value='Click here to begin the task'>
      </form>
 <?php
 else:
 ?>
       <h4> No connection to MySQL server. Please connect to access the task.</h4>
<?php
endif;
include('muqFooter.html');
?>
