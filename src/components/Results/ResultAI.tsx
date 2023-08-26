type ResultAIProps = {
  answer: string;
};

export const ResultAI: React.FC<ResultAIProps> = ({ answer }) => {
  return (
    <div className="result-AI">
      <div className="result-AI-answer-label">Answer: </div>
      <div className="result-AI-answer">{answer}</div>
    </div>
  );
};
