import React from "react";
import { useGetRepositoriesQuery } from "../redux/Api/githubApi";
import { useSelector, useDispatch } from "react-redux";
import Item from "../components/Item";
import { RootState } from "../redux/store";
import { setItems } from "../redux/Slices/editSlice";

const List: React.FC = () => {
  const { data, error, isLoading } = useGetRepositoriesQuery();
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...(skeleton)</p>;
  if (error) return <p>Error fetching repositories</p>;
  if (data) {
    dispatch(setItems(data?.items));
  }
  const items_ = useSelector((state: RootState) => state.editSlice.items);
  console.log(items_);

  return (
    <div>
      {items_.map((repo) => (
        <Item key={repo.id} {...repo} />
      ))}
    </div>
  );
};

export default List;
