
const inputDigitato = document.getElementById("input");

var inputs = document.querySelectorAll('input');
// Insieme a "inputs.forEach(input => input.value = '');" serve a ripulire la casella di input dopo aver premuto enter.

var cambioSwitch = true;

const testoDopoEnter = e => {
    if (e.code === "Enter") {
        clearBox();
        // Pulisce il campo di testo dove appaiono le risposte generate.

        verificatore();

        // inputs.forEach(input => input.value = '');
        // Permette di pulire la casella di input dopo l'immissione.

    }
}

function buttonR() {
    clearBox();
    verificatore();
}

function verificatore() {

    switch (cambioSwitch) {

        case true:
            datiInput(film);
            break;

        case false:
            datiInput(attori);
            break;

        default:
            console.log("Default");
            datiInput(film);
    }
}

function clearBox() {
    document.getElementById('target_div').innerHTML = "";
}

function datiInput(callback) {
    const inputF = inputDigitato.value;
    return callback(inputF.toUpperCase());
}

function film(dati) {
    switch (true) {

        case /ATTORI/.test(dati):
            var msg = new SpeechSynthesisUtterance();
            msg.rate = 1;
            msg.text = 'Ricerca per nome attore on, ricerca per nome di film off. Per tornare alla ricerca film digitare "Film".';
            speechSynthesis.speak(msg);
            var div = document.getElementById('target_div');
            div.innerHTML += 'Ricerca per nome attore on, ricerca per nome di film off. <br> Per tornare alla ricerca film digitare "Film".';
            cambioSwitch = false;
            break;


        case /IL CURIOSO CASO DI BENJAMIN BUTTON/.test(dati):
        case /BENJAMIN BUTTON/.test(dati):
            var quote = [
                "La nostra vita √® determinata dalle opportunit√†, perfino da quelle che non cogliamo. - Benjamin Button",
                "Il colibr√¨ non √® un uccello come tutti gli altri: ha un ritmo cardiaco di 1200 battiti al minuto, le sue ali sbattono ottanta volte al secondo. <br> Se gli impedisci di sbattere le ali, lui muore in meno di dieci secondi. Questo non √® un uccello qualunque, questo √® una specie di miracolo. Hanno rallentato le sue ali col cinematografo e sapete cosa hanno visto? Che le punte delle ali fanno cos√¨, eh? [mimando il gesto con le mani] E che cosa rappresenta il numero otto come simbolo matematico? L'infinito! - Capitano Mike Clark",
                "Uno si pu√≤ anche incazzare quando le cose vanno cos√¨. Uno pu√≤ bestemmiare, maledire il destino, ma quando arrivi alla fine non resta che mollare. - Benjamin Button",
                "Per quello che vale, non √® mai troppo tardi, o nel mio caso troppo presto, per essere quello che vuoi essere. <br> Non c'√® limite di tempo, comincia quando vuoi, puoi cambiare o rimanere come sei, non esiste una regola in questo. <br> Possiamo vivere ogni cosa al meglio o al peggio, spero che tu viva tutto al meglio, spero che tu possa vedere cose sorprendenti, spero che tu possa avere emozioni sempre nuove, spero che tu possa incontrare gente con punti di vista diversi, spero che tu possa essere orgogliosa della tua vita e se ti accorgi di non esserlo, spero che tu trovi la forza di ricominciare da zero. - Benjamin Button",
                "A volte a nostra insaputa ci troviamo diretti verso un precipizio... Sia che ci√≤ avvenga per caso, o intenzionalmente, non possiamo fare niente per evitarlo. <br> Una donna, a Parigi, stava uscendo a fare compere. <br> Ma aveva dimenticato il soprabito, e torn√≤ indietro a prenderlo. Mentre era l√¨, squill√≤ il telefono, e lei rispose e parl√≤ per un paio di minuti. <br> Mentre la donna era al telefono, Daisy stava provando uno spettacolo all' Op√®ra de Paris, e mentre lei provava, la donna, finito di parlare al telefono, era uscita per prendere un taxi. Un tassista, poco prima, aveva scaricato un cliente e si era fermato a prendere un caff√®. <br> E intanto Daisy continuava a provare. E questo tassista, che si era fermato per un caff√®, prese a bordo la donna che andava a fare compere e che aveva perso l'altro taxi. <br> Il taxi dovette fermarsi per un uomo che stava andando al lavoro in ritardo di cinque minuti, perch√© si era dimenticato di mettere la sveglia. Mentre quell'uomo in ritardo attraversava la strada, Daisy aveva finito le prove, e si stava facendo la doccia. <br> E mentre Daisy si faceva la doccia, il taxi aspettava la donna che era entrata in una pasticceria a ritirare un pacchetto che, per√≤, non era pronto, perch√© la commessa si era lasciata col fidanzato la sera prima e se n'era dimenticata. Ritirato il pacchetto, la donna era rientrata nel taxi, che rimase bloccato da un furgone, e intanto Daisy si stava vestendo. Il furgone si spost√≤, e il taxi pot√© ripartire, mentre Daisy, ultima a vestirsi, si ferm√≤ ad aspettare un'amica alla quale si era rotto un laccio. Mentre il taxi era fermo a un semaforo, Daisy e la sua amica uscirono dal retro del teatro. <br> Se solo una cosa fosse andata diversamente, se quel laccio non si fosse rotto, o se quel furgone si fosse spostato un momento prima, <br> o se quel pacchetto fosse stato pronto perch√© la commessa non si era lasciata col fidanzato, o quell'uomo avesse messo la sveglia e si fosse alzato cinque minuti prima, o se quel tassista non si fosse fermato a prendere il caff√®, o se quella donna si fosse ricordata del soprabito e avesse preso il taxi prima, Daisy e la sua amica avrebbero attraversato la strada, il taxi sarebbe sfilato via. <br> [‚Ä¶] Ma la vita, essendo quella che √®, aveva creato una serie di circostanze incrociate e incontrollabili. Per cui quel taxi non sfil√≤ via, e quel tassista si distrasse un momento. <br> E cos√¨, quel taxi invest√¨ Daisy, e la sua gamba fu spezzata. - Benjamin Button",
            ];

            var random = Math.floor(Math.random() * quote.length);
            var div = document.getElementById('target_div');
            div.innerHTML += (random, quote[random]);
            break;

        case /IL POSTINO/.test(dati):
            var quote = [
                "La poesia non √® di chi la scrive, √® di chi gli serve. - Mario",
                "Io non so dire quello che hai letto con parole diverse da quelle che ho usato. Quando la spieghi, la poesia diventa banale. Meglio delle spiegazioni, √® l'esperienza diretta delle emozioni che pu√≤ spiegare la poesia ad un animo disposto a comprenderla. - Pablo Neruda",
                'Postino: "Cio√® voi che volete dire allora, che il mondo intero no? il mondo intero proprio...dico col mare, col cielo, con la pioggia, le nuvole... <br> "Neruda: "Ora tu puoi gi√† dire eccetera eccetera..." <br> Postino: "Eh, eccetera eccetera...cio√® il mondo intero allora √® la metafora di qualcosa?" <br> Postino: "Ho detto una stronzata..." <br> Neruda: "No, per niente..."',
                "Molto meglio dire male qualcosa di cui si √® convinti, che dire bene quello che vogliono farci dire gli altri! - Pablo Neruda",
            ];

            var random = Math.floor(Math.random() * quote.length);
            var div = document.getElementById('target_div');
            div.innerHTML += (random, quote[random]);
            break;

        default:
            var div = document.getElementById('target_div');
            div.innerHTML += 'Film non in archivio';

    }
}

