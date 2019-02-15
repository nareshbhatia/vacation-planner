export class LaidBackPlanner {
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
                    relaxingLocation:
                        'What do you find more relaxing - mountains or ocean?'
                };
                break;
            case 1:
                console.log(this.answers);
                step.stepType = 'result';
                step.result =
                    'How about Boston? It has mountains and ocean within reach.';
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
