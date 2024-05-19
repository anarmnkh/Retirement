// components/NewsCard.js
import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <img className="w-full h-48 object-cover" src={article.image} alt={article.title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-700 mb-4">{article.description}</p>
        <a href={article.url} className="text-blue-600 hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
