import React, { useEffect } from "react";

export const useGoogleAnalytics = () => {
  const isDevelopment = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (isDevelopment) return;

    const script = document.createElement("script");

    script.src = "https://www.googletagmanager.com/gtag/js?id=G-HN9LHZ1WVG";
    script.async = true;

    document.head.appendChild(script);

    return () => {
      !isDevelopment && document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isDevelopment) return;

    const script = document.createElement("script");

    script.textContent = `
   window.dataLayer = window.dataLayer || [];
   function gtag() {
     dataLayer.push(arguments);
   }
   gtag("js", new Date());

   gtag("config", "G-HN9LHZ1WVG");
   `;

    document.head.appendChild(script);

    return () => {
      !isDevelopment && document.head.removeChild(script);
    };
  }, []);
};
