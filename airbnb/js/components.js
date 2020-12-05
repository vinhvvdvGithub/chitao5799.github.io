$("#checkin").datepicker({
    dateFormat: 'dd/mm/yy',
    minDate: new Date()
});
//$('#checkin').datepicker('setDate', new Date());
$("#checkout").datepicker({
    dateFormat: 'dd/mm/yy',
    minDate: new Date()
});
//$('#checkout').datepicker('setDate', new Date());
$("#checkout").change(function() {
    var checkinDate = $('#checkin').datepicker('getDate');
    var checkoutDate = $('#checkout').datepicker('getDate');
    if (checkinDate == null) {
        $('#checkin').datepicker('setDate', checkoutDate);
        $("#checkout").val("");
        // $('#checkout').datepicker("hide");
        // // $('#checkout');
        // $('#checkout').focus();
        // $("#checkout:focus").datepicker("refresh").datepicker("show");
    } else {
        if (checkinDate > checkoutDate) {
            $('#checkin').datepicker('setDate', checkoutDate);
            $("#checkout").val("");
        } else if (checkinDate == checkoutDate) {
            $("#checkout").val("");
        }

    }
})
var choosesShow = false;

$(".guests").click(function() {
    if (choosesShow == false) {
        $(".guests").css({ "border-color": "rgb(38,138,195)", "box-shadow": "0px 0px 2px #268AC3" });
        $(".menuItem").css({ "display": "block" });
        $("#arrow").removeAttr("class");
        $("#arrow").addClass("fas fa-angle-up");
        choosesShow = true;
    } else {
        $(".guests").css({ "border-color": "#9CBDF4", "box-shadow": "0px 0px 2px #268AC3" });
        $(".menuItem").css({ "display": "none" });
        $("#arrow").removeAttr("class");
        $("#arrow").addClass("fa fa-angle-down");
        choosesShow = false;
    }
});
// $(document).not(document.getElementsByClassName("guests")).click(function() {

//     if (choosesShow == true) {
//         alert("vào if");
//         choosesShow = false;
//         $(".menuItem").css({ "display": "none" });
//     }
// });
// $(".guests").on("onchange", function() {
//     $(".guests").css({ "border-color": "#767676" });
// });
var adultValue = 0,
    childrenValue = 0,
    infantValue = 0;
$("#adultPlus").click(function() {
    if (adultValue + childrenValue < 16) {
        adultValue++;
        if (adultValue + childrenValue === 16 || adultValue == 16) {
            $("#adultPlus").css("cursor", "default");
            $("#adultPlus circle").attr("stroke", "#B3DADB");
            $("#adultPlus line").attr("style", "stroke:#B3DADB;stroke-width:2");

            $("#childrenPlus").css("cursor", "default");
            $("#childrenPlus circle").attr("stroke", "#B3DADB");
            $("#childrenPlus line").attr("style", "stroke:#B3DADB;stroke-width:2");
        }
        $("#adultMinus").css("cursor", "pointer");
        $("#adultMinus circle").attr("stroke", "#02858A");

        $("#adultMinus line").attr("style", "stroke:#5CB0B4;stroke-width:2")
        $("#clear").css("display", "inline");
        $("#adultNumber").text(adultValue + "+");
        if (infantValue == 0 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest");
        } else if (infantValue == 0 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests");
        } else
        if (infantValue == 1 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest" + ", " + infantValue + " infant");
        } else
        if (infantValue > 1 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests" + ", " + infantValue + " infants");
        } else
        if (infantValue == 1 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests" + ", " + infantValue + " infant");
        }
    } else {
        $("#adultPlus").css("cursor", "default");
        $("#adultPlus circle").attr("stroke", "#B3DADB");
        $("#adultPlus line").attr("style", "stroke:#B3DADB;stroke-width:2");
    }
});

