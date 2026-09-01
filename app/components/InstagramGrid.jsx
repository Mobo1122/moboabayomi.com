import React, { useEffect } from "react";

const ELFSIGHT_APP_CLASS = "elfsight-app-55d857cc-1d42-4d55-ba3b-9dd61b2ce272";
const ELFSIGHT_SRC = "https://elfsightcdn.com/platform.js";

/**
 * Elfsight-hosted Instagram feed for @notmobo.
 *
 * The widget renders itself into the div once Elfsight's platform script
 * loads, so this component only has to make sure that script is on the page
 * exactly once. It is loaded in an effect rather than in the document head so
 * that the prerendered HTML stays free of third-party script tags.
 */
export default function InstagramGrid() {
  useEffect(() => {
    if (document.querySelector(`script[src="${ELFSIGHT_SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = ELFSIGHT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div className={ELFSIGHT_APP_CLASS} data-elfsight-app-lazy />;
}
