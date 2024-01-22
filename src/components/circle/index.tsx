'use client';

import { useMemo } from 'react';

export type CircleProps = {
  width: number;
  stroke: string;
  strokeWidth: number;
  progress?: number;
} & { className?: string };

export default function Circle({
  width,
  stroke,
  strokeWidth,
  className,
  progress,
}: CircleProps) {
  const radius = useMemo(
    () => width / 2 - strokeWidth * 2,
    [width, strokeWidth],
  );

  const circumference = useMemo(() => radius * 2 * Math.PI, [radius]);

  const dashoffset = useMemo(
    () =>
      progress
        ? circumference - (progress / 100) * circumference
        : circumference,
    [progress, circumference],
  );

  return (
    <svg className={className} width={width} height={width}>
      <circle
        className="origin-[50%_50%] -rotate-90 transition-[350ms_stroke-dashoffset]"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={dashoffset}
        fill="transparent"
        r={radius}
        cx={width / 2}
        cy={width / 2}
      />
    </svg>
  );
}
