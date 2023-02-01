import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './QuizPage.module.css';
import { QuestionConsumer } from '../../Context';

export default function QuizPage() {
  return (
    <QuestionConsumer>
      {({ quiz, pageNumber, setPageNumber }) => {
        return (
          quiz.length > 0 && (
            <div className={Styles.Question__Page}>
              <h3>QUESTIONS TEST</h3>
              <h4>Current Score:</h4>
              <div className={Styles.Question__Box}>
                <div className={Styles.Questions}>
                  <h5>Question {pageNumber + 1} out of 10</h5>{' '}
                  <p
                    // eslint-disable-next-line
                    dangerouslySetInnerHTML={{
                      __html: quiz[pageNumber].question,
                    }}
                  />
                  <Link
                    to={
                      quiz.length - 1 === pageNumber
                        ? '/result'
                        : `/quiz/${pageNumber}`
                    }
                    className={Styles.TrueFalse}
                  >
                    <button
                      className={Styles.TrueBtn}
                      type="button"
                      onClick={() => {
                        setPageNumber((prevNum) => prevNum + 1);
                      }}
                    >
                      True
                    </button>

                    <button
                      className={Styles.FalseBtn}
                      type="button"
                      onClick={() => {
                        setPageNumber((prevNum) => prevNum + 1);
                      }}
                    >
                      False
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        );
      }}
    </QuestionConsumer>
  );
}
