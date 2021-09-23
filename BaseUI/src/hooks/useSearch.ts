import {useMemo} from 'react';
import {IAddPeopleState} from '../helpers/ts-helpers/interfaces';

const useSearch = (people: IAddPeopleState[], query: string) => {
  const filteredPeople = useMemo(() => {
    return people.reduce((result: IAddPeopleState[], sectionData) => {
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
