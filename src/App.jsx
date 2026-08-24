import "./App.css";
import Footer from "./Footer";

const DEVELOPMENT_LEVELS = [
  {
    level: "C",
    year: "1st Year",
  },
  {
    level: "B",
    year: "2nd Year",
  },
  {
    level: "A",
    year: "3rd Year",
  },
];

function App() {
  return (
    <main className="mites-page">
      <section className="hero">
        <div className="hero__background" aria-hidden="true" />

        <div className="hero__content page-width">
          <div className="hero__copy">
            <img
              className="hero__logo"
              src={`${import.meta.env.BASE_URL}mites-logo.png`}
              alt="Mini Mites"
            />
          </div>

          <div className="hero__image-frame hero__image-frame--in-hero">
            <img
              src={`${import.meta.env.BASE_URL}hero.jpg`}
              alt="Mini Mites players on the ice"
            />
          </div>
        </div>

        <div className="hero__bottom-line" />
      </section>

      <section className="program-intro" id="program-details">
        <div className="page-width program-intro__grid">
          <div className="section-heading">
            <p className="eyebrow eyebrow--dark">The Mites Program</p>

            <h2>
              Building the foundation
              <span>for what comes next.</span>
            </h2>

            <div className="hero__image-frame hero__image-frame--in-intro">
              <img
                src={`${import.meta.env.BASE_URL}hero.jpg`}
                alt="Mini Mites players on the ice"
              />
            </div>
          </div>

          <div className="program-intro__copy">
            <p className="program-intro__excerpt">Ages 6 to 8</p>

            <p>
              The GSC Mites program will prepare our young players for
              high-level CHC competition, foster a strong sense of community,
              and develop a pipeline of skilled goaltenders. Our focus is on
              accelerating player development, enhancing coaching quality, and
              increasing on-ice engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="development">
        <div className="page-width">
          <h2 className="development__title">Growing Through The Game</h2>

          <div className="development__grid">
            <div className="development__header">
              <p className="development__intro">
                We structure our teams based on an experience-based model (C:
                1st year, B: 2nd year, A: 3rd year), with flexibility for
                player readiness and social dynamics in order to create a
                clear developmental ladder for players to climb and progress
                in preparation for Full Ice Travel Hockey.
              </p>
            </div>

            <div className="development__levels">
              {DEVELOPMENT_LEVELS.map((item, index) => (
                <div className="level-wrapper" key={item.level}>
                  <article className="level-card">
                    <div className="level-card__letter">{item.level}</div>

                    <div className="level-card__info">
                      <h3>{item.level} Team</h3>
                      <p>{item.year}</p>
                    </div>
                  </article>

                  {index < DEVELOPMENT_LEVELS.length - 1 && (
                    <div className="level-connector" aria-hidden="true">
                      <span />
                      <svg viewBox="0 0 20 20">
                        <path d="m7 4 6 6-6 6" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="development__practice">
            <div className="practice__heading">
              <h2>Practice structure</h2>
            </div>

            <div className="practice__cards">
              <article className="practice-card">
                <div className="practice-card__team">A Teams</div>

                <div className="practice-card__frequency">
                  <strong>
                    3<span> X </span>
                    <em></em>
                  </strong>
                  <p>week</p>
                </div>

              </article>

              <article className="practice-card">
                <div className="practice-card__team">B &amp; C Teams</div>

                <div className="practice-card__frequency">
                  <strong>
                    2<span> X </span>
                    <em></em>
                  </strong>
                  <p>week</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;