import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const StoryListSkeleton = () => {
  return (
    <div className="space-y-4">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <Skeleton className="h-6 w-3/4 mb-2" />
          <div className="flex justify-between items-center">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryListSkeleton;