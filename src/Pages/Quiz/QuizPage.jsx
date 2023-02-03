import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuestionContext } from '../../Context';
import Styles from './QuizPage.module.css';

export default function QuizPage() {
  const { quiz, count, setCount, setPageNumber, pageNumber } =
    useContext(QuestionContext);
  function getValue(e) {
    const mesmer = e.target.value;
    // eslint-disable-next-line
    console.log(mesmer);
    if (mesmer === quiz[pageNumber].correct_answer) {
      setCount(count + 1);
    } /* else if (mesmer === quiz[pageNumber].incorrect_answers) {
      // eslint-disable-next-line
      setCount(0);
    } */ else {
      // eslint-disable-next-line
      console.log('null');
    }
    setPageNumber((prevNum) => prevNum + 1);
  }
  return (
    <div>
      {quiz.length > 0 && (
        <div className={Styles.Question__Page}>
          <h3>Question Page</h3>
          <h4>{quiz[pageNumber].category}</h4>
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
                  value="True"
                  className={Styles.TrueBtn}
                  type="button"
                  onClick={(e) => getValue(e, 'mesmer')}
                >
                  True
                </button>

                <button
                  value="False"
                  className={Styles.FalseBtn}
                  type="button"
                  onClick={(e) => getValue(e, 'mesmer')}
                >
                  False
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
