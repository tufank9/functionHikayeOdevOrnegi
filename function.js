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
 }
 function son(){
    alert("hikayenin ilk sonu")
    return alternatifSon1()
 }
 