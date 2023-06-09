async function getAllPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60,
        }
    })

    if(!response.ok) throw new Error('Unable to fetch posts!')

    return response.json();
}

async function getPostsBySearch(search: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)

    return response.json();
}

export {getAllPosts, getPostsBySearch}
