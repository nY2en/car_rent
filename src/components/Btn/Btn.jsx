import { Button } from './Btn.styled';

const Btn = ({ title, onClick, pv, ph, bg, mg_r }) => {
  return (
    <Button onClick={onClick} pv={pv} ph={ph} bg={bg} mg_r={mg_r}>
      {title}
    </Button>
  );
};
export default Btn;
