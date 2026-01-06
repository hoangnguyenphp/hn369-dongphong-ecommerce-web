import Script from "next/script";

export default function AdsBanner() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle block"
        data-ad-client="ca-pub-XXXX"
        data-ad-slot="YYYY"
        data-ad-format="auto"
      />
    </>
  );
}
