import React from 'react';
import Home from './Home/Home';
import QuizPage from './Quiz/QuizPage';
import Result from './Result/Results';

export default function Page() {
  return (
    <div>
      <Home />
      <QuizPage />
      <Result />
    </div>
  )
}
