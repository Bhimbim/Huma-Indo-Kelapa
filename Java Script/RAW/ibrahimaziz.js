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

/* CLASS */

var stringClassDisable = "Disable";
var stringClassEnable = "Enable";


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
			// $(stringMainLayoutJQueryID).css("margin-left", stringMainLeftSlideIn);
			$(stringMainLayoutJQueryID).css("-webkit-transform", "translateZ(-50px)");
			$(stringCurtainLayoutJQueryID).css("display", "block");
			cssPrefix("input[name='RadioButtonNavigationHeader']:checked + li img", "transform", "rotateZ(0deg)");
			$("input[name='RadioButtonNavigationHeader'] + li .ListNavigationItem").css("height", "0" + stringPX);
		}
		else
		{
			$(stringNavigationLayoutJQueryID).css("left", stringNavigationLeftSlideOut);
			// $(stringMainLayoutJQueryID).css("margin-left", stringMainLeftSlideOut);
			$(stringMainLayoutJQueryID).css("-webkit-transform", "translateZ(0px)");
			$(stringCurtainLayoutJQueryID).css("display", "none");
			cssPrefix("input[name='RadioButtonNavigationHeader']:checked + li img", "transform", "rotateZ(0deg)");

			$("input[name='CheckboxNavigationHeader']").each(function()
			{
				$(this).prop('checked', false);
			});

			$("input[name='CheckboxNavigationHeader'] + li .ListNavigationItem").css("height", "0" + stringPX);
			cssPrefix("input[name='CheckboxNavigationHeader'] + li img", "transform", "rotateZ(-45deg)");
		}
	});
}

function navigationHeaderShow()
{
	var intListNavigationItemLength;
	var intListNavigationItemHeight;
	var booleanCheckboxChecked;
	var stringInputJavaScriptID;
	var stringInputJQueryID;

	$("input[name='CheckboxNavigationHeader']").each(function()
	{
		$(this).change(function()
		{
			stringInputJavaScriptID = $(this).attr("id");
			stringInputJQueryID = stringKres + stringInputJavaScriptID;
			cssPrefix(stringInputJQueryID + " + li img", "transform", "rotateZ(-45deg)");
			booleanCheckboxChecked = $(this).is(":checked");
			
			if (booleanCheckboxChecked == true)
			{
				intListNavigationItemLength = $(stringInputJQueryID + ":checked + li .ListNavigationItem li").length;
				intListNavigationItemHeight = intListNavigationItemLength * 30;
				$(stringInputJQueryID + ":checked + li .ListNavigationItem").css("height", "0" + stringPX);
				$(stringInputJQueryID + ":checked + li .ListNavigationItem").css("height", intListNavigationItemHeight + stringPX);
				cssPrefix(stringInputJQueryID + ":checked + li img", "transform", "rotateZ(0deg)");
			}
			else
			{
				$(stringInputJQueryID + " + li .ListNavigationItem").css("height", "0" + stringPX);
				cssPrefix(stringInputJQueryID + " + li img", "transform", "rotateZ(-45deg)");
			}
			
		});
	});
}

function navigationDetailShow()
{
	var intHTMLWidth = $(window).width();
	var intSelectedIndex;

	$(".SubHeader input[name='RadioButtonNavigationDetail']").change(function()
	{
		intSelectedIndex = $(".SubHeader input[name='RadioButtonNavigationDetail']").index($(".SubHeader input[name='RadioButtonNavigationDetail']").filter(':checked'))
		$(".FormContainer").css("margin-left", -1 * intHTMLWidth * intSelectedIndex);
	});
}

function navigationTileShow(stringInputName)
{
	var stringInputValue;
	var stringInputJavaScriptID;

	$("input:radio[name='" + stringInputName + "']").change(function()
	{
		var intFlipUpCounter = 0;
		var intFlipDownCounter = 0;
		stringInputValue = $(this).val();

		$(".NavigationItem").each(function(index)
		{
			if ($(this).attr("name") == stringInputValue)
			{
				intFlipUpCounter ++;
				var elementItem = this;
		        var timeOutFlipUp = setTimeout(function() 
		        { 
		            if ($(elementItem).hasClass("Flip"))
					{
						$(elementItem).removeClass("Flip");
					}
					else
					{
						$(elementItem).addClass("Flip");
					}
		        }, intFlipUpCounter * 100);
			}
			else
			{
				var elementItem = this;
		        var timeOutFlipDown = setTimeout(function() 
		        { 
		            if ($(elementItem).hasClass("Flip"))
					{
						intFlipDownCounter ++;
						$(elementItem).removeClass("Flip");
					}
					else
					{
						
					}
		        }, intFlipDownCounter * 100);
			}
		});

		$(".NavigationHeader .NavigationHorn").each(function()
		{
			$(this).css("top", "0px");
		});
		
		$(".NavigationHeader .NavigationWingLeft").each(function()
		{
			$(this).css("left", "0px");
		});

		$(".NavigationHeader .NavigationWingRight").each(function()
		{
			$(this).css("right", "0px");
		});

		$(".NavigationHeader .NavigationTail").each(function()
		{
			$(this).css("bottom", "0px");
		});

		if ($(this).is(":checked") == true)
		{
			stringInputJavaScriptID = $(this).attr("id");
			$(stringKres + stringInputJavaScriptID + " + label .NavigationHorn").css("top", "-18px");
			$(stringKres + stringInputJavaScriptID + " + label .NavigationWingLeft").css("left", "-18px");
			$(stringKres + stringInputJavaScriptID + " + label .NavigationWingRight").css("right", "-18px");
			$(stringKres + stringInputJavaScriptID + " + label .NavigationTail").css("bottom", "-18px");
		}
		else
		{
			
		}
	});
}

