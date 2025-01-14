import React from "react";
import { useGetRepositoriesQuery } from "../redux/Api/githubApi";
import Item from "../components/Item";

const List: React.FC = () => {
  const { data, error, isLoading } = useGetRepositoriesQuery();

  if (isLoading) return <p>Loading...(skeleton)</p>;
  if (error) return <p>Error fetching repositories</p>;
  if (data) console.log(data);

  return (
    <div>
      {data?.items?.map((repo) => (
        <Item key={repo.id} {...repo} />
      ))}
    </div>
  );
};

export default List;
