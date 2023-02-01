import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Results.module.css';
import { QuestionConsumer } from '../../Context';

export default function Result() {
  return (
    <QuestionConsumer>
      {({ quiz, setPageNumber, setFinalResult }) => {
        return (
          <div className={Styles.Result__Page}>
            Results
            <div>
              {quiz.map(({ question, correct_answer }) => {
                return (
                  <div>
                    <span
                      key={question}
                      // eslint-disable-next-line
                      dangerouslySetInnerHTML={{ __html: question }}
                    />

                    <span
                      dangerouslySetInnerHTML={{
                        __html: correct_answer,
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <Link to="/">
              <button
                type="submit"
                onClick={() => {
                  setPageNumber(0);
                  setFinalResult({ passed: 0, failed: 0 });
                }}
              >
                Back to Home
              </button>
            </Link>
          </div>
        );
      }}
    </QuestionConsumer>
  );
}
