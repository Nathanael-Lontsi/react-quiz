import { createContext } from 'react';

const QuestionContext = createContext();
const QuestionProvider = QuestionContext.Provider;
const QuestionConsumer = QuestionContext.Consumer;

export { QuestionContext, QuestionProvider, QuestionConsumer };
