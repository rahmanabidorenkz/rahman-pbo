function hasil() {
    var harga=parseInt(document.getElementById('harga').value);
    var jumlah=parseInt(document.getElementById("jumlah").value);
    var total=harga*jumlah;
    document.getElementById("total").innerHTML=total;
    var dis=10;
    var bayar;
    if(total>800000){
        bayar=total-(total=dis);
        document.getElementById("bayar").innerHTML=bayar;
        document.getElementById("dis").innerHTML="10%";
    }else{
        document.getElementById("bayar").innerHTML=total;
        document.getElementById("dis").innerHTML="0%";
    }
    Question.prototype.isCorrectAnswer = function(choice) {
        return this.answer === choice;
    }







