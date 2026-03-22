'use client';
import { useEffect, useRef, ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  label?: string;
  style?: React.CSSProperties;
}

export default function Section({ id, children, className = '', title, label, style }: SectionProps) {
  return (
    <section id={id} className={className} style={{ ...style }}>
      {title && (
        <h2 className="section-title reveal" data-label={label || id.toUpperCase()}>
          {title}
        </h2>
      )}
      <div className="reveal">{children}</div>
    </section>
  );
}
