import { useEffect, useState } from 'react';
import fetchQuestions from '../../Api';

export default function useFetch() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions().then((res) => {
      setQuestions([...res.results]);
    });
  }, []);

  return [questions, setQuestions];
}
