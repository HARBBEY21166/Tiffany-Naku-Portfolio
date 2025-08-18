"use client";

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="w-64 h-64">
        <DotLottieReact
          src="https://lottie.host/058cf872-728d-42bf-b5c9-f27cca0f402f/Dj0l9GUzME.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Preloader;
