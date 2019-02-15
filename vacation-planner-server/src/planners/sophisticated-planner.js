export class SophisticatedPlanner {
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
                    budget:
                        'What is your maximum daily budget?'
                };
                break;
            case 1:
                console.log(this.answers);
                step.stepType = 'result';
                step.result =
                    'Let\'s go to Las Vegas!';
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
