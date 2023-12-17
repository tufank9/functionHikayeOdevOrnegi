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