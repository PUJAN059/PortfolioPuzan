"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectImage({ src, alt }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="aspect-video bg-[#00ADB5]/10 rounded-xl flex items-center justify-center border border-[#EEEEEE]/5">
        <span className="text-4xl text-[#EEEEEE]/20">{alt?.charAt(0) || "?"}</span>
      </div>
    );
  }

  return (
    <div className="aspect-video rounded-xl overflow-hidden border border-[#EEEEEE]/5">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={450}
        className="w-full h-full object-cover"
        onError={() => setHasError(true)}
        unoptimized
      />
    </div>
  );
}
