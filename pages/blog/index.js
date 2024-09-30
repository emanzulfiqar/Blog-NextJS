import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config'; 
import NavBar from '../navbar';
import Link from 'next/link';


export async function getServerSideProps() {
    try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("Firestore connected successfully. Data:", blogs);
        return {
            props: {
                blogs, 
            },
        };
    } catch (error) {
        console.error("Error fetching blogs from Firestore: ", error);
        return { props: { blogs: [] } }; 
    }
}

export default function Blog({ blogs }) {
    return (
        <div>
            <NavBar />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {blogs?.map((blog) => (
                            <div key={blog?.id} className="p-4 lg:w-1/3">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{blog?.authorName}</h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{blog?.title}</h1>
                                    <p className="leading-relaxed mb-3">{blog?.description}</p>
                                     <Link href={`/blog/${blog.id}`} className="mr-5 text-blue-500">Learn More</Link>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}
