var aparted = false;

$("#open").click(function () {

    if (!aparted) {
        var typed = new Typed('.letter', {
            strings: ["^1000Wei&nbsp;&nbsp;MinYan",
                "魏^200敏燕<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;哈喽呀，不知不觉我们已经认识两个月了，突然就这样有一个人走进了我的生活，或许这就是缘分吧，从第一次见你的时候我就觉得我遇到了一个不一样的女孩，你带给了我欢乐，懂我内心很多想法，未来还有好多好多地方和美食希望和你一起去体验，想跟你说，我喜欢你<br><br><p style='float:right; display:block; width:80px;'>^1000庄^200增锋</p>"],
            typeSpeed: 300,
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
    document.getElementById('days').innerHTML = Math.floor(past / 60 / 60 / 24).toString();
    document.getElementById('hours').innerHTML = Math.floor(past / 60 / 60 % 24).toString();
    document.getElementById('minutes').innerHTML = Math.floor(past / 60 % 60).toString();
    document.getElementById('seconds').innerHTML = Math.floor(past % 60).toString();
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
