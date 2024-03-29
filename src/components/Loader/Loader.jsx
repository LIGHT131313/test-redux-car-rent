import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        justifyContent: 'center',
      }}
      wrapperClassName=""
      visible={true}
      color="#3f51b5"
    />
  );
};