function attori(dati) {

    switch (true) {

        case /FILM/.test(dati):
            var msg = new SpeechSynthesisUtterance();
            msg.rate = 1;
            msg.text = 'Ricerca per nomi film on, ricerca per nome di attore off. Per tornare alla ricerca attori digitare "Attori".';
            speechSynthesis.speak(msg);
            var div = document.getElementById('target_div');
            div.innerHTML += 'Ricerca per nomi film on, ricerca per nome di attore off. <br> Per tornare alla ricerca attori digitare "Attori".';
            cambioSwitch = true;
            break;

        case /BRAD PITT/.test(dati):
            var quote = [
                "FILM - IL CURIOSO CASO DI BENJAMIN BUTTON <br> La nostra vita √® determinata dalle opportunit√†, perfino da quelle che non cogliamo. - Benjamin Button", ,
                "FILM - IL CURIOSO CASO DI BENJAMIN BUTTON <br> Uno si pu√≤ anche incazzare quando le cose vanno cos√¨. Uno pu√≤ bestemmiare, maledire il destino, ma quando arrivi alla fine non resta che mollare. - Benjamin Button",
                "FILM - IL CURIOSO CASO DI BENJAMIN BUTTON <br> Per quello che vale, non √® mai troppo tardi, o nel mio caso troppo presto, per essere quello che vuoi essere. <br> Non c'√® limite di tempo, comincia quando vuoi, puoi cambiare o rimanere come sei, non esiste una regola in questo. <br> Possiamo vivere ogni cosa al meglio o al peggio, spero che tu viva tutto al meglio, spero che tu possa vedere cose sorprendenti, spero che tu possa avere emozioni sempre nuove, spero che tu possa incontrare gente con punti di vista diversi, spero che tu possa essere orgogliosa della tua vita e se ti accorgi di non esserlo, spero che tu trovi la forza di ricominciare da zero. - Benjamin Button",
                "FILM - IL CURIOSO CASO DI BENJAMIN BUTTON <br> A volte a nostra insaputa ci troviamo diretti verso un precipizio... Sia che ci√≤ avvenga per caso, o intenzionalmente, non possiamo fare niente per evitarlo. <br> Una donna, a Parigi, stava uscendo a fare compere. <br> Ma aveva dimenticato il soprabito, e torn√≤ indietro a prenderlo. Mentre era l√¨, squill√≤ il telefono, e lei rispose e parl√≤ per un paio di minuti. <br> Mentre la donna era al telefono, Daisy stava provando uno spettacolo all' Op√®ra de Paris, e mentre lei provava, la donna, finito di parlare al telefono, era uscita per prendere un taxi. Un tassista, poco prima, aveva scaricato un cliente e si era fermato a prendere un caff√®. <br> E intanto Daisy continuava a provare. E questo tassista, che si era fermato per un caff√®, prese a bordo la donna che andava a fare compere e che aveva perso l'altro taxi. <br> Il taxi dovette fermarsi per un uomo che stava andando al lavoro in ritardo di cinque minuti, perch√© si era dimenticato di mettere la sveglia. Mentre quell'uomo in ritardo attraversava la strada, Daisy aveva finito le prove, e si stava facendo la doccia. <br> E mentre Daisy si faceva la doccia, il taxi aspettava la donna che era entrata in una pasticceria a ritirare un pacchetto che, per√≤, non era pronto, perch√© la commessa si era lasciata col fidanzato la sera prima e se n'era dimenticata. Ritirato il pacchetto, la donna era rientrata nel taxi, che rimase bloccato da un furgone, e intanto Daisy si stava vestendo. Il furgone si spost√≤, e il taxi pot√© ripartire, mentre Daisy, ultima a vestirsi, si ferm√≤ ad aspettare un'amica alla quale si era rotto un laccio. Mentre il taxi era fermo a un semaforo, Daisy e la sua amica uscirono dal retro del teatro. <br> Se solo una cosa fosse andata diversamente, se quel laccio non si fosse rotto, o se quel furgone si fosse spostato un momento prima, <br> o se quel pacchetto fosse stato pronto perch√© la commessa non si era lasciata col fidanzato, o quell'uomo avesse messo la sveglia e si fosse alzato cinque minuti prima, o se quel tassista non si fosse fermato a prendere il caff√®, o se quella donna si fosse ricordata del soprabito e avesse preso il taxi prima, Daisy e la sua amica avrebbero attraversato la strada, il taxi sarebbe sfilato via. <br> [‚Ä¶] Ma la vita, essendo quella che √®, aveva creato una serie di circostanze incrociate e incontrollabili. Per cui quel taxi non sfil√≤ via, e quel tassista si distrasse un momento. <br> E cos√¨, quel taxi invest√¨ Daisy, e la sua gamba fu spezzata. - Benjamin Button",
                "FILM - FIGHT CLUB <br> Vedo nel Fight Club gli uomini pi√Ļ forti e intelligenti mai esistiti. Vedo tutto questo potenziale. E lo vedo sprecato. <br> Porca puttana, un'intera generazione che pompa benzina, serve ai tavoli, o schiavi coi colletti bianchi. La pubblicit√† ci fa inseguire le macchine e i vestiti, fare lavori che odiamo per comprare cazzate che non ci servono. <br> Siamo i figli di mezzo della storia, non abbiamo n√© uno scopo n√© un posto. Non abbiamo la grande guerra n√© la grande depressione. La nostra grande guerra √® quella spirituale, la nostra grande depressione √® la nostra vita. Siamo cresciuti con la televisione che ci ha convinti che un giorno saremmo diventati miliardari, miti del cinema, rock star. Ma non √® cos√¨. E lentamente lo stiamo imparando. <br> E ne abbiamo veramente le palle piene! (Tyler)",
                "FILM - FIGHT CLUB <br> Come tanti altri anch'io ero diventato schiavo della tendenza al nido IKEA. [...] Se vedevo qualcosa di ingegnoso come un tavolinetto a forma di yin yang dovevo averlo. Il componibile personale per ufficio della Klipsk, la cyclette della Hovetrekke, il divano Ohamshab a strisce verdi della Strinne, perfino le lampade Ryslampa fatte di carta non candeggiata per un ambiente rilassante. Sfogliavo quei cataloghi e mi domandavo 'quale tipo di salotto mi caratterizza come persona?'. Avevo tutto. Anche i piatti di vetro con piccole bolle e imperfezioni, prova che erano stati realizzati da onesti semplici operosi indigeni artigiani di... Dunque... <br> Una volta leggevamo pornografia, ora siamo passati ad arredomania.",
                "FILM - FIGHT CLUB <br> Le cose che possiedi alla fine ti possiedono.",
                "FILM - FIGHT CLUB <br> Tu non sei il tuo lavoro, non sei la quantit√† di soldi che hai in banca, non sei la macchina che guidi, n√© il contenuto del tuo portafogli, non sei i tuoi vestiti di marca, sei la canticchiante e danzante merda del mondo!"
            ];

            var random = Math.floor(Math.random() * quote.length);
            var div = document.getElementById('target_div');
            div.innerHTML += (random, quote[random]);
            break;

        case /MASSIMO TROISI/.test(dati):
            var quote = [
                "FILM - IL POSTINO <br> La poesia non √® di chi la scrive, √® di chi gli serve. - Mario",
                'FILM - IL POSTINO <br> Postino: "Cio√® voi che volete dire allora, che il mondo intero no? il mondo intero proprio...dico col mare, col cielo, con la pioggia, le nuvole... <br> "Neruda: "Ora tu puoi gi√† dire eccetera eccetera..." <br> Postino: "Eh, eccetera eccetera...cio√® il mondo intero allora √® la metafora di qualcosa?" <br> Postino: "Ho detto una stronzata..." <br> Neruda: "No, per niente..."',
                "FILM - PENSAVO FOSSE AMORE INVECE ERA UN CALESSE <br> Ma perch√© siete tutti cos√¨ sinceri con me, che cosa vi ho fatto di male, io?... Chi vi ha chiesto niente? Queste non sono cose che si dicono in faccia. Queste sono cose che vanno dette alle spalle dell'interessato. Sono sempre state dette alle spalle.",
                "FILM - PENSAVO FOSSE AMORE INVECE ERA UN CALESSE <br> Mamma mia... io guarda, io non √® che so' contrario al matrimonio eh, che non so' venuto... Solo, non lo so, io credo che in particolare un uomo e una donna siano le persone meno adatte a sposarsi tra di loro, troppo diversi.",
            ];

            var random = Math.floor(Math.random() * quote.length);
            var div = document.getElementById('target_div');
            div.innerHTML += (random, quote[random]);
            break;

        default:
            var div = document.getElementById('target_div');
            div.innerHTML += 'Attore non in archivio';
    }
}

inputDigitato.addEventListener("keydown", testoDopoEnter);
