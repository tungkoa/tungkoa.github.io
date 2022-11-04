import { initializeApp } from 'firebase/app';
import { collection, getDocs, setDoc, doc, addDoc, getFirestore, updateDoc } from 'firebase/firestore/lite';

const axios = require("axios").default;
const firebaseConfig = {
  apiKey: "AIzaSyAEddxPI5fmtxARVq0cXP2oSJIndPKiV-4",
  authDomain: "tungkoa-4c431.firebaseapp.com",
  projectId: "tungkoa-4c431",
  storageBucket: "tungkoa-4c431.appspot.com",
  messagingSenderId: "518766089628",
  appId: "1:518766089628:web:5cebac6ef4ba3adc7f2459"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const apisService = {
  getNotes: async () => {
    const col = collection(db, 'notes');
    const snapshot = await getDocs(col);
    return snapshot.docs.map(doc => {
      return {...doc.data(), id: doc.id}
    });
  },
  updateNote: async (id, data) => {
    await setDoc(doc(db, "notes", id), data);
    // return snapshot.docs.map(doc => doc.data());
  },
  createNote: async (data) => {
    await addDoc(collection(db, "notes"), data);
    // return snapshot.docs.map(doc => doc.data());
  },
  getIPInfo: () => {
    const endpoint = "/v1/user/get_data_by_ip";
    return axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json",
      }
    });
  },
};

export default apisService;