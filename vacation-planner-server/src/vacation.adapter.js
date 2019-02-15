import { VacationService } from './vacation.service';

export class VacationAdapter {
    static startVacationPlanning(req, res) {
        const planningRequest = req.body;

        VacationService.startVacationPlanning(planningRequest)
            .then(step => res.send(step))
            .catch(error =>
                res.status(500).send({ message: error.toString() })
            );
    }

    static processAnswers(req, res) {
        const stepResponse = req.body;

        VacationService.processAnswers(stepResponse)
            .then(step => res.send(step))
            .catch(error =>
                res.status(500).send({ message: error.toString() })
            );
    }
}
