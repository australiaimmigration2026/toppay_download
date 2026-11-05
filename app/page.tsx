import Image from "next/image";

const DOWNLOAD_URL =
  "https://github.com/australiaimmigration2026/toppay/releases/download/v1.1.2/Toppay-v1.1.2.apk";

const services = [
  { icon: "↗", title: "Send money", text: "Start a transfer and keep an eye on its status." },
  { icon: "＋", title: "Add balance", text: "Submit a balance request through your preferred method." },
  { icon: "▣", title: "Mobile recharge", text: "Top up a mobile number from the services screen." },
  { icon: "ϟ", title: "Pay bills", text: "Find bill payment options together in one place." },
  { icon: "⌁", title: "Cash out", text: "Create and track a cash out request in the app." },
  { icon: "▤", title: "Activity & methods", text: "Review transactions and manage saved payment methods." },
];

const steps = [
  { number: "01", title: "Download Toppay", text: "Get the Android installation file directly from this page." },
  { number: "02", title: "Install and sign in", text: "Open the file, install the app, then continue with Google sign-in." },
  { number: "03", title: "Set up your PIN", text: "Create your app PIN and follow the on-screen setup steps." },
];

const faqs = [
  {
    question: "Which phones can install Toppay?",
    answer: "This download is an Android APK. Your phone may ask you to allow installation from the browser or file manager you used to download it.",
  },
  {
    question: "Why does the app ask for notification access?",
    answer: "Toppay uses Android notification access to detect and sync payment notifications for transaction records. You can review or change this permission in your phone’s Settings.",
  },
  {
    question: "Why can a transaction show as pending?",
    answer: "Some transactions are submitted as requests and may need review before their status changes. You can check progress in Pending transactions or Activity.",
  },
  {
    question: "Is this download from Google Play?",
    answer: "No. This page provides the Android APK directly. Check that the website address is the official Toppay address before installing an APK.",
  },
];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon"><path d="M4 10h11M10 4l6 6-6 6" /></svg>;
}

function DownloadIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="download-icon"><path d="M10 2.75v9.5m0 0 3.5-3.5M10 12.25l-3.5-3.5M3 14.25v2A1.75 1.75 0 0 0 4.75 18h10.5A1.75 1.75 0 0 0 17 16.25v-2" /></svg>;
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" /> Your everyday payments, in one app
        <a href="#download">Get Toppay <ArrowIcon /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Toppay home">
          <Image src="/toppay-logo.png" alt="" width={48} height={48} priority />
          <span>Toppay<span className="brand-period">.</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#features">What you can do</a>
          <a href="#how-it-works">Getting started</a>
          <a href="#faq">Help</a>
        </nav>
        <a className="header-download" href="#download">Download app <ArrowIcon /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> MADE FOR EVERYDAY MONEY</div>
          <h1>Money moves<br />with <span>more ease.</span></h1>
          <p className="hero-description">Send money, recharge a phone, pay bills and keep up with your activity—all from one simple app.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={DOWNLOAD_URL}>
              <DownloadIcon /> Download for Android
            </a>
            <a className="text-link" href="#features">Explore the app <ArrowIcon /></a>
          </div>
          <div className="hero-note"><span className="check-mark">✓</span> Android APK <span className="note-divider">·</span> Version 1.1.2</div>
        </div>

        <div className="hero-art" aria-label="Preview of the Toppay app" role="img">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-star star-one">✳</div>
          <div className="art-star star-two">✦</div>
          <div className="floating-card floating-card-top"><span className="floating-icon pink-icon">↗</span><span><b>Send money</b><small>Simple transfers</small></span></div>
          <div className="phone">
            <div className="phone-camera" />
            <div className="phone-screen">
              <div className="phone-top"><span>9:41</span><span className="phone-status">● ● ▰</span></div>
              <div className="app-greeting"><div><small>Good morning,</small><b>Welcome to Toppay</b></div><div className="tiny-avatar">T</div></div>
              <div className="balance-card"><div className="balance-caption">WALLET BALANCE <span>◉</span></div><div className="balance-amount">৳ 24,580<span>.00</span></div><div className="balance-footer"><span>••••  4821</span><span className="balance-chip">ACTIVE</span></div></div>
              <div className="phone-section-title">Quick services <span>See all</span></div>
              <div className="quick-grid">
                <div><i className="quick-pink">↗</i><span>Send money</span></div>
                <div><i className="quick-lilac">＋</i><span>Add balance</span></div>
                <div><i className="quick-green">▣</i><span>Recharge</span></div>
                <div><i className="quick-orange">ϟ</i><span>Pay bills</span></div>
              </div>
              <div className="activity-heading">Recent activity <span>View all</span></div>
              <div className="activity-row"><div className="activity-icon">↗</div><div className="activity-name"><b>Mobile recharge</b><small>Today, 10:42 am</small></div><b className="activity-amount">− ৳250</b></div>
              <div className="activity-row"><div className="activity-icon activity-icon-lilac">＋</div><div className="activity-name"><b>Balance request</b><small>Yesterday</small></div><b className="activity-pending">Pending</b></div>
              <div className="phone-tabbar"><span className="tab-active">⌂<small>Home</small></span><span>▤<small>Activity</small></span><span>⌗<small>Scan</small></span><span>☻<small>Profile</small></span></div>
            </div>
          </div>
          <div className="floating-card floating-card-bottom"><div className="secure-icon">✓</div><span><b>Your activity, together</b><small>Track requests in one place</small></span></div>
          <div className="art-label">Your money, at a glance</div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Toppay highlights">
        <div><span className="strip-icon">✳</span><span><b>Everyday services</b><small>Useful tools, all together</small></span></div>
        <div><span className="strip-icon">◷</span><span><b>Activity at a glance</b><small>Follow your transaction status</small></span></div>
        <div><span className="strip-icon">⌑</span><span><b>Your account, your way</b><small>Personalize your app setup</small></span></div>
      </section>

      <section className="section features-section" id="features">
        <div className="section-heading">
          <div><div className="eyebrow"><span className="eyebrow-line" /> ONE APP, EVERYDAY ESSENTIALS</div><h2>Little money tasks.<br /><span>Much more organized.</span></h2></div>
          <p>Find the services you need, choose a payment method and see your activity without jumping between apps.</p>
        </div>
        <div className="feature-grid">
          {services.map((service, index) => (
            <article className="feature-card" key={service.title}>
              <div className={`feature-icon feature-tone-${index + 1}`}>{service.icon}</div>
              <h3>{service.title}</h3><p>{service.text}</p><span className="feature-arrow"><ArrowIcon /></span>
            </article>
          ))}
        </div>
        <div className="provider-note"><div className="provider-copy"><b>Choose a familiar way to pay</b><span>Toppay includes options for bKash, Nagad, Rocket and bank services.</span></div><div className="provider-pills"><span className="provider-bkash">bKash</span><span className="provider-nagad">Nagad</span><span className="provider-rocket">Rocket</span><span className="provider-bank">Bank</span></div></div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="how-inner">
          <div className="how-intro"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> A SIMPLE START</div><h2>Ready in a<br />few easy steps.</h2><p>Download the Android app and follow the setup prompts on your phone.</p><a className="button button-light" href={DOWNLOAD_URL}><DownloadIcon /> Get the Android app</a></div>
          <div className="step-list">{steps.map((step) => <article className="step" key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><span className="step-check">✓</span></article>)}</div>
        </div>
      </section>

      <section className="section clarity-section">
        <div className="clarity-card"><div className="clarity-mark">i</div><div><div className="eyebrow"><span className="eyebrow-line" /> GOOD TO KNOW</div><h2>See where things stand.</h2><p>Some payments are submitted as requests and may remain pending while they are reviewed. Open Pending transactions or Activity in Toppay to check their latest status.</p></div><a href="#faq" className="clarity-link">More answers <ArrowIcon /></a></div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="faq-heading"><div className="eyebrow"><span className="eyebrow-line" /> HERE TO HELP</div><h2>Questions, answered.</h2><p>A few useful things to know before you get started.</p></div>
        <div className="faq-list">{faqs.map((faq) => <details className="faq-item" key={faq.question}><summary>{faq.question}<span>＋</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="download-section" id="download">
        <div className="download-decoration download-circle-one" /><div className="download-decoration download-circle-two" />
        <div className="download-content"><div className="download-kicker"><span /> TOPPAY FOR ANDROID</div><h2>Your everyday,<br />a little more <i>together.</i></h2><p>Download the app and get started with Toppay.</p><a className="button button-white" href={DOWNLOAD_URL}><DownloadIcon /> Download APK <ArrowIcon /></a><small>Android installation file · Version 1.1.2</small></div>
        <div className="download-mark"><Image src="/toppay-logo.png" alt="Toppay app icon" width={128} height={128} /></div>
      </section>

      <footer className="site-footer"><a className="brand footer-brand" href="#top"><Image src="/toppay-logo.png" alt="" width={38} height={38} /><span>Toppay<span className="brand-period">.</span></span></a><p>Everyday money services, all in one place.</p><div className="footer-links"><a href="#features">Explore</a><a href="#how-it-works">Get started</a><a href="#faq">Help</a></div><span className="copyright">© 2026 Toppay</span></footer>
    </main>
  );
}
