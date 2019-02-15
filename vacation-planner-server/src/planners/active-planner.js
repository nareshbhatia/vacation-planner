export class ActivePlanner {
    requestId;
    nextStepNum = 0;
    answers = new Map();

    constructor(requestId) {
        this.requestId = requestId;
    }

    nextStep() {
        const step = {
            requestId: this.requestId
        };

        switch (this.nextStepNum) {
            case 0:
                step.stepType = 'questions';
                step.questions = {
                    favoriteSport: 'What is your favorite sport?',
                    favoritePlayer: 'What is your favorite player?'
                };
                break;
            case 1:
                step.stepType = 'questions';
                step.questions = {
                    vacationLength: 'How long is your vacation?'
                };
                break;
            case 2:
                console.log(this.answers);
                step.stepType = 'result';
                step.result =
                    'How about our ski resort in Grindelwald, Switzerland';
                break;
        }

        return step;
    }

    processAnswers(answers) {
        Object.keys(answers).forEach(key =>
            this.answers.set(key, answers[key])
        );
        this.nextStepNum++;
    }
}
