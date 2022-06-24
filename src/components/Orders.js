import React, { useEffect, useState } from 'react';
import './css/Login.css';
import './css/Cart.css';
import OrderItem from './OrderItem';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import PersonOrderList from './PersonOrderList';
import { Accordion } from 'react-bootstrap';

export default function Orders() {

  // const [peopleID, setPeopleID] = useState();
  const [peopleData, setPeopleData] = useState([]);

  async function getAllDoc() {

    const orderCollectionRef = collection(db, "orders");
    // console.log(orderCollectionRef)
    const data = await getDocs(orderCollectionRef);
    setPeopleData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // console.log(peopleID);

  }

  useEffect(() => {
    getAllDoc().then(() => {
      console.log(peopleData);
    })
  }, [])

  return (
    <div className='mx-4 my-4'>
      {peopleData?.map((element) => (
        <>
                <PersonOrderList
                  key={element.id}
                  id={element.id}
                  foodID={element.foodID}
                  quantity={element.quantity}
                  userName={element.userName}
                />
        </>
      ))}

      <div className="cart_status">
        <h3 onClick={getAllDoc}>End of Orders</h3>
      </div>
    </div>
  )
}