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
  console.log(data);
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

  return (
    <Li>
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
      <Button>Learn more</Button>
    </Li>
  );
};

const formatData = data => {
  const newArr = data.split(',');
  newArr.splice(0, 1);

  return newArr;
};

export default CarListItem;
