import React, { useEffect } from "react";

export const useGoogleAnalytics = (id: string) => {
  const isDevelopment = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (isDevelopment) return;

    const script = document.createElement("script");

    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
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

   gtag("config", "${id}");
   `;

    document.head.appendChild(script);

    return () => {
      !isDevelopment && document.head.removeChild(script);
    };
  }, []);
};
