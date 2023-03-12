import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuestionContext } from '../../Context';
import Styles from './Home.module.css';

export default function Home() {
  const { pageNumber } = useContext(QuestionContext);
  return (
    <div className={Styles.Home__Page}>
      <h1>Welcome!</h1>
      <p className={Styles.description}>
        Get ready for the quiz on the page that follows
      </p>
      <span className={Styles.emoji}>&#128073;</span>
      <h2>Instructions</h2>
      <ul>
        <li>
          Answer either <b>TRUE</b> or <b>FALSE</b>
        </li>
        <li>Each questions counts ONE (1) mark</li>
        <li>
          The questions are of <b>Category:</b> undefined, <b>Difficulty:</b>{' '}
          hard and <b>Type:</b> boolean
        </li>
        <li>
          <b>Note:</b> An answer to a question sends you directly to the next
          one
        </li>
        <li>Get your score at the result page</li>
      </ul>

      <Link to={`/quiz/${pageNumber}`}>
        <button className={Styles.Start__button} type="button">
          Start Here!
        </button>
      </Link>
    </div>
  );
}
