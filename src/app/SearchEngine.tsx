import { Results, SearchBox } from "../components";

export const SearchEngine = () => {
  return (
    <div className="search-engine">
      <SearchBox />
      <Results />
    </div>
  );
};
