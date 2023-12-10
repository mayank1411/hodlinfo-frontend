$step = 1;
$loops = Math.round(100 / $step);
$increment = 360 / $loops;
$half = Math.round($loops / 2);
$barColor = '#feeff4';
$backColor = '#3DC6C1';

$(function(){
    clock.init();
});

clock = {
    interval: null,
    init: function () {
        clock.start(); // Start the timer automatically
    },
    start: function () {
        var pie = 0;
        var num = 0;
        var min = 1; // Default time set to 1 minute
        var sec = min * 60;
        var lop = sec;
        $('.count').text(min);
        if (min > 0) {
            $('.count').addClass('min')
        } else {
            $('.count').addClass('sec')
        }
        clock.interval = setInterval(function () {
            sec = sec - 1;
            if (min > 1) {
                pie = pie + (100 / (lop / min));
            } else {
                pie = pie + (100 / (lop));
            }
            if (pie >= 101) { pie = 1; }
            num = (sec / 60).toFixed(2).slice(0, -3);
            if (num == 0) {
                $('.count').removeClass('min').addClass('sec').text(sec);
            } else {
                $('.count').removeClass('sec').addClass('min').text(num);
            }
            $i = (pie.toFixed(2).slice(0, -3)) - 1;
            if ($i < $half) {
                $nextdeg = (90 + ($increment * $i)) + 'deg';
                $('.clock').css({ 'background-image': 'linear-gradient(90deg,' + $backColor + ' 50%,transparent 50%,transparent),linear-gradient(' + $nextdeg + ',' + $barColor + ' 50%,' + $backColor + ' 50%,' + $backColor + ')' });
            } else {
                $nextdeg = (-90 + ($increment * ($i - $half))) + 'deg';
                $('.clock').css({ 'background-image': 'linear-gradient(' + $nextdeg + ',' + $barColor + ' 50%,transparent 50%,transparent),linear-gradient(270deg,' + $barColor + ' 50%,' + $backColor + ' 50%,' + $backColor + ')' });
            }
            if (sec == 0) {
                // Reset the timer when it reaches 0
                sec = min * 60;
            }
        }, 1000);
    },
    stop: function () {
        clearInterval(clock.interval);
        $('.count').text(0);
        $('.clock').removeAttr('style');
    }
}
