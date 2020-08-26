score = 0;
previousKeyDown = 0;
random = (max, n = 1) => {
    return parseInt(((new Date).getTime()) * n % max);
}
$('body').append("<div class='snake'></div>");
move = (x, y) => {
    $('body').append("<div class='snake'></div>");
    $('.snake:last').css('left', x + '%');
    $('.snake:last').css('top', y + '%');
}

eatFood = (e) => {
    score++;
    height = $('body').height();
    width = $('body').width();
    $('.food').remove();
    $('body').append("<div class='food'></div>");
    $('.food').css('left', random(100) + '%');
    $('.food').css('top', random(100, 23) + '%');
    if (e.key == 'ArrowUp') {
        move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width), Math.round(parseFloat($('.snake:last').css('top')) * 100 / height) - 1);
        // move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width), Math.round(parseFloat($('.snake:last').css('top')) * 100 / height) - 1);
    }
    if (e.key == 'ArrowRight') {
        move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width) + 1, Math.round(parseFloat($('.snake:last').css('top')) * 100 / height));
        // move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width) + 1, Math.round(parseFloat($('.snake:last').css('top')) * 100 / height));
    }
    if (e.key == 'ArrowDown') {
        move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width), Math.round(parseFloat($('.snake:last').css('top')) * 100 / height) + 1);
        // move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width), Math.round(parseFloat($('.snake:last').css('top')) * 100 / height) + 1);
    }
    if (e.key == 'ArrowLeft') {
        move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width) - 1, Math.round(parseFloat($('.snake:last').css('top')) * 100 / height));
        // move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width) - 1, Math.round(parseFloat($('.snake:last').css('top')) * 100 / height));
    }
}

isGameOver = () => {
    height = $('body').height();
    width = $('body').width();
    n = 0
    col = document.querySelectorAll('.snake').forEach(element => {
        if ((Math.round(parseFloat(element.style.top) - parseFloat($('.snake:last').css('top')) * 100 / height) == 0)
            && (Math.round(parseFloat(element.style.left) - parseFloat($('.snake:last').css('left')) * 100 / width)) == 0) {
            if (n == 1) {
                alert(score);
                score = 0;
                $('.snake').remove();
                $('body').append("<div class='snake'></div>");
                $('.snake').css('left', random(100) + '%');
                $('.snake').css('top', random(100, 2) + '%');
            }
            else n++;
        }
    });
    if (
        Math.round(parseFloat($('.snake:last-child').css('top')) < -10)
        || Math.round(parseFloat($('.snake:last-child').css('bottom')) < -10)
        || Math.round(parseFloat($('.snake:last-child').css('left')) < -10)
        || Math.round(parseFloat($('.snake:last-child').css('right')) < -10)
    ) {
        alert(score);
        score = 0;
        $('.snake').remove();
        $('body').append("<div class='snake'></div>");
        $('.snake').css('left', random(100) + '%');
        $('.snake').css('top', random(100, 2) + '%');
    }
}

updateScore = () => {
    $('.score').text(score);
}

function moveSnake(e) {
    if ((previousKeyDown.keyCode - e.keyCode != 2) && (previousKeyDown.keyCode - e.keyCode != -2)) {
        if (0); else {
            height = $('body').height();
            width = $('body').width();
            if (e.key == 'ArrowUp') {
                move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width), Math.round(parseFloat($('.snake:last').css('top')) * 100 / height) - 1);
                move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width), Math.round(parseFloat($('.snake:last').css('top')) * 100 / height) - 1);
                $('.snake:first').remove();
                $('.snake:first').remove();
            }
            if (e.key == 'ArrowRight') {
                move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width) + 1, Math.round(parseFloat($('.snake:last').css('top')) * 100 / height));
                move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width) + 1, Math.round(parseFloat($('.snake:last').css('top')) * 100 / height));
                $('.snake:first').remove();
                $('.snake:first').remove();
            }
            if (e.key == 'ArrowDown') {
                move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width), Math.round(parseFloat($('.snake:last').css('top')) * 100 / height) + 1);
                move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width), Math.round(parseFloat($('.snake:last').css('top')) * 100 / height) + 1);
                $('.snake:first').remove();
                $('.snake:first').remove();
            }
            if (e.key == 'ArrowLeft') {
                move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width) - 1, Math.round(parseFloat($('.snake:last').css('top')) * 100 / height));
                move(Math.round(parseFloat($('.snake:last').css('left')) * 100 / width) - 1, Math.round(parseFloat($('.snake:last').css('top')) * 100 / height));
                $('.snake:first').remove();
                $('.snake:first').remove();
            }
        }
        diffX = parseFloat($('.snake:last').css('top')) - parseFloat($('.food:last').css('top'));
        diffY = parseFloat($('.snake:last').css('left')) - parseFloat($('.food:last').css('left'));
        if ((diffX < 7) && (diffX > -7) && (diffY < 7) && (diffY > -7))
            eatFood(e);
        isGameOver();
        updateScore();
        previousKeyDown = e;
        // moveSnake(e);
    }
}
document.onkeydown = function (e) { moveSnake(e); }
var interval = window.setInterval(function () {
    moveSnake(previousKeyDown);
}, 100);

document.onkeypress = function (e) {
    if (e.key == 'space') {
        // window.clearInterval(interval);
        alert();
        // do some other thing, other thing
    }
};


document.onreadystatechange = () => {
    if (document.readyState == 'complete') {
        $('.snake').css('left', random(100) + '%');
        $('.snake').css('top', random(100, 2) + '%');
        $('.food').css('left', random(100) + '%');
        $('.food').css('top', random(100, 23) + '%');
    }
};