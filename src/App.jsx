import './App.css';

function App() {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="avatar-icon"></div>
        <h2>Sign in</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Lastname" />
          <input type="password" placeholder="Password" />
          <input type="email" placeholder="Gmail" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
