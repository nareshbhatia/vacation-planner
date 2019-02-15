import axios from 'axios';
import { PlanningRequest } from '../models/planning-request';
import { QuestionsStep, StepResponse } from '../models/questions-step';
import { ResultStep } from '../models/result-step';

const api = process.env.REACT_APP_API;

export class VacationService {
    startVacationPlanning(
        request: PlanningRequest
    ): Promise<QuestionsStep | ResultStep> {
        return axios
            .post(`${api}/planning-request`, request)
            .then(response => convertResponse(response));
    }

    submitAnswers(
        stepResponse: StepResponse
    ): Promise<QuestionsStep | ResultStep> {
        return axios
            .post(`${api}/step-response`, stepResponse)
            .then(response => convertResponse(response));
    }
}

function convertResponse(response: any): QuestionsStep | ResultStep {
    const data = response.data;

    switch (data.stepType) {
        case 'questions':
            return new QuestionsStep(
                data.requestId,
                data.stepType,
                data.questions
            );
        case 'result':
        default:
            return new ResultStep(data.requestId, data.stepType, data.result);
    }
}
