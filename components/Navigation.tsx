'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
    label: string;
    href: string;
};

type Props = {
    navLinks: NavLink[];
};

const Navigation: React.FC<Props> = ({navLinks}) => {
    const pathname = usePathname();
    return (
    <>
        {
           navLinks.map(link => {
            const isActive = pathname === link.href;

            return (
                <Link 
                    key={link.label}
                    href={link.href}
                    className={isActive ? 'active': ''}
                >
                    {link.label}
                </Link>
            )
           }) 
        }
    </>)
}

export { Navigation }