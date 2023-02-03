/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Results.module.css';
import { QuestionConsumer } from '../../Context';

export default function Result() {
  return (
    <QuestionConsumer>
      {({ quiz, setPageNumber, count }) => {
        return (
          <div className={Styles.Result__Page}>
            <div className={Styles.Questions__Answers}>
              <h6>Results</h6>
              <div>
                {quiz.map(({ question, correct_answer }) => {
                  return (
                    <div>
                      <span
                        key={question}
                        // eslint-disable-next-line
                        dangerouslySetInnerHTML={{ __html: question }}
                      />
                      {' - '}
                      <span
                        // eslint-disable-next-line
                        dangerouslySetInnerHTML={{
                          __html: correct_answer,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className={Styles.Score}>Score: {count - 1} / 10</div>
              <Link to="/">
                <button
                  className={Styles.Restart__button}
                  type="submit"
                  onClick={() => {
                    setPageNumber(0);
                  }}
                >
                  Restart Game!
                </button>
              </Link>
            </div>
          </div>
        );
      }}
    </QuestionConsumer>
  );
}
