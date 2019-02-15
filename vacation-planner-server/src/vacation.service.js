import { v4 } from 'uuid';
import { ActivePlanner } from './planners/active-planner';
import { LaidBackPlanner } from './planners/laid-back-planner';
import { SophisticatedPlanner } from './planners/sophisticated-planner';

const planners = new Map();

export class VacationService {
    static startVacationPlanning(planningRequest) {
        // Create a new request id and a corresponding planner
        const requestId = v4();
        let planner;
        switch (planningRequest.vacationType) {
            case 'Active':
                planner = new ActivePlanner(requestId);
                break;
            case 'LaidBack':
                planner = new LaidBackPlanner(requestId);
                break;
            case 'Sophisticated':
                planner = new SophisticatedPlanner(requestId);
                break;
        }

        // Save the planner
        planners.set(requestId, planner);

        // Return the next step
        return Promise.resolve(planner.nextStep());
    }

    static processAnswers(stepResponse) {
        const planner = planners.get(stepResponse.requestId);
        planner.processAnswers(stepResponse.answers);

        // Return the next step
        return Promise.resolve(planner.nextStep());
    }
}
