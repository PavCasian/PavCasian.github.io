"use strict";
var headBar = document.getElementById( "headBar" );
var leftBar = document.getElementById( "leftBar" );
var main = document.getElementById( "main" );

function showURL(f) {
	 main.innerHTML = '<iframe src="' + f + '"></iframe>';
 }
 var cwURL = 'http://localhost/mySite/cwExample.pdf';
 var muqURL = 'http://localhost/muqV2/muq.php';
 var flankURL = 'http://localhost/flank/flank.php';
 

 var biography = 
       '<p>I am an active individual with an strong sense of curiosity and a strong desire for personal development. '+
	   'I am currently involved in my third year of BSc Psychology '+
	   'degree at University of Southampton.</p>'+
	   '<h3>Aspirations</h3>'+
	   '<p>My career goal is to become an efficient researcher '+
	   'in the field of neuropsychology. First, I want to intensify the use of '+
	   'brain imaging in diagnosis of psychiatric disorders. '+
	   'Secondly, I aspire '+
	   'to get involve in "mind reading" research, which implies '+
	   'making predictions of what the persons sees based on the brain activity '+
	   'recorded in various regions of the brain. '+
	   'On a personal level, I want to strengthen the relationships '+
	   'within my family and circle of friends, and become a better swimmer.</p>'+
	   '<h3>Web Scripting</h3>'+
	   '<p>Web programming has been a challenge for me, but it surely strengthen and taught '+
	   'a few important things that I will most probably apply in my future career and other personal ambitions. '+
	   'The most important skill that I improved is logical reasoning and attention to details. '+
	   'Problems in the code made me focus on every piece of it and forced me to understand each individual input '+
	   'of its components. It also showed me how important is to adopt a systematic and disciplined search through the '+
       'code to identify the faulty part. Combining these three skills, I was able to develop '+
       'a new framework for solving problems. '+
	   '</p>'+
	   '<h3>Skills</h3>'+
	   '<ul>'+
	   '<li>Strong problem-solving</li>'+
	   '<li>Strong logical reasoning</li>'+
	   '<li>Competent speaker </li>'+
	   '<li>Statistical analysis using R and SPSS</li>'+
	   '<li>Capable of using PHP,CSS,JavaScript and HTML5 to construct simple to intermediate tasks in Web</li>'+
	   '</ul>'+
	   '<h2>Experiences</h2>';
	   
	   var i;
	   for(i=0; i<11; i++){
		  biography += '<p class = "paragraphs">Paragraph '+ i + '.....';
	   }
	   