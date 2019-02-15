import React from 'react';
import { inject, observer } from 'mobx-react';
import { RootStore } from '../stores';

export interface QuestionsPageProps {
    rootStore?: RootStore;
}

export const ResultPage = inject('rootStore')(
    observer(
        class extends React.Component<QuestionsPageProps> {
            render() {
                const { rootStore } = this.props;
                const { resultStep } = rootStore!.vacationStore;
                const { result } = resultStep!;

                return (
                    <div className="content">
                        <h1 className="title">Here's our suggestion</h1>

                        <p>{result}</p>
                    </div>
                );
            }
        }
    )
);
