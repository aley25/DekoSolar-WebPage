document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('btn-service-1').addEventListener('click', function (event) {
        var button = document.getElementById('btn-service-1');
        var content = document.getElementById('service-1');
        if(content.computedStyleMap().get('display') == 'none'){
            content.style.display = 'flex';
            button.classList.add('number-active');

            //remove other objects classes
            document.getElementById('service-2').style.display='none';
            document.getElementById('service-3').style.display='none';
            document.getElementById('service-4').style.display='none';

            // remove button classes
            document.getElementById('btn-service-2').classList.remove('number-active');
            document.getElementById('btn-service-3').classList.remove('number-active');
            document.getElementById('btn-service-4').classList.remove('number-active');
        }
    });

    document.getElementById('btn-service-2').addEventListener('click', function (event) {
        var button = document.getElementById('btn-service-2');
        var content = document.getElementById('service-2');
        if(content.computedStyleMap().get('display') == 'none'){
            content.style.display = 'flex';
            button.classList.add('number-active');

            //remove other objects classes
            document.getElementById('service-1').style.display='none';
            document.getElementById('service-3').style.display='none';
            document.getElementById('service-4').style.display='none';

            // remove button classes
            document.getElementById('btn-service-1').classList.remove('number-active');
            document.getElementById('btn-service-3').classList.remove('number-active');
            document.getElementById('btn-service-4').classList.remove('number-active');
        }
    });

    document.getElementById('btn-service-3').addEventListener('click', function (event) {
        var button = document.getElementById('btn-service-3');
        var content = document.getElementById('service-3');
        if(content.computedStyleMap().get('display') == 'none'){
            content.style.display = 'flex';
            button.classList.add('number-active');

            //remove other objects classes
            document.getElementById('service-1').style.display='none';
            document.getElementById('service-2').style.display='none';
            document.getElementById('service-4').style.display='none';

            // remove button classes
            document.getElementById('btn-service-1').classList.remove('number-active');
            document.getElementById('btn-service-2').classList.remove('number-active');
            document.getElementById('btn-service-4').classList.remove('number-active');
        }
    });

    document.getElementById('btn-service-4').addEventListener('click', function (event) {
        var button = document.getElementById('btn-service-4');
        var content = document.getElementById('service-4');
        if(content.computedStyleMap().get('display') == 'none'){
            content.style.display = 'flex';
            button.classList.add('number-active');

            //remove other objects classes
            document.getElementById('service-1').style.display='none';
            document.getElementById('service-2').style.display='none';
            document.getElementById('service-3').style.display  ='none';

            // remove button classes
            document.getElementById('btn-service-1').classList.remove('number-active');
            document.getElementById('btn-service-2').classList.remove('number-active');
            document.getElementById('btn-service-3').classList.remove('number-active');
        }
    });
});
