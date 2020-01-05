const allNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const majorSteps = [0, 2, 4, 5, 7, 9, 11, 12];
const minorSteps = [0, 2, 3, 5, 7, 8, 10, 12];

const scaleSelect = document.getElementById('scaleOfSelect');
allNotes.forEach((note, index) => {
    let node = document.createElement('OPTION');
    node.setAttribute('value', allNotes[index]);
    node.innerText = allNotes[index];
    scaleSelect.appendChild(node);
});

function printScale (scale, type) {
    let startAt = allNotes.indexOf(scale);
    let scaleNotes = allNotes.slice(startAt);
    scaleNotes.push(...allNotes.slice(0, startAt));
    let majorScale = majorSteps.map(note => scaleNotes[note < 12 ? note : note - 12]);
    let minorScale = minorSteps.map(note => scaleNotes[note < 12 ? note : note - 12]);
    
    if (type === 'major') {
        majorScale.forEach((note, index) => {
            index++;
            document.getElementById('note' + index).innerText = note;
        })
    } else if (type === 'minor') {
        minorScale.forEach((note, index) => {
            index++;
            document.getElementById('note' + index).innerText = note;
        });
    } else {
        for (let i = 1; i <= 8; i++) {
            document.getElementById('note' + i).innerText = '?';
        }
    }

    console.clear();
    console.log(scale + ' Major scale: ' + majorScale);
    console.log(scale + ' Minor scale: ' + minorScale);

    return null;
}

function displayScale() {
    let scaleOf = document.getElementById('scaleOfSelect').value;
    let scaleType = document.getElementById('scaleTypeSelect').value;
    printScale(scaleOf, scaleType);
}