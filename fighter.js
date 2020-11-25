class Fighter {
    constructor(name, image, HP, AP, CA){
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

module.exports=Fighter;

