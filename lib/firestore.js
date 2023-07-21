import fb from '@/lib/firebase';
import 'firebase/firestore';

const firestore = fb.firestore();
const docRef = firestore.collection('projects').doc();

function setNotes(data){
    docRef.set(data)
    .then(() => {
        console.log('Data saved successfully!');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
}

export default setNotes;