import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-[#1E293B]"
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-[#FB7185] transition-colors">
              스킬
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-[#FB7185] transition-colors">
              경력
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-[#FB7185] transition-colors">
              프로젝트
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-[#FB7185] transition-colors">
              연락처
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#1E293B]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-[#FB7185] transition-colors text-left">
              스킬
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-[#FB7185] transition-colors text-left">
              경력
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-[#FB7185] transition-colors text-left">
              프로젝트
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-[#FB7185] transition-colors text-left">
              연락처
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}