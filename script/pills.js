const totalPills = 3 * 7 + 7; // 28 pills
const pillSequence = Array(21).fill('red').concat(Array(7).fill('white'));

function generatePillSequence(startPill, startDate) {
    let sequence = [];
    for (let i = -7; i <= 7; i++) {
        let index = (startPill - 1 + i + totalPills) % totalPills; // Ensure circular sequence
        let date = new Date(startDate);
        date.setDate(date.getDate() + i);
        sequence.push({ pill: pillSequence[index], date: date });
    }
    return sequence;
}

function updateCalendar() {
    const inputPill = parseInt(document.getElementById('pill-input').value);
    const inputDate = document.getElementById('date-input').value;
    const calendar = document.getElementById('calendar');

    if (isNaN(inputPill) || inputPill < 1 || inputPill > totalPills) {
        alert('Zadejte platné číslo prášečku (1 až 28)');
        return;
    }

    if (!inputDate) {
        alert('Vyberte platné datum.');
        return;
    }

    const startDate = new Date(inputDate);
    calendar.innerHTML = '';
    const sequence = generatePillSequence(inputPill, startDate);

    sequence.forEach(({ pill, date }) => {
        const day = document.createElement('div');
        day.className = `calendar-day ${pill}`;
        day.innerText = date.toLocaleDateString('cs-CZ');

        if (date.toDateString() === startDate.toDateString()) {
            day.classList.add('selected');
        }

        calendar.appendChild(day);
    });
}

function showPillPicker(event) {
    const picker = document.getElementById('pill-picker');
    picker.style.display = 'block';
    picker.style.top = `${event.target.offsetTop + event.target.offsetHeight}px`;
    picker.style.left = `${event.target.offsetLeft}px`;
    picker.innerHTML = '';

    pillSequence.forEach((pill, index) => {
        const pillDiv = document.createElement('div');
        pillDiv.className = pill;
        pillDiv.innerText = index + 1;
        pillDiv.onclick = () => {
            document.getElementById('pill-input').value = index + 1;
            picker.style.display = 'none';
        };
        picker.appendChild(pillDiv);
    });
}

function hidePillPicker(event) {
    setTimeout(() => {
        document.getElementById('pill-picker').style.display = 'none';
    }, 200);
}
