import { Bot, Heart, ArrowUp } from 'lucide-react';

const footerLinks = {
  navigazione: [
    { label: 'Home', href: '#home' },
    { label: 'Progetti', href: '#projects' },
    { label: 'Competenze', href: '#skills' },
    { label: 'Contatti', href: '#contact' },
  ],
  servizi: [
    { label: 'AI Agents', href: '#' },
    { label: 'Chatbot', href: '#' },
    { label: 'NLP Solutions', href: '#' },
    { label: 'Consulting', href: '#' },
  ],
  risorse: [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Documentazione', href: '#' },
    { label: 'GitHub', href: 'https://github.com/SIMONE010afk' },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1f1f1f] text-white relative">
      {/* Main footer content */}
      <div className="section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0070a0] to-[#2c90c9] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-lg">AI Agent Dev</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Creo agenti intelligenti che trasformano il modo in cui 
                interagisci con la tecnologia.
              </p>
              
              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-[#0070a0] transition-colors">
                  <ArrowUp className="w-4 h-4" />
                </div>
                Torna su
              </button>
            </div>

            {/* Navigation links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Navigazione</h4>
              <ul className="space-y-3">
                {footerLinks.navigazione.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0070a0] to-[#2c90c9] group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Servizi</h4>
              <ul className="space-y-3">
                {footerLinks.servizi.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0070a0] to-[#2c90c9] group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Risorse</h4>
              <ul className="space-y-3">
                {footerLinks.risorse.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0070a0] to-[#2c90c9] group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="section-padding py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm text-center sm:text-left">
              <p>© {new Date().getFullYear()} Simone Torrengo. Tutti i diritti riservati.</p>
              <p className="text-xs mt-1 text-gray-500">
                Questo sito è protetto da copyright. È vietata la riproduzione non autorizzata.
              </p>
            </div>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Fatto con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Italia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
