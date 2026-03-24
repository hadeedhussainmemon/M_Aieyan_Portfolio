'use client';
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  details: string;
  tech: string[];
  img: string;
}

const PROJECTS: Project[] = [
  { 
    id: "poly_kinetics",
    title: "POLYMER_KINETICS", 
    subtitle: "NED_UA_COURSEWORK",
    desc: "Focused study on the kinetic mechanisms of polymerization in industrial reactors.",
    details: "Deep exploration of addition and condensation polymerization. Calculated reaction rates for various catalysts and analyzed molecular weight distribution for polyethylene production.",
    tech: ["Reaction Kinetics", "Catalysis", "Molecular Modeling"],
    img: "https://images.unsplash.com/photo-1532187863486-abf51ad9906e?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "petro_refining",
    title: "PETRO_REFINING_ANALYSIS", 
    subtitle: "PROCESS_DYNAMICS",
    desc: "Analysis of crude oil distillation and downstream petrochemical manufacturing.",
    details: "Modeled fractional distillation columns and identified optimization parameters for kerosene and diesel extraction. Simulated heat exchanger networking for energy efficiency.",
    tech: ["HYSYS Modeling", "Heat Exchangers", "Distillation"],
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "material_lab",
    title: "MATERIAL_PROPERTIES_LAB", 
    subtitle: "CHARACTERIZATION",
    desc: "Laboratory-based characterization of thermoplastic and thermosetting polymers.",
    details: "Conducted tensile and impact testing on newly synthesized polymer blends. Analyzed thermal stability using DSC (Differential Scanning Calorimetry) techniques.",
    tech: ["Mechanical Testing", "DSC Analysis", "Material Science"],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [bootLogs, setBootLogs] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const logs = [
      "INITIALIZING_SYSTEM_V3.1.0...",
      "LOADING_PROFESSIONAL_MODULES...",
      "CONNECTING_TO_NED_ENGINEERING_CORE...",
      "SYNCING_LINKEDIN_AUTHORITY...",
      "ENCRYPTING_BIOMETRIC_DATA...",
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
    }, 300);

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

    // Throttled Magnetic Effect
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        const magneticItems = document.querySelectorAll('.btn');
        magneticItems.forEach((btn) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const distance = Math.sqrt(x * x + y * y);

          if (distance < 120) {
            (btn as HTMLElement).style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            (btn as HTMLElement).style.transition = 'transform 0.1s ease-out';
          } else {
            (btn as HTMLElement).style.transform = `translate(0px, 0px)`;
            (btn as HTMLElement).style.transition = 'transform 0.3s ease-out';
          }
        });
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

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedProject(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}
            >[ CLOSE_X ]</button>
            <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-safety)', fontSize: '0.7rem', marginBottom: '1rem' }}>PROJECT_DETAILS://{selectedProject.title}</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{selectedProject.title}</h2>
            <img 
              src={selectedProject.img} 
              alt={`Engineering Project by Muhammad Aieyan Channa: ${selectedProject.title}`} 
              style={{ width: '100%', height: '300px', objectFit: 'cover', border: '1px solid var(--glass-border)', marginBottom: '2rem' }} 
            />
            <div style={{ borderLeft: '2px solid var(--accent-safety)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>{selectedProject.details}</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {selectedProject.tech.map(t => (
                <span key={t} style={{ background: 'rgba(255,107,0,0.1)', color: 'var(--accent-safety)', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>#{t.toUpperCase()}</span>
              ))}
            </div>
          </div>
        </div>
      )}

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
        }} aria-label="Muhammad Aieyan Channa - Petrochemical Engineering Hero Image">
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
            [ STATUS: MUHAMMAD_AIEYAN_CHANNA // STUDENT ]
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
            MUHAMMAD AIEYAN <span style={{ color: 'var(--accent-safety)' }}>CHANNA</span>
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
            PETROCHEMICAL ENGINEERING STUDENT // POLYMER SPECIALIST<br/>
            <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>NED UNIVERSITY OF ENGINEERING & TECHNOLOGY (2025–2029)</span>
          </p>
          <div className="reveal hero-buttons" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', width: '100%', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
            <a href="/Aieyan-CV.pdf" target="_blank" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              RESUME.PDF
            </a>
            <a href="https://www.linkedin.com/in/muhammad-aieyan-channa-1434213a7/" target="_blank" className="btn btn-outline">LINKEDIN_PROFILE</a>
          </div>
        </section>

        {/* --- Timeline & Skills Section --- */}
        <section id="about" style={{ padding: 'var(--section-padding)', maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid" style={{ gridTemplateColumns: '1.5fr 1fr', gap: '6rem' }}>
            <div className="reveal">
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-safety)', fontSize: '0.7rem', marginBottom: '1.5rem' }}>[ 01_SCIENTIFIC_JOURNEY ]</div>
              <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>ACADEMIC & WORK <span style={{ color: 'var(--accent-safety)' }}>TIMELINE</span></h2>
              
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-safety)', marginBottom: '0.5rem' }}>2025 — PRESENT</div>
                <h3>NED UNIVERSITY</h3>
                <p style={{ color: 'var(--text-secondary)' }}>BE Polymer And Petrochemical Engineering. Pursuing specialized research in polymer blends.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>2023 — 2024</div>
                <h3>SIR YASIR SCHOOLING SYSTEM</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Secondary Mathematics Instructor. Education management and student assessment.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-safety)', marginBottom: '0.5rem' }}>2020 — 2023</div>
                <h3>PAINT MASTER'S FACTORY</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Inventory Clerk & Cashier. Managed industrial logistics and accurate sales reporting.</p>
              </div>

              {/* Added Bio for SEO Authority */}
              <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderLeft: '2px solid var(--accent-safety)' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-safety)', marginBottom: '1rem' }}>BIO_SUMMARY://MUHAMMAD_AIEYAN_CHANNA</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  <strong>Muhammad Aieyan Channa</strong> is a forward-thinking student of <strong>Polymer and Petrochemical Engineering</strong> at NED University. With a strong foundation in industrial logistics from his time at <strong>Paint Master's Factory</strong> and a passion for academic instruction at <strong>Sir Yasir Schooling System</strong>, Aieyan is dedicated to advancing the field of material science through research and process optimization. This portfolio serves as the definitive digital presence for <strong>Muhammad Aieyan Channa</strong>, showcasing his academic milestones and technical research within the petrochemical sector.
                </p>
              </div>
            </div>

            <div className="reveal">
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-safety)', fontSize: '0.7rem', marginBottom: '1.5rem' }}>[ 02_TECH_CORE ]</div>
              <h2 style={{ fontSize: '2rem', marginBottom: '4rem' }}>ENGINEERING <span style={{ color: 'var(--accent-cyan)' }}>EXPERTISE</span></h2>
              
              {[
                { label: "POLYMER_CHEMISTRY", value: "90%" },
                { label: "PETROCHEMICAL_PROCESSES", value: "85%" },
                { label: "THERMODYNAMICS", value: "80%" },
                { label: "REACTOR_DESIGN", value: "75%" },
                { label: "MATERIAL_ANALYSIS", value: "88%" }
              ].map((s, i) => (
                <div key={i} style={{ marginBottom: '2.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    <span>{s.label}</span>
                    <span style={{ color: 'var(--accent-safety)' }}>{s.value}</span>
                  </div>
                  <div className="gauge-track">
                    <div className="gauge-fill" style={{ width: !loading ? s.value : '0%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* --- Projects Section --- */}
        <Section id="projects" title="Core Research" label="03_RESEARCH" className="reveal" style={{ padding: 'var(--section-padding)', maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid">
            {PROJECTS.map((p) => (
              <div key={p.id} className="glass card" style={{ padding: '0', background: 'transparent', cursor: 'pointer' }} onClick={() => setSelectedProject(p)}>
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={p.img} 
                    alt={`Muhammad Aieyan Channa Research: ${p.title}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} 
                  />
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
                  }}>[ VIEW_DATA ]</div>
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
          <div className="glass card" style={{ padding: '5rem 2rem', maxWidth: '1000px', margin: '0 auto', border: '1px solid var(--accent-safety)', background: 'rgba(255,107,0,0.02)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800 }}>[ COMMAND_CENTER ]</h2>
            <p style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '4rem' }}>ESTABLISHING_ENCRYPTED_TUNNEL...</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left', marginBottom: '3rem' }}>
              <div className="glass" style={{ padding: '1.5rem', background: 'rgba(255,107,0,0.05)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-safety)', marginBottom: '0.5rem' }}>// DESTINATION_ID</div>
                <div style={{ fontSize: '1.1rem' }}>Muhammad Aieyan Channa</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Petrochemical Engineering Dept.</div>
              </div>
              <div className="glass" style={{ padding: '1.5rem', background: 'rgba(0,240,255,0.05)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>// GEOLOCATION</div>
                <div style={{ fontSize: '1.1rem' }}>Scheme-33, Karachi</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Sindh_Pakistan_Region</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <a href="mailto:Chanaieyan245@gmail.com" className="btn" style={{ background: 'var(--accent-safety)', padding: '1rem 3rem' }}>UPLINK_MESSAGE</a>
              <a href="https://www.linkedin.com/in/muhammad-aieyan-channa-1434213a7/" target="_blank" className="btn btn-outline" style={{ borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)', padding: '1rem 3rem' }}>LINKEDIN_CONNECT</a>
            </div>
            
            <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', gap: '4rem', opacity: 0.2, fontFamily: 'var(--font-mono)', fontSize: '0.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-safety)', animation: 'pulse 1s infinite' }} />
                LIVE_TRANSMISSION
              </div>
              <span>AES_256_PROTOCOL</span>
              <span>VERIFIED_NED_CORE</span>
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
        <div style={{ marginBottom: '1rem' }}>&copy; {new Date().getFullYear()} MUHAMMAD_AIEYAN_CHANNA // SYSTEM_V3.1.0</div>
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
