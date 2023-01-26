import { uuidv4 as v4 } from '@firebase/util';

import db, { auth, provider, storage, ref } from '../firebase';
import { uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {
  doc,
  setDoc,
  getDocs,
  collection,
  orderBy,
  query,
} from 'firebase/firestore';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { createAction } from '@reduxjs/toolkit';

import * as types from './actiontypes';

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        const { user } = payload;
        dispatch(setUser(user));
      })
      .catch((err) => console.log(err));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((err) => console.log(err));
  };
}

export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(setLoading(true));
    if (payload.image !== null) {
      const storageRef = ref(storage, `/images/${payload.image.name}`);
      const upload = uploadBytesResumable(storageRef, payload.image);

      upload.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(progress);
          if (snapshot.state === 'running') {
            console.log(progress);
          }
        },
        (error) => console.log(error),
        async () => {
          const downloadURL = await getDownloadURL(upload.snapshot.ref);
          await setDoc(doc(db, 'articles', v4()), {
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      setDoc(doc(db, 'articles', v4()), {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: '',
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
}

export function getArticlesAPI() {
  const articlesRef = collection(db, 'articles');
  return async (dispatch) => {
    dispatch(setLoading(true));
    const articles = [];
    const q = query(articlesRef, orderBy('actor.date', 'desc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      articles.push(doc.data());
    });
    dispatch(setArticles(articles));
    dispatch(setLoading(false));
  };
}

export const setUser = createAction(types.SET_USER);
export const setLoading = createAction(types.SET_LOADING);
export const setArticles = createAction(types.SET_ARTICLES);
