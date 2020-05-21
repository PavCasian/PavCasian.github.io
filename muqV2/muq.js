 "use strict";
 var pageTitle = document.getElementById( "pageTitle" ),
     myPage = document.getElementById( "myPage" ),
	 footer = document.getElementById( "footer" ); //document.getElementById is a method used to manipulate, get info from an element in the document, which is pecified as a value.

 var footTxt = 'This task is included in a research project that has been approved'+
	   ' by the Ethics Committee and Research Governance Office of the University'+
	   ' of Southampton, United Kingdom (Ethics ID:1028).';
 //var toShow = [0, 2, 7];
 var toShow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 var media = [
        "Print media (e.g., newspaper, magazines, leaflets)",
        "Television",
        "Computer-based video (e.g., youTube, online TV episode)",
		"Music (e.g., mp3 players, iPod, CDs, radio)",
		"Non-music audio (e.g., audio-books, radio talk shows)",
		"Video or computer games",
		"Web surfing or internet social networking",
		"Other computer-based applications (e.g., Word, Excel, PhotoShop)",
		"Telephone and mobile phone voice calls",
		"Instant messaging",
		"SMS (text messaging)",
		"Email"
];
var primaryAct = [
        'reading or browsing a <em>print medium</em> (e.g., newspaper, magazines, leaflets)',
        'watching <em>television</em>',
        'watching <em>computer-based video</em> (e.g., youTube, online TV episode)',
		'listening to <em>music</em> (e.g., mp3 players, iPod, CDs, radio)',
		'listening to <em>non-music audio</em> (e.g., audio-books, radio talk shows)',
		'playing <em>video or computer games</em>',
		'<em>web surfing or internet social networking</em>',
		'using <em>other computer-based applications</em> (e.g., Word, Excel, PhotoShop)',
		'using <em>telephone and mobile phone voice calls</em>',
		'using <em>Instant messaging</em>',
		'using <em>SMS (text messaging)</em>',
		'using <em>Email</em>'
	];
	
var tmp=[], x=[];
var i;
for(i=0; i < toShow.length; i++){
		tmp[i] = media[ toShow[i] ];
		x[i] = primaryAct[ toShow[i] ];
	}
media = tmp;
primaryAct = x;
var mVal = ["","0","1","2","3","4","5"],
    mCont = ["Minutes","0","1-10","11-20","21-30","31-40","41-50"],
	hVal = ["", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "10", "11", "12", "13", "14", "15", "16", "17"],
	hCont = ["Hours", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "10", "11", "12", "13", "14", "15", "16", "17"];
    
function dropDown( listName, valArr, contArr ) {
	var str = "<select name='" + listName + "' required>";   
    var i;
	for(i=0; i < valArr.length; i++) {
       str += "<option value ='" + valArr[i] + "'>" + contArr[i] + "</option>";
    }
   str += '</select>';
   return str;
}
  var hDDL = dropDown("Hour[]", hVal, hCont);
  var mDDL = dropDown("Minute[]", mVal, mCont);
  
  var useTime = [], usedM = [];
  var k = toShow.length;
  var freqRate = new Array( k );
  for( i=0; i < k; i++) {
	   freqRate[i] = new Array( k ).fill( 9 ); //requires 2dimsilty because the 1st dim array elements will signal a different primary and the 2d arays will include the values from the radio objects
  }
