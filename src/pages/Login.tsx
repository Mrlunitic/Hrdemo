import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useAuth } from '../context/AuthContext';
import api from '../lib/api';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, ArrowLeft, ShieldCheck } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post('/auth/login', { email, password });
      login(response.data.token, response.data.user);
      toast.success("Login successful!");
      navigate('/admin');
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed. Check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#fafafa]">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10 px-4"
      >
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="mb-6 group flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white p-4 rounded-3xl shadow-xl shadow-primary/5 mb-6"
          >
            <img src="/logo.png" alt="Kangaroo HR" className="h-16 w-auto" />
          </motion.div>
          <h1 className="text-3xl font-heading font-bold text-primary mb-2">Administrative Portal</h1>
          <p className="text-muted-foreground text-sm">Secure access for Kangaroo HR administrators</p>
        </div>

        <Card className="border-none shadow-2xl shadow-primary/10 rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-white">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 text-primary/60 mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Authorized Personnel Only</span>
            </div>
            <CardTitle className="text-xl font-bold">Sign In</CardTitle>
            <CardDescription>Enter your high-level credentials to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2 group">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary transition-colors" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="admin@kangaroohr.com" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-muted/30 border-muted-foreground/10 focus:bg-white transition-all rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2 group">
                <Label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary transition-colors" />
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 h-12 bg-muted/30 border-muted-foreground/10 focus:bg-white transition-all rounded-xl"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Authenticating...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <LogIn className="w-4 h-4" />
                    Login to Dashboard
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <p className="text-center mt-8 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Kangaroo Human Resources. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;

