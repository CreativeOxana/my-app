import { useState } from 'react';

interface FormProps {
  onSubmitForm: (data: FormData) => void;
}

export interface FormData {
  name: string;
  type: string;
}

export const Form: React.FunctionComponent<FormProps> = ({ onSubmitForm }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', type: '' });

  const handleChange = (
    element: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [element.target.name]: element.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Your Name: </p>
        <input name="name" onChange={handleChange} />
      </label>
      <label>
        <p>Select type of Activities: </p>
        <select name="type" onChange={handleChange}>
          <option value=""></option>
          <option value="education">Education</option>
          <option value="relaxation">Relaxation</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
