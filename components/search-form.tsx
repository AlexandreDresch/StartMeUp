import Form from "next/form";
import SearchFormReset from "./search-form-reset";
import { SearchIcon } from "lucide-react";

export default function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search for Startups..."
        type="text"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button type="submit" className="search-btn text-white">
          <SearchIcon className="size-5"/>
        </button>
      </div>
    </Form>
  );
}