import Link from "next/link";
import '../styles/globals.css';
import img from "../app/image/images.png"
import Image from "next/image";

export async function getStaticProps() {
    return { props: {} };
}

export default function NavBar() {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={img} className="w-[60px] h-[60px] rounded-full" alt="react-logo" />
                    </a>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href="/blog" className="mr-5 hover:text-gray-900">Go To Blog</Link>
                        <Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
                        <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
                    </nav>
                </div>
            </header>
        </div>
    );
}
