"use client";

export default function AnimatedWave() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
      {/* Back wave — slowest */}
      <svg
        className="wave-back relative block h-[60px]"
        style={{ width: "120%", marginLeft: "-10%" }}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 C120,50 240,55 360,40 C480,25 600,10 720,20 C840,30 960,50 1080,45 C1200,40 1320,25 1440,30 L1440,60 L0,60 Z"
          fill="#f8fafc"
          fillOpacity="0.3"
        />
      </svg>

      {/* Middle wave */}
      <svg
        className="wave-mid relative block h-[50px] -mt-[50px]"
        style={{ width: "120%", marginLeft: "-10%" }}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,35 C160,55 320,20 480,30 C640,40 800,55 960,35 C1120,15 1280,40 1440,30 L1440,60 L0,60 Z"
          fill="#f8fafc"
          fillOpacity="0.5"
        />
      </svg>

      {/* Front wave — fastest */}
      <svg
        className="wave-front relative block h-[40px] -mt-[40px]"
        style={{ width: "120%", marginLeft: "-10%" }}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C200,55 400,15 600,30 C800,45 1000,20 1200,35 C1300,42 1380,38 1440,35 L1440,60 L0,60 Z"
          fill="#f8fafc"
          fillOpacity="1"
        />
      </svg>
    </div>
  );
}
