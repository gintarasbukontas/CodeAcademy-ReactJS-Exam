export default function AccountForm({
  onSubmit,
  username,
  setUsername,
  password,
  setPassword,
}) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="usernameInput">Username</label>
      <br />
      <input
        id="usernameInput"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="passwordInput">Password</label>
      <br />
      <input
        id="passwordInput"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
