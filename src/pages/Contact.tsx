import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import api from "@/lib/api";

const ContactForm = ({ t }: { t: any }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: t('contact.form.options.hire'),
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await api.post('/applications', {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        type: 'contact_inquiry',
        inquiryType: formData.inquiryType
      });
      toast.success("Message sent successfully!");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: t('contact.form.options.hire'),
        message: ''
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('contact.form.firstName')}</label>
          <input 
            required
            className="w-full p-2 rounded-md border border-input bg-background text-sm" 
            placeholder={t('contact.form.placeholders.firstName')}
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('contact.form.lastName')}</label>
          <input 
            required
            className="w-full p-2 rounded-md border border-input bg-background text-sm" 
            placeholder={t('contact.form.placeholders.lastName')}
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('contact.form.email')}</label>
          <input 
            required
            type="email" 
            className="w-full p-2 rounded-md border border-input bg-background text-sm" 
            placeholder={t('contact.form.placeholders.email')}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('contact.form.phone')}</label>
          <input 
            required
            type="tel" 
            className="w-full p-2 rounded-md border border-input bg-background text-sm" 
            placeholder="+977 98XXXXXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">{t('contact.form.inquiry')}</label>
        <select 
          className="w-full p-2 rounded-md border border-input bg-background text-sm"
          value={formData.inquiryType}
          onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
        >
          <option>{t('contact.form.options.hire')}</option>
          <option>{t('contact.form.options.look')}</option>
          <option>{t('contact.form.options.partner')}</option>
          <option>{t('contact.form.options.other')}</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">{t('contact.form.message')}</label>
        <textarea 
          rows={4} 
          className="w-full p-2 rounded-md border border-input bg-background text-sm" 
          placeholder={t('contact.form.placeholders.message')}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </div>
      <Button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
      >
        {isSubmitting ? "Sending..." : t('contact.form.submit')}
      </Button>
    </form>
  );
};

const Contact = () => {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              {...fadeIn}
              className="rtl:text-right"
            >
              <h1 className="text-4xl font-heading font-bold mb-6 text-primary">{t('contact.title')}</h1>
              <p className="text-lg text-muted-foreground mb-8">
                {t('contact.description')}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t('contact.headquarters')}</h3>
                  <p className="text-muted-foreground text-sm">{t('contact.address')}</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t('contact.email')}</h3>
                  <p className="text-muted-foreground text-sm">khrkathmandu@gmail.com<br /></p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t('contact.call')}</h3>
                  <p className="text-muted-foreground text-sm">+977 1 4565882 / 465885<br />+977 9708553681</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">{t('contact.follow')}</h3>
                  <div className="flex gap-4 rtl:flex-row-reverse rtl:justify-end">
                    <a
                      href="https://www.facebook.com/kangaroohumanresources"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity flex items-center gap-2"
                    >
                      <img src="/facebook-logo.jpg" alt="Facebook" className="w-8 h-8 rounded-lg" />
                      <span className="text-primary text-sm font-medium hover:underline">Facebook</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/kangaroo-human-resources-pvt-ltd/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity flex items-center gap-2"
                    >
                      <img src="/linkedin-logo.jpg" alt="LinkedIn" className="w-8 h-8 rounded-lg" />
                      <span className="text-primary text-sm font-medium hover:underline">LinkedIn</span>
                    </a>
                    <a
                      href="https://www.instagram.com/kangaroohumanrec/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity flex items-center gap-2"
                    >
                      <img src="/instagram.png" alt="Instagram" className="w-8 h-8 rounded-lg" />
                      <span className="text-primary text-sm font-medium hover:underline">Instagram</span>
                    </a>
                    <a
                      href="https://www.tiktok.com/@kangaroohr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity flex items-center gap-2"
                    >
                      <img src="/tik-tok.png" alt="TikTok" className="w-8 h-8 rounded-lg" />
                      <span className="text-primary text-sm font-medium hover:underline">TikTok</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-md rtl:text-right"
            >
              <h2 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h2>
              <ContactForm t={t} />
            </motion.div>
          </div>

          <motion.div
            {...fadeIn}
            className="mt-16 bg-card rounded-2xl border border-border shadow-md overflow-hidden rtl:text-right"
          >
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-bold font-heading">{t('contact.map.title')}</h2>
              <p className="text-muted-foreground mt-1">{t('contact.map.subtitle')}</p>
            </div>
            <div className="w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.638423450711!2d85.3423851!3d27.699905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1949ee20b003%3A0xc8af9ada0a5d2386!2sKangaroo%20Human%20Resource%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1709668351001!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kangaroo Human Resources Office Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
