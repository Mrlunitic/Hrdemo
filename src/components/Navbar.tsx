import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useAuth } from "../context/AuthContext";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useTranslation();
  const { user } = useAuth();
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const whoWeAreItems = [
    { label: "About Us", href: "/about" },
    { label: "Message From Chairman", href: "/about#chairman-message" },
    { label: "Organization Structure", href: "/community#organization-chart" },
    { label: "Milestones & Honors", href: "/about" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { 
      label: "Who We Are", 
      href: "#", 
      isDropdown: true, 
      items: whoWeAreItems 
    },
    { label: "Services", href: "/solutions" },
    { label: "Job Sectors", href: "/resources" },
    { label: "Events", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-muted shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link 
          to="/" 
          className="flex items-center gap-3 group"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img src="/logo.png" alt="Kangaroo" className="h-14 w-auto object-contain transition-transform group-hover:scale-105" />
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-heading font-black text-[#1A1A1A] tracking-tight">
              Kangaroo
            </span>
            <span className="text-2xl sm:text-3xl font-heading font-bold text-primary tracking-tight">
              Human Resources
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.label} 
                className="relative px-3 py-2"
                onMouseEnter={link.isDropdown ? handleMouseEnter : undefined}
                onMouseLeave={link.isDropdown ? handleMouseLeave : undefined}
              >
                {link.isDropdown ? (
                  <button 
                    className={`flex items-center gap-1.5 text-sm font-bold transition-all ${
                      dropdownOpen ? "text-accent" : "text-primary hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-sm font-bold transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all ${
                      location.pathname === link.href 
                        ? "text-accent after:w-full" 
                        : "text-primary hover:text-accent after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.isDropdown && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-accent rounded-xl shadow-xl border border-accent/20 overflow-hidden z-[60]"
                      >
                        <div className="flex flex-col py-2">
                          {link.items?.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="h-8 w-px bg-muted mx-2" />

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            {user ? (
              <Link
                to="/admin"
                className="text-sm font-bold text-accent hover:underline decoration-2 underline-offset-4"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-sm font-bold text-primary hover:text-accent transition-colors"
              >
                Admin
              </Link>
            )}
            <Link
              to="/contact"
              className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            className="p-2 rounded-lg bg-muted/50 text-primary transition-colors hover:bg-muted"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-muted overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-8">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col">
                  {link.isDropdown ? (
                    <>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-4 mb-2 mt-4">
                        {link.label}
                      </div>
                      {link.items?.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="px-4 py-3 text-base font-bold text-primary hover:bg-muted rounded-xl transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`px-4 py-3 text-lg font-bold rounded-xl transition-colors ${
                        location.pathname === link.href 
                          ? "bg-accent/10 text-accent" 
                          : "text-primary hover:bg-muted"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Link
                  to="/login"
                  className="px-4 py-3 text-center font-bold text-primary border border-muted rounded-xl"
                  onClick={() => setOpen(false)}
                >
                  Admin Login
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-3 text-center font-bold text-white bg-primary rounded-xl"
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
