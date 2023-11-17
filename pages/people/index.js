import BaseLayout from '@/components/templates/BaseLayout';

import { Input, Pagination, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import axios from 'axios';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const People = ({ results: data, count: countData, next }) => {
  const [results, setResults] = useState(data);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(countData);
  const [lastPage, setLastPage] = useState(Math.ceil(countData / 10));
  const [search, setSearch] = useState('');
  const [fixSearch, setFixSearch] = useState('');

  const fetchData = async (page) => {
    try {
      setIsLoading(true);
      const params = { page: page, search: fixSearch };

      const {
        data: { results: newResult, count: newCount, next },
      } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/people`, {
        params,
      });
      setCount(newCount);
      setLastPage(Math.ceil(newCount / 10));
      setResults(newResult);
    } catch (error) {
      throw error;
    }
  };

  const handlePagination = async (newPage) => {
    setPage(newPage);
    await fetchData(newPage);
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
    await fetchData(1);
    setIsLoading(false);
  };

  useEffect(() => {
    if (search == fixSearch) {
      fetchSearch(fixSearch);
    }
  }, [search, fixSearch]);

  return (
    <BaseLayout>
      <div className="mx-2 md:container md:mx-auto md:px-20">
        <div>
          <Input
            className="w-full mb-4 "
            variant="bordered"
            label={'Search'}
            color="primary"
            value={search}
            endContent={<AiOutlineLoading3Quarters className={classNames('animate-spin items-center h-full aspect-square text-yellow-400', !isLoading && 'hidden')} />}
            onChange={handleSearch}
          />
        </div>
        <Table aria-label="Example static collection table" className="dark">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>HEIGHT</TableColumn>
            <TableColumn>MASS</TableColumn>
          </TableHeader>
          <TableBody isLoading={isLoading} loadingContent={<Spinner label="Loading..." />}>
            {results &&
              results.map(({ name, height, mass }, index) => (
                <TableRow key={index}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{height}</TableCell>
                  <TableCell>{mass}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <div className={classNames('flex justify-center  mt-4 mb-10', lastPage == 1 && 'hidden')}>
          <Pagination total={lastPage} initialPage={1} value={page} onChange={handlePagination} />
        </div>
      </div>
    </BaseLayout>
  );
};

export async function getServerSideProps(context) {
  try {
    const {
      data: { results, count, next },
    } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/people/`, {
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

export default People;
