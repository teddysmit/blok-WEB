NAME

WOWair: 99 verhalen voor onderweg

Teddy Smit
jan 2019


DESCRIPTION

Deze files maken allemaal onderdeel uit van het project van Blok web. Voor dit project moesten we een redesign maken van de website van WOWair en hier wat informatie aan toevoegen. WOWair biedt reizigers 99 verhalen aan zodat mensen onderweg iets te doen hebben. Deze verhalen kunnen worden bekeken op 3 formaten: laptop, smartphone en tablet. De verhalen kunnen ook worden gedownload zodat de gebruiker deze kunnen bekijken als er geen internet is.

Met behulp van deze ReadMe zul je de gebruikte HTML CSS en JS beter begrijpen.

USAGE

De HTML-files zijn niet heel complex. Als je wowair-one.html opent zie je dat ik veel gebruik heb gemaakt van articles (line 54) om de verhalen aan de gebruiker te presenteren. Elke article heeft een button (line 63) deze button staat in verbinding met CSS (line 112) en JS (file: wowair.js) om een download-knop te maken.

Aangezien de website responsive is ziet het scherm van het desktop er anders uit dat het scherm van de smartphone en de Ipad. Een website responsive maken doe je in je CSS met mediaqueries (line 500). Als je in de mediaquery een schermgrootte aangeeft, kan je in die schermgrootte aanpassingen maken aan de stijl van je CSS.

Als de gebruiker de website bekijkt vanaf zijn desktop ziet hij bovenaan het scherm een menu staat die de gebruiker helpt een verhaal te vinden dat hij of zij wil lezen.
Als de gebruiker de website bekijkt vanaf zijn of haar smartphone of Ipad zal de gebruiker een responsive disclosure krijgen waarin er op elk scherm een keuze gemaakt moet worden die de gebruiker uiteindelijk leidt naar een verhaal.

Eenmaal aangekomen bij een verhaal ziet de gebruiker een interactief kunstwerkje. Bij de desktop versie kan de gebruiker met zijn muis over het verhaal bewegen en dan zullen de pijlen gaan rotaten. Bij de smartphone en de Ipad versie zal de gebruiker moeten swipen naar links om door het verhaal te kunnen bewegen.
Dit is maar een vorm van een interactief verhaal maar uiteindelijk zullen alle verhalen op de website interactief zijn.

Als de gebruiker op de terugknop klikt verschijnt er een popup die de gebruiker de optie geeft om het verhaal te raten. Dit staat weer in connectie met CSS en JS op ongeveer dezelfde manier als het download-knopje.

Voor de plaatsing van de content heb ik gebruik gemaakt van de GRID-box. In CSS geef je een box een display: grid; (line 671) en dan kan je de elementen in de box positioneren door ze een nummer te geven (line 685).

Als er bepaalde afbeeldingen over elkaar geplaatst moesten worden had ik ervoor gekozen om ze op een andere manier te positioneren. Op line 472 heb ik de afbeelding een position: relative; gegeven zo kan je de afbeelding positioneren door top en left/right aan te passen. Andere afbeeldingen heb ik dan position: absolute; (line 477) gegeven om ze te overlappen.
