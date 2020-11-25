import Fighter from "./fighter";

const Yoda = new Fighter("Yoda", "./Images/Yoda.jpg", 200, 24, 24);

const Palpatine = new Fighter("Palpatine", "./Images/Palpatine.jpg", 240, 16, 16);

const DarthMaul = new Fighter("Darth Maul", "./Images/DarthMaul.jpg", 160, 32, 32);

const MaceWindu = new Fighter("Mace Windu", "./Images/Mace.png", 120, 40, 40);

let characters = [Yoda, Palpatine, DarthMaul, MaceWindu]

module.exports=characters;