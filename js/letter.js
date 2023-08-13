var aparted = false;

$("#open").click(function () {

    if (!aparted) {
        var typed = new Typed('.letter', {
            strings: ["^1000Dear&nbsp;&nbsp;Yan",
                "M^200ing<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夜には^300いつも^200寒いよね、^600でも、^600手を^200繋いでいると、^600暖か^200くなるよ！<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;どんなに^300寒い夜も、^600君と^300二人でいれば、^600ちっとも^300寒くない！<br><br><p style='float:right; display:block; width:80px;'>^1000F^200eng</p>"],
            typeSpeed: 100,
            backSpeed: 50
        });

        $('#open').find("span").eq(0).css('background-position', "0 -150px");

        aparted = true;

        var music = document.getElementById('music2');
        if (music.paused) {
            music.play();
            $('#music_btn2').css("opacity", "1");
        }
    }

});

function refresh() {
    let start = new Date(2023, 5, 22, 20, 20, 20, 0);
    let now = new Date();
    let past = (now.getTime() - start.getTime()) / 1000;
    document.getElementById('days').innerHTML = Math.ceil(past / 60 / 60 / 24).toString();
    document.getElementById('hours').innerHTML = Math.ceil(past / 60 / 60 % 24).toString();
    document.getElementById('minutes').innerHTML = Math.ceil(past / 60 % 60).toString();
    let seconds = "0" + Math.ceil(past % 60).toString();
    if (seconds.length == 1) {
        seconds = "0" + seconds;
    }
    document.getElementById('seconds').innerHTML = seconds;
}


window.onload = function () {

    refresh();
    setInterval(refresh, 1000);

    var currentUrl = window.location.href;
    var firstIndex = currentUrl.indexOf("#");
    if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) event.preventDefault();
    });

    var lastTouchEnd = 0;

    document.addEventListener('touchend', function (event) {

        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) event.preventDefault();
        lastTouchEnd = now;

    }, false);

    document.addEventListener('gesturestart', function (event) {
        event.preventDefault();
    });

    $('body').css('opacity', '1');
    $('#jsi-cherry-container').css('z-index', '-99');

}
