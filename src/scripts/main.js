// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";
// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 5);
let platter = makePottery("platter", 5, 1);
let goblet = makePottery("goblet", 3, 7);
let vase = makePottery("vase", 10, 15);
let statue = makePottery("statue", 15, 14);
// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 1000);
let firedPlatter = firePottery(platter, 2000);
let firedGoblet = firePottery(goblet, 1500);
let firedVase = firePottery(vase, 2300);
let firedStatue = firePottery(statue, 2400);
// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug);
toSellOrNotToSell(firedPlatter);
toSellOrNotToSell(firedGoblet);
toSellOrNotToSell(firedVase);
toSellOrNotToSell(firedStatue);

let itemsForSale = usePottery();
// Invoke the component function that renders the HTML list
//console.log(firedMug);
//console.log(firedPlatter);
//console.log(firedGoblet);
//console.log(firedVase);
//console.log(firedStatue);

const potteryHTML = PotteryList();

const potteryListArticle = document.querySelector(".potteryList");

potteryListArticle.innerHTML = potteryHTML;

console.table(itemsForSale);
