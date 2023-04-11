import Script from "next/script";

const Scripts = () => {
  return (
    <>
      {/* 구글 애드센스 script */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9275693571411030"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default Scripts;
