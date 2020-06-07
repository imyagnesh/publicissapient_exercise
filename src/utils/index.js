export const action = (type, payload, meta) => ({
  type,
  payload,
  meta,
});

export const getItem = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
