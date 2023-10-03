

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

    try{
        var circles = document.getElementsByClassName('number-black-box');
        console.log("dww");
        var box = document.getElementById('section-2-d-content');

        for (var element in circles) {
            var element2 = circles[element]
            let rect = box.getBoundingClientRect();
            console.log(rect.top);
            element2.style.top = (rect.top+ window.scrollY - 20).toString() + 'px';
        }
    }catch (error) {
        console.log(error);
    }


    document.getElementById('question-button-1').addEventListener('click', function (event) {
        var content = document.getElementById('question-content-1');
        if(content.computedStyleMap().get('display') == 'none'){
            content.style.display = 'block';
        }else if (content.computedStyleMap().get('display') == 'block'){
            content.style.display = 'none';
        }
    });

    document.getElementById('question-button-2').addEventListener('click', function (event) {
        var content = document.getElementById('question-content-2');
        if(content.computedStyleMap().get('display') == 'none'){
            content.style.display = 'block';
        }else if (content.computedStyleMap().get('display') == 'block'){
            content.style.display = 'none';
        }
    });

    document.getElementById('question-button-3').addEventListener('click', function (event) {
        var content = document.getElementById('question-content-3');
        if(content.computedStyleMap().get('display') == 'none'){
            content.style.display = 'block';
        }else if (content.computedStyleMap().get('display') == 'block'){
            content.style.display = 'none';
        }
    });

    document.getElementById('question-button-4').addEventListener('click', function (event) {
        var content = document.getElementById('question-content-4');
        if(content.computedStyleMap().get('display') == 'none'){
            content.style.display = 'block';
        }else if (content.computedStyleMap().get('display') == 'block'){
            content.style.display = 'none';
        }
    });

    document.getElementById('question-button-5').addEventListener('click', function (event) {
        var content = document.getElementById('question-content-5');
        if(content.computedStyleMap().get('display') == 'none'){
            content.style.display = 'block';
        }else if (content.computedStyleMap().get('display') == 'block'){
            content.style.display = 'none';
        }
    });

    document.getElementById('question-button-6').addEventListener('click', function (event) {
        var content = document.getElementById('question-content-6');
        if(content.computedStyleMap().get('display') == 'none'){
            content.style.display = 'block';
        }else if (content.computedStyleMap().get('display') == 'block'){
            content.style.display = 'none';
        }
    });

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
