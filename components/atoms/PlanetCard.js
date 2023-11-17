import { Card } from '@nextui-org/react';
import React from 'react';

const PlanetCard = ({ name, climate, population, rotation_period }) => {
  return (
    <Card className="p-2 bg-yellow-400">
      <div>
        <div className="bg-black rounded-md">
          <p className="text-slate-300 text-center">name:</p>
          <p className="text-2xl font-semibold text-white py-1 px-2 text-center">{name}</p>
        </div>
        <p className="text-md text-center">{climate}</p>
        <div className="grid grid-cols-3 md:grid-cols-4">
          <p className="md:col-span-2">Population</p>
          <p className="col-span-2">: {population} </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4">
          <p className="md:col-span-2">Rotation Period</p>
          <p className="col-span-2">: {rotation_period} </p>
        </div>
      </div>
    </Card>
  );
};

export default PlanetCard;
