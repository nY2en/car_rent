import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCar, removeCar } from 'redux/carsRentSlice/actions';
import Notiflix from 'notiflix';
import Modal from 'components/Modal';
import {
  Li,
  Img,
  ButtonSvgWrapper,
  Svg,
  Div,
  P,
  ModalContent,
  Description,
  Span,
  Ul,
  Button,
  LiInfo,
  LiRental,
  A,
} from './CarListItem.styled';
import sprite from 'assets/sprite.svg';
import { formatMileage, formatLocation } from 'utils';

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

  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(favorite);

  const SVG_WRAPPER_ANIMATION_OPTIONS = {
    scale: checked ? 1.4 : 1,
    transition: {
      duration: 0.5,
    },
  };

  const SVG_ANIMATION_OPTIONS = {
    fill: checked ? '#3470FF' : 'none',
    transition: {
      duration: 0.5,
    },
  };

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
            animate={SVG_WRAPPER_ANIMATION_OPTIONS}
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
            <Svg animate={SVG_ANIMATION_OPTIONS}>
              <use href={sprite + '#heart'}></use>
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
          <ModalContent>
            <Img img={img} width={461} height={248} />

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

            <Description mg_b={24}>{description}</Description>

            <Description mg_b={8} fw={500}>
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

            <Description mg_b={8} fw={500}>
              Rental Conditions:
            </Description>

            <Ul width={400} mg_b={24}>
              <LiRental>
                Minimum age: <Span fw={600}>{age}</Span>
              </LiRental>
              <LiRental>{conditions[1]}</LiRental>
              <LiRental>{conditions[2]}</LiRental>
              <LiRental>
                Milegage: <Span fw={600}>{miles}</Span>
              </LiRental>
              <LiRental>
                Pice: <Span fw={600}>{rentalPrice.slice(1)}$</Span>
              </LiRental>
            </Ul>

            <A href="tel:+380730000000">Rental car</A>
          </ModalContent>
        </Modal>
      )}
    </Li>
  );
};

export default CarListItem;
