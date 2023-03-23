import './WelcomeText.scss'

const WelcomeText = () => {
  return (
    <div className="WelcomeText">
      <article>
        <h1 className="welcome-header" >Welcome to CleanBeach</h1>
        <div className="TextSpan">
          <p className="welcome-text" >Our goal is to help the planet, both on land and in the ocean.</p>
        </div>
      </article>
    </div>
  );
};

export default WelcomeText;
