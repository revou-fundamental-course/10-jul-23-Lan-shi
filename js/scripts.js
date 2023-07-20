//function reset untuk tombol reset
function reset() {
    document.getElementById("form").reset();
    document.getElementById('HASIL').style.color = "black";
    document.querySelector('#DESC').textContent = " ";
    document.querySelector('#HASIL').textContent = "-";
    document.querySelector('#COMMENT').textContent = " ";
}
//function validasi input form
function formValidation(JenisKelamin, bb, usia, tb) {
    var isTrue = true;
    if(JenisKelamin==""|| usia==""||usia==0||isNaN(usia)) {
        alert("Usia dan jenis kelamin wajib diisi dengan benar");
        isTrue = false;
    }else if(bb==""||bb==0||isNaN(bb)){
        alert("Berat badan wajib diisi dengan benar");
        isTrue = false;
    }else if(tb==""||tb==0||isNaN(tb)){
        alert("Tinggi badan wajib diisi dengan benar");
        isTrue = false;
    }
    return isTrue;
}
// function interpretasi dari hasil BMI
function BMIinterpretation(hasilBMI) {
    var descBMI;
    if (hasilBMI < 18.5) {
        descBMI = "Berat Badan Kurang (Underweight)";
    } else if (hasilBMI >= 18.5 && hasilBMI < 24.9) {
        descBMI = "Berat Badan Normal";
    } else if (hasilBMI >= 25 && hasilBMI < 29.9) {
        descBMI = "Berat Badan Berlebih (Overweight)";
    } else {
        descBMI = "Kegemukan (Obesitas)";
    }
    return descBMI;
}
// function mengubah warna berdasarkan hasil BMI 
function colorMatch (hasilBMI) {
    if (hasilBMI < 18.5) {
        document.getElementById('HASIL').style.color = "#FFD166";
    } else if (hasilBMI >= 18.5 && hasilBMI < 24.9) {
        document.getElementById('HASIL').style.color = "#06D6A0";
    } else if (hasilBMI >= 25 && hasilBMI < 29.9) {
        document.getElementById('HASIL').style.color = "#FFD166";
    } else {
        document.getElementById('HASIL').style.color = "#EF476F";
    }
    return;
} 
// function memberikan comment dari hasil BMI
function BMIcomment(hasilBMI) {
    var comBMI;
    if (hasilBMI < 18.5) {
        comBMI = "Berat badan anda berada pada kategori underweight. Perhatikan asupan makanan dan olahraga anda agar dapat mencapai kisaran berat badan yang sehat.";
    } else if (hasilBMI >= 18.5 && hasilBMI < 24.9) {
        comBMI = "Berat badan anda berada dalam kategori ideal. Perhatikan pola hidup sehat dengan asupan makanan yang sehat dan olahraga rutin untuk mempertahankan kisaran berat badan yang sehat.";
    } else if (hasilBMI >= 25 && hasilBMI < 29.9) {
        comBMI = "Berat badan anda berada dalam kategori overweight. Perhatikan pola makan anda dan juga rutin berolahraga untuk mencapai kisaran berat badan yang sehat.";
    } else {
        comBMI = "Berat badan anda berada dalam kategori obesitas. Konsultasikan dengan ahli gizi ataupun dokter umum anda agar dapat mencapai kisaran berat badan yang sehat.";
    }
    return comBMI;
}


// function menghitung BMI
function BMIcalculations() {
    event.preventDefault();
    //mengambil value dari input yang di isi user
    const jenisKelamin = document.querySelector('input[name="Jenis-Kelamin"]:checked').value;
    const usia = document.getElementById('usia').value;
    const tb = document.getElementById('tb').value;
    const bb = document.getElementById('bb').value;
    //memvalidasi apakah inputan yang diberikan sudah benar apa belum
    var isTrue = formValidation(jenisKelamin, bb, usia, tb);
    //console.log(jenisKelamin, bb, usia, tb);

    //hitung BMI
    var BMI = bb / ((tb / 100) ** 2);
    BMI = BMI.toFixed(2);
    console.log(BMI);

    //interpret BMI
    var descBMI = BMIinterpretation(BMI);
    //comment BMI
    var comBMI = BMIcomment(BMI);
    
    //hasil
    if (isTrue == true) {
        //color match hasil BMI
        colorMatch(BMI);
        //mereturn hasil BMI
        document.querySelector('#DESC').textContent = descBMI;
        document.querySelector('#HASIL').textContent = BMI;
        document.querySelector('#COMMENT').textContent = comBMI;
        //alert("sukses");
    }
}

//Event listener tombol
document.getElementById("submitBtn").addEventListener("click", BMIcalculations);
document.getElementById("resetBtn").addEventListener("click", reset);
