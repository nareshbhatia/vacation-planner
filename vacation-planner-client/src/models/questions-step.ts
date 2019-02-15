import { action, computed, decorate, observable } from 'mobx';

export interface StepResponse {
    requestId: string;
    answers: Map<string, string>;
}

/**
 * QuestionsStep: A step that asks questions
 */
export class QuestionsStep {
    requestId: string;
    stepType: string;
    questions: Map<string, string> = new Map<string, string>();
    answers: Map<string, string> = new Map<string, string>();

    constructor(requestId: string, stepType: string, jsQuestions: any) {
        this.requestId = requestId;
        this.stepType = stepType;
        Object.keys(jsQuestions).forEach(key => {
            this.questions.set(key, jsQuestions[key]);
            this.answers.set(key, '');
        });
    }

    get stepResponse(): StepResponse {
        return {
            requestId: this.requestId,
            answers: this.answers
        };
    }

    setAnswer(key: string, value: string) {
        this.answers.set(key, value);
    }
}

decorate(QuestionsStep, {
    requestId: observable,
    stepType: observable,
    questions: observable,
    answers: observable,
    stepResponse: computed,
    setAnswer: action
});
