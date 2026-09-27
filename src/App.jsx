import "./App.css";
import Footer from "./Footer";

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
            <p className="program-intro__excerpt">Ages 3 to 8</p>

            <p>
              Mini Mites is a fun introductory hockey program for GSC members
              ages 3-8 who can skate independently. Running from mid-November
              through late February/early March at GSC, the program focuses on
              skill development, confidence building, and having fun on the
              ice.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          MINI MITES DEVELOPMENT
      ========================================= */}

      <section
        className="development"
        aria-labelledby="development-title"
      >
        <div className="page-width">
          <h2
            className="development__title"
            id="development-title"
          >
            Growing Through the Game
          </h2>

          {/* =====================================
              SKATE / LEARN / PLAY
          ===================================== */}

          <div className="development__grid">
            <div className="development__header">
              <p className="development__intro">
                Mini Mites is designed to help young players
                build a strong foundation through
                age-appropriate instruction, small-area games,
                and plenty of time with the puck. The focus is
                on developing skating, hockey skills,
                confidence, and a love for the game in a fun
                and supportive environment.
              </p>
            </div>

            <div
              className="development__levels"
              aria-label="Mini Mites development focus"
            >
              {/* SKATE */}
              <div className="level-wrapper">
                <article className="level-card">
                  <div className="level-card__letter">
                    SKATE
                  </div>

                  <div className="level-card__info">
                    <h3>Balance & Movement</h3>

                    <p>
                      Build comfort, control, and confidence
                      on the ice.
                    </p>
                  </div>
                </article>

                <div
                  className="level-connector"
                  aria-hidden="true"
                >
                  <span />

                  <svg viewBox="0 0 16 16">
                    <path d="M5 3.5 10 8l-5 4.5" />
                  </svg>
                </div>
              </div>

              {/* LEARN */}
              <div className="level-wrapper">
                <article className="level-card">
                  <div className="level-card__letter">
                    LEARN
                  </div>

                  <div className="level-card__info">
                    <h3>Puck Skills & Hockey Basics</h3>

                    <p>
                      Introduce stickhandling, passing,
                      shooting, and game fundamentals.
                    </p>
                  </div>
                </article>

                <div
                  className="level-connector"
                  aria-hidden="true"
                >
                  <span />

                  <svg viewBox="0 0 16 16">
                    <path d="M5 3.5 10 8l-5 4.5" />
                  </svg>
                </div>
              </div>

              {/* PLAY */}
              <div className="level-wrapper">
                <article className="level-card level-card--accent">
                  <div className="level-card__letter">
                    PLAY
                  </div>

                  <div className="level-card__info">
                    <h3>Fun, Games & Teamwork</h3>

                    <p>
                      Put new skills into action while
                      learning to play with teammates.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* =====================================
              WHAT PLAYERS DEVELOP
          ===================================== */}

          <div className="development__practice">
            <div className="practice__heading">
              <h2>What Players Develop</h2>

              <p className="practice__intro">
                Mini Mites emphasizes the fundamental skills
                and confidence young players need as they
                begin learning the game.
              </p>
            </div>

            <div className="practice__cards">
              {/* SKATING & PUCK SKILLS */}
              <article className="practice-card">
                <div className="practice-card__content">
                  <span className="practice-card__eyebrow">
                    Foundation Skills
                  </span>

                  <h3>Skating & Puck Skills</h3>

                  <p>
                    Players work on balance, edge control,
                    movement, puck handling, passing, and
                    shooting fundamentals through
                    age-appropriate drills and activities.
                  </p>
                </div>
              </article>

              {/* CONFIDENCE & GAME SENSE */}
              <article className="practice-card">
                <div className="practice-card__content">
                  <span className="practice-card__eyebrow">
                    Learning the Game
                  </span>

                  <h3>Confidence & Game Sense</h3>

                  <p>
                    Small-area games help players develop
                    awareness, decision-making, teamwork,
                    sportsmanship, and confidence in a fun,
                    supportive environment.
                  </p>
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
