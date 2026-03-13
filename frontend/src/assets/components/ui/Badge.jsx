import React from 'react';
import { Bell } from 'lucide-react'; // Import a Lucide icon

const Badge = ({ text, icon: Icon, className = '' }) => {
  return (
    <div className={`inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full bg-brand-50 text-brand-700 border border-brand-200 ${className}`}>
      {Icon && <Icon className="mr-1.5 h-3 w-3" />}
      {text}
    </div>
  );
};

export default Badge;
