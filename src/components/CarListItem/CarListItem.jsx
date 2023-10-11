import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import Modal from 'components/Modal/Modal';
import {
  Li,
  Img,
  ButtonSvgWrapper,
  Svg,
  Div,
  P,
  Description,
  Span,
  Ul,
  Button,
  LiInfo,
  LiRental,
} from './CarListItem.styled';

import { formatMileage, formatLocation } from 'utils';
import { addCar, removeCar } from 'redux/carsRentSlice/actions';

const CarListItem = ({ data, index }) => {
  const {
    id,
    description,
    img,
    make,
    model,
    type,
    year,
    engineSize,
    fuelConsumption,
    mileage,
    functionalities,
    accessories,
    address,
    rentalCompany,
    rentalConditions,
    rentalPrice,
    favorite = null,
  } = data;

  const city = formatLocation(address)[0];
  const country = formatLocation(address)[1];
  const conditions = rentalConditions.split('\n');
  const age = conditions[0].slice(-2);
  const miles = formatMileage(mileage);
  const priceDollarSymbolAfter= rentalPrice.slice(-3)

  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(favorite);

  const dispatch = useDispatch();

  isOpen
    ? (document.body.style = 'overflow: hidden')
    : (document.body.style = 'overflow: auto');

  const handleBtnClick = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <Li>
      <>
        <Img img={img} width={274} height={268}>
          <ButtonSvgWrapper
            animate={{
              scale: checked ? 1.4 : 1,
              transition: {
                duration: 0.5,
              },
            }}
            onClick={() => {
              setChecked(prevState => !prevState);

              if (checked) {
                dispatch(removeCar(id));
                Notiflix.Notify.failure('car removed from favorites');
                return;
              }

              dispatch(addCar({ ...data, favorite: !checked }));
              Notiflix.Notify.success('you added car to favorites');
            }}
          >
            <Svg
              viewBox="0 0 18 18"
              animate={{
                fill: checked ? '#3470FF' : 'none',
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <path
                d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2544 2.24863 12.7125 2.24863C12.1706 2.24863 11.6341 2.35539 11.1335 2.56281C10.6329 2.77023 10.1781 3.07425 9.795 3.4575L9 4.2525L8.205 3.4575C7.43123 2.68373 6.38177 2.24903 5.2875 2.24903C4.19322 2.24903 3.14377 2.68373 2.37 3.4575C1.59623 4.23127 1.16153 5.28072 1.16153 6.375C1.16153 7.46927 1.59623 8.51873 2.37 9.2925L3.165 10.0875L9 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3173 8.45461 16.5247 7.95401C16.7321 7.45342 16.8389 6.91686 16.8389 6.375C16.8389 5.83313 16.7321 5.29657 16.5247 4.79598C16.3173 4.29539 16.0132 3.84056 15.63 3.4575Z"
                strokeOpacity="0.8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </ButtonSvgWrapper>
        </Img>
        <Div>
          <P>
            {make}
            {index >= 3 && <>,</>} {index < 3 && <Span>{model},</Span>} {year}
          </P>
          <P>{rentalPrice}</P>
        </Div>
        <Ul width={270} mg_b={28}>
          <LiInfo>{city}</LiInfo>
          <LiInfo>{country}</LiInfo>
          <LiInfo>{rentalCompany}</LiInfo>
          <LiInfo>{type}</LiInfo>
          <LiInfo>{model}</LiInfo>
          <LiInfo>{id}</LiInfo>
          <LiInfo>{engineSize}</LiInfo>
        </Ul>

        <Button onClick={handleBtnClick}>Learn more</Button>
      </>

      {isOpen && (
        <Modal toggle={handleBtnClick}>
          <div style={{ padding: '40px' }}>
            <Img img={img} width={480} height={248} />

            <P mg_b={8}>
              {make}
              {index >= 3 && <>,</>} {index < 3 && <Span>{model},</Span>} {year}
            </P>

            <Ul width={380} mg_b={14}>
              <LiInfo>{city}</LiInfo>
              <LiInfo>{country}</LiInfo>
              <LiInfo>id: {id}</LiInfo>
              <LiInfo>Year: {year}</LiInfo>
              <LiInfo>Type: {type}</LiInfo>
              <LiInfo>Fuel Consumption: {fuelConsumption}</LiInfo>
              <LiInfo>Engine Size: {engineSize}</LiInfo>
            </Ul>

            <Description>{description}</Description>

            <Description style={{ fontWeight: '500', marginBottom: '8px' }}>
              Accessories and functionalities:
            </Description>

            <Ul width={461} mg_b={24}>
              <LiInfo>{accessories[0]}</LiInfo>
              <LiInfo>{accessories[1]}</LiInfo>
              <LiInfo>{functionalities[0]}</LiInfo>
              <LiInfo>{accessories[2]}</LiInfo>
              <LiInfo>{functionalities[1]}</LiInfo>
              <LiInfo>{functionalities[2]}</LiInfo>
            </Ul>

            <Description>Rental Conditions: </Description>

            <Ul
              width={461}
              mg_b={24}
              style={{ margin: '-6px', marginBottom: '24px' }}
            >
              <LiRental>
                Minimum age: <Span fw={600}>{age}</Span>
              </LiRental>
              <LiRental>{conditions[1]}</LiRental>
              <LiRental>{conditions[2]}</LiRental>
              <LiRental>
                Milegage: <Span fw={600}>{miles}</Span>
              </LiRental>
              <LiRental>
                Pice: <Span fw={600}>{priceDollarSymbolAfter}$</Span>
              </LiRental>
            </Ul>
          </div>
        </Modal>
      )}
    </Li>
  );
};

export default CarListItem;
