document.addEventListener("DOMContentLoaded", function() {
    // Funkce pro výpočet dnů do 7. dne příštího měsíce
    function calculateDaysToNextSeventh() {
        const today = new Date();
        const currentDay = today.getDate();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        // Nastavíme datum na 7. den příštího měsíce
        let nextMonth = currentMonth + 1;
        let nextYear = currentYear;

        // Pokud je prosinec, přejdeme na leden dalšího roku
        if (nextMonth > 11) {
            nextMonth = 0;
            nextYear++;
        }

        // Datum 7. dne příštího měsíce
        const nextSeventhDate = new Date(nextYear, nextMonth, 7);

        // Výpočet rozdílu v dnech
        const differenceInTime = nextSeventhDate - today;
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

        // Zkontrolujte, zda existuje element s ID "result-days-left"
        const resultElement = document.getElementById("result-days-left");
        if (resultElement) {
            // Výsledek zobrazíme
            const msg = differenceInDays + ' days.';
            resultElement.innerText = msg;
        } else {
            console.error('Element with ID "result-days-left" not found.');
        }
    }

    // Spustíme výpočet při načtení stránky
    calculateDaysToNextSeventh();
});
