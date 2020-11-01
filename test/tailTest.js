const tail = require('../tail');
const assertEqual = require('../assertEqual');


//tests
const words = ["Yo Yo", "Lighthouse", "Labs"];
const results = tail(words); 
assertEqual(words.length, 3); 
assertEqual(results.length, 2);


const words1 = ["Lighthouse"];
const results1 = tail(words1);
assertEqual(words1.length, 1);
assertEqual(results1.length, 0);


const words2 = [];
const results2 = tail(words2);
assertEqual(words2.length, 0);
assertEqual(results2.length, 0);