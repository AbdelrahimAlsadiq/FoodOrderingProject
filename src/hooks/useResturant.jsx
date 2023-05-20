import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export default function useResturant() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const x = await getDocs(collection(db, "Resturants")).then((snapshot) => {
        return snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id, meals: meals(doc.id) };
        });
      });
      setLoading(false);
      setData(x);
    };
    fetchData();
  }, []);

  return { data, loading };
}

function meals(id) {
  let meals = [];
  const colRef2 = collection(db, "Resturants", id + "", "meals");

  onSnapshot(colRef2, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      meals.push({ ...doc.data() });
    });
  });
  return meals;
}
// export default function ResturantCard({ data }) {
//   const { name, rating } = data;
//   return (
//     <div className="bg-light-green p-5 rounded-xl space-y-3 flex justify-between flex-col h-[200px] w-full">
//       <h3 className="text-3xl font-bold text-light-yellow">{name}</h3>
//       <div className="flex gap-2 justify-center items-center">
//         <span className="text-light-yellow text-lg">{rating}</span>
//         <img className="w-5 h-5 " src={StarIcon} alt="" />
//       </div>
//       <button className=" bg-orange-500 rounded-2xl w-full py-1 text-white font-semibold">Menu</button>
//     </div>
//   );
// }
