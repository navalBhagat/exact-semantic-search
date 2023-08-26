import React from "react";
import { WeaviateSearchResult } from "../../constants/constants";
import { ResultDocument } from "./ResultDocument";

type ResultsDocumentsProps = {
  documents: WeaviateSearchResult[];
};

export const ResultDocuments: React.FC<ResultsDocumentsProps> = ({
  documents,
}) => {
  return (
    <div className="result-documents">
      {documents.map((document) => (
        <ResultDocument document={document} />
      ))}
    </div>
  );
};
