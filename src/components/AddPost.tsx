import React, { useState } from "react";
import InputField from "./elements/InputField";
import Button from "./elements/Button";

const AddPost = ({ onAdd }: any) => {
  const initalValue = {
    id: +Date.now(),
    user: 12,
    title: "",
    body: "",
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
    console.log(formData);
    onAdd(formData);
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
        <Button label="Post" type="submit" color="Success" />
      </form>
    </div>
  );
};

export default AddPost;
