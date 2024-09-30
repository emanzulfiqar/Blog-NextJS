import { doc, getDoc, collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import NavBar from '../navbar';

export async function getServerSideProps({ params }) {
  console.log(params.id,7  )
  const queryData = query(collection(db, 'blogs'), where('id', '==', params.id));
    
  const querySnapshot = await getDocs(queryData);

  const blog = querySnapshot.docs[0]?.data();

  return { props: { blog } };
}

export default function BlogDetails({ blog }) {
  return (
    <div>
      <NavBar />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{blog?.title}</h1>
            <p class="mb-8 leading-relaxed">{blog?.blogDetail}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
