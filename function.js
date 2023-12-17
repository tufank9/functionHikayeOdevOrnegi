 function main(){
    alert("Selam burası çıkılması zor olan bir evren.\nKeşif başlasın.")
 }

 main()

 function sorgu(){
    let cevap=prompt("Sona mı gitmek istersin yoksa devam mı etmek istersin? (son/devam)")
    if (kelime(cevap)=="son") {
        return son()
    }
    else if(kelime(cevap)=="devam"){
        return devam() 
    }
    else{
        return sorgu()
    }
 }
 function son(){
    alert("hikayenin ilk sonu")
    return alternatifSon1()
 }
 
 function kelime(duzelt) {
    return duzelt.toLocaleLowerCase("tr").split(" ").join("");
    //kelime de hatalı girişi önleyen kod...
}

function kayboldun(){
    alert("KAYBOLDUN SONSUZLUKLARDA\n başa dönüyorsun")
    return main()
    //evrende kaybolmasından ötürü 2.son
}

function evrenGezisi(){
    alert("SONSUZLUK DÖNGÜSÜ KIRILMADI")
    return kayboldun()
    //sonsuzluktan ötürü 3.son
}

function basaDon(){
    //alternatif son da bir dönüş fonksiyonu.
    let cevap=prompt("kaybolmadan başa dönmek ister misin? evet/hayır")
            if(kelime(cevap)=="evet"){
                return main()
            }
            else if(kelime(cevap)=="hayır"){
                return kayboldun()
            }
            else{
                return basaDon()
            }
}

function alternatifSon1(){
    /*
    tamamen bir alternatif son oluşturuldu. sadece ilki :D
    hikayeye devam edersem eğer yenisi oluşur.
    btw bu da bir son
    */

    alert("gerçekten hikayenin ilk sonuna mı gittin\nyoksa şuan hikayenin sonunda mısın")
    alert("hiçbir son asla gerçek son değildir.\nher gittiğin son yeni alternatiflik oluşturur.")
    let cevap=prompt("nereye gitmek istersin (son/başa)")
    if(kelime(cevap)=="son"){
        alert("alternatif sonluklarda kaybolmayı göze alıyorsun.\nyerinde kalmak en iyisi")
        return basaDon()
    }
        else if(kelime(cevap)=="başa"){
            return main()
    }
    else{
        return alternatifSon1()
    }
}