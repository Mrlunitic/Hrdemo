import { 
  BookOpen, Users, Award, TrendingUp, Globe, Shield, 
  Search, UserPlus, BarChart, Rocket, GraduationCap, 
  Lightbulb, Network, MessageSquare, 
  FileCheck, Gavel, Scale, FileText, LucideIcon,
  ShieldAlert, Globe2, Sparkles, Building2, Landmark
} from "lucide-react";

export interface FeatureSection {
  title: string;
  icon: LucideIcon;
  content: string;
}

export interface FeatureDetail {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  sections: FeatureSection[];
  footerNote?: string;
}

export const featureDetails: Record<string, FeatureDetail> = {
  learning: {
    title: "Documents Required",
    subtitle: "Compliance & Legal Documentation for Recruitment",
    icon: BookOpen,
    sections: [
      { title: "Demand Letter", icon: FileText, content: "Mentioning numbers of workers required, salaries, contract period, duty hours, food, accommodation, and all benefits." },
      { title: "Power of Attorney", icon: Shield, content: "Authorizing recruitment formalities, interviews, trade tests, and visa arrangements as per Nepal laws." },
      { title: "Guarantee Letter", icon: Scale, content: "Employer guarantee that the worker will work in the employing country only. Must be attested by the Nepal Embassy." },
      { title: "Letter of Authority", icon: FileCheck, content: "Appointing Kangaroo Human Resources as the bona fide recruitment agent for all visa and embassy matters." },
      { title: "Inter Party Agreement", icon: Users, content: "Formal agreement between the Employer and Kangaroo Human Resources Pvt. Ltd." },
      { title: "Employment Agreement", icon: Gavel, content: "Terms and conditions regarding demand and supply of manpower, signed by both employer and employee." }
    ],
    footerNote: "Demand Letter and Power of Attorney must be endorsed by the Ministry of Foreign Affairs and Chamber of Commerce."
  },
  talent: {
    title: "Talent Management",
    subtitle: "Strategic Acquisition & Workforce Growth",
    icon: Users,
    sections: [
      { title: "Strategic Sourcing", icon: Search, content: "Leveraging global networks and AI-powered tools to identify top-tier talent for critical roles." },
      { title: "Onboarding Excellence", icon: UserPlus, content: "Structured integration programs ensuring high retention and rapid productivity for new hires." },
      { title: "Performance Insights", icon: BarChart, content: "Data-driven evaluation systems to align employee goals with organizational KPIs." },
      { title: "Succession Planning", icon: Rocket, content: "Identifying and developing future leaders within your organization to ensure long-term stability." }
    ]
  },
  certs: {
    title: "Professional Certifications",
    subtitle: "Industry-Recognized Career Advancement",
    icon: Award,
    sections: [
      { title: "Executive Education", icon: GraduationCap, content: "Specialized certification tracks for senior HR leaders and executive management." },
      { title: "Global Accreditation", icon: Globe2, content: "Certificates recognized by major international HR bodies (SHRM, HRCI, and more)." },
      { title: "Technical Upskilling", icon: Lightbulb, content: "Hands-on training for the latest HR technologies, compliance tools, and analytics software." },
      { title: "Continuous Credit", icon: Sparkles, content: "Maintain your professional standing with credits that count towards recertification." }
    ]
  },
  analytics: {
    title: "HR Analytics & Insights",
    subtitle: "Data-Driven Decision Making",
    icon: TrendingUp,
    sections: [
      { title: "Predictive Analytics", icon: BarChart, content: "Forecasting talent trends, turnover rates, and future hiring needs with high accuracy." },
      { title: "Market Benchmarking", icon: Building2, content: "Compare your organization's performance and compensation against global industry standards." },
      { title: "ROI Visualization", icon: TrendingUp, content: "Clear dashboards showing the financial impact of HR programs and personnel investments." },
      { title: "Workforce Mapping", icon: Network, content: "Identifying skill clusters and critical talent gaps across your entire organization." }
    ]
  },
  global: {
    title: "Global Community",
    subtitle: "Connected Network of HR Leaders",
    icon: Globe,
    sections: [
      { title: "Knowledge Hubs", icon: MessageSquare, content: "Shared platforms for global leaders to solve complex HR challenges collaboratively." },
      { title: "Exclusive Networking", icon: Network, content: "Direct access to CHROs and industry pioneers across 180+ countries." },
      { title: "Expert Panels", icon: Users, content: "Monthly virtual events featuring subject matter experts on emerging global trends." },
      { title: "Think Tanks", icon: Lightbulb, content: "Opportunity to contribute to groundbreaking global workforce research and publications." }
    ]
  },
  compliance: {
    title: "Terms & Conditions",
    subtitle: "Standardized Recruitment & Employment Agreements",
    icon: Shield,
    sections: [
      { 
        title: "Recruitment & Logistics", 
        icon: FileText, 
        content: "First Party issues Demand Letters and provides Visa/NOC. Second Party sources and shortlists qualified candidates within 45 days of visa advice." 
      },
      { 
        title: "Candidate Welfare & Costs", 
        icon: Users, 
        content: "Zero-cost recruitment policy: Free Visa and Free Tickets for deserving candidates. First Party provides free meals, bachelor-sharing accommodation, and full medical/insurance coverage." 
      },
      { 
        title: "Wages & Compensation", 
        icon: Landmark, 
        content: "Monthly earnings as per Demand Letter. First Party bears full compensation and repatriation costs in case of injury or death." 
      },
      { 
        title: "Medical & Health Standards", 
        icon: ShieldAlert, 
        content: "Screening by GCC/Nepalese doctors for infectious diseases (AIDS, TB). Assistance with immigration formalities, medical tests, and visa stamping." 
      },
      { 
        title: "Probation & Performance", 
        icon: Gavel, 
        content: "Three-month probationary period. Employer representative conducts interviews and trade tests. Repatriation at worker's cost if found unfit." 
      }
    ],
    footerNote: "Standard agreements between Employer and Kangaroo Human Resources ensuring transparent recruitment and mobilization from Nepal."
  }
};
