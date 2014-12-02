
/*
isaaclyman.com. 
Copyright 2011 by Isaac Lyman. You may use this code to educate yourself, for which purpose I have included several comments, but any use (even with modification) of my code, design, layout or techniques, for commercial or other profitable purposes, is strictly prohibited.
If your intended use of my intellectual property is potentially ambiguous in regards to the above statement, please contact me for clarification. My specific, written permission will always supercede any Copyright statements.
Email: mail@isaaclyman.com
*/


//Yes, I know this whole caboodle would be about half as long if the "A"s were a single picture instead of separate elements.
//But I feel like that would be cheating.

//This function changes the guide (top picture) from the slogan to the menu items.
//Also (and perhaps primarily) it increases the opacity of the letter being hovered over.
//Pass the id ("elem") of the letter being hovered over to it.
function changeGuide(elem)
{

//***PART 1***
//This first section deals with changing the menu guide.

//I'll be using this "if" statement often. Since both letters are the same menu item, this way I only have to deal with one.
if(elem == "letA2")
{elem = "letA1";}

//Get the object of the letter being hovered over.
element = document.getElementById(elem);

	//Prevents some slogan ugliness that was a problem in earlier versions.
	//Dang, this is a lot of lines of code for some simple stuff, right?
	//Darned right it is. Perfection is the only option.
	if(currentguide != "slogan") {
		$(slogOb).stop(true, true);
		$(slogOb).fadeOut(0);	
	}

//This changes the menu guides (above the letters) to indicate the option being hovered over.
//If the letter being hovered over (elem) is not the one for which a menu option is being shown (currentguide)...
if(elem != currentguide)
{
	
	//Prevents a jumble of menu guides when the user rapidly mouses over the letters.
	//It's not excessively pretty about it, but it works.
	$(element).stop(true, true);
	if(elem == "letA1") {$(A2).stop(true,true);}

	//Remember the current and correct menu item.
	currentguide = elem;
	
	if(currentguide != "letI"){$(homeOb).stop(true,true);}
	if(currentguide != "letS"){$(serviceOb).stop(true,true);}
	if(currentguide != "letA1"){$(aboutOb).stop(true,true);}
	if(currentguide != "letC"){$(contactOb).stop(true,true);}
		
	//Fade out the current menu guide.
	$(thisOb).fadeOut(200);
	
	//I'm manually associating letter id with menu item objects.
	switch(elem)
	{
		case "letI":
		thisOb = homeOb;
		break;
		case "letS":
		thisOb = serviceOb;
		break;
		case "letA1": //Note that it cannot be "letA2", since I changed it to "letA1" if it was.
		thisOb = aboutOb;
		break;
		case "letC":
		thisOb = contactOb;
		break;
	}
	
	//Fade in the correct menu item.
	$(thisOb).fadeIn(400);
	
}
	//***PART 2***
	//From here down is the method to make letters being hovered over more opaque.
	//If the A's are faded in, neither letter is being hovered over, and neither letter is black...
	if(Afadedin == 1 && elem != "letA1" && blacked != "letA1")
	{
		//Fade them both out and remember that they are faded out.
		$(A1).fadeTo(200, backopacity);
		$(A2).fadeTo(200, backopacity);
		Afadedin = 0;
	}

	//"blacked" is the id of the letter that has most recently been clicked.
	//"blacked" is not defined at first, so it is null. None of the letters are blacked in this case.
	//If "blacked" is the same as the letter being hovered over, it won't change the opacity.
		//This keeps things pretty. The clicked letter stays black.
		
	//If no letters are black, or if the black letter is not the one being hovered over...
	if(blacked == null || blacked != elem)
	{
		//If the first or second A is being hovered over...
		if(elem == "letA1")
		{
			//If neither A is black...
			if(blacked != "letA1")
			{
				//Then fade in both letters.
				Afadedin=1;
				$(A1).fadeTo(200, activeopacity);
				$(A2).fadeTo(200, activeopacity);
			}
			//If one of the A's is black...
			else
			{return;}
		}
		//If a non-A letter is being hovered over...
		else
		{
			var element = document.getElementById(elem);
			$(element).fadeTo(200, activeopacity);
		}
	}
	//If the black letter is being hovered over...
	else
	{return;}
	
}

//And this changes the opacity back to normal when you stop hovering on it.
//Pass the id of the letter that is not being hovered over any more.
function defaultGuide(elem)
{

if(elem == "letA2")
{elem = "letA1"}

	//Again, the if statement is a safeguard to protect the opacity of the letter that has been clicked.
	//If none of the letters are black, or if the black letter is not the one being hovered over...
	if(blacked == null || blacked != elem)
	{
		//If either A is being hovered over...
		if(elem == "letA1")
		{
			//If neither A is black...
			if(blacked != "letA1" && blacked != "letA2")
			{return;}
		}
		//If a different letter is being hovered over...
		else
		{
			var element2 = document.getElementById(elem);
			$(element2).fadeTo(200, backopacity);
		}
	}
	//If the black letter is being hovered over...
	else
	{return;}
}

