function generateToken(user) {
  let secretKey;
  let expiresIn;

  switch (user.role) {
    case 'superadmin':
      secretKey = process.env.superadmin;
      expiresIn = '1h';
      break;

    case 'admin':
      secretKey = process.env.admin;
      expiresIn = '1h';
      break;

    case 'user':
      secretKey = process.env.user;
      expiresIn = '1h';
      break;

    default:
      throw new Error('Invalid role');
  }


  const token = jwt.sign(
    { id: user.id, role: user.role },
    secretKey,
    { expiresIn }
  );
  return token;
}