
import React from 'react';
import { Container } from 'react-bootstrap';
import { MyProfileView } from '../componentes/perfil/MyProfileView';
import { MyPurchase } from '../componentes/perfil/MyPurchase';

export default function Perfil({ user, requestUserData }) {
  return (
    <div className="bg-grey">
            <Container>
                <MyProfileView  requestUserData={requestUserData} user={user} />
                <MyPurchase />
            </Container>
        </div>
  );
}
