'use client'
import Image from 'next/image'
import styles from './event-page.module.css'
import { Button, TextField,FormControl, Grid, StyledEngineProvider } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { getFirestore, doc, getDoc, collection, query, where, Query, getDocs, getDocsFromServer, setDoc } from "firebase/firestore";


export default function EventPage() {

  const [teamsInfo, setTeamInfo1] = useState([] as any);

  const [teamAmount, setTeamAmount] = useState(0);

  const [eventName, setEventName] = useState("");

  
  const firebaseConfig = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyC_yk4qGelNtzm-zJzDm1wHRBMmcCA5YYA",
  authDomain: "the-scouting-project.firebaseapp.com",
  projectId: "the-scouting-project",
  storageBucket: "the-scouting-project.appspot.com",
  messagingSenderId: "798121930934",
  appId: "1:798121930934:web:9ca23e0a8157fc6a393617",
  measurementId: "G-RPYXS03GQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


  






  return (
    <main className={styles.main}>
      <div className={`${styles.header} ${styles.bottomspacing}`}>Create an Event</div>

      
      
          


          
            

            
       


    </main>
  )
}