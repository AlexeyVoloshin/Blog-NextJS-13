'use client';
import { usePosts } from '@/store';

import { FormEventHandler, useState } from 'react';

const PostSearch:React.FC = () => {
  const [getPostsBySearch] = usePosts((state) => [
    state.getPostsBySearch,
  ]);
  const [search, setSearch] = useState<string>('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    
    await getPostsBySearch(search);
  };

  return <form onSubmit={handleSubmit}>
    <input 
      type="search" 
      placeholder="search"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
    <button type="submit">Search</button>
  </form>;
};

export {PostSearch};