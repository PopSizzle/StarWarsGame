class Fighter {
    constructor(name, image, HP, AP, CA) {
        this.name = name;
        this.HP = HP;
        this.AP = AP;
        this.CA = CA;
        this.image = image;
    }

    attack = (defender) => {
        let damage = this.AP;

        defender.HP -= damage;

        this.AP += damage;
    }

    counter = (attacker) => {
        let damage = this.CA;

        attacker.HP -= damage;
    }
}

const Yoda = new Fighter("Yoda", "./Images/Yoda.jpg", 200, 12, 12);

const Palpatine = new Fighter("Palpatine", "./Images/Palpatine.jpg", 240, 8, 8);

const DarthMaul = new Fighter("Darth Maul", "./Images/DarthMaulSmall.jpg", 160, 16, 16);

const MaceWindu = new Fighter("Mace Windu", "./Images/Mace.png", 120, 20, 20);

let characters = [Yoda, Palpatine, DarthMaul, MaceWindu]
let currentChar;
let opponent;
let originalAP;

const attack = (player, enemy) => {

    console.log('FIGHTING');
    
    enemy.HP -= player.AP;

    $(`#${enemy.id}`).find('.hp').text(`Health: ${enemy.HP}`);

    console.log(`Enemy HP: ${enemy.HP}`)

    player.HP -= enemy.AP;

    $(`#${player.id}`).find('.hp').text(`Health: ${player.HP}`);

    console.log(`player HP: ${player.HP}`);

    player.AP += originalAP;

    $(`#${player.id}`).find('.ap').text(`Attack: ${player.AP}`);

    console.log(`New Player AP: ` + player.AP);
}

$(document).ready(function() {

    for (let i = 0; i < characters.length; i++) {
        let curr = characters[i];

        let newDiv = $("<div></div>")
        newDiv.addClass("character");
        newDiv.attr("id", i);
        newDiv.css(
            "background-image", `url(${curr.image}`
        )

        let name = $("<h3></h3>");
        name.addClass("name")
        name.text(curr.name);
        newDiv.append(name);

        let hp = $("<h5></h5>");
        hp.addClass("hp");
        hp.text("Health: " + curr.HP);
        newDiv.append(hp);

        let ap = $("<h5></h5>");
        ap.addClass("ap");
        ap.text("Attack: " + curr.AP);
        newDiv.append(ap);

        $("#chars").append(newDiv);
    }

})

$(document).on("click", ".character", function() {
    console.log(this);

    if(!currentChar){
    currentChar = characters[this.id];

    currentChar.id = this.id;

    console.log(`player's id is ${currentChar.id}`);

    originalAP = currentChar.AP;

    console.log(currentChar);

    $('#choice').append(this);

    } else if(!opponent){
        opponent = characters[this.id];

        console.log(opponent);

        opponent.id = this.id;

        console.log(`opponent's id is ${opponent.id}`);

        $('#opponent').append(this);
    }
})

$(document).on('click', 'button', function(e){
    e.preventDefault();

    attack(currentChar,opponent);

    if(opponent.HP <= 0){
        $('#banner').text(`${player.name} has defeated ${opponent.name}`);
    }
})