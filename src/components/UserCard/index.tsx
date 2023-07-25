import { HTMLProps } from "react";
import { Container, Avatar, Name } from "./styles";

type Props = {
  imageUrl: string;
  name: string;
  active: boolean;
};

export function UserCard({
  imageUrl,
  name,
  ...props
}: Props & HTMLProps<HTMLDivElement>) {
  return (
    <Container {...props}>
      <Avatar src={imageUrl} />
      <Name>{name}</Name>
    </Container>
  );
}
