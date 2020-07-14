// eslint-disable-next-line import/prefer-default-export
export const decamelize = (str) => str.replace(/([A-Z])(?=[A-Z][a-z])|([a-z])(?=[A-Z])/g, '$& ');
