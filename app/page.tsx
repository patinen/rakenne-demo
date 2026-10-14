"use client";

import { FormEvent, useState } from "react";

const navigation = [["#palvelut", "Palvelut"], ["#projektit", "Kohteet"], ["#meista", "Meistä"], ["#yhteys", "Yhteys"]];
const tickerItems = ["LUOTETTAVUUS", "AMMATTITAITO", "LAATU", "LUPAUKSET PIDETÄÄN"];

function TickerGroup() {
  return <div className="ticker-group">{tickerItems.map((item) => <span className="ticker-item" key={item}>{item}<b aria-hidden="true">✳</b></span>)}</div>;
}
const services = [
  ["01", "Uudisrakentaminen", "Kodit ja tilat, joilla on tarkoitus. Toimivat ratkaisut suunnitelmasta avaimiin."],
  ["02", "Korjausrakentaminen", "Fiksut remontit, toimivat tilat ja vanhasta ansaitusti parempaa."],
  ["03", "Toimitilat", "Työympäristöt ja liiketilat, joissa arki toimii ja ihmiset viihtyvät."],
];
const projects = [
  ["img-one", "ASUMINEN / KONSEPTIKUVA", "Koti, joka tuntuu omalta.", "01"],
  ["img-two", "REMONTOINTI / KONSEPTIKUVA", "Uusi elämä vanhoihin tiloihin.", "02"],
  ["img-three", "RAKENTAMINEN / KONSEPTIKUVA", "Jokainen yksityiskohta ratkaisee.", "03"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (event.currentTarget.reportValidity()) setSubmitted(true); }

  return <>
    <div className="demo-ribbon"><span><b>DESIGN CONCEPT / 01</b> — Kuvitteellinen yritys, demon yhteydenotot eivät lähetä tietoja.</span></div>
    <header className="site-header">
      <a className="brand" href="#alku" aria-label="Rakenne, alkuun"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>RAKENNE<span className="orange">.</span><small>RAKENNUSPALVELUT</small></span></a>
      <nav className={`nav ${menuOpen ? "open" : ""}`} id="main-nav" aria-label="Päänavigaatio">{navigation.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a href="#yhteys" className="nav-cta">Pyydä tarjous <span aria-hidden="true">↗</span></a>
      <button className="mobile-toggle" aria-label={menuOpen ? "Sulje valikko" : "Avaa valikko"} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
    </header>
    <main>
      <section className="hero" id="alku" aria-labelledby="hero-title">
        <div className="hero-copy"><div className="overline"><span className="orange-line" /> RAKENTAMISTA / JYVÄSKYLÄ & KESKI-SUOMI</div><h1 id="hero-title">TEEMME<br />SUUNNI<span className="orange">TELMISTA</span><br /><span className="outline">TOTTA.</span></h1><div className="hero-bottom"><p>Vankkaa rakentamista, selkeää yhteistyötä ja lopputuloksia, jotka kestävät aikaa. Alusta loppuun, niin kuin sovittiin.</p><a className="round-arrow" href="#palvelut" aria-label="Tutustu palveluihin">↓</a></div><div className="hero-coordinates">62°14′N / 25°44′E <span>—</span> © 2026 RAKENNE CONCEPT</div></div>
        <div className="hero-visual" role="img" aria-label="Moderni rakennustyömaa"><div className="hero-photo" /><div className="visual-label"><span>01 / 04</span><span>RAKENNETTU HUOLELLA. <b>VIIMEISTELTY AJATUKSELLA.</b></span></div><div className="corner-brackets" aria-hidden="true" /></div>
        <div className="hero-side-note">ALWAYS BUILDING FORWARD — 2026</div>
      </section>
      <section className="ticker" aria-label="Arvomme"><TickerGroup /></section>
      <section className="services section-pad" id="palvelut">
        <div className="section-top"><span className="eyebrow">01 / MITÄ TEEMME</span><span className="technical">PALVELUT / 03 KOKONAISUUTTA</span></div>
        <div className="split-heading"><h2>RAKENTAMINEN<br /><span>ON LUOTTAMUSASIA.</span></h2><p>Oli kyseessä uuden kodin rakentaminen tai vanhan päivittäminen, hyvä lopputulos syntyy tarkoista yksityiskohdista ja sujuvasta yhteistyöstä.</p></div>
        <div className="service-grid">{services.map(([number, title, description]) => <a href="#yhteys" className="service-card" key={number}><div className="service-head"><span>{number}</span><span className="mini-arrow" aria-hidden="true">↗</span></div><div className="service-icon" aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></a>)}</div>
      </section>
      <section className="work section-pad" id="projektit">
        <div className="section-top"><span className="eyebrow">02 / VALITUT KOHTEET</span><span className="technical">WORK / SELECTED PROJECTS</span></div><div className="work-heading"><h2>TYÖ PUHUU<br /><span>PUOLESTAAN.</span></h2><span>ESIMERKKIPROJEKTIT ↘</span></div>
        <div className="project-grid">{projects.map(([image, category, title, number], index) => <article className={`project-card ${index === 0 ? "project-wide" : ""}`} key={number}><div className={`project-image ${image}`} role="img" aria-label={title} /><div className="project-info"><div><span>{category}</span><h3>{title}</h3></div><span className="project-num">{number} ↗</span></div></article>)}</div>
        <p className="photo-note">Kuvat ovat konseptin kuvituskuvia, eivät toteutettujen asiakaskohteiden referenssejä.</p>
      </section>
      <section className="about section-pad" id="meista">
        <div className="section-top"><span className="eyebrow">03 / TAPA TEHDÄ</span><span className="technical">NO SHORTCUTS. NO SURPRISES.</span></div>
        <div className="about-layout"><div><h2>HYVÄ TYÖ<br />EI KAIPAA<br /><span className="orange">SELITYKSIÄ.</span></h2><p>Meille onnistunut rakennusprojekti on ennen kaikkea selkeä projekti. Tiedät, mitä tehdään, miksi tehdään ja missä vaiheessa ollaan.</p><a href="#yhteys" className="text-link">Jutellaan projektistasi <span aria-hidden="true">↗</span></a></div><div className="principles"><div><span>01 /</span><h3>Selkeä suunnitelma</h3><p>Yhteinen käsitys kustannuksista, aikataulusta ja lopputuloksesta.</p></div><div><span>02 /</span><h3>Avoin yhteydenpito</h3><p>Asiat kerrotaan silloin, kun ne tapahtuvat — ei vasta jälkeenpäin.</p></div><div><span>03 /</span><h3>Viimeistelty lopputulos</h3><p>Työn laatu näkyy myös siellä, minne katse ei ensimmäisenä osu.</p></div></div></div>
      </section>
      <section className="contact section-pad" id="yhteys">
        <div className="section-top"><span className="eyebrow">04 / OTETAAN YHTEYTTÄ</span><span className="technical">NEXT PROJECT / YOURS?</span></div>
        <div className="contact-layout"><div><h2>ONKO<br /><span className="outline">SEURAAVA</span><br />PROJEKTI<br />TEIDÄN?</h2><p>Kerro vähän suunnitelmastasi. Tehdään yhdessä siitä jotain kestävää.</p><p className="contact-small">DEMO / YHTEYDENOTTO EI VÄLITY OIKEALLE YRITYKSELLE.</p></div><form className="quote-form" onSubmit={submit}><label>Nimesi<input name="name" autoComplete="name" required placeholder="Etunimi Sukunimi" /></label><label>Sähköposti<input name="email" type="email" autoComplete="email" required placeholder="sinä@yritys.fi" /></label><label>Miten voimme auttaa?<select name="service" required defaultValue=""><option value="">Valitse palvelu</option><option>Uudisrakentaminen</option><option>Korjausrakentaminen</option><option>Toimitilat</option><option>Muu projekti</option></select></label><label>Projektin kuvaus<textarea name="message" required minLength={10} rows={4} placeholder="Kerro lyhyesti, mitä olet suunnitellut..." /></label><button className="submit" type="submit">Esikatsele yhteydenotto <span aria-hidden="true">↗</span></button><p className={`form-feedback ${submitted ? "success" : ""}`} role="status" aria-live="polite">{submitted ? "Esikatselu onnistui. Tämä on demo: tietoja ei lähetetty eikä tallennettu." : "Konseptidemo: lomakkeen tiedot eivät lähde palvelimelle."}</p></form></div>
      </section>
    </main>
    <footer className="footer section-pad"><div className="footer-title"><a href="#alku" className="brand footer-brand">RAKENNE<span className="orange">.</span></a><span>KODIT. TILAT. TULEVAISUUS.</span></div><div className="footer-bottom"><span>© 2026 RAKENNE — KUVITTEELLINEN DEMOYHTIÖ.</span><span>DESIGN & DEVELOPMENT CONCEPT.</span></div></footer>
  </>;
}