$("#adultMinus").click(function() {
    if (adultValue === 1 && (childrenValue > 0 || infantValue > 0))
        return;
    else if (adultValue + childrenValue > 0) {
        adultValue--;
        if (adultValue == 0) {
            $("#adultMinus").css("cursor", "default");
            $("#adultMinus circle").attr("stroke", "#B3DADB");
            $("#adultMinus line").attr("style", "stroke:#B3DADB;stroke-width:2");
            $("#guestsNumber").text("Guests");
        } else if (adultValue === 1 && (childrenValue > 0 || infantValue > 0)) {
            $("#adultMinus").css("cursor", "default");
            $("#adultMinus circle").attr("stroke", "#B3DADB");
            $("#adultMinus line").attr("style", "stroke:#B3DADB;stroke-width:2");
        }
        if (adultValue + childrenValue < 16) {
            $("#childrenPlus").css("cursor", "pointer");
            $("#childrenPlus circle").attr("stroke", "#02858A");
            $("#childrenPlus line").attr("style", "stroke:#5CB0B4;stroke-width:2");
        }
        $("#adultPlus").css("cursor", "pointer");
        $("#adultPlus circle").attr("stroke", "#02858A");

        $("#adultPlus line").attr("style", "stroke:#5CB0B4;stroke-width:2")

        $("#adultNumber").text(adultValue + "+");
        if (infantValue == 0 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest");
        } else if (infantValue == 0 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests");
        } else
        if (infantValue == 1 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest" + ", " + infantValue + " infant");
        } else
        if (infantValue > 1 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests" + ", " + infantValue + " infants");
        } else
        if (infantValue == 1 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests" + ", " + infantValue + " infant");
        }
    } else {
        if (infantValue == 0 && adultValue + childrenValue == 0) {
            $("#guestsNumber").text("Guests");
        }
        $("#clear").css("display", "none");
        $("#adultMinus").css("cursor", "default");
        $("#adultMinus circle").attr("stroke", "#B3DADB");
        $("#adultMinus line").attr("style", "stroke:#B3DADB;stroke-width:2");
    }
});
//--------
$("#childrenPlus").click(function() {
    if (adultValue == 0 && infantValue == 0) {
        childrenValue++;
        adultValue++;
        $("#childrenMinus").css("cursor", "pointer");
        $("#childrenMinus circle").attr("stroke", "#02858A");
        $("#childrenMinus line").attr("style", "stroke:#5CB0B4;stroke-width:2")
        $("#clear").css("display", "inline");
        $("#childrenNumber").text(childrenValue + "+");
        $("#guestsNumber").text(adultValue + childrenValue + " guests");
        $("#adultNumber").text(adultValue + "+");
    } else if (adultValue + childrenValue < 16 && childrenValue < 5 && adultValue > 0) {
        childrenValue++;
        if (childrenValue === 5) {
            $("#childrenPlus").css("cursor", "default");
            $("#childrenPlus circle").attr("stroke", "#B3DADB");
            $("#childrenPlus line").attr("style", "stroke:#B3DADB;stroke-width:2");
        }
        if (adultValue + childrenValue === 16) {
            $("#childrenPlus").css("cursor", "default");
            $("#childrenPlus circle").attr("stroke", "#B3DADB");
            $("#childrenPlus line").attr("style", "stroke:#B3DADB;stroke-width:2");
            $("#adultPlus").css("cursor", "default");
            $("#adultPlus circle").attr("stroke", "#B3DADB");
            $("#adultPlus line").attr("style", "stroke:#B3DADB;stroke-width:2");
        }
        if (adultValue == 1) //khi thêm children mà adult có 1 thì dấu trừ của adult bị ẩn
        {
            $("#adultMinus").css("cursor", "default");
            $("#adultMinus circle").attr("stroke", "#B3DADB");
            $("#adultMinus line").attr("style", "stroke:#B3DADB;stroke-width:2");
        }
        $("#childrenMinus").css("cursor", "pointer");
        $("#childrenMinus circle").attr("stroke", "#02858A");

        $("#childrenMinus line").attr("style", "stroke:#5CB0B4;stroke-width:2")
        $("#clear").css("display", "inline");
        $("#childrenNumber").text(childrenValue + "+");
        if (infantValue == 0 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest");
        } else if (infantValue == 0 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests");
        } else
        if (infantValue == 1 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest" + ", " + infantValue + " infant");
        } else
        if (infantValue == 1 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests" + ", " + infantValue + " infant");
        } else
        if (infantValue > 1 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests" + ", " + infantValue + " infants");
        }
    } else {
        $("#childrenPlus").css("cursor", "default");
        $("#childrenPlus circle").attr("stroke", "#B3DADB");
        $("#childrenPlus line").attr("style", "stroke:#B3DADB;stroke-width:2");
    }
});

