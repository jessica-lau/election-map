
var createPolitician = function (name) {
    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;

    politician.voteResults = function () {
        this.totalVotes = 0;

        for (var i = 0; i < this.electionResults.length; i++) {
            this.totalVotes = this.totalVotes + this.electionResults[i];
        }

    };

    return politician;
}

var politician1 = createPolitician("Sally Lee");
var politician2 = createPolitician("Laura Wells");

politician1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
politician2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

politician1.electionResults[9] = 1;
politician2.electionResults[9] = 28;

politician1.electionResults[4] = 17;
politician2.electionResults[4] = 38;

politician1.electionResults[43] = 11;
politician2.electionResults[43] = 27;


politician1.voteResults();
politician2.voteResults();

console.log(politician1.totalVotes);
console.log(politician2.totalVotes);

var winner = "Who's the winner?";

if (politician1.totalVotes > politician2.totalVotes) {
    winner = politician1.name;
} 
else if (politician1.totalVotes < politician2.totalVotes) {
    winner = politician2.name;
}
else {
    winner = "Draw";
}

console.log("The winner is " + winner + " !");


