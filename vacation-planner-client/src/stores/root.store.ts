import { RouterState, RouterStore } from 'mobx-state-router';
import { VacationService } from '../services/vacation.service';
import { routes } from './routes';
import { VacationStore } from './vacation.store';

const notFound = new RouterState('notFound');

export class RootStore {
    routerStore = new RouterStore(this, routes, notFound);
    vacationStore = new VacationStore(this);

    services = {
        vacationService: new VacationService()
    };
}
