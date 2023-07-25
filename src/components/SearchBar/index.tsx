import { HTMLProps } from "react";
import { Container, Input } from "./styles";
import { FaSearch } from "react-icons/fa";

export function SearchBar(props: HTMLProps<HTMLInputElement>) {
  return (
    <Container>
      <Input {...props} />
      <FaSearch />
    </Container>
  );
}
