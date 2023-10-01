

window.onload = function () {
    document.getElementById('menu-button').addEventListener('click', function (event) {
        document.getElementById('menu-options').style.display = 'block';
        document.getElementById('menu-button-close').style.display = 'block';
        document.getElementById('menu-button').style.display = 'none';
    });

    document.getElementById('menu-button-close').addEventListener('click', function (event) {
        document.getElementById('menu-options').style.display = 'none';
        document.getElementById('menu-button-close').style.display = 'none';
        document.getElementById('menu-button').style.display = 'block';
    });

    document.getElementById('number1').addEventListener('click', function (event) {
        document.getElementById('number1').classList.remove('big-number');
        document.getElementById('number1').classList.add('big-number-selected');
        document.getElementById('number2').classList.add('big-number');
        document.getElementById('number2').classList.remove('big-number-selected');
        document.getElementById('number3').classList.add('big-number');
        document.getElementById('number3').classList.remove('big-number-selected');
        // change of text
        document.getElementById('obj-1').style.display = 'block';
        document.getElementById('obj-2').style.display = 'none';
        document.getElementById('obj-3').style.display = 'none';
        // change of img
        document.getElementById('img-1').style.display = 'block';
        document.getElementById('img-2').style.display = 'none';
        document.getElementById('img-3').style.display = 'none';
    });

    document.getElementById('number2').addEventListener('click', function (event) {
        document.getElementById('number2').classList.remove('big-number');
        document.getElementById('number2').classList.add('big-number-selected');
        document.getElementById('number1').classList.add('big-number');
        document.getElementById('number1').classList.remove('big-number-selected');
        document.getElementById('number3').classList.add('big-number');
        document.getElementById('number3').classList.remove('big-number-selected');
        // change of text
        document.getElementById('obj-2').style.display = 'block';
        document.getElementById('obj-1').style.display = 'none';
        document.getElementById('obj-3').style.display = 'none';
        // change of img
        document.getElementById('img-2').style.display = 'block';
        document.getElementById('img-1').style.display = 'none';
        document.getElementById('img-3').style.display = 'none';
    });

    document.getElementById('number3').addEventListener('click', function (event) {
        document.getElementById('number3').classList.remove('big-number');
        document.getElementById('number3').classList.add('big-number-selected');
        document.getElementById('number1').classList.add('big-number');
        document.getElementById('number1').classList.remove('big-number-selected');
        document.getElementById('number2').classList.add('big-number');
        document.getElementById('number2').classList.remove('big-number-selected');
        // change of text
        document.getElementById('obj-3').style.display = 'block';
        document.getElementById('obj-1').style.display = 'none';
        document.getElementById('obj-2').style.display = 'none';
        // change of img
        document.getElementById('img-3').style.display = 'block';
        document.getElementById('img-1').style.display = 'none';
        document.getElementById('img-2').style.display = 'none';
    });
    
}



document.addEventListener("DOMContentLoaded", () => {

    try {
        var circles = document.getElementsByClassName('number-black');
        var text = document.getElementById('text-base');

        for (var element in circles) {
            var element2 = circles[element]
            let rect = text.getBoundingClientRect();
            element2.style.left = (rect.left - 55 - 17.815).toString() + 'px';
        }

        // document.getElementById('request_call').addEventListener('submit', (name,) => {

        // });
    } catch (error) {
        console.log(error);
    }

});

window.visualViewport.addEventListener("resize", viewportHandler);
function viewportHandler(event) {
    try {
        var circles = document.getElementsByClassName('number-black');
        var text = document.getElementById('text-base');


        for (var element in circles) {
            var element2 = circles[element]
            let rect = text.getBoundingClientRect();
            element2.style.left = (rect.left - 55 - 17.815).toString() + 'px';
        }
    } catch (error) {
    }
}

function clickAccordion(element) {
    var nextElement = element.nextElementSibling;
    if (element.classList.contains('active')) {
        element.classList.remove('active');
        nextElement.style.display = 'none';
    } else {
        element.classList.add('active');
        nextElement.style.display = 'block';
    }
}
