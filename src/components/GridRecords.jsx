import React from 'react';
import Card from './Card';

const GridRecords = ({ items }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
        {items.map(item => (
          <Card key={item.text} text={item.text} image={item.image} />
        ))}
      </div>
      <button className="bg-primary-300 text-light w-72 h-14">記録をもっと見る</button>
    </div>
  );
};

export default GridRecords;
