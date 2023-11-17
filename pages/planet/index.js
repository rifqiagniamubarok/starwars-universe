'use client';
import BaseLayout from '@/components/templates/BaseLayout';
import { Card, Input, Pagination, Skeleton } from '@nextui-org/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import debounce from 'lodash/debounce';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import classNames from 'classnames';
import PlanetCard from '@/components/atoms/PlanetCard';

const Planet = ({ results: data, count: countData, next }) => {
  const [results, setResults] = useState(data);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(countData);
  const [lastPage, setLastPage] = useState(Math.ceil(countData / 10));
  const [search, setSearch] = useState('');
  const [fixSearch, setFixSearch] = useState('');

  const fetchData = async (page = 1) => {
    try {
      setIsLoading(true);
      const params = { page: page, search: fixSearch };

      const {
        data: { results, count: newCount, next },
      } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/planets`, {
        params,
      });
      setCount(newCount);
      setLastPage(Math.ceil(newCount / 10));
      return { results, count, next };
    } catch (error) {
      throw error;
    }
  };

  const handleNextPage = async () => {
    if (page < lastPage)
      try {
        const { results: newData } = await fetchData(page + 1);
        if (page * 10 <= results.length && !isLoading) setResults([...results, ...newData]);
      } catch (error) {
        console.error({ error });
      } finally {
        setPage(page + 1);
        setIsLoading(false);
      }
    else return;
  };

  const handlePagination = async (newPage) => {
    setPage(newPage);
    const { results: newResult } = await fetchData(newPage);
    setResults(newResult);
    setIsLoading(false);
  };

  let timeoutId;
  const handleSearch = ({ target: { value } }) => {
    setSearch(value);
    // debouncedFetchData(value);
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      if (value !== fixSearch) setFixSearch(value);
    }, 500);
  };

  const fetchSearch = async (newSearch) => {
    // if (fixSearch == search) {
    setIsLoading(true);
    const { results: newResult } = await fetchData(1);
    setResults(newResult);
    setIsLoading(false);
  };

  useEffect(() => {
    if (search == fixSearch) {
      fetchSearch(fixSearch);
    }
  }, [search, fixSearch]);

  const defaultLoader = <div className={classNames('w-full h-4 bg-yellow-300 mt-4 animate-pulse rounded-md ', !isLoading && 'hidden')}></div>;

  return (
    <BaseLayout>
      <div className=" px-4 ">
        <div>
          <Input
            className="w-full mb-4 md:container md:mx-auto md:px-20"
            variant="bordered"
            label={'Search'}
            color="primary"
            value={search}
            endContent={<AiOutlineLoading3Quarters className={classNames('animate-spin items-center h-full aspect-square text-yellow-400', !isLoading && 'hidden')} />}
            onChange={handleSearch}
          />
        </div>
        <div className="md:hidden">
          <InfiniteScroll pageStart={1} hasMore={page <= lastPage} dataLength={lastPage} loadMore={handleNextPage} loader={defaultLoader} scrollableTarget="scrollableDiv">
            <div className="grid gap-4 ">
              {results &&
                results.map(({ name, climate, population, rotation_period }, index) => (
                  <PlanetCard key={index} name={name} climate={climate} population={population} rotation_period={rotation_period} />
                ))}
            </div>
          </InfiniteScroll>
        </div>
        <div className="hidden md:inline-block md:container md:mx-auto md:px-20">
          <div className="grid gap-4 grid-cols-2 ">
            {results &&
              results.map(({ name, climate, population, rotation_period }, index) => (
                <PlanetCard key={index} name={name} climate={climate} population={population} rotation_period={rotation_period} />
              ))}
          </div>
          <div className={classNames('flex justify-center  mt-4 mb-10', lastPage == 1 && 'hidden')}>
            <Pagination total={lastPage} initialPage={1} value={page} onChange={handlePagination} />
          </div>
        </div>
        <div className="md:container md:mx-auto md:px-20">{results.length === 0 && <Card className="bg-yellow-400 p-4 flex justify-center items-center">No data found</Card>}</div>
      </div>
    </BaseLayout>
  );
};

export async function getServerSideProps(context) {
  try {
    const {
      data: { results, count, next },
    } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/planets`, {
      params: { page: 1 },
    });

    return {
      props: { results, count, next },
    };
  } catch (error) {
    return {
      props: { results: [], count: null, next: null },
    };
  }
}

export default Planet;
