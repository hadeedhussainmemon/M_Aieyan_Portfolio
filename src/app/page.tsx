'use client';
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [bootLogs, setBootLogs] = useState<string[]>([]);

  useEffect(() => {
    const logs = [
      "INITIALIZING_SYSTEM_V3.0.1...",
      "LOADING_POLYMER_MODELS...",
      "CONNECTING_TO_NED_NETWORK...",
      "EXTRACTING_AIEYAN_CORE_DATA...",
      "ENCRYPTING_TRANSMISSION...",
      "BOOT_SEQUENCE_COMPLETE."
    ];

    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < logs.length) {
        setBootLogs(prev => [...prev, logs[currentLog]]);
        currentLog++;
      } else {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 800);
      }
    }, 400);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Magnetic Effect
    const handleMouseMove = (e: MouseEvent) => {
      const magneticItems = document.querySelectorAll('.btn');
      magneticItems.forEach((btn) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);

        if (distance < 150) {
          (btn as HTMLElement).style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        } else {
          (btn as HTMLElement).style.transform = `translate(0px, 0px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Boot Loader Overlay */}
      <div className={`loader-overlay ${!loading ? 'hidden' : ''}`}>
        <div style={{ maxWidth: '400px', width: '100%', padding: '2rem' }}>
          {bootLogs.map((log, i) => (
            <div key={i} className="terminal-text" style={{ 
              opacity: i === bootLogs.length - 1 ? 1 : 0.5,
              color: i === bootLogs.length - 1 ? 'var(--accent-safety)' : '#444'
            }}>
              &gt; {log}
            </div>
          ))}
          {bootLogs.length > 0 && (
            <div style={{ 
              height: '2px', 
              background: 'var(--accent-safety)', 
              width: `${(bootLogs.length / 6) * 100}%`,
              marginTop: '1rem',
              transition: 'width 0.3s ease'
            }} />
          )}
        </div>
      </div>

      <Navbar />
      <div className="scanline" />
      <main>
        {/* --- Hero Section --- */}
        <section id="home" style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.7) 0%, rgba(5,5,5,0.98) 100%), url("/images/hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          textAlign: 'center',
          padding: '0 2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="particle-bg" />
          
          <div className="reveal" style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.8rem', 
            color: 'var(--accent-safety)',
            marginBottom: '1.5rem',
            border: '1px solid var(--accent-safety)',
            padding: '4px 16px',
            borderRadius: '100px',
            background: 'rgba(255,107,0,0.05)',
            letterSpacing: '0.1em',
            position: 'relative',
            zIndex: 2
          }}>
            [ PROTOCOL: AIEYAN_PHASE_01 ]
          </div>
          <h1 className="reveal" style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            color: '#fff', 
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            fontWeight: 800,
            position: 'relative',
            zIndex: 2
          }}>
            MUHAMMAD <span style={{ color: 'var(--accent-safety)' }}>AIEYAN</span>
          </h1>
          <p className="reveal" style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '700px',
            marginBottom: '3.5rem',
            letterSpacing: '0.05em',
            fontFamily: 'var(--font-heading)',
            position: 'relative',
            zIndex: 2
          }}>
            PETROCHEMICAL ENGINEER // POLYMER SPECIALIST<br/>
            <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>NED UNIVERSITY OF ENGINEERING & TECHNOLOGY (2025–2029)</span>
          </p>
          <div className="reveal hero-buttons" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', width: '100%', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
            <a href="/Aieyan-CV.pdf" target="_blank" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              GET_RESUME.PDF
            </a>
            <a href="#contact" className="btn btn-outline">INITIALIZE_CONNECTION</a>
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            opacity: 0.4,
            letterSpacing: '0.2em',
            animation: 'pulse 2s infinite',
            zIndex: 2
          }}>
            [ SCROLL TO VIEW DATA ]
          </div>
        </section>

        {/* --- About Section --- */}
        <Section id="about" title="Scientific Narrative" label="01_PROFILE" className="reveal" style={{ padding: 'var(--section-padding)', maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid">
            <div className="glass card">
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-safety)', fontSize: '0.7rem', marginBottom: '1rem' }}>[ CORE_MAJOR ]</div>
              <h3 style={{ marginBottom: '1.5rem' }}>Polymer & Petrochemical Engineering</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Dedicated student at **NED University** pursuing a Bachelor of Engineering. Focused on the fundamental principles of polymer chemistry and petrochemical processes to drive innovation in material science and sustainable engineering practices.
              </p>
            </div>
            <div className="glass card">
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-safety)', fontSize: '0.7rem', marginBottom: '1rem' }}>[ EDUCATION ]</div>
              <h3 style={{ marginBottom: '1.5rem' }}>Academic Path</h3>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>BE Polymer And Petrochemical Engineering</strong><br/>
                  NED University // 2025–2029
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Intermediate (Pre-Engineering)</strong><br/>
                  GDBC Johar // 2024–2025
                </div>
              </div>
            </div>
            <div className="glass card">
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-safety)', fontSize: '0.7rem', marginBottom: '1rem' }}>[ ACHIEVEMENTS ]</div>
              <h3 style={{ marginBottom: '1.5rem' }}>Honors & Verified</h3>
              <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '0.8rem' }}>• <strong style={{ color: 'var(--text-primary)' }}>Certificate of Excellence</strong> (2022) — IU Schooling System</li>
                <li>• <strong style={{ color: 'var(--text-primary)' }}>Player of the Month</strong> (2024) — Johar College</li>
              </ul>
            </div>
          </div>
        </Section>

        <div className="divider" />

        {/* --- Experience Section --- */}
        <Section id="experience" title="Professional History" label="02_HISTORY" className="reveal" style={{ padding: 'var(--section-padding)', maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid">
            <div className="glass card" style={{ borderLeft: '4px solid var(--accent-safety)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-safety)' }}>2020 – 2023</span>
                <span style={{ background: 'rgba(255,107,0,0.1)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.65rem' }}>MANAGEMENT</span>
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>Paint Master's Factory</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>Position: Cashier</p>
              <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Managed daily cash transactions and accurate payment processing.</li>
                <li style={{ marginBottom: '0.5rem' }}>• Balanced cash drawers and generated daily sales reports.</li>
                <li>• Coordinated with sales teams and supported inventory tracking.</li>
              </ul>
            </div>
            <div className="glass card" style={{ borderLeft: '4px solid var(--accent-cyan)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>2023 – 2024</span>
                <span style={{ background: 'rgba(0,240,255,0.1)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.65rem' }}>ACADEMIC</span>
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>Sir Yasir Schooling System</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>Position: Maths Teacher</p>
              <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Delivered high-quality mathematics instruction for secondary students.</li>
                <li style={{ marginBottom: '0.5rem' }}>• Conducted student assessments and tracked academic progress.</li>
                <li>• Designed engaging lesson plans aligned with curriculum standards.</li>
              </ul>
            </div>
          </div>
        </Section>

        <div className="divider" />

        {/* --- Projects Section --- */}
        <Section id="projects" title="Technical Focus" label="03_RESEARCH" className="reveal" style={{ padding: 'var(--section-padding)', maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid">
            {[
              { 
                title: "POLYMER_KINETICS", 
                subtitle: "NED_UA_COURSEWORK",
                desc: "Focused study on the kinetic mechanisms of addition and condensation polymerization in industrial reactor settings.",
                img: "https://images.unsplash.com/photo-1532187863486-abf51ad9906e?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: "PETRO_REFINING_ANALYSIS", 
                subtitle: "PROCESS_DYNAMICS",
                desc: "Analysis of crude oil distillation processes and downstream petrochemical manufacturing workflows.",
                img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: "MATERIAL_PROPERTIES_LAB", 
                subtitle: "CHARACTERIZATION",
                desc: "Laboratory-based characterization of thermoplastic and thermosetting polymers for structural engineering applications.",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              }
            ].map((p, i) => (
              <div key={i} className="glass card" style={{ padding: '0', background: 'transparent' }}>
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                  <div style={{ 
                    position: 'absolute', 
                    top: '20px', 
                    right: '20px', 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.6rem',
                    background: 'rgba(0,0,0,0.85)',
                    padding: '4px 8px',
                    border: '1px solid var(--accent-safety)',
                    color: 'var(--accent-safety)'
                  }}>[ {p.subtitle} ]</div>
                </div>
                <div style={{ padding: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-safety)', fontSize: '0.65rem', marginBottom: '0.5rem' }}>TECH_FILE://{p.title}</div>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* --- Contact Section --- */}
        <Section id="contact" title="Initialize Connection" label="04_NETWORK" className="reveal" style={{ padding: 'var(--section-padding)', maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <div className="glass card" style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', border: '1px solid rgba(0,240,255,0.15)' }}>
            <div style={{ 
              fontFamily: 'var(--font-mono)', 
              color: 'var(--accent-cyan)', 
              fontSize: '1rem', 
              marginBottom: '2rem' 
            }}>LOCATION: SCHEME-33, KARACHI_PK</div>
            
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 800 }}>READY FOR <span style={{ color: 'var(--accent-safety)' }}>INDUSTRIAL</span> INTEGRATION</h2>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <a href="mailto:Chanaieyan245@gmail.com" className="btn" style={{ background: 'var(--accent-safety)' }}>Send Data Packet</a>
              <a href="tel:+923121842124" className="btn btn-outline" style={{ borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}>VOICE://+92-312-1842124</a>
            </div>
            
            <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', opacity: 0.5, fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>
              <span>ENCRYPTED_END_TO_END</span>
              <span>•</span>
              <span>256-BIT_ENCRYPTION</span>
            </div>
          </div>
        </Section>
      </main>

      <footer style={{ 
        borderTop: '1px solid var(--glass-border)', 
        padding: '4rem 0', 
        textAlign: 'center', 
        fontFamily: 'var(--font-mono)', 
        fontSize: '0.7rem', 
        color: '#444' 
      }}>
        <div style={{ marginBottom: '1rem' }}>&copy; {new Date().getFullYear()} MUHAMMAD_AIEYAN // SYSTEM_V3.0.1</div>
        <div style={{ letterSpacing: '0.4em' }}>TRANSMISSION COMPLETE // DATA SECURED</div>
      </footer>

      <style jsx global>{`
        @keyframes pulse {
          0% { opacity: 0.2; }
          50% { opacity: 0.6; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </>
  );
}
