// INTIALIZATION

/* JQUERY */

var stringKres = "#";
var stringDot = ".";
var stringStrip = "-";
var stringPX = "px";

/* LAYOUT */

var stringNavigationDistance = "260px"
var stringNavigationLeftSlideOut = stringStrip + stringNavigationDistance;
var stringNavigationLeftSlideIn = "0px";
var stringMainLeftSlideOut = "0px";
var stringMainLeftSlideIn = stringNavigationDistance;


// BASIC

function cssPrefix(stringLayoutSelector, stringCSSSyntax, stringCSSValue)
{
	$(stringLayoutSelector).css(stringCSSSyntax, stringCSSValue);
	$(stringLayoutSelector).css("-ms-" + stringCSSSyntax, stringCSSValue);
	$(stringLayoutSelector).css("-moz-" + stringCSSSyntax, stringCSSValue);
	$(stringLayoutSelector).css("-o-" + stringCSSSyntax, stringCSSValue);
	$(stringLayoutSelector).css("-webkit-" + stringCSSSyntax, stringCSSValue);
}


// NAVIGATION

function navigationPanelShow(stringNavigationTriggerJavaScriptID)
{
	var stringNavigationTriggerJQueryID = stringKres + stringNavigationTriggerJavaScriptID;
	var stringNavigationLayoutJQueryID = "nav";
	var stringMainLayoutJQueryID = "main";
	var stringCurtainLayoutJavaScriptID = "Curtain";
	var stringCurtainLayoutJQueryID = stringKres + stringCurtainLayoutJavaScriptID;
	var stringNavigationLayoutState;
	
	$(stringNavigationTriggerJQueryID + ", " + stringCurtainLayoutJQueryID).click(function()
	{
		stringNavigationLayoutState = $(stringNavigationLayoutJQueryID).css("left");

		if (stringNavigationLayoutState == stringNavigationLeftSlideOut)
		{
			$(stringNavigationLayoutJQueryID).css("left", stringNavigationLeftSlideIn);
			$(stringMainLayoutJQueryID).css("margin-left", stringMainLeftSlideIn);
			// $(stringMainLayoutJQueryID).css("-webkit-transform", "translateZ(-50px)");
			// $(stringCurtainLayoutJQueryID).css("display", "block");
			// cssPrefix("input[name='RadioButtonNavigationHeader']:checked + li img", "transform", "rotateZ(0deg)");
		}
		else
		{
			$(stringNavigationLayoutJQueryID).css("left", stringNavigationLeftSlideOut);
			$(stringMainLayoutJQueryID).css("margin-left", stringMainLeftSlideOut);
			// $(stringMainLayoutJQueryID).css("-webkit-transform", "translateZ(0px)");
			// $(stringCurtainLayoutJQueryID).css("display", "none");
			cssPrefix("input[name='RadioButtonNavigationHeader']:checked + li img", "transform", "rotateZ(0deg)");
		}
	});
}

function navigationHeaderShow()
{
	var intListNavigationItemLength;
	var intListNavigationItemHeight;
	var booleanRadioButtonChecked;

	$("input[name='RadioButtonNavigationHeader']").each(function()
	{
		$(this).change(function()
		{
			cssPrefix("input[name='RadioButtonNavigationHeader'] + li img", "transform", "rotateZ(-45deg)");
			booleanRadioButtonChecked = $(this).is(":checked");
			
			if (booleanRadioButtonChecked == true)
			{
				intListNavigationItemLength = $("input[name='RadioButtonNavigationHeader']:checked + li .ListNavigationItem li").length;
				intListNavigationItemHeight = intListNavigationItemLength * 30;
				$("input[name='RadioButtonNavigationHeader'] + li .ListNavigationItem").css("height", "0" + stringPX);
				$("input[name='RadioButtonNavigationHeader']:checked + li .ListNavigationItem").css("height", intListNavigationItemHeight + stringPX);
				cssPrefix("input[name='RadioButtonNavigationHeader']:checked + li img", "transform", "rotateZ(0deg)");
			}
			else
			{
				$("input[name='RadioButtonNavigationHeader'] + li .ListNavigationItem").css("height", "0" + stringPX);
				cssPrefix("input[name='RadioButtonNavigationHeader'] + li img", "transform", "rotateZ(-45deg)");
			}
			
		});
	});
}


// MAIN

function formInitializeHeight()
{
	var intHTMLHeight = $(window).height();
	var intMainHeaderHeight = $(".MainHeader").height();
	var intSubHeaderHeight = $(".SubHeader").height();
	var intFormHeight = intHTMLHeight - intMainHeaderHeight - intSubHeaderHeight - 41;
	// alert(intFormHeight + " = " + intHTMLHeight + " - " + intMainHeaderHeight + " - " + intSubHeaderHeight);

	$("form").css("height", intFormHeight + stringPX);
}