$(document).ready(function () {
    $("#slider").slider({
        animate: true,
        value: 20,
        min: 0,
        max: 50,
        step: 1,
        slide: function (event, ui) {
            update(1, ui.value); //changed
        }
    });

    $("#slider2").slider({
        animate: true,
        value: 10,
        min: 1,
        max: 20,
        step: 1,
        slide: function (event, ui) {
            update(2, ui.value); //changed
        }
    });

    $("#slider3").slider({
        animate: true,
        value: 10,
        min: 1,
        max: 30,
        step: 0.1,
        slide: function (event, ui) {
            update(3, ui.value); //changed
        }
    });

    //Added, set initial value.
    var $placeholder = "Rp 100.000.000"

    $("#harga_rumah").val();
    $("#uang_muka").val(20);
    $("#jangka_waktu").val(10);
    $("#bunga").val(10);
    $("#uang_muka-label").text(0);
    $("#jangka_waktu-label").text(0);
    $("#bunga-label").text(0);

    var $harga_rumah = document.getElementById('harga_rumah');
    $harga_rumah.onkeyup = function () {
        update();
        $("#harga_rumah-label").text($("#harga_rumah").val());
    }


});

//changed. now with parameter
function update(slider, val) {
    //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
    // var $uang_muka = slider == 1 ? val : $("#uang_muka").val();


    var $fharga_rumah = $("#harga_rumah").val().replace(/[^0-9]/g, "");


    var $uang_muka = slider == 1 ? val : $("#uang_muka").val();
    var $jangka_waktu = slider == 2 ? val : $("#jangka_waktu").val();
    var $bunga = slider == 3 ? val : $("#bunga").val();

    /* commented
    $uang_muka = $( "#slider" ).slider( "value" );
    $jangka_waktu = $( "#slider2" ).slider( "value" );
     */


    var $fharga_dp = $fharga_rumah * $uang_muka / 100;
    var $fplafon = $fharga_rumah - $fharga_dp;
    var $fwaktu = $jangka_waktu * 12;
    var $fbunga = $bunga / 100;
    var $fhitung_angsuran = ($fplafon * $fbunga / 12) / (1 - (Math.pow((1 + ($fbunga / 12)), -$fwaktu)));
    var $fangsuran = Math.round($fhitung_angsuran).toLocaleString('En-Us');

    $total = "$" + ($uang_muka * $jangka_waktu);



    $("#uang_muka").val($uang_muka);
    $("#uang_muka-label").text($uang_muka);
    $("#jangka_waktu").val($jangka_waktu);
    $("#jangka_waktu-label").text($jangka_waktu);
    $("#bunga").val($bunga);
    $("#bunga-label").text($bunga);
    $("#total").val($total);
    // $("#total-label").text($total);
    // $("#total-label").text($fharga_dp);
    // $("#total-label2").text($fplafon);
    // $("#total-label3").text($fwaktu);
    // $("#total-label4").text($fhitung_angsuran);
    $("#total-label").text('Rp ' + $fangsuran.replace(/\,/g, '.') + ' /bulan');

    $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> ' + $uang_muka + ' <span class="glyphicon glyphicon-chevron-right"></span></label>');
    $('#slider2 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> ' + $jangka_waktu + ' <span class="glyphicon glyphicon-chevron-right"></span></label>');
    $('#slider3 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> ' + $bunga + ' <span class="glyphicon glyphicon-chevron-right"></span></label>');
    
  
}

