import React from "react";
import { WeaviateSearchResult } from "../../constants/constants";

type ResultDocumentProps = {
  document: WeaviateSearchResult;
};

export const format = (value: number) => {
  return parseFloat((value * 100).toFixed(2));
};

export const ResultDocument: React.FC<ResultDocumentProps> = ({ document }) => {
  return (
    <div className="result-document">
      <div className="result-title">{document.title}</div>
      <div className="result-description">{document.content}</div>
      <div className="pills">
        <div className="result-certainty pill">
          {format(document._additional.certainty)}% match
        </div>
        <div className="result-read-time pill">5 min</div>
      </div>
    </div>
  );
};
