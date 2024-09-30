// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCOHs0FCwwMmX_4rO15yPRfxjAuKxDeAdc",
//   authDomain: "blog-next-js-a668c.firebaseapp.com",
//   projectId: "blog-next-js-a668c",
//   storageBucket: "blog-next-js-a668c.appspot.com",
//   messagingSenderId: "656765565533",
//   appId: "1:656765565533:web:4fac002aae33d7f9a52bb4",
//   measurementId: "G-D3HQVHG0QS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBGiN-IyVUzPLdB8jpGRPEHv3dD8yfJcBU",
//   authDomain: "blog-next-b76b3.firebaseapp.com",
//   projectId: "blog-next-b76b3",
//   storageBucket: "blog-next-b76b3.appspot.com",
//   messagingSenderId: "106226505539",
//   appId: "1:106226505539:web:ac16c4751f602448a7c1f6",
//   measurementId: "G-PGS017X0Q3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);








// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBGiN-IyVUzPLdB8jpGRPEHv3dD8yfJcBU",
//   authDomain: "blog-next-b76b3.firebaseapp.com",
//   projectId: "blog-next-b76b3",
//   storageBucket: "blog-next-b76b3.appspot.com",
//   messagingSenderId: "106226505539",
//   appId: "1:106226505539:web:4a408f9171357e7ba7c1f6",
//   measurementId: "G-NR2NZ9Z16D"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };





///////////////////////////////////////////////////////////////////

// Import the functions you need from the SDKs you need
import { initializeApp ,getApps,getApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOHs0FCwwMmX_4rO15yPRfxjAuKxDeAdc",
  authDomain: "blog-next-js-a668c.firebaseapp.com",
  projectId: "blog-next-js-a668c",
  storageBucket: "blog-next-js-a668c.appspot.com",
  messagingSenderId: "656765565533",
  appId: "1:656765565533:web:4fac002aae33d7f9a52bb4",
  measurementId: "G-D3HQVHG0QS"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };
// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(); // Use the already initialized app
}

const db = getFirestore(app);

export { db };