export const urlSemanticSearch =
  "https://exact-cs-semantic-search.azurewebsites.net/api/cssemanticsearch?query=";

export type Status = "None" | "Loading" | "Failure" | "Success";

export interface SemanticSearchResult {
  answer: string;
  weaviate_response: WeaviateSearchResult[];
}

export interface WeaviateSearchResult {
  _additional: {
    certainty: number;
    distance: number;
  };
  content: string;
  title: string;
}
