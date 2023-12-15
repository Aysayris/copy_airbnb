import appImage from './assets/appartments/1.png'
import { useNavigate } from 'react-router-dom';

const AppartmentCard = ({ apartment }) => {
    const { id, location, distance, dates, price, image_url, rating } = apartment;
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/apartment/${id}`);
    };

    return (
        <div onClick={() => {
            // Действия при клике на карточку апартамента
        }}>
            <img src={appImage} alt="" />
            <div><b>{location}</b> <nav><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="black"/>
            </svg>{rating}</nav></div>
            <div>{distance}</div>
            <div>{dates}</div>
            <div><b>{price} <span>ночь</span></b></div>
            <button onClick={handleCardClick}>Посмотреть</button>
        </div>
    );
};

export default AppartmentCard;