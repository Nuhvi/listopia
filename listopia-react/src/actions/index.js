export const authenticate = (userId) => ({
  type: 'AUTHENTICATE_USER',
  userId,
});

export const other = () => ({
  type: 'OTHER_ACTION',
});
