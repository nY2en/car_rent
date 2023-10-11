import { ProgressBar } from 'react-loader-spinner';
import { Div } from './Loader.styled';

const Loader = () => {
  return (
    <Div>
      <ProgressBar
        height="280"
        width="280"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#4e93ba"
        barColor="#ff4d00"
      />
    </Div>
  );
};

export default Loader;
