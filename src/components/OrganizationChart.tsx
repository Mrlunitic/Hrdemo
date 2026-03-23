import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Award, TrendingUp, ShieldCheck, 
  Landmark, Briefcase, FileText, Headphones, User, LucideIcon 
} from 'lucide-react';

interface OrgData {
  name: string;
  icon?: LucideIcon;
  children?: OrgData[];
}

const orgStructure: OrgData = {
  name: "Chairman",
  icon: Award,
  children: [
    {
      name: "CEO",
      icon: Users,
      children: [
        {
          name: "Managing Director",
          icon: TrendingUp,
          children: [
            {
              name: "Operation & Legal Director",
              icon: ShieldCheck,
              children: [
                { name: "Office Boy", icon: User },
                { name: "Driver", icon: User },
                { name: "Security Guard", icon: User }
              ]
            },
            {
              name: "Head of Finance",
              icon: Landmark,
              children: [
                { name: "Accountant", icon: User },
                { name: "Cashier", icon: User }
              ]
            },
            {
              name: "Admin Manager",
              icon: Briefcase,
              children: [
                { name: "Secretary", icon: User },
                { name: "Flight Department", icon: User }
              ]
            },
            {
              name: "Marketing Director",
              icon: TrendingUp,
              children: [
                {
                  name: "Recruitment Manager",
                  icon: Users,
                  children: [
                    { name: "Documentation", icon: FileText },
                    {
                      name: "Marketing Manager",
                      icon: TrendingUp,
                      children: [
                        {
                          name: "PRO Manager",
                          icon: Headphones,
                          children: [
                            { name: "PRO", icon: User }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const NodeCard = ({ name, icon: Icon, isMain }: { name: string; icon?: LucideIcon; isMain?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className={`relative z-10 px-2 py-2 rounded-lg shadow-sm border-[1.5px] transition-all ${
      isMain 
        ? "bg-primary border-primary text-white" 
        : "bg-white border-primary/20 text-primary hover:border-primary/40 hover:shadow-md"
    }`}
  >
    <div className="flex flex-col items-center gap-1 min-w-[90px] md:min-w-[120px]">
      <div className={`p-1 rounded-md ${isMain ? "bg-white/20" : "bg-primary/5"}`}>
        {Icon ? <Icon className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
      </div>
      <span className={`text-[10px] md:text-[11px] font-[800] tracking-tight text-center leading-[1.2] ${isMain ? "uppercase tracking-tighter" : ""}`}>
        {name}
      </span>
    </div>
  </motion.div>
);

const TreeLevel = ({ data, isRoot = false }: { data: OrgData; isRoot?: boolean }) => {
  const hasChildren = data.children && data.children.length > 0;
  
  return (
    <div className="flex flex-col items-center flex-1">
      {/* Node Card */}
      <div className="px-2 relative flex flex-col items-center">
        <NodeCard 
          name={data.name} 
          icon={data.icon} 
          isMain={isRoot || data.name === "CEO" || data.name === "Managing Director"} 
        />
        {/* Connector Line DOWN to children */}
        {hasChildren && (
          <div className="w-0.5 h-6 bg-primary" />
        )}
      </div>

      {/* Children Row */}
      {hasChildren && (
        <div className="flex w-full items-start">
          {data.children!.map((child, index) => (
            <div key={`${child.name}-${index}`} className="flex-1 relative pt-6">
              {/* Horizontal Connector (The Bridge) */}
              {data.children!.length > 1 && (
                <div className={`absolute top-0 h-0.5 bg-primary ${
                  index === 0 
                    ? "left-1/2 right-0" 
                    : index === data.children!.length - 1 
                      ? "left-0 right-1/2" 
                      : "left-0 right-0"
                }`} />
              )}
              {/* Vertical Connector UP to bridge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-0.5 bg-primary" />
              
              <TreeLevel data={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const OrganizationChart = () => {
  return (
    <section className="py-16 bg-[#F8FAFC] overflow-x-auto">
      <div className="container mx-auto px-4 min-w-max flex flex-col items-center">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tighter mb-2 uppercase">
            Org Structure
          </h2>
          <div className="h-1 w-12 bg-primary rounded-full" />
        </div>

        <div className="w-full flex justify-center pb-10">
          <TreeLevel data={orgStructure} isRoot />
        </div>
      </div>
    </section>
  );
};

export default OrganizationChart;
