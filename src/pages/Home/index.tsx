import { useCallback, useState, useDeferredValue, useEffect } from "react";
import { SearchBar } from "../../components/SearchBar";
import { Container, Menu, Content } from "./styles";
import { RepoCard } from "../../components/RepoCard";
import { UserCard } from "../../components/UserCard";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

type User = {
  id: number;
  login: string;
  avatar_url: string;
};

type Result<T> = {
  items: Array<T>;
  total_count: number;
};

export function Home() {
  const [repoList, setRepoList] = useState<Repo[]>([]);
  const [usersList, setUsersList] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [term, setTerm] = useState("");

  const deferredTerm = useDeferredValue(term);

  const getUserRepositories = useCallback(async (username: string) => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    const repos: Repo[] = await response.json();

    setRepoList(repos);
  }, []);

  const searchUsers = useCallback(async () => {
    if (deferredTerm.length > 0) {
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${deferredTerm}&per_page=7`
        );

        const users: User[] = ((await response.json()) as Result<User>).items;

        setUsersList(users ?? []);
      } catch (error) {
        console.error(error);
        setUsersList([]);
      }
    }
  }, [deferredTerm]);

  useEffect(() => {
    searchUsers();
  }, [deferredTerm, searchUsers]);

  useEffect(() => {
    if (selectedUser) {
      getUserRepositories(selectedUser.login);
    }
  }, [getUserRepositories, selectedUser]);

  return (
    <Container>
      <Menu>
        <SearchBar
          placeholder="Search for users..."
          value={term}
          onChange={(event) => setTerm(event.currentTarget.value)}
        />
        {usersList.map((user) => (
          <UserCard
            key={user.id}
            imageUrl={user.avatar_url}
            active={selectedUser?.id === user.id}
            name={user.login}
            onClick={() => setSelectedUser(user)}
          />
        ))}
      </Menu>
      <Content>
        {repoList.map(({ id, name, description, html_url }) => (
          <RepoCard
            key={id}
            title={name}
            description={description}
            link={html_url}
          />
        ))}
      </Content>
    </Container>
  );
}
