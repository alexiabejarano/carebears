import React from "react";
import styles from "./CallToAction.module.css";
import cncpt from '../../assets/cta2.png';
import cllctrs from '../../assets/cta.png';
import lmtd from '../../assets/cta3.png';

const CallToAction = () => {
  const concept = {
    ttl: "SWEET NEW SINGLES",
    sbttl: "Hi Artist!",
    prgrph:
      "I’m so excited to introduce you to our latest collab & my all-time fave core childhood memories. Care Bears™! Each color represents the individuality & spirit of some of our favorite Care Bears.",
  };
  const collectors = {
    ttl: "CARE BEARS™ X LIGHTS LACQUER",
    sbttl: "Collectors Edition",
    prgrph:
      "Experience the magic of our newest collaboration with our limited edition Collectors Box. This exclusive PR experience includes all 8 polishes and our Care Bears™ x Lights Lacquer nail art stickers.",
  };
  const limited = {
    ttl: "CARE BEARS™ X LIGHTS LACQUER",
    sbttl: "Limited Edition",
    prgrph:
      "Dive in to these one-of-a-kind, 12-free, vegan & cruelty free shades - all curated with a lot of heart & now featuring our BRAND NEW Care Bears Nail Tips created with the at-home artist in mind.",
  };

  return (
    <>
      <section className={styles["cta"]}>
        <CtaText info={concept} />
        <CtaImg bg={cncpt}/>
      </section>
      <section className={styles["cta"]}>
        <CtaImg bg={cllctrs}/>
        <CtaText info={collectors} />
      </section>
      <section className={styles["cta"]}>
        <CtaText info={limited} />
        <CtaImg bg={lmtd}/>
      </section>
    </>
  );
};

const CtaText = (props) => {
  return (
    <>
      <div className={styles["cta-text"]}>
        <h2>{props.info.ttl}</h2>
        <h1>{props.info.sbttl}</h1>
        <p>{props.info.prgrph}</p>
        <button>Shop Now</button>
      </div>
    </>
  );
};

const CtaImg = (props) => {
  return (
    <>
      <div className={styles["cta-img"]} style={{backgroundImage: "url(" + props.bg + ")"}}></div>
    </>
  );
};

export default CallToAction;