function welcome() {
	pageTitle.innerHTML = 'Media Use Questionnaire (&lt; 10 minutes)';
	footer.innerHTML = footTxt;
	
  myPage.innerHTML = 
        '<p>Thank you for visiting '+ 
	    'this page. We would appreciate it if you '+ 
	    'could spare several minutes to complete a short survey after '+ 
	    'reading the following information.</p>'+
        '<p>The survey is to explore the amount of time you use media and '+
	    'the extent to which you use different media concurrently on <strong>'+
		'a typical WEEKDAY</strong>. The survey consists of two parts:'+
        '</p>'+
	    '<ul>'+
	    '<li>In the first part, you will be presented with a list of 12 '+
	    'media. For each medium, you will estimate the total amount '+
		'of time you spend on the medium on <strong>a typical WEEKDAY '+
		'</strong>.'+
	    '<li>The second part will only include the media that you spend '+
	    'some time using them on a typical WEEKDAY. For each medium '+
		'you use on a typical WEEKDAY, you will see the scale below '+
		'to indicate how often you <strong>concurrently</strong> use '+
		'each of the remaining media while using it as the primary '+
		'activity on <strong>a typical WEEKDAY.</strong>'+
	    '</ul>'+
	    '<p class="center"><b>'+
		'Never, &emsp; A little of the time, &emsp; Some of the time, &emsp;'+
		'or &emsp; Most of the time </b>'+
	    '</p>'+
	    '<p>If you kindly offer to take part, please click the button below '+
	    'to continue. By doing so, you are deemed to have '+
		'given consent for your data to be used for research and publication '+ 
		'purposes. Your generosity will be gratefully appreciated. '+
	    '</p>'+
	    '<div class="center">'+ 
	       '<button class="myButton" onclick="muqPart1();">'+
	       'Click here to begin the task</button>' +
	     '</div>';
} //end of welcome()

function muqPart1() {
	pageTitle.innerHTML = ''; //an empty string
	footer.innerHTML = '';
	var str = '<h3>For each item below, use the drop-down lists to indicate how much time (in Hours '+
              'and Minutes) you use it on a typical WEEKDAY.</h3>'+
              '<table>'+
	          '<tr><th rowspan="2">Item<th rowspan="2">Media<th colspan="2">Total time'+
	          '<tr><th>Hours<th>Minutes';
	var i;
    for(i=0; i < media.length; i++) {
        str += '<tr><td>' + (i+1) + '<td>' + media[i] + '<td>' + hDDL + '<td>' + mDDL;
		}
    str += '</table>'+
           '<div class="center">'+
           '<button class="myButton" onclick="Part1Data();">To continue</button>'+
           '</div>';
	myPage.innerHTML = str;
}  //end of muqPart1()

function Part1Data() {
	var h = document.getElementsByName( "Hour[]" );
	var m = document.getElementsByName( "Minute[]" );
	usedM = [];
	var i;
	for(i=0; i < h.length; i++) {
		if ( h[i].value === '' || m[i].value === '' ){
			alert( 'Item ' + (i+1) + ' is incomplete');
			return false;
		} else {
			 useTime[i]= 60 * h[i].value + 10 * m[i].value; //transformation in minutes
	         if (useTime[i] > 0) { usedM.push( i ); }  //used media contains integers that represent the index position of elements from media
		}
	}
	muqPart2();
} //end of Part1Data() 

var primary, otherArr;
var usedM_cnt = 0;

function muqPart2() {
	var i;
	otherArr = [];
	if ( usedM.length > 1 && usedM_cnt < usedM.length ){
	    primary = usedM[usedM_cnt];
	    for(i=0; i < usedM.length; i++) {
	       if ( i != usedM_cnt) { otherArr.push( usedM[i] ); } //otherArr has the same type of data as usedM
		}
       showPart2();
       usedM_cnt++;
	} else {
		submitData();
	}
} //end of muqPart2()

function showPart2() {
	var str = '<table>'+
		      '<tr><th colspan="6" style="text-align:left;">When ' + primaryAct[primary] +
		      ' is your primary activity, how often do you concurrently '+
		      'use each of the following media?'+
              '<tr><th>Item<th>Media<th>Never'+
		      '<th>A little of the time<th>Some of the time<th>Most of the time';
    var i, j;
    for(i=0; i < otherArr.length; i++) {
		var v = otherArr[i];
        str += '<tr><td class="centre">' + (i + 1) + '<td>' + media[ v ];
        for(j=0; j < 4; j++) {           //there are 4 radio buttons for each item
	        str += '<td class="center"><input type="radio" name="' + v + '" value="' + j + '">'; // v represents the value of name attribute and will be 7 if for the 8th element in the media array are the radio buttons referring to 
		}
	}

    str += '</table>'+
           '<div class="center">'+
           '<button class="myButton" onclick="Part2Data();">To continue</button>'+
           '</div>';
	myPage.innerHTML = str;	   
} //end of showPart2();

