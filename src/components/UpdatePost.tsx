import React, { useState } from "react";
import InputField from "./elements/InputField";
import Button from "./elements/Button";

interface postType {
  id: number;
  user: number;
  title: string;
  body: string;
}

interface propsType {
  onUpdate: Function;
  onCancel: any;
  originalData: postType;
  setShowUpdatePost: Function;
}

const UpdatePost = (props: propsType) => {
  const { onUpdate, onCancel, originalData, setShowUpdatePost } = props;
  const initalValue = {
    id: originalData.id,
    user: originalData.user,
    title: originalData.title,
    body: originalData.body,
  };
  const [formData, setFormData] = useState(initalValue);

  const handleChange = (e: any) => {
    e.persist();
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    onUpdate(formData);
    setShowUpdatePost(false);
  }

  return (
    <div className="flex flex-col w-full mb-2 shadow-lg bg-gray-50 border border-gray-800 rounded-lg ">
      <form onSubmit={handleSubmit}>
        <InputField
          name="title"
          label="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <InputField
          name="body"
          label="Body"
          value={formData.body}
          onChange={handleChange}
        />
        <div className="flex justify-around">
          <Button label="Update" type="submit" color="Success" />
          <Button
            label="Cancel"
            type="button"
            action={onCancel}
            color="Warning"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
