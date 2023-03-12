import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { QuestionProvider } from './Context';
import Home from './Pages/Home/Home';
import QuizPage from './Pages/Quiz/QuizPage';
import Results from './Pages/Result/Results';
import useFetch from './Components/Hooks/useFetch';
import useIncrement from './Components/Hooks/useIncrement';

export default function App() {
  const [quiz, setQuiz] = useFetch();
  const [pageNumber, setPageNumber] = useIncrement(0);
  /* const [finalResult, setFinalResult] = useState({ passed: 0, failed: 0 }); */
  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <QuestionProvider
        value={{
          quiz,
          setQuiz,
          pageNumber,
          setPageNumber,
          count,
          setCount,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/quiz/:id" element={<QuizPage />} />
            <Route path="/result" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </QuestionProvider>
    </div>
  );
}