$("#childrenMinus").click(function() {
    if (childrenValue === 0)
        return;
    if (adultValue + childrenValue > 0) {
        childrenValue--;
        if (childrenValue === 0) {
            $("#childrenMinus").css("cursor", "default");
            $("#childrenMinus circle").attr("stroke", "#B3DADB");
            $("#childrenMinus line").attr("style", "stroke:#B3DADB;stroke-width:2");
        }
        if (adultValue == 1 && infantValue == 0 && childrenValue == 0) {
            $("#adultMinus").css("cursor", "pointer");
            $("#adultMinus circle").attr("stroke", "#02858A");
            $("#adultMinus line").attr("style", "stroke:#5CB0B4;stroke-width:2");
        }
        if (adultValue + childrenValue < 16) {
            $("#adultPlus").css("cursor", "pointer");
            $("#adultPlus circle").attr("stroke", "#02858A");
            $("#adultPlus line").attr("style", "stroke:#5CB0B4;stroke-width:2");
        }
        $("#childrenPlus").css("cursor", "pointer");
        $("#childrenPlus circle").attr("stroke", "#02858A");

        $("#childrenPlus line").attr("style", "stroke:#5CB0B4;stroke-width:2")

        $("#childrenNumber").text(childrenValue + "+");
        if (infantValue == 0 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest");
        } else if (infantValue == 0 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests");
        } else
        if (infantValue == 1 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest" + ", " + infantValue + " infant");
        } else
        if (infantValue > 1 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests" + ", " + infantValue + " infants");
        } else
        if (infantValue == 1 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests" + ", " + infantValue + " infant");
        }
    } else {
        if (infantValue == 0 && adultValue + childrenValue == 0) {
            $("#guestsNumber").text("Guests");
            $("#guestsNumber").css("margin-right", "287px");
        }

        $("#clear").css("display", "none");
        $("#childrenMinus").css("cursor", "default");
        $("#childrenMinus circle").attr("stroke", "#B3DADB");
        $("#childrenMinus line").attr("style", "stroke:#B3DADB;stroke-width:2");
    }
});
//-------
$("#infantPlus").click(function() {
    if (adultValue == 0) {
        infantValue++;
        adultValue++;
        $("#infantMinus").css("cursor", "pointer");
        $("#infantMinus circle").attr("stroke", "#02858A");
        $("#infantMinus line").attr("style", "stroke:#5CB0B4;stroke-width:2")
        $("#clear").css("display", "inline");
        $("#infantsNumber").text(infantValue + "+");
        $("#adultNumber").text(adultValue + "+");
        if (infantValue == 0 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest");
        } else if (infantValue == 0 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests");
        } else
        if (infantValue == 1 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest" + ", " + infantValue + " infant");
        } else
        if (infantValue > 1 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests" + ", " + infantValue + " infants");
        }

    } else if (infantValue < 5) {
        infantValue++;
        if (infantValue === 5) {
            $("#infantPlus").css("cursor", "default");
            $("#infantPlus circle").attr("stroke", "#B3DADB");
            $("#infantPlus line").attr("style", "stroke:#B3DADB;stroke-width:2");
        }
        if (adultValue == 1) //khi thêm infant mà adult có 1 thì dấu trừ của adult bị ẩn
        {
            $("#adultMinus").css("cursor", "default");
            $("#adultMinus circle").attr("stroke", "#B3DADB");
            $("#adultMinus line").attr("style", "stroke:#B3DADB;stroke-width:2");
        }
        $("#infantMinus").css("cursor", "pointer");
        $("#infantMinus circle").attr("stroke", "#02858A");
        $("#infantMinus line").attr("style", "stroke:#5CB0B4;stroke-width:2")
        $("#clear").css("display", "inline");
        $("#infantsNumber").text(infantValue + "+");
        if (infantValue == 0 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest");
        } else if (infantValue == 0 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests");
        } else
        if (infantValue == 1 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest" + ", " + infantValue + " infant");
        } else
        if (infantValue > 1 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests" + ", " + infantValue + " infants");
        } else
        if (infantValue > 1 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest" + ", " + infantValue + " infants");
        } else
        if (infantValue == 1 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests" + ", " + infantValue + " infant");
        }
    } else {
        $("#infantPlus").css("cursor", "default");
        $("#infantPlus circle").attr("stroke", "#B3DADB");
        $("#infantPlus line").attr("style", "stroke:#B3DADB;stroke-width:2");
    }
});

