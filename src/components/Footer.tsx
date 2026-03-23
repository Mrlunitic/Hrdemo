import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const footerSections = [
    {
      title: t('footer.sections.solutions'),
      links: [
        { label: t('footer.links.talent'), href: "/solutions" },
        { label: t('footer.links.learning'), href: "/solutions" },
        { label: t('footer.links.analytics'), href: "/solutions" },
        { label: t('footer.links.compliance'), href: "/solutions" },
      ]
    },
    {
      title: t('footer.sections.resources'),
      links: [
        { label: t('footer.links.webcasts'), href: "/resources" },
        { label: t('footer.links.research'), href: "/resources" },
        { label: t('footer.links.whitepapers'), href: "/resources" },
        { label: t('footer.links.podcasts'), href: "/resources" },
      ]
    },
    {
      title: t('footer.sections.company'),
      links: [
        { label: t('footer.links.about'), href: "/about" },
        { label: t('footer.links.careers'), href: "/contact" },
        { label: t('footer.links.press'), href: "/about" },
        { label: t('footer.links.contact'), href: "/contact" },
      ]
    },
    {
      title: t('footer.sections.legal'),
      links: [
        { label: t('footer.links.privacy'), href: "#" },
        { label: t('footer.links.terms'), href: "#" },
        { label: t('footer.links.cookie'), href: "#" },
      ]
    },
    {
      title: t('footer.quickLinks.title'),
      links: [
        { label: t('footer.quickLinks.dofe'), href: "https://www.dofe.gov.np/" },
        { label: t('footer.quickLinks.moless'), href: "https://www.moless.gov.np/" },
        { label: t('footer.quickLinks.feb'), href: "https://www.feb.gov.np/" },
        { label: t('footer.quickLinks.nafea'), href: "https://www.nafea.org.np/" },
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          <div className="lg:col-span-1 rtl:text-right flex flex-col">
            <a href="/" className="flex items-center gap-3 font-heading text-xl font-bold mb-4 rtl:flex-row-reverse">
              <img src="/logo.png" alt="Kangaroo Human Resources" className="h-12 w-auto rounded-full object-cover bg-white" />
              <span>Kangaroo<span className="text-white"> Human Resources</span></span>
            </a>
            <p className="text-primary-foreground/60 text-sm mt-3 font-body leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4 mt-6 rtl:flex-row-reverse">
              <a 
                href="https://www.facebook.com/kangaroohumanresources" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <img src="/facebook-logo.jpg" alt="Facebook" className="w-8 h-8 rounded-lg" />
              </a>
              <a 
                href="https://www.linkedin.com/company/kangaroo-human-resources-pvt-ltd/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <img src="/linkedin-logo.jpg" alt="LinkedIn" className="w-8 h-8 rounded-lg" />
              </a>
              <a 
                href="https://www.instagram.com/kangaroohumanrec/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <img src="/instagram.png" alt="Instagram" className="w-8 h-8 rounded-lg" />
              </a>
              <a 
                href="https://www.tiktok.com/@kangaroohr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <img src="/tik-tok.png" alt="TikTok" className="w-8 h-8 rounded-lg" />
              </a>
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.title} className="rtl:text-right">
              <h4 className="font-heading font-black text-lg mb-6 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      target={section.title === t('footer.quickLinks.title') ? "_blank" : undefined}
                      rel={section.title === t('footer.quickLinks.title') ? "noopener noreferrer" : undefined}
                      className={`text-primary-foreground/60 text-sm hover:text-white transition-colors ${
                        section.title === t('footer.quickLinks.title') ? 'font-bold uppercase tracking-wider' : 'font-medium'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm font-body">
            © {new Date().getFullYear()} Kangaroo Human Resources. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
