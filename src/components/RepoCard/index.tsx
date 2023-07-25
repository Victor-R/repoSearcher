import { GoRepo } from "react-icons/go";
import { Container, Title, Description } from "./styles";

type Props = {
  title: string;
  link: string;
  description: string;
};

export function RepoCard({ title, description, link }: Props) {
  return (
    <Container to={link}>
      <GoRepo />
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Container>
  );
}
