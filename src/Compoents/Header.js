import hamburger from '../Assets/hamburger.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="nav">
        <div className="hamburgerContainer">
          <img width={40} className="invert hamburger" src={hamburger} alt="hamburger" />
          {/* SVG icons */}
        </div>
      </div>
      <div className="buttons">
        <button className="signupbtn">Sign up</button>
        <button className="loginbtn">Log in</button>
      </div>
    </header>
  );
}

