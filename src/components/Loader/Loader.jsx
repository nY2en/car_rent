import { ProgressBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '300px',
      }}
    >
      <ProgressBar
        height="280"
        width="280"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#4e93ba"
        barColor="#ff4d00"
      />
    </div>
  );
};

export default Loader;
