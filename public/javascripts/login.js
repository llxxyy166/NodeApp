$(document).ready(function () {
    $("button").click(function () {
        $.post( "/users/login", $("form").serialize())
            .done(function () {
                window.location.replace("/");
            })
            .fail(function () {
                $("#error-label").attr("hidden", false);
            });
    });
});