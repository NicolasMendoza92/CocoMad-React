import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./myProfileView.css";
import { useHistory } from "react-router-dom";
import { leerDeLocalStorage } from "../../utils/localStorage";
import { Card, ListGroup, OverlayTrigger, Popover } from "react-bootstrap";
import { FiSettings } from "react-icons/fi";
import { SpinnerCM } from "../spinner/SpinnerCM";
import { ModalEditProfile } from "./ModalEditProfile";
import { beforeUpload, getBase64 } from "../../utils/loadImg";
import Lottie from "react-lottie";


const exampleImage =
  "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1634755567/th_ji3jqh.jpg";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

export const MyProfileView = ({ user, requestUserData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const [showModalEditar, setShowModalEditar] = useState(false);

  const handleCloseModalEditar = () => setShowModalEditar(false);
  const handleShowModalEditar = () => setShowModalEditar(true);

  const alertaBorrar = (_id) => {
    swal({
      title: "¿ Esta seguro ?",
      text: "Al eliminar su cuenta perdera el historial de compras y favoritos",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Fue un gusto, gracias por visitar nuestra web!", {
          text: "Usted elimino su cuenta con exito",
          icon: "success",
        });
        deleteUser(_id);
      }
    });
  };
  // trae de la API por usuario para borrar.
  const deleteUser = async (_id) => {
    setIsLoading(true);
    const tokenLocal = leerDeLocalStorage("token") || {};
    const headers = { "x-auth-token": tokenLocal.token };
    localStorage.removeItem("token");
    await axios.delete(`https://cocobackend.herokuapp.com/api/users/${user._id}`, {
      headers,
    });
    history.push("/");
    setIsLoading(false);
    window.location.reload();
  };

  const onChangeImg = async (e) => {
    const img = e.target.files[0];
    if (!beforeUpload(img)) return;
    const base64 = await getBase64(img);
    console.log(base64)
    const tokenLocal = leerDeLocalStorage("token") || {};
    const headers = { "x-auth-token": tokenLocal.token };
    await axios.put(
      "http://localhost:4000/api/users/image",
      { image: base64 },
      {
        headers,
      }
    );
    await requestUserData();
  };

  return (
    <>
      <div className="card-profile row bg-grey">
        <Card.Img
          variant="top"
          className=" col-12 col-lg-6 img-avatar my-2 mx-auto"
          src={user.image || exampleImage}
        />
        <div className="col-12 col-lg-6  d-flex flex-column aling-items-between card-body-container mx-auto">
          <Card.Body className="p-0">
            <Card.Title className="text-center my-3">
              {user.name} {user.lastName}
            </Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex flex">
              <label htmlFor="file-input" className="label-change-avatar">
                <input 
                  id="file-input"
                  className="file-input"
                  accept="image/png, image/jpeg"
                  type="file"
                  onChange={onChangeImg}
                />{" "}
                <div >
                  <Lottie options={{...defaultOptions }} />
                </div>
                </label>
              </ListGroup.Item>
              <ListGroup.Item>
                {user.role === "admin" ? "Administrador " : "Cliente "}
                {user.register}
              </ListGroup.Item>
              <ListGroup.Item>{user.email}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <div className="my-2 d-flex justify-content-between">
            <button
              className="boton-artesanal-cel "
              onClick={handleShowModalEditar}
            >
              <h5 className="text-center m-0 py-2  ">Editar perfil</h5>
            </button>
            <OverlayTrigger
              trigger="focus"
              placement="bottom"
              overlay={
                <Popover id="popover-basic">
                  <Popover.Header as="h3">Configurar Cuenta</Popover.Header>
                  <Popover.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <button
                          className="btn-edit"
                          onClick={() => alertaBorrar(user._id)}
                        >
                          Eliminar Cuenta
                        </button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Popover.Body>
                </Popover>
              }
            >
              <button className="my-2 p-1 btn-config">
                <FiSettings className="p-0 mb-1" />
              </button>
            </OverlayTrigger>
          </div>
        </div>
      </div>

      {user.name && (
        <ModalEditProfile
          closeModal={handleCloseModalEditar}
          user={user}
          showModalEditar={showModalEditar}
          requestUserData={requestUserData}
        />
      )}

      {isLoading && <SpinnerCM />}
    </>
  );
}
