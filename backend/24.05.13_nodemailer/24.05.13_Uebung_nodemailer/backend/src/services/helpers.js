export function userToView(user) {
  return {
    _id: user._id,
    name: user.name,
    surname: user.surname,
    email: user.email,
  };
}
