import Link from "next/link";
import '../styles/globals.css';
import Img from "../app/image/hero.jpg"
import Image from "next/image";
import NavBar from "./navbar";

export async function getStaticProps() {
  return { props: {} };
}

export default function Home() {
  return (
    <div>
      <NavBar />
      <section className="w-3/4 mx-auto text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image className="object-cover object-center rounded" alt="home-page-react" src={Img} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Daily Blogs For React Js
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="flex justify-center">
              <Link href="/blog" className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Go To Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
