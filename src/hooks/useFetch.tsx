import React, { useState, useEffect } from 'react';

interface Options {
  url: string;
}

export const useFetch = (options: Options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(options.url)
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [options.url]);

  return {
    data
  }
}