function goToLogin()
{
	window.location.replace("../../Page/HTML/page_login_general.html");
}

function userInitial(stringUserName, stringUserPosition)
{
	var arrayUserName = stringUserName.split(" ");
	var stringUserInitial = "";

	for (var i = 0; i < arrayUserName.length; i++)
	{
		stringUserInitial += arrayUserName[i].substring(0, 1);
	}

	$("#InitialProfile").text(stringUserInitial);
	$("#ProfileHeader").text(stringUserName);
	$("#ProfileDetail").text(stringUserPosition);
}

function navigationNeutralizer(stringInputName)
{
	$("input[type='radio,checkbox'][name='" + stringInputName + "']").each(function()
	{
		this.checked = false;
	});
}

function filterNavigationHeader(objectNavigationHeader)
{
	var stringJSONID;
	var stringJSONText;
	var stringDivJavaScriptID;
	var stringJSONDivJavaScriptID;
	var stringJSONDivJQueryID;
	var stringRadioButtonJavaScriptID;
	var stringRadioButtonJQueryID;

	$("input:radio[name='RadioButtonNavigationTile']").prop("disabled", true);

	$(".NavigationHeader").each(function()
	{
		if ($(this).hasClass(stringClassEnable) == true)
		{
			$(this).removeClass(stringClassEnable);
		}
		else
		{
			
		}

		if ($(this).hasClass(stringClassDisable) == true)
		{
			$(this).removeClass(stringClassDisable);
		}
		else 
		{

		}

		$(this).addClass(stringClassDisable);
	});

	for (var i = 0; i < objectNavigationHeader.length; i++)
	{
		stringJSONID = objectNavigationHeader[i].id;
		stringJSONText = objectNavigationHeader[i].text;
		stringJSONDivJavaScriptID = "Navigation" + stringJSONID + "Header";
		stringJSONDivJQueryID = stringKres + stringJSONDivJavaScriptID;
		stringDivJQueryID = ".NavigationHeader" + stringJSONDivJQueryID;
		stringRadioButtonJavaScriptID = "radioButtonNavigationHeader" + stringJSONID;
		stringRadioButtonJQueryID = stringKres + stringRadioButtonJavaScriptID;

		if ($(stringDivJQueryID).hasClass(stringClassDisable) == true)
		{
			$(stringDivJQueryID).removeClass(stringClassDisable);
		}
		else
		{

		}

		$(stringDivJQueryID).addClass(stringClassEnable);
		$(stringRadioButtonJQueryID).prop("disabled", false);
	}
}

function filterNavigationItem(objectNavigationItem)
{
	var stringJSONID;
	var stringJSONText;
	var stringDivJavaScriptID;
	var stringJSONDivJavaScriptID;
	var stringJSONDivJQueryID;
	var stringNavigationText;

	$(".NavigationItem").each(function()
	{
		if ($(this).hasClass(stringClassEnable) == true)
		{
			$(this).removeClass(stringClassEnable);
		}
		else
		{
			
		}

		if ($(this).hasClass(stringClassDisable) == true)
		{
			$(this).removeClass(stringClassDisable);
		}
		else 
		{

		}

		$(this).addClass(stringClassDisable);
		$(this).parent().addClass(stringClassDisable);
	});

	for (var i = 0; i < objectNavigationItem.length; i++)
	{
		stringJSONID = objectNavigationItem[i].id;
		stringJSONText = objectNavigationItem[i].text;
		stringJSONDivJavaScriptID = "Navigation" + stringJSONID + "Header";
		stringJSONDivJQueryID = stringKres + stringJSONDivJavaScriptID;

		$(".SpanNavigationItem").each(function()
		{
			stringNavigationText = $(this).text();

			if (stringNavigationText == stringJSONText)
			{
				stringDivJavaScriptID = $(this).parent().parent().parent().attr("id");
				stringDivJQueryID = stringKres + stringDivJavaScriptID;

				if ($(stringDivJQueryID).hasClass(stringClassDisable) == true)
				{
					$(stringDivJQueryID).removeClass(stringClassDisable);
				}
				else
				{

				}

				$(stringDivJQueryID).addClass(stringClassEnable);

				if ($(stringDivJQueryID).parent().hasClass(stringClassDisable) == true)
				{
					$(stringDivJQueryID).parent().removeClass(stringClassDisable);
				}
				else
				{

				}

				$(stringDivJQueryID).parent().addClass(stringClassEnable);
			}
			else
			{

			}
		});
	}
}