function Part2Data() {
	var i;
	for( i=0; i < otherArr.length; i++){
		var rn = otherArr[i].toString(); //radio name
		var radios = document.getElementsByName( rn ); //to retrieve a desired group of input radio objects
	    var j, chkVal = null, chkFlag = false;     //we re-initialise the variables so there won't be left over values when checking a new set of radio buttons
		for( j=0; j < radios.length; j++) {
			if(radios[j].checked === true){    //refers only to a set of 4 radio objects for one item
				chkFlag = true;
				chkVal = j;
				break;
			}
		}
		if(chkFlag === false){
			alert( 'Item ' + (i+1) + ': please indicate an option');
			return false;
		} else { //update freqRate
			freqRate[primary][ otherArr[i] ] = chkVal; //2 square brackets signal 2dimensionality; otherArr[i] indicates the index position to which an element of the value contained in chkVal(which contains j) will be assigned
		}            //also for freqRate, 9 will mark the primary activity used in the array
	}
	muqPart2();
}//end of Part2Data()

function submitData() {
	var i, fR=[];
	for(i=0; i < freqRate.length; i++){
		fR.push( freqRate[i].join('') );
	}
	myPage.innerHTML = 
	           '<form action="muq.php" method="post" id="muqForm">'+
			   '<input type="hidden" name="useTime" value="' + useTime + '">'+   //the value in the name attribute will be used as an identifier in $_POST
			   '<input type="hidden" name="usedM" value="' + usedM + '">'+
			   '<input type="hidden" name="freqRate" value="' + fR + '">'+
			   '</form>';
 document.getElementById("muqForm").submit();
} //end of submitData()

var debrief = '<h2>Many thanks for your contributions.</h2>'+
              '<p>'+
              'Media exposure has rapidly risen over recent years and, with it, '+
              'the propensity for media-media multitasking (MMM)-the '+ 
	          'concurrent use of two or more media(e.g., phone, email, iPod). '+
	          'However, there is not much direct research about MMM. The '+ 
	          'present questionnaire intends to help us understand the extent '+
	          'to which people use different media concurrently. If you are '+ 
	          'interested in this topic, you may find the references below useful.'+
              '</p>'+
              '<ul>'+
              '<li><a href="http://www.pnas.org/content/106/37/15583" target="_blank">Ophir, E., Nass, C., &amp; Wagner, A. D. (2009). Cognitive control '+
              'in media multitaskers. <i>Proceedings of the National Academy of Sciences '+
	          'of the United States of America, 106</i>(37), 15583-15587. doi:10.1073/pnas.0903620106</a></li>'+
              '<li><a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0064508" target="_blank">Shih, S-I. (2013). A null relationship between media multitasking and well-being.'+
              '<i>PLoS ONE 8</i>(5): e64508. doi:10.1371/journal.pone. 0064508</a></li>'+
              '</ul>'+
              '<p>'+
              'This task is included in a research project that has been approved by the Ethics '+
              'Committee and Research Governance Office of the University of Southampton, United '+
	          'Kingdom (Ethics ID: 1028). If you have questions about your rights as a participant '+
	          'in this research, or if you feel that you have been placed at risk, you can contact '+ 
	          'the Chair of the Ethics Committee, Psychology of the University of Southampton. UK. '+
	          'Phone : (+44)(0)23 8059 2587. '+
              '</p>'+
              '<p>'+
              'Before concluding your participation, we would be grateful if you '+
	          'could provide the information about your gender and age. If you '+
	          'wish to receive a briefing about the findings, please leave your '+
	          'email address. Any comments will be gratefully received.'+
              '</p>';
