/* eslint-disable react-hooks/exhaustive-deps */
import { HTMLProps, useCallback, useEffect, useState } from "react";
import { Container, Input } from "./styles";
import { FaSearch } from "react-icons/fa";
import debounce from "lodash.debounce";
import { Loading } from "../Loading/Loading";

type Props = {
  onSearchUpdate: (query: string) => void;
  loading?: boolean;
};

export function SearchBar({
  onSearchUpdate,
  loading,
  ...props
}: Props & HTMLProps<HTMLInputElement>) {
  const [term, setTerm] = useState("");

  const debouncedSearchUpdate = useCallback(
    debounce((query) => {
      onSearchUpdate(query);
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSearchUpdate(term);
  }, [term]);

  return (
    <Container>
      <Input
        {...props}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {loading === true ? <Loading /> : <FaSearch />}
    </Container>
  );
}
