import React, { useState } from 'react';
import { createResource } from '../services/api';

const CreateResource = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newResource = { name, description };
      const data = await createResource(newResource);
      console.log('Resource created:', data);
      setName('');
      setDescription('');
      setError(null);
      setSuccess('Resource created successfully!');
    } catch (error) {
      setError(error.message);
      setSuccess(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create Resource</button>
      {error && <p>Error: {error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
};

export default CreateResource;
