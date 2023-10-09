import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'components/Modal/Modal';
import {
  Li,
  Img,
  ButtonSvgWrapper,
  Svg,
  Div,
  P,
  Span,
  Ul,
  Button,
  LiInfo,
  SpanInfo,
} from './CarListItem.styled';
import formatArrayData from 'utils/formatArrayData';
import { addCar, removeCar } from 'redux/carsRentSlice/actions';

const CarListItem = ({ data, index }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    favorite = null,
  } = data;
  const city = formatArrayData(address)[0];
  const country = formatArrayData(address)[1];

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
        <Img img={img}>
          <ButtonSvgWrapper
            onClick={() => {
              setChecked(prevState => !prevState);

              if (checked) {
                dispatch(removeCar(data.id));
                return;
              }

              dispatch(addCar({ ...data, favorite: !checked }));
            }}
          >
            <Svg
              viewBox="0 0 18 18"
              style={{
                fill: checked ? '#3470FF' : 'none',
                stroke: checked ? '#3470FF' : 'white',
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
        <Ul>
          <LiInfo>{city}</LiInfo>

          <SpanInfo></SpanInfo>

          <LiInfo>{country}</LiInfo>

          <SpanInfo></SpanInfo>

          <LiInfo>{rentalCompany}</LiInfo>

          <SpanInfo></SpanInfo>

          <LiInfo>{type}</LiInfo>

          <SpanInfo></SpanInfo>

          <LiInfo>{model}</LiInfo>

          <SpanInfo></SpanInfo>

          <LiInfo>{id}</LiInfo>
        </Ul>

        <Button onClick={handleBtnClick}>Learn more</Button>
      </>

      {isOpen && <Modal toggle={setIsOpen}>{model}</Modal>}
    </Li>
  );
};

export default CarListItem;
