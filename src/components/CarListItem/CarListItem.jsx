import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import {
  Li,
  Img,
  Div,
  P,
  Span,
  Ul,
  Button,
  LiInfo,
  SpanInfo,
} from './CarListItem.styled';

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
  } = data;
  const city = formatData(address)[0];
  const country = formatData(address)[1];

  const [isOpen, setIsOpen] = useState(false);

  isOpen
    ? (document.body.style = 'overflow: hidden')
    : (document.body.style = 'overflow: auto');

  const handleBtnClick = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <Li>
      <>
        <Img img={img}></Img>
        <Div>
          <P>
            {make} {index < 3 && <Span>{model}</Span>}, {year}
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

const formatData = data => {
  const newArr = data.split(',');
  newArr.splice(0, 1);

  return newArr;
};

export default CarListItem;
