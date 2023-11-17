import BaseLayout from '@/components/templates/BaseLayout';
import { Card } from '@nextui-org/react';
import axios from 'axios';
import React, { useState } from 'react';

const Film = ({ results: data, count: countData, next }) => {
  const [results, setResults] = useState(data);

  return (
    <BaseLayout>
      <div className="mx-2 md:container md:mx-auto md:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-3  gap-4 pb-20">
          {results &&
            results.map(({ title, episode_id, producer }, index) => (
              <Card key={index} className="dark p-4 shadow-sm shadow-yellow-400">
                <div className="bg-primary rounded-md h-40 lg:h-60 flex justify-center text-black items-center p-4">
                  <p className="font-starwars text-2xl lg:text-4xl text-center">{title}</p>
                </div>
                <div className="mt-4 lg:text-lg">
                  <p>Episode : {episode_id}</p>
                  <p>Producer : {producer}</p>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export async function getServerSideProps(context) {
  try {
    const {
      data: { results, count, next },
    } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/films`, {
      params: { page: 1 },
    });
    const sortResults = results.sort((a, b) => a.episode_id - b.episode_id);
    return {
      props: { results: sortResults, count, next },
    };
  } catch (error) {
    return {
      props: { results: [], count: null, next: null },
    };
  }
}

export default Film;
