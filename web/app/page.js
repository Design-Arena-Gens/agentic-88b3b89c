import './globals.css';
import VoiceOver from '../components/VoiceOver';

export default function Page() {
  return (
    <main>
      <div className="container">
        <header className="header">
          <a className="logo" href="#">
            <img src="/images/logo.svg" alt="LearningNest logo" />
            <span>LearningNest</span>
          </a>
          <div className="voiceBar">
            <span className="voiceDot" aria-hidden="true"></span>
            <VoiceOver />
          </div>
        </header>

        <section className="hero">
          <div>
            <h1 className="heroTitle fadeIn">Say goodbye to heavy bags? and hello to the Bagless Concept!</h1>
            <p className="heroSubtitle fadeIn delay1">
              One smart book, packed with everything your child needs.
            </p>
            <div className="grid fadeIn delay2">
              <div className="card">
                <img src="/images/light-bag.svg" alt="Lightweight bag icon" />
                <div>
                  <strong>Lightweight & Portable</strong>
                  <span>No more lugging heavy schoolbags.</span>
                </div>
              </div>
              <div className="card">
                <img src="/images/smart-book.svg" alt="Smart LearningNest book icon" />
                <div>
                  <strong>Smart LearningNest Book</strong>
                  <span>Glossy, interactive pages your child will love.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="panel fadeIn delay3" aria-hidden="true">
            <img src="/images/hero-book.svg" alt="Smart book illustration" style={{ width: '100%', display: 'block' }} />
          </div>
        </section>

        <section className="scene">
          <div className="panel">
            <img src="/images/wipe-clean.svg" alt="Wipe & Clean demo" style={{ width: '100%' }} />
          </div>
          <div>
            <h3 className="sceneTitle">Wipe & Clean learning?again and again</h3>
            <p className="sceneText">Scribble, learn, and erase easily with glossy, durable pages.</p>
          </div>
        </section>

        <section className="scene">
          <div>
            <h3 className="sceneTitle">No mess. No waste.</h3>
            <p className="sceneText">Pages stay neat and fresh?just like new.</p>
            <div className="brandTagline">An integrated curriculum where learning is joyful and smart.</div>
          </div>
          <div className="sideBySide">
            <div className="bad">
              <h4>Old Way</h4>
              <img src="/images/messy-notebook.svg" alt="Messy old notebook" style={{ width: '100%' }} />
            </div>
            <div className="good">
              <h4>LearningNest</h4>
              <img src="/images/neat-page.svg" alt="Neat LearningNest page" style={{ width: '100%' }} />
            </div>
          </div>
        </section>

        <section className="scene">
          <div className="panel">
            <img src="/images/happy-kids.svg" alt="Happy kids learning" style={{ width: '100%' }} />
          </div>
          <div>
            <h3 className="sceneTitle">Explore. Learn. Shine brighter every day! ??</h3>
            <p className="sceneText">Make learning mess-free and joyful with LearningNest.</p>
          </div>
        </section>

        <footer className="footer">
          <div>
            <strong>LearningNest</strong>
            <div className="brandTagline">Learning becomes joyful, smart, and mess-free.</div>
          </div>
          <button className="cta" onClick={() => {
            const target = document.getElementById('ln-contact');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }}>Get Started</button>
        </footer>

        <div id="ln-contact" className="panel" style={{ marginBottom: 32 }}>
          <h3 style={{ marginTop: 0 }}>Get in touch</h3>
          <p className="sceneText">Interested in LearningNest for your school or child? We?d love to chat.</p>
          <a className="buttonSecondary" href="mailto:hello@learningnest.example">hello@learningnest.example</a>
        </div>
      </div>
    </main>
  );
}
