/* eslint-disable no-useless-escape */
import {useState} from 'react';

const useEmail = (initialValue: string) => {
  const [email, setState] = useState<string>(initialValue);
  const [errorEmail, setError] = useState<null | string>(null);

  const validateEmail = (validatedValue: string) => {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (validatedValue === '') {
      setError(null);
    } else if (regEx.test(validatedValue)) {
      setError(null);
    } else {
      setError('Error: invalid e-mail type');
    }
  };

  const setEmail = (value: string) => {
    setState(value);

    validateEmail(value);
  };

  return [email, errorEmail, setEmail] as const;
};

export default useEmail;
