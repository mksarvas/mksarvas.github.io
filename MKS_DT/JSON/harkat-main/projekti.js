function miinusLasku(){
    let laskut = "";
    for (let i = 0; i < 10; i++) {
        let x = Math.floor(Math.random() * 100) + 1;
        let y = Math.floor(Math.random() * 100) + 1;
        let va = "";

        if (x > y) {
            va = "Mikä on laskun " + x + "-" + y + " tulos?";
        } else {
            va = "Mikä on laskun " + y + "-" + x + " tulos?";
        }
        laskut += va + "<br>";
    }

    document.getElementById("answer").innerHTML = laskut;
}
miinusLasku();

    
    
   
    