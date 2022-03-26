
import React from 'react';
import { Container } from 'react-bootstrap';
import { MyProfileView } from '../componentes/perfil/MyProfileView';
import { MyFavs } from '../componentes/perfil/MyFavs';

export default function Perfil({ user, requestUserData }) {
  return (
    <div className="bg-grey">
            <Container>
                <MyProfileView  requestUserData={requestUserData} user={user} />
                <MyFavs  requestUserData={requestUserData} />
            </Container>
        </div>
  );
}
