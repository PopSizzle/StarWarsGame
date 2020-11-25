import Fighter from "./fighter";

const Yoda = new Fighter("Yoda", "./Images/Yoda.jpg", 200, 12, 12);

const Palpatine = new Fighter("Palpatine", "./Images/Palpatine.jpg", 240, 8, 8);

const DarthMaul = new Fighter("Darth Maul", "./Images/DarthMaul.jpg", 160, 16, 16);

const MaceWindu = new Fighter("Mace Windu", "./Images/Mace.png", 120, 20, 20);

let characters = [Yoda, Palpatine, DarthMaul, MaceWindu]

module.exports=characters;