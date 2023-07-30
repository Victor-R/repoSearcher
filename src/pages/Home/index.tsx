import { useCallback, useState, useEffect } from "react";
import { SearchBar } from "../../components/SearchBar";
import { RepoCard } from "../../components/RepoCard";
import { UserCard } from "../../components/UserCard";
import { Container, Menu, Content } from "./styles";
import { Loading } from "../../components/Loading/Loading";
import { toast } from "react-toastify";

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
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingRepos, setLoadingRepos] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  const getUserRepositories = useCallback(async (username: string) => {
    try {
      setLoadingRepos(true);
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );

      const repos: Repo[] = await response.json();

      setRepoList(repos);
      setLoadingRepos(false);
    } catch (error) {
      console.log(error);
      toast.error(
        (error as { message: string })?.message || "Error loading repositories"
      );
      setRepoList([]);
      setLoadingRepos(false);
    }
  }, []);

  const searchUsers = async (searchTerm: string) => {
    if (searchTerm.length > 0) {
      setLoadingUsers(true);
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${searchTerm}&per_page=7`
        );

        const users: User[] = ((await response.json()) as Result<User>).items;

        setLoadingUsers(false);

        setUsersList(users ?? []);
      } catch (error) {
        console.log(error);
        toast.error(
          (error as { message: string })?.message || "Error loading users"
        );
        setUsersList([]);
        setLoadingUsers(false);
      }
    }
  };

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
          onSearchUpdate={(query) => {
            searchUsers(query);
          }}
          loading={loadingUsers}
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
        {loadingRepos && <Loading />}
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
