import React from 'react';
import { inject, observer } from 'mobx-react';
import { VacationTypeMap } from '../models/planning-request';

export interface HomePageProps {
    rootStore?: any;
}

export const HomePage = inject('rootStore')(
    observer(
        class extends React.Component<HomePageProps> {
            render() {
                const { rootStore } = this.props;
                const { planningRequest } = rootStore.vacationStore;

                return (
                    <div className="content">
                        <h1 className="title">Vacation Planner</h1>

                        <form onSubmit={this.onSubmit}>
                            <fieldset>
                                <legend>
                                    What type of vacation are you interested in?
                                </legend>

                                {Array.from(VacationTypeMap.keys()).map(key => (
                                    <React.Fragment key={key}>
                                        <input
                                            type="radio"
                                            name="vacationType"
                                            id={key}
                                            value={key}
                                            checked={
                                                planningRequest.vacationType ===
                                                key
                                            }
                                            onChange={
                                                this.handleVacationTypeChange
                                            }
                                        />
                                        <label htmlFor={key}>
                                            {VacationTypeMap.get(key)}
                                        </label>
                                    </React.Fragment>
                                ))}
                            </fieldset>

                            <button type="submit">
                                Find my dream vacation
                            </button>
                        </form>
                    </div>
                );
            }

            handleVacationTypeChange: React.EventHandler<any> = event => {
                const { rootStore } = this.props;
                const { planningRequest } = rootStore.vacationStore;
                planningRequest.setVacationType(event.target.value);
            };

            onSubmit: React.EventHandler<any> = event => {
                const { rootStore } = this.props;

                event.stopPropagation();
                event.preventDefault();
                rootStore.vacationStore.startVacationPlanning();
            };
        }
    )
);
