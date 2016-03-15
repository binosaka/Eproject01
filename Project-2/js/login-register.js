//----------Login-----------
$(document).ready(function () {
    $("#loginLink").click(function (event) {
        event.preventDefault();
        $(".overlay").fadeToggle("fast");
    });

    $(".overlayLink").click(function (event) {
        event.preventDefault();
        var action = $(this).attr('data-action');

        $.get("ajax/" + action, function (data) {
            $(".login-content").html(data);
        });

        $(".overlay").fadeToggle("fast");
    });

    $(".close").click(function () {
        $(".overlay").fadeToggle("fast");
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27 && $(".overlay").css("display") != "none") {
            event.preventDefault();
            $(".overlay").fadeToggle("fast");
        }
    });
});

//----------Register Nhà tuyển dụng----------
$(document).ready(function () {
    $("#loginLink-2").click(function (event) {
        event.preventDefault();
        $(".overlay-2").fadeToggle("fast");
    });

    $(".overlayLink-2").click(function (event) {
        event.preventDefault();
        var action = $(this).attr('data-action');

        $.get("ajax/" + action, function (data) {
            $(".login-content-2").html(data);
        });

        $(".overlay-2").fadeToggle("fast");
    });

    $(".close-2").click(function () {
        $(".overlay-2").fadeToggle("fast");
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27 && $(".overlay-2").css("display") != "none") {
            event.preventDefault();
            $(".overlay-2").fadeToggle("fast");
        }
    });
});

//----------Register Ứng viên----------
$(document).ready(function () {
    $("#loginLink-3").click(function (event) {
        event.preventDefault();
        $(".overlay-3").fadeToggle("fast");
    });

    $(".overlayLink-3").click(function (event) {
        event.preventDefault();
        var action = $(this).attr('data-action');

        $.get("ajax/" + action, function (data) {
            $(".login-content-3").html(data);
        });

        $(".overlay-3").fadeToggle("fast");
    });

    $(".close-3").click(function () {
        $(".overlay-3").fadeToggle("fast");
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27 && $(".overlay-3").css("display") != "none") {
            event.preventDefault();
            $(".overlay-3").fadeToggle("fast");
        }
    });
});