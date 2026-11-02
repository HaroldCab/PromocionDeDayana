import React, { useEffect } from "react";

function Sparkle({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2.5 14.2 9.8 21.5 12l-7.3 2.2L12 21.5l-2.2-7.3L2.5 12l7.3-2.2L12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow--pink" />
        <div className="hero-glow hero-glow--blue" />

        <header className="site-header">
          <a className="brand" href="#inicio" aria-label="Inicio">
            <span className="brand-mark"><Sparkle /></span>
            <span>Un nuevo comienzo</span>
          </a>
          <a className="header-link" href="#celebracion">
            La celebración <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="hero-content" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Una etapa, mil posibilidades</p>
            <h1 id="hero-title">
              Lo logré.
              <br />
              <em>¡Y quiero celebrarlo contigo!</em>
            </h1>
            <p className="hero-description">
              Después de tanto esfuerzo, llegó el momento de brindar por este
              sueño cumplido. Tu compañía hará esta noche aún más especial.
            </p>
            <a className="primary-button" href="#celebracion">
              Acompáñame a celebrar <span aria-hidden="true">↓</span>
            </a>
            <div className="hero-date">
              <span className="date-line" />
              <span>13 de diciembre</span>
              <span className="date-dot">✦</span>
              <span>Desde las 8:00 p. m.</span>
            </div>
          </div>

          <div className="portrait-wrap" aria-label="Retrato de graduada">
            <div className="portrait-halo" />
            <div className="portrait-frame">
              <img
                src="/Retrato%20de%20graduada%20con%20diploma.png"
                alt="Retrato de la graduada con su diploma"
              />
              <div className="portrait-caption">
                <span>El comienzo de</span>
                <strong>algo increíble</strong>
              </div>
            </div>
            <div className="portrait-note">
              <Sparkle />
              <span>Un sueño cumplido</span>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#recuerdos">
          <span>Desliza para descubrir</span>
          <span className="scroll-cue-line" />
        </a>
      </section>

      <section className="memories" id="recuerdos" aria-labelledby="memories-title">
        <div className="memories-content reveal">
          <div className="memories-heading">
            <p className="eyebrow"><span /> Un recuerdo muy especial</p>
            <h2 id="memories-title">
              Este logro también se celebra <em>en equipo</em>
            </h2>
            <p>
              Gracias por cada momento compartido en este camino. ¡Qué alegría
              haber llegado hasta aquí juntos!
            </p>
          </div>
          <figure className="group-photo">
            <img
              src="/Promo.jpeg"
              alt="Dayana y sus compañeros de promoción reunidos junto al lago"
              loading="lazy"
            />
            <figcaption>Un camino compartido, muchos recuerdos para siempre.</figcaption>
          </figure>
        </div>
      </section>

      <section className="celebration" id="celebracion" aria-labelledby="details-title">
        <div className="celebration-orb" aria-hidden="true" />
        <div className="section-heading reveal">
          <p className="eyebrow eyebrow--center"><span /> Reserva la fecha <span /></p>
          <h2 id="details-title">
            Una noche para <em>recordar</em>
          </h2>
          <p>La alegría se disfruta más cuando se comparte.</p>
        </div>

        <div className="details-grid">
          <article className="detail-card reveal">
            <div className="detail-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
                <path d="M7.5 3.5v4M16.5 3.5v4M3.5 10h17" />
                <path d="m9.5 14 1.7 1.7 3.6-3.7" />
              </svg>
            </div>
            <span className="detail-label">El día</span>
            <h3>13 de diciembre</h3>
            <p>Una fecha para celebrar juntos</p>
          </article>

          <article className="detail-card detail-card--featured reveal">
            <div className="detail-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7v5l3.5 2" />
              </svg>
            </div>
            <span className="detail-label">La hora</span>
            <h3>Desde las 8:00 p. m.</h3>
            <p>La noche apenas comienza</p>
          </article>

          <article className="detail-card reveal">
            <div className="detail-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                <circle cx="12" cy="10" r="2.3" />
              </svg>
            </div>
            <span className="detail-label">El lugar</span>
            <h3>En mi domicilio</h3>
            <p>Un espacio para compartir y brindar</p>
          </article>
        </div>

        <div className="closing-note reveal">
          <Sparkle />
          <p>Un logro se convierte en un recuerdo inolvidable cuando estás ahí.</p>
          <span>¡Te espero!</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#inicio">
          <span className="brand-mark"><Sparkle /></span>
          <span>Con cariño, la graduada</span>
        </a>
        <span>Una nueva aventura comienza <span className="footer-star">✦</span></span>
      </footer>
    </main>
  );
}

export default App;
