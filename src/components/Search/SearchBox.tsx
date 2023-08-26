import React, { useState } from "react";
import {
  SemanticSearchResult,
  Status,
  urlSemanticSearch,
} from "../../constants/constants";

type SearchBoxProps = {
  setData: (value: any) => void;
  setStatus: (value: Status) => void;
};

export const SearchBox: React.FC<SearchBoxProps> = ({ setData, setStatus }) => {
  const [input, setInput] = useState("");

  const handleChange = async (value: string) => {
    console.log(value);
    let urlWithQuery = urlSemanticSearch + value;
    try {
      setStatus("Loading");
      const response = await fetch(urlWithQuery);
      if (!response.ok) {
        setStatus("Failure");
        throw new Error(`Http Error! Status: ${response.status}`);
      }
      const data: SemanticSearchResult = await response.json();
      setStatus("Success");
      setData(data);
      console.log(data.weaviate_response[0].title);
    } catch {
      setStatus("Failure");
    }
  };

  return (
    <div className="search-box">
      <div className="spacer" />
      <input
        className="search-input"
        placeholder="Ask me a question"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleChange(input);
        }}
      />
      <img
        className="search-icon"
        src="/right-chevron.png"
        alt="search icon"
        onClick={(e) => {
          handleChange(input);
        }}
      />
    </div>
  );
};
