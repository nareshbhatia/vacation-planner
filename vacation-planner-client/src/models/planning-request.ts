import { action, decorate, observable } from 'mobx';

export enum VacationType {
    Active = 'Active',
    LaidBack = 'LaidBack',
    Sophisticated = 'Sophisticated'
}

export const VacationTypeMap = new Map<string, string>();
VacationTypeMap.set(VacationType.Active, 'Active');
VacationTypeMap.set(VacationType.LaidBack, 'Laid Back');
VacationTypeMap.set(VacationType.Sophisticated, 'Sophisticated');

/**
 * PlanningRequest: A request for vacation planning
 */
export class PlanningRequest {
    vacationType = VacationType.Active;

    setVacationType(vacationType: VacationType) {
        this.vacationType = vacationType;
    }
}

decorate(PlanningRequest, {
    vacationType: observable,
    setVacationType: action
});
