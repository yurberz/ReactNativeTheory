import {useState} from 'react';

const useName = (initialValue: string) => {
  const [name, setState] = useState<string>(initialValue);
  const [errorName, setError] = useState<null | string>(null);

  const validateName = (validatedValue: string) => {
    const regEx = /^([a-zA-Z][a-zA-Z]{2,20})?$/;

    if (validatedValue === '') {
      setError(null);
    } else if (regEx.test(validatedValue)) {
      setError(null);
    } else {
      setError(
        'Error: only name is 3-20 characters long and letters characters',
      );
    }
  };

  const setName = (value: string) => {
    setState(value);

    validateName(value);
  };

  return [name, errorName, setName] as const;
};

export default useName;
