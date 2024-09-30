import React from 'react';
import { FaReact, FaVuejs, FaJsSquare } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import Image from "next/image";
import Img from "../app/image/lady-with-laptop.jpg"
import NavBar from "./navbar";
export async function getStaticProps() {
  return { props: {} };
}

export default function About() {
  return (
    <div className="">
      <NavBar />
      <section className="text-gray-600 body-font px-10 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">About Us</h1> {/* Added h1 */}
        <div className="container py-5 px-5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image alt="about-lady-with-laptop" className="object-cover object-center h-full w-full" src={Img} />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left text-center">


            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
                <FaReact size={24} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">React JS</h2>
                <p className="leading-relaxed text-base">
                  A deep dive into performance optimization techniques for React applications. In this blog, we will explore various strategies such as lazy loading components, memoization with `React.memo`, and code splitting using dynamic imports. Additionally, we will discuss the importance of optimizing render performance and managing unnecessary re-renders to ensure a smooth user experience.
                </p>
              </div>
            </div>

            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
                <SiNextdotjs size={24} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Next JS</h2>
                <p className="leading-relaxed text-base">
                  A deep dive into performance optimization techniques for Next.js applications. In this blog, we will explore strategies like lazy loading pages, memoization with React.memo, and code splitting through dynamic imports. Additionally, we will cover the significance of server-side rendering (SSR) and static site generation (SSG) in boosting performance and reducing unnecessary client-side re-renders, ensuring a seamless user experience.
                </p>
              </div>
            </div>


            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
                <FaVuejs size={24} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Vue JS</h2>
                <p className="leading-relaxed text-base">
                  A deep dive into performance optimization techniques for Vue.js applications. In this blog, we will explore various strategies such as lazy loading components, memoization with Vue.memo, and code splitting using dynamic imports. Additionally, we will discuss the importance of optimizing render performance and managing unnecessary re-renders using Vue reactivity system to ensure a smooth user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}
