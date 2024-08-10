import React from 'react';
import { ExternalLink } from 'lucide-react';

const StoryList = ({ stories }) => {
  return (
    <div className="space-y-4">
      {stories.map((story) => (
        <div key={story.objectID} className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              {story.points} upvotes | by {story.author}
            </span>
            <a
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-700"
            >
              Read more
              <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryList;