import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Home.module.css';
import { QuestionConsumer } from '../../Context';

export default function Home() {
  return (
    <QuestionConsumer>
      {({ pageNumber }) => {
        return (
          <div className={Styles.Home__Page}>
            <h1>Welcome!</h1>
            <h2>Get ready for the quiz on the page that follows</h2>
            <span className={Styles.emoji}>&#128073;</span>
            <Link to={`/quiz/${pageNumber}`}>
              <button className={Styles.Start__button} type="button">
                Start Here!
              </button>
            </Link>
          </div>
        );
      }}
    </QuestionConsumer>
  );
}
