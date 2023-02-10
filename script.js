const words = [];
function addWords() {
    let input = document.getElementById("userInput").value;
    if (input != "") {
        words.push(input);
    }
}
function searchWords() {
    let searchInput = document.getElementById("search").value;
    if (searchInput != "") {
        let found = 0;
        for (let i = 0; i < words.length; ++i) {
            if (searchInput === words[i]) {
                document.getElementById("foundOrNot").innerHTML = "The word is in the list";
                i = words.length;
                found = 1;
            } 
        }
        if (found === 0) {
            document.getElementById("foundOrNot").innerHTML = "The word is not in the list";
        }
    }
}
