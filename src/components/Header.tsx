import React from "react";
import Button from "./elements/Button";

interface Props {
  title: string;
  toggleAddPost: () => void;
  showAddPostState: boolean;
}

const Header = ({ title, toggleAddPost, showAddPostState }: Props) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-lg"> {title}</h1>
      {showAddPostState ? (
        <Button label="Close" action={toggleAddPost} color="Error" />
      ) : (
        <Button label="Add Post" action={toggleAddPost} color="Primary" />
      )}
    </div>
  );
};

Header.defaultProps = {
  title: "CURD OPERATION",
};

export default Header;
