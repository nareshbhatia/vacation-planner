import React from 'react';
import { inject, observer } from 'mobx-react';
import { RootStore } from '../stores';

export interface QuestionsPageProps {
    rootStore?: RootStore;
}

export const QuestionsPage = inject('rootStore')(
    observer(
        class extends React.Component<QuestionsPageProps> {
            render() {
                const { rootStore } = this.props;
                const { questionsStep } = rootStore!.vacationStore;
                const { questions, answers } = questionsStep!;

                return (
                    <div className="content">
                        <h1 className="title">Questions</h1>

                        <form onSubmit={this.onSubmit}>
                            {Array.from(questions.keys()).map(key => (
                                <div key={key} className="question">
                                    <p>{questions.get(key)}</p>
                                    <input
                                        type="text"
                                        id={key}
                                        name={key}
                                        value={answers.get(key)}
                                        onChange={this.handleAnswerChange}
                                    />
                                </div>
                            ))}

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                );
            }

            handleAnswerChange: React.EventHandler<any> = event => {
                const { rootStore } = this.props;
                const { questionsStep } = rootStore!.vacationStore;
                questionsStep!.setAnswer(event.target.id, event.target.value);
            };

            onSubmit: React.EventHandler<any> = event => {
                const { rootStore } = this.props;

                event.stopPropagation();
                event.preventDefault();
                rootStore!.vacationStore.submitAnswers();
            };
        }
    )
);
