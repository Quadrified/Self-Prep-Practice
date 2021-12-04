import React from 'react';
import Firestore from './navigation/AppStackFirestore';
import RealtimeDB from './navigation/AppStackRealtimeDB';

const EntryPoint = () => {
  return <RealtimeDB />;
};

export default EntryPoint;
