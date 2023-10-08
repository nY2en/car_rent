import { Button } from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ setCount }) => {
  return (
    <Button
      type="button"
      onClick={() => {
        setCount(prevState => (prevState += 8));
      }}
    >
      Load more
    </Button>
  );
};

export default LoadMoreBtn;
