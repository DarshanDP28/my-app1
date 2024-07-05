import React, { useState, useEffect } from 'react';
import { getResource, updateResource } from '../services/api';

const UpdateResource = ({ resourceId }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const data = await getResource(resourceId);
        setName(data.name);
        setDescription(data.description);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchResource();
  }, [resourceId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedResource = { name, description };
      const data = await updateResource(resourceId, updatedResource);
      console.log('Resource updated:', data);
      setError(null);
      setSuccess('Resource updated successfully!');
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
      <button type="submit">Update Resource</button>
      {error && <p>Error: {error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
};

export default UpdateResource;
