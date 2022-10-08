

        var date = new Date();          //güncel  tarihi atatık 
 
        var saat, dakika, saniye;           //değişken tanımlıyorum

        saat = date.getHours();             //güncel saat getirdik
        dakika = date.getMinutes();             //güncel dakika getirdik
        saniye = date.getSeconds();             //güncel saniye getirdik

        setInterval(function () {   //sürekli çalışssın istediğim için(1000  saniyede dönsün)

            document.getElementById("saat").innerHTML = saat;   //saate id mi getir güncel saate eşitle o yazsın
            document.getElementById("dakika").innerHTML = dakika;       //dakika id mi getir güncel dakika eşitle o yazsın
            document.getElementById("saniye").innerHTML = saniye++;     //saniye id mi getir güncel saniye eşitle o yazsın saniyemi arttır

            

            //saniyem 59 dan sonra 0 olmuyor ve dk artmıor düzeltiyoruzzz


            if (Number(document.getElementById("saniye").innerText) == 59) {

                dakika++;               //eğer saniyenin değeri 59 eşit ise  dk+1 yap saniyeyi 0 yap
                saniye = 0;

               

            }
            if (Number(document.getElementById("dakika").innerText) > 59) {

                saat++;                      //eğer dakikamın değeri 59 dan büyük ise geçerse saat+1 yap dakikayı 0 yap
                dakika = 0;

            }
            if (Number(document.getElementById("saat").innerText) > 23) {

                saat = 0;           //saat 23 den büyük olunca saat = 0 olsun dakika da0 dan başlasın
                dakika = 0;

            }
            

        },1000);


        


