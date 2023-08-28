type ResultAIProps = {
  answer: string;
};

export const ResultAI: React.FC<ResultAIProps> = ({ answer }) => {
  return (
    <div className="result-AI box">
      <div className="result-AI-answer-label">AI answer: </div>
      <div className="result-AI-answer">{answer}</div>
      <div className="result-AI-answer-end">
        If you would like to know more, please refer to the documents below.
      </div>
    </div>
  );
};
