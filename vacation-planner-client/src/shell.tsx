import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import { HomePage } from './pages/home-page';
import { NotFoundPage } from './pages/not-found-page';
import { QuestionsPage } from './pages/questions-page';
import { ResultPage } from './pages/result-page';
import { RootStore } from './stores';

const viewMap = {
    home: <HomePage />,
    notFound: <NotFoundPage />,
    questions: <QuestionsPage />,
    result: <ResultPage />
};

export interface ShellProps {
    rootStore?: RootStore;
}

export const Shell = inject('rootStore')(
    class extends React.Component<ShellProps> {
        render() {
            const { rootStore } = this.props;
            const { routerStore } = rootStore!;

            return (
                <React.Fragment>
                    <RouterView routerStore={routerStore} viewMap={viewMap} />
                </React.Fragment>
            );
        }
    }
);
