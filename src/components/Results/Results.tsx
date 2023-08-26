import { SemanticSearchResult } from "../../constants/constants";
import { ResultAI } from "./ResultAI";
import { ResultDocuments } from "./ResultDocuments";

type ResultsProps = {
  data: SemanticSearchResult;
};

export const Results: React.FC<ResultsProps> = ({ data }) => {
  return (
    <div className="results">
      <ResultAI answer={data.answer} />
      <ResultDocuments documents={data.weaviate_response} />
    </div>
  );
};
