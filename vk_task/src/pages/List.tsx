import React from "react";
import { GitHubRepo, useGetRepositoriesQuery } from "../redux/Api/githubApi";
import { useSelector, useDispatch } from "react-redux";
import Item from "../components/Item";
import Skeleton_ from "../components/Skeleton_";
import { RootState } from "../redux/store";
import { setItems } from "../redux/Slices/editSlice";

const List: React.FC = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetRepositoriesQuery();
  const items_: GitHubRepo[] = useSelector(
    (state: RootState) => state.editSlice.items
  );
  React.useEffect(() => {
    if (data?.items) {
      dispatch(setItems(data?.items));
    }
  }, [data]);

  if (error) return <p>Error fetching repositories</p>;
  console.log(items_);

  return (
    <>
      {isLoading && [...new Array(6)].map((_, i) => <Skeleton_ key={i} />)}
      {items_.length > 0 &&
        items_.map((repo) => <Item key={repo.id} {...repo} />)}
    </>
  );
};

export default List;
