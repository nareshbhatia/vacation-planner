import { action, decorate, observable } from 'mobx';
import { PlanningRequest } from '../models/planning-request';
import { QuestionsStep } from '../models/questions-step';
import { ResultStep } from '../models/result-step';

export class VacationStore {
    rootStore: any;
    planningRequest = new PlanningRequest();
    questionsStep: QuestionsStep | undefined;
    resultStep: ResultStep | undefined;

    constructor(rootStore: any) {
        this.rootStore = rootStore;
    }

    startVacationPlanning(): Promise<any> {
        const { vacationService } = this.rootStore.services;
        return vacationService
            .startVacationPlanning(this.planningRequest)
            .then(this.processStep);
    }

    submitAnswers(): Promise<any> {
        const { vacationService } = this.rootStore.services;
        return vacationService
            .submitAnswers(this.questionsStep!.stepResponse)
            .then(this.processStep);
    }

    processStep = (step: QuestionsStep | ResultStep) => {
        if (step instanceof QuestionsStep) {
            this.setQuestionsStep(step);
            return this.rootStore.routerStore.goTo('questions');
        } else if (step instanceof ResultStep) {
            this.setResultStep(step);
            return this.rootStore.routerStore.goTo('result');
        } else {
            return this.rootStore.routerStore.goTo('home');
        }
    };

    setQuestionsStep(questionsStep: QuestionsStep) {
        this.questionsStep = questionsStep;
    }

    setResultStep(resultStep: ResultStep) {
        this.resultStep = resultStep;
    }
}

decorate(VacationStore, {
    planningRequest: observable,
    questionsStep: observable,
    setQuestionsStep: action,
    setResultStep: action
});
