import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [

  { name: 'ITS Academy ICT Piemonte', color: '#FF0000' },
  { name: 'Microsoft', color: '#00A4EF' },
  { name: 'OpenAI', color: '#10A37F' },
  { name: 'Anthropic', color: '#D97757' },
  { name: 'Intesa Sanpaolo Innovation Centre', color: '#FF6600'},
];

export default function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-white relative overflow-hidden"
    >
      {/* Gradient masks for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="section-padding mb-8">
        <p className="text-center text-[#33383f] text-sm uppercase tracking-widest">
          Clienti che hanno creduto in me
        </p>
      </div>

      {/* Infinite scroll track */}
      <div className="relative overflow-hidden">
        <div 
          ref={trackRef}
          className="flex animate-scroll hover:pause-animation"
          style={{
            animation: 'scroll 30s linear infinite',
            width: 'fit-content'
          }}
        >
          {/* First set */}
          {[...clients, ...clients].map((client, index) => (
            <div 
              key={index}
              className="flex-shrink-0 mx-8 group cursor-pointer"
            >
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#f7f9fa] border border-[#dee5eb] transition-all duration-300 group-hover:border-[#0070a0] group-hover:shadow-lg group-hover:shadow-[#0070a0]/10">
                {/* Logo placeholder with initial */}
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: client.color }}
                >
                  {client.name[0]}
                </div>
                <span className="text-[#1f1f1f] font-medium whitespace-nowrap group-hover:text-[#0070a0] transition-colors">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .hover\:pause-animation:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
