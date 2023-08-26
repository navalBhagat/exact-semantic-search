import { Results, SearchBox } from "../components";
import { useState } from "react";
import { SemanticSearchResult, Status } from "../constants/constants";

export const SearchEngine = () => {
  const [data, setData] = useState<SemanticSearchResult>({
    answer: "",
    weaviate_response: [],
  });
  const [status, setStatus] = useState<Status>("None");

  return (
    <div className="search-engine">
      <SearchBox setData={setData} setStatus={setStatus} />
      {status === "Success" && <Results data={data as SemanticSearchResult} />}
      {status === "Failure" && (
        <div className="user-message">
          Unfortunately, we were not able to retrieve your results. Please try
          again! :(
        </div>
      )}
      {status === "Loading" && (
        <div className="user-message">We are preparing your results ...</div>
      )}
    </div>
  );
};