//This changes the guide back to the slogan, or to the clicked menu item.
//It happens when the mouse moves outside of the letters (there are events on all four sides).
//Pass the correct source of the menu item to it.
function reslogan()
{

	//This is the easiest way to unfade the A's as if they were a single unit, as opposed to doing it onmouseout for each.
	//If I used onmouseout, they would fade between letters, which is annoying.
	if(Afadedin == 1 && blacked != "letA1")
	{
		$(A1).fadeTo(200, backopacity);
		$(A2).fadeTo(200, backopacity);
		Afadedin = 0;
	}
	
	//Now when the mouse leaves the letters, fade back to the correct slogan or menu item.
	//If no letters are black and the currently displayed menu guide is not the slogan...
	if(blacked == null && currentguide != "slogan")
	{
		
		$(slogOb).stop(true, true);
		$(homeOb).stop(true,true);
		$(serviceOb).stop(true,true);
		$(aboutOb).stop(true,true);
		$(contactOb).stop(true,true);
		
		//Fade out the currently displayed menu guide, and fade in the slogan.
		$(thisOb).fadeOut(200, function(){
		$(slogOb).fadeIn(400);} );
		thisOb = slogOb;
		currentguide = "slogan";
		
	}//If a letter is blacked and the correct guide for the clicked letter is not shown...
	else if(blacked != null && blacked != currentguide)
	{
		
		$(slogOb).stop(true,true);
		$(homeOb).stop(true,true);
		$(serviceOb).stop(true,true);
		$(aboutOb).stop(true,true);
		$(contactOb).stop(true,true);
		
		//Fade out the current guide and fade in the correct one.
		$(thisOb).fadeOut(200);
		$(sourceOb).fadeIn(400);
		thisOb = sourceOb;
		currentguide = blacked;
	}
	
}

//This function happens when a letter is clicked. It fades the letter in fully ("blacks" it).
//It also fades out all the other letters, for contrast.
//At the end, it calls the function that changes the content frame to match the selected menu item.
//Pass the id of the letter that has been clicked to it.
function fadeallbutthisone(el)
{

if(el == "letA2")
{el = "letA1"}

	//I don't want it to re-fade in every time someone clicks on a menu item. Just once.
	if(el == blacked)
	{return;}

	element = document.getElementById(el);
	
	//Fade out all but the clicked (passed) letter.
	if(el != "letI"){$(I).fadeTo(200, 0.1);}
	if(el != "letS"){$(S).fadeTo(200, 0.1);}
	if(el != "letA1"){$(A1).fadeTo(200, 0.1); $(A2).fadeTo(200, 0.1);}
	if(el != "letC"){$(C).fadeTo(200, 0.1);}

	//Fade in the clicked letter. If it's A, fade in both A's.
	if(el == "letA1")
	{
		Afadedin=1;
		$(A1).fadeTo(200, 1.0);
		$(A2).fadeTo(200, 1.0);
	}
	else
	{
		$(element).fadeTo(200, 1.0);
	}
	
	switch(el)
	{
		case "letI":
		source = "home";
		break;
		case "letS":
		source = "service";
		break;
		case "letA1":
		source = "about";
		break;
		case "letC":
		source = "contact";
		break;
	}
	
	sourceOb = document.getElementById(source);
	
	blacked = el;
		
	activeopacity=0.6;
	backopacity=0.1;
	
	fadeText(el);
}

//These two change the content of the content box to match the clicked menu item.
//All of the content has been defined in outside Javascript files.
function fadeText(e)
{
	$(txt).fadeOut(200, function() {changeText(e);});
	$(txt).fadeIn(200);
}

function changeText(m)
{
	switch(m)
	{
		case "letI":
		txt.innerHTML = isaac;
		break;
		case "letS":
		txt.innerHTML = services;
		break;
		case "letA1":
		txt.innerHTML = about;
		break;
		case "letA2":
		txt.innerHTML = about;
		break;
		case "letC":
		txt.innerHTML = contact;
		break;
	}
}

//This is run as soon as the page is loaded. It deletes the "Loading..." text, and fades in all the letters stylishly.
function loadinganimation()
{

	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
	var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
		if (ieversion<9.0) {
			copyrightOb.innerHTML += "<br>You are using Internet Explorer. I highly recommend you use <a href='http://www.mozilla.com/en-US/firefox/'>Firefox</a> or <a href='http://www.google.com/chrome/intl/en/landing_chrome.html?hl=en'>Chrome</a> instead.";
			$.fx.off = true;
		}
	}
	
	loadingOb.innerHTML = "";
	
	$('#toSloganUp').click(function() {window.location.reload();});
	$('#toSloganUp').mouseover(function() {reslogan();});
	$('#toSloganRight').mouseover(function() {reslogan();});
	$('#toSloganBottom').mouseover(function() {reslogan();});
	$('#toSloganLeft').mouseover(function() {reslogan();});
	$('#letI').mouseover(function() {changeGuide('letI');});
	$('#letI').mouseout(function() {defaultGuide('letI');});
	$('#letI').click(function () {fadeallbutthisone('letI');});
	$('#letS').mouseover(function() {changeGuide('letS');});
	$('#letS').mouseout(function() {defaultGuide('letS');});
	$('#letS').click(function () {fadeallbutthisone('letS');});
	$('#letA1').mouseover(function() {changeGuide('letA1');});
	$('#letA1').mouseout(function() {defaultGuide('letA1');});
	$('#letA1').click(function () {fadeallbutthisone('letA1');});
	$('#letA2').mouseover(function() {changeGuide('letA2');});
	$('#letA2').mouseout(function() {defaultGuide('letA2');});
	$('#letA2').click(function () {fadeallbutthisone('letA2');});
	$('#letC').mouseover(function() {changeGuide('letC');});
	$('#letC').mouseout(function() {defaultGuide('letC');});
	$('#letC').click(function () {fadeallbutthisone('letC');});
	
	$(I).fadeIn(400);
		
		$(S).fadeIn(800);
	
			$(A1).fadeIn(1600);
	
				$(A2).fadeIn(2000);
	
						$(C).fadeIn(2400);
						
							setTimeout ('if(currentguide=="slogan") {$(slogOb).fadeIn(400);}', 600);
							
	txt.innerHTML="<p id='instructions'>Mouse over the letters to see menu options.</p>";

}