$("#infantMinus").click(function() {
    if (infantValue === 0)
        return;
    if (infantValue > 0) {
        infantValue--;
        if (infantValue === 0) {
            $("#infantMinus").css("cursor", "default");
            $("#infantMinus circle").attr("stroke", "#B3DADB");
            $("#infantMinus line").attr("style", "stroke:#B3DADB;stroke-width:2");

            if (adultValue + childrenValue == 1) {
                $("#guestsNumber").text(adultValue + childrenValue + " guest");
            } else if (adultValue + childrenValue > 1) {
                $("#guestsNumber").text(adultValue + childrenValue + " guests");
            }
        }
        if (adultValue == 1 && infantValue == 0 && childrenValue == 0) {
            $("#adultMinus").css("cursor", "pointer");
            $("#adultMinus circle").attr("stroke", "#02858A");
            $("#adultMinus line").attr("style", "stroke:#5CB0B4;stroke-width:2");
        }
        $("#infantPlus").css("cursor", "pointer");
        $("#infantPlus circle").attr("stroke", "#02858A");
        $("#infantPlus line").attr("style", "stroke:#5CB0B4;stroke-width:2")

        $("#infantsNumber").text(infantValue + "+");
        if (infantValue == 0 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest");
        } else if (infantValue == 0 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests");
        } else
        if (infantValue == 1 && adultValue + childrenValue == 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guest" + ", " + infantValue + " infant");
        } else
        if (infantValue > 1 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests" + ", " + infantValue + " infants");
        } else
        if (infantValue == 1 && adultValue + childrenValue > 1) {
            $("#guestsNumber").text(adultValue + childrenValue + " guests" + ", " + infantValue + " infant");
        }
    } else {
        $("#guestsNumber").text("Guests");
        $("#guestsNumber").css("margin-right", "287px");
        $("#clear").css("display", "none");
        $("#infantMinus").css("cursor", "default");
        $("#infantMinus circle").attr("stroke", "#B3DADB");
        $("#infantMinus line").attr("style", "stroke:#B3DADB;stroke-width:2");
    }
});
//----
$("#save").click(function() {
    $(".guests").css({ "border-color": "#9CBDF4", "box-shadow": "0px 0px 2px #268AC3" });
    $(".menuItem").css({ "display": "none" });
    $("#arrow").removeAttr("class");
    $("#arrow").addClass("fa fa-angle-down");
    choosesShow = false;
});
$("#clear").click(function() {
    $("#guestsNumber").text("Guests");
    $("#clear").css("display", "none");
    adultValue = 0;
    childrenValue = 0;
    infantValue = 0;
    $("#adultMinus").css("cursor", "default");
    $("#adultMinus circle").attr("stroke", "#B3DADB");
    $("#adultMinus line").attr("style", "stroke:#B3DADB;stroke-width:2");
    $("#adultNumber").text("0+");
    $("#adultPlus").css("cursor", "pointer");
    $("#adultPlus circle").attr("stroke", "#02858A");
    $("#adultPlus line").attr("style", "stroke:#5CB0B4;stroke-width:2")

    $("#childrenMinus").css("cursor", "default");
    $("#childrenMinus circle").attr("stroke", "#B3DADB");
    $("#childrenMinus line").attr("style", "stroke:#B3DADB;stroke-width:2");
    $("#childrenNumber").text("0+");
    $("#childrenPlus").css("cursor", "pointer");
    $("#childrenPlus circle").attr("stroke", "#02858A");
    $("#childrenPlus line").attr("style", "stroke:#5CB0B4;stroke-width:2")

    $("#infantMinus").css("cursor", "default");
    $("#infantMinus circle").attr("stroke", "#B3DADB");
    $("#infantMinus line").attr("style", "stroke:#B3DADB;stroke-width:2");
    $("#infantsNumber").text("0+");
    $("#infantPlus").css("cursor", "pointer");
    $("#infantPlus circle").attr("stroke", "#02858A");
    $("#infantPlus line").attr("style", "stroke:#5CB0B4;stroke-width:2")

});