import React from 'react';
import { FileText , LucideIcon} from 'lucide-react';

const EmptyStateCard = ({ title, message, icon: IconComponent = FileText }: {title: string, message: string, icon?: LucideIcon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-3 mb-4 text-gray-400 bg-gray-100 rounded-full">
        <IconComponent size={24} strokeWidth={1.5} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">
        {title || 'No data found'}
      </h3>
      <p className="text-sm text-gray-500">
        {message || 'We could not find any information to display here.'}
      </p>
    </div>
  );
};

export default EmptyStateCard;