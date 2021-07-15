class Quiz {
    constructor() {}

    getState() {
        var getStateRef = database.ref('gameState');
        getStateRef.on("value", function(data) {
            getState = data.val();
        });
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if(gameState === 0) {
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");

            if(contestantCountRef.exists()) {
              contestantCount = contestantCountRef.val();
              contestant.getCount();
            }

            question = new Question();
            question.display();
        }
    }
}