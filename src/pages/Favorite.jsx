
import { Card, Container } from 'react-bootstrap';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { CardFavProduct } from '../componentes/favorites/CardFavProduct';



function Favorite({ favorites, setFavorites, cart, setCart }) {

    //fn limpia productos del favoritos
    const clearFavorites = () => {
        setFavorites([]);
    };

    const mapFavorites = favorites?.map((favProduct, i) => (
        <CardFavProduct
            key={i} favProduct={favProduct}
            setFavorites={setFavorites} favorites={favorites}
            cart={cart} setCart={setCart} />
    ));

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center">
            <h2 className="my-2" style={{ color: 'rgb(146, 210, 226)', fontFamily: 'Julius Sans One', fontWeight: 'bold' }}>Tus favoritos</h2>

                    <button className="clean-cart my-2" onClick={clearFavorites}><MdOutlineCleaningServices /></button>

            </div>
            {favorites.length === 0 ?
                <Card className="text-center text-dark-50 p-5 m-5 no-results-card">
                    <Card.Title>Aun no tienes favoritos :(</Card.Title>
                </Card>
                :
                <div>
                    <div className="d-flex flex-wrap justify-content-center">
                        {mapFavorites}
                    </div>
                </div>
            }
        </Container>
    )
};

export default Favorite