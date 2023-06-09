import Link from "next/link"

type Props = {
    posts: any[];
}

const Posts: React.FC<Props> = ({posts}) => {
    return (
        <ul>
            {posts?.map((post: any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export {Posts}