
import React from 'react';
import { Container } from 'react-bootstrap';
import { MyProfileView } from '../componentes/perfil/MyProfileView';
import { MyPurchase } from '../componentes/perfil/MyPurchase';

export default function Perfil({ user, requestUserData, getSales, sales, deliveries, getDeliveries }) {

  return (
    <div className="bg-grey">
      <Container>
        <MyProfileView requestUserData={requestUserData} user={user} />
        <MyPurchase getSales={getSales} sales={sales} user={user} getDeliveries={getDeliveries} deliveries={deliveries} />
      </Container>
    </div>
  );
}
