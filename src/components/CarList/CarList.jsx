import CarListItem from 'components/CarListItem/CarListItem';

import { Ul } from './CarList.styled';

const CarList = ({ data, count }) => {
  return (
    <>
      <Ul>
        {data.map((el, index) => {
          if (index > count) {
            return null;
          }

          return <CarListItem data={el} key={el.id} index={index} />;
        })}
      </Ul>
    </>
  );
};

export default CarList;
