import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ background: '#0B1411' }}>
      {/* Primary glow blob — top-left */}
      <div
        className="blob-anim absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(163,230,53,0.5) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Secondary glow blob — bottom-right */}
      <div
        className="blob-anim-delayed absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(74,222,128,0.45) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      {/* Subtle center accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, rgba(163,230,53,0.6) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(163,230,53,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(163,230,53,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
}
