export const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-red-300">Login</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
