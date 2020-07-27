const VALUES = [
    'Teddy asking for big heals',
    'Veleen complaining about no mana',
    'Furios mentioning the football',
    'Someone not having enough NR pots',
    'Wipe at the gauntlet',
    'Person mindcontrolled is killed',
    'A mage uses blizzard',
    'No soulstone on healers',
    'Butt pull',
    'Someone asking for a buff',
    'Yellow mount drops',
    'Green mount drops',
    'Blue mount drops',
    'Red mount drops',
    'Warlock tank has to move on twin emps',
    'Someone gets excited about loot drop',
    'Rob says "thats an upgrade"',
    'Warrior says "can i have that for my healing set?"',
    'Shankie pulls aggro',
    'Shankie dies',
    'Not enough traditional NR soakers',
    'Someone doesnt run back after a wipe',
    'Corpse run to cthun',
    'under 5% wipe',
    'Veleen gets a drama whisper after the raid',
    'Veleen gets a whisper about loot',
    'Someone asks for clear comms',
    'Someone goes AFK midraid',
    'Three people talk over each other'
];

class Square {
    constructor(value = 'FREE') {
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}

class Bingo {
    constructor(element, size = 4) {
        this.squares = [];
        this.element = element;

        VALUES.forEach(value => {
            this.squares.push(value);
        });
    }

    generate() {

        // Shuffle array
        const shuffled = this.squares.sort(() => 0.5 - Math.random());
        // Get sub-array of first n elements after shuffled
        let selected = shuffled.slice(0, 16);

        selected.forEach(square => {
            let text = document.createElement('p');
            text.innerHTML = square;
            let div = document.createElement('div');
            div.classList.add('square');
            div.appendChild(text);
            console.log(this.element);
            this.element.appendChild(div);
        });
    }
}

document.addEventListener('DOMContentLoaded', event => {
    let bingo = new Bingo(document.querySelector('.bingo'));
    bingo.generate();
});