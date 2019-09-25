var lettersStore = [];
var letters = process.argv[i];
function Randomword(word) {
    this.word = function () {
    for (var i = 0; i < word.length; i++) {
        var currentLetter = new Letter(word[i]);
        lettersStore.push(currentLetter)};
    }
    };
    
    Randomword();
    
        var display = function () {
            var lettersStore = '';
            for (var i = 0; i < this.letters.length; i++) {
                lettersStore += this.letters[i].display();
            }
            console.log(lettersStore);
        }