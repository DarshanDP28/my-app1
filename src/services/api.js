

const API_BASE_URL = 'https://localhost:3000';

export const createResource = async (resource) => {
  const response = await fetch(`${API_BASE_URL}/resources`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resource),
  });

  if (!response.ok) {
    throw new Error('Failed to create resource');
  }

  return response.json();
};

export const updateResource = async (resourceId, resource) => {
  const response = await fetch(`${API_BASE_URL}/resources/${resourceId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resource),
  });

  if (!response.ok) {
    throw new Error('Failed to update resource');
  }

  return response.json();
};

export const getResource = async (resourceId) => {
  const response = await fetch(`${API_BASE_URL}/resources/${resourceId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch resource');
  }

  return response.json();
};
