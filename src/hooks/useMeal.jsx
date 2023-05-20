import { collection, doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

export default function useMeal(id) {
  const [snapshot, loading, error] = useDocument(
    collection(db, "Resturants", id, "meals")
  );
  if (loading) return [snapshot, loading, error];

  const meals = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return [meals, loading, error];
}
