import {useMemo} from 'react';
import {IAddPeople} from '../helpers/ts-helpers/interfaces';

const useSearch = (people: IAddPeople[], query: string): IAddPeople[] => {
  const filteredPeople = useMemo(() => {
    return people.reduce((result: IAddPeople[], sectionData) => {
      const normalizedFilter = query.toLowerCase();
      const {id, title, data} = sectionData;

      const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(normalizedFilter),
      );

      if (filteredData.length !== 0) {
        result.push({
          id,
          title,
          data: filteredData,
        });
      }

      return result;
    }, []);
  }, [query, people]);

  return filteredPeople;
};

export default useSearch;
