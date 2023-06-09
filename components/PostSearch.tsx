'use client';

import { getPostsBySearch } from "@/services/getPosts";
import { FormEventHandler, useState } from "react";

type Props = {
    onSearch: (value: any[]) => void;
}

const PostSearch:React.FC<Props> = ({onSearch}) => {
    const [search, setSearch] = useState<string>('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
    
        const posts = await getPostsBySearch(search)
        
        onSearch(posts as any); 
    }

    return <form onSubmit={handleSubmit}>
        <input 
            type="search" 
            placeholder="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Search</button>
    </form>
}

export {PostSearch}