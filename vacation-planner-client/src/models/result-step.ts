import { decorate, observable } from 'mobx';

/**
 * ResultStep: A step that shows a result
 */
export class ResultStep {
    requestId: string;
    stepType: string;
    result: string;

    constructor(requestId: string, stepType: string, result: string) {
        this.requestId = requestId;
        this.stepType = stepType;
        this.result = result;
    }
}

decorate(ResultStep, {
    requestId: observable,
    stepType: observable,
    result: observable
});