// MAIN

function formInitializeSize()
{
	var intHTMLHeight = $(window).height();
	var intMainHeaderHeight = $(".MainHeader").height();
	var intSubHeaderHeight = $(".SubHeader").height();
	var intFormHeight = intHTMLHeight - intMainHeaderHeight - intSubHeaderHeight - 46;
	// alert(intFormHeight + " = " + intHTMLHeight + " - " + intMainHeaderHeight + " - " + intSubHeaderHeight);
	var intHTMLWidth = $(window).width();
	var intFormWidth = intHTMLWidth - 40;

	$("form").css("height", intFormHeight + stringPX);
	$("form").css("width", intFormWidth + stringPX);

	var intAccumulateWidth = 0;

	$("form").each(function()
	{
		intAccumulateWidth += intFormWidth + 40;
	});

	$(".FormWindow").css("width", intHTMLWidth + stringPX);
	$(".FormContainer").css("width", intAccumulateWidth + stringPX);
}

function formInitializeSizeNoPaging()
{
	var intHTMLHeight = $(window).height();
	var intMainHeaderHeight = $(".MainHeader").height();
	var intSubHeaderHeight = $(".SubHeader").height();
	var intFormHeight = intHTMLHeight - intMainHeaderHeight - intSubHeaderHeight - 46;
	// alert(intFormHeight + " = " + intHTMLHeight + " - " + intMainHeaderHeight + " - " + intSubHeaderHeight);
	var intHTMLWidth = $(window).width();
	var intFormWidth = intHTMLWidth - 40;

	$("form").css("height", intFormHeight + stringPX);
	$("form").css("width", intFormWidth + stringPX);

	// var intAccumulateWidth = 0;

	// $("form").each(function()
	// {
	// 	intAccumulateWidth += intFormWidth + 40;
	// });

	$(".FormWindow").css("width", intHTMLWidth + stringPX);
	// $(".FormContainer").css("width", intAccumulateWidth + stringPX);
	$(".FormContainer").css("width", intHTMLWidth + stringPX);
}


// FORM

function formInitializeMessage(stringTitle, stringDescription, booleanState)
{
	var intMessageContainerRight = $("#MessageContainer").css("right");
	var intColorRed;
	var intColorGreen;
	var intColorBlue;

	if (stringDescription.length == 0)
	{

	}
	else
	{
		if (booleanState == false)
		{
			intColorRed = 193;
			intColorGreen = 39;
			intColorBlue = 45;
		}
		else
		{
			intColorRed = 0;
			intColorGreen = 85;
			intColorBlue = 160;
		}

		$("#MessageContainer").css("background-color", "rgba(" + intColorRed + ", " + intColorGreen + ", " + intColorBlue + ", 1)");
		$("#MessageWingLeft").css("background-color", "rgba(" + (intColorRed + 30) + ", " + (intColorGreen + 30) + ", " + (intColorBlue + 30) + ", 1)");

		/* if (intMessageContainerRight == "-80" + stringPX)
		{
			$("#MessageContainer").css("right", "-480px");
			$("#MessageWingLeft").css("margin-left", "-40px");
		}
		else
		{ */
			$("#MessageContainer").css("right", "-80px");
			$("#MessageWingLeft").css("margin-left", "0px");
		// }

		$("#MessageTitle").text(stringTitle);
		$("#MessageDescription").text(stringDescription);
	}
}


// PROGRESS

function progressInitialization(stringProgressJavaScriptID)
{
	var stringProgressJQueryID = stringKres + stringProgressJavaScriptID;

	if(document.getElementById(stringProgressJavaScriptID) == null)
	{

	}
	else
	{
		$(stringProgressJQueryID).hide();
	}
}

function progressPage(stringProgressJavaScriptID)
{
	var stringProgressJQueryID = stringKres + stringProgressJavaScriptID;

	setTimeout(function()
	{
		// $(stringProgressJQueryID).css("margin-top", "-100%");
		// $(stringProgressJQueryID).css("opacity", "0");
	}, 
	0);

	setTimeout(function()
	{
		$(stringProgressJQueryID).hide();
	}, 
	2000);
}


// POP UP

function popUpPageToggle(stringContentJavaScriptID)
{
	var stringContentJQueryID = stringKres + stringContentJavaScriptID;

	if ($(stringContentJQueryID).css("display") == "block")
	{
		$(stringContentJQueryID).css("display", "none");
		$("#PopUpPage").css("display", "none");
	}
	else
	{
		if ($("#PopUpPage").css("display") == "block")
		{
			
		}
		else
		{
			$("#PopUpPage").css("display", "block");
		}

		$("#PopUpPage .Content").css("display", "none");
		$(stringContentJQueryID).css("display", "block");
	}
}