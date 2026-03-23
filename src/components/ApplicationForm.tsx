import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { toast } from "sonner"
import api from '../lib/api';
import Navbar from './Navbar';
import Footer from './Footer';
import { User, Mail, Phone, Hash, MessageSquare, Briefcase, ChevronLeft, Send, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const ApplicationForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const jobId = searchParams.get('jobId');
  const jobTitle = searchParams.get('title');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    passportNumber: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobId) {
      toast.error("Invalid job selection");
      return;
    }
    
    setIsSubmitting(true);
    try {
      await api.post('/applications', { ...formData, jobId });
      toast.success("Application submitted successfully!");
      setFormData({ name: '', email: '', phone: '', passportNumber: '', message: '' });
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-32 flex justify-center items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          {/* Left Column: Context Card */}
          <div className="lg:col-span-2 space-y-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)} 
              className="group mb-4 pl-0 hover:bg-transparent"
            >
              <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Jobs
            </Button>
            
            <Card className="bg-primary text-primary-foreground border-none overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Briefcase className="w-32 h-32" />
              </div>
              <CardHeader className="relative z-10">
                <CardDescription className="text-primary-foreground/70 font-medium tracking-wider uppercase text-xs">Application for</CardDescription>
                <CardTitle className="text-3xl font-heading font-bold">{jobTitle || 'Job Position'}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <p className="text-primary-foreground/80 leading-relaxed text-sm">
                  You are applying for a position through Kangaroo Human Resources. Please ensure all details, especially contact info and passport details, are accurate.
                </p>
                <div className="pt-4 flex items-center gap-2 text-sm font-medium">
                  <Globe className="w-4 h-4" />
                  <span>International Recruitment Phase</span>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/5 space-y-4">
              <h4 className="font-bold text-primary flex items-center gap-2">
                <Send className="w-4 h-4 text-primary/60" />
                What happens next?
              </h4>
              <ul className="text-sm text-muted-foreground space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                  <span>Our recruitment team will review your profile.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                  <span>If shortlisted, you will receive an interview call.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                  <span>Visa processing starts after selection.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <Card className="lg:col-span-3 border-none shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-white border-b border-muted/50 py-8">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Applicant Information</CardTitle>
              <CardDescription>Fill in your personal and professional details</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 group">
                  <Label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary group-focus-within:text-primary transition-colors" />
                    <Input 
                      id="name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                      className="pl-10 h-12 bg-muted/20 border-border/50 focus:bg-white transition-all rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary transition-colors" />
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="pl-10 h-12 bg-muted/20 border-border/50 focus:bg-white transition-all rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 group">
                    <Label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary transition-colors" />
                      <Input 
                        id="phone" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+977 98XXXXXXXX"
                        className="pl-10 h-12 bg-muted/20 border-border/50 focus:bg-white transition-all rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="passportNumber" className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Passport Number</Label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary transition-colors" />
                    <Input 
                      id="passportNumber" 
                      required 
                      value={formData.passportNumber}
                      onChange={(e) => setFormData({...formData, passportNumber: e.target.value})}
                      placeholder="Enter your passport ID"
                      className="pl-10 h-12 bg-muted/20 border-border/50 focus:bg-white transition-all rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Message (Optional)</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-primary transition-colors" />
                    <Textarea 
                      id="message" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Share any additional info..."
                      className="pl-10 pt-3 bg-muted/20 border-border/50 focus:bg-white transition-all rounded-xl resize-none"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 bg-primary hover:bg-primary/95 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 justify-center">
                      <Send className="w-5 h-5" />
                      Submit Application
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ApplicationForm;

