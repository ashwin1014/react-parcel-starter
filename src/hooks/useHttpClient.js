import { useState, useCallback, useRef, useEffect } from 'react';
import { getLocalStorageKey } from '@utils/secureLocalStorage';
import { isEmpty } from '@utils/common';
import apiConfig from '@config/api.config';

const BASE_URL = apiConfig.API_BASE_URL;

const handleHeaders = () => ({
  'Content-type': 'application/json; charset=UTF-8',
  Accept: 'application/json, text/plain, */*',
  secret: getLocalStorageKey('token') || ''
});

const useHttpClient = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const clearError = () => {
    setError(null);
  };

  const sendRequest = useCallback(async (path = '', method = 'GET', body = null) => {
    setLoading(true);
    const url = `${BASE_URL}${path}`;
    const httpAbortCtrl = new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl);
    try {
      const response = await fetch(url, {
        method,
        headers: handleHeaders(),
        body: body ? JSON.stringify(body) : body,
        signal: httpAbortCtrl.signal,
        credentials: 'same-origin'
      });
      const responseData = await response.text();
      const json = responseData === '' ? {} : JSON.parse(responseData);
      activeHttpRequests.current = activeHttpRequests.current.filter((reqCtrl) => reqCtrl !== httpAbortCtrl);
      if (!isEmpty(json) && !response.ok) {
        // eslint-disable-next-line no-console
        console.error(json.error);
        throw new Error(json.errorMessage || 'Something went wrong. Please try again later');
      }
      return json;
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again later');
      window.triggerNotification('Error', err.message || 'Something went wrong. Please try again later', 'error', clearError);
      throw error;
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { loading, error, sendRequest, clearError };
};

export default useHttpClient;
