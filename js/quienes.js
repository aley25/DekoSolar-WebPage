

document.addEventListener("DOMContentLoaded", () => {

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

    if (window.screen.width > 650) {
        const mision = document.getElementById('mision');
        const vision = document.getElementById('vision');
        const ob1 = document.getElementById('obj-1');

        setInterval(() => {
            if (mision.style.display == 'flex') {
                mision.style.display = 'none';
                vision.style.display = 'flex';
            } else {
                mision.style.display = 'flex';
                vision.style.display = 'none';
            }
        }, 10000); // 👈️ time in milliseconds
    }





    setInterval(() => {
        if (document.getElementById('number1').classList.contains('big-number-selected')) {

            document.getElementById('number1').classList.add('big-number');
            document.getElementById('number1').classList.remove('big-number-selected');


            document.getElementById('number2').classList.add('big-number-selected');
            document.getElementById('number2').classList.remove('big-number');
            // change of text
            document.getElementById('obj-1').style.display = 'none';
            document.getElementById('obj-2').style.display = 'block';

            // change of img
            document.getElementById('img-1').style.display = 'none';
            document.getElementById('img-2').style.display = 'block';

        } else if (document.getElementById('number2').classList.contains('big-number-selected')) {

            document.getElementById('number2').classList.add('big-number');
            document.getElementById('number2').classList.remove('big-number-selected');


            document.getElementById('number3').classList.add('big-number-selected');
            document.getElementById('number3').classList.remove('big-number');
            // change of text
            document.getElementById('obj-2').style.display = 'none';
            document.getElementById('obj-3').style.display = 'block';

            // change of img
            document.getElementById('img-2').style.display = 'none';
            document.getElementById('img-3').style.display = 'block';

        } else if (document.getElementById('number3').classList.contains('big-number-selected')) {

            document.getElementById('number3').classList.add('big-number');
            document.getElementById('number3').classList.remove('big-number-selected');


            document.getElementById('number1').classList.add('big-number-selected');
            document.getElementById('number1').classList.remove('big-number');
            // change of text
            document.getElementById('obj-3').style.display = 'none';
            document.getElementById('obj-1').style.display = 'block';

            // change of img
            document.getElementById('img-3').style.display = 'none';
            document.getElementById('img-1').style.display = 'block';

        }

    }, 30000); // 👈️ time in milliseconds
});
