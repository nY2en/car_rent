import styled from '@emotion/styled';

const commonStyles = {
  control: styles => ({
    ...styles,
    borderRadius: '14px',
    backgroundColor: '#F7F7FB',
    border: 'none',
    marginBottom: '4px',
    marginRight: '18px',
  }),
  valueContainer: styles => ({
    ...styles,
    padding: '14px 18px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),

  menu: styles => ({
    ...styles,
    width: '100%',
    borderRadius: '14px',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    backgroundColor: '#FFF',
    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
  }),
  menuList: styles => ({
    ...styles,
    padding: '14px 18px',
  }),

  placeholder: styles => ({
    ...styles,
    fontFamily: 'Manrope',
    fontSize: '18px',
    color: '#121417',
    fontWeight: '500',
  }),
  option: (styles, state) => ({
    ...styles,
    color: state.isFocused ? '#121417' : 'rgba(18, 20, 23, 0.20)',
    backgroundColor: 'transparent',
    fontWeight: '500',
  }),
};

export const stylesMake = {
  ...commonStyles,
  control: styles => ({
    ...commonStyles.control(styles),
    width: '224px',
  }),
};

export const stylesPrice = {
  ...commonStyles,
  control: styles => ({
    ...commonStyles.control(styles),
    width: '145px',
  }),
};

export const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 41px 14px 24px;

  margin-right: 18px;

  border-radius: ${props =>
    props.left ? '14px 0px 0px 14px' : ' 0px 14px 14px 0px;'};

  border: none;
  outline: none;

  &:hover,
  &:focus {
    border: 1px solid #2684ff;
  }

  &::placeholder {
    font-family: Manrope;
    font-size: 18px;

    color: #121417;
  }
`;

export const P = styled.p`
  color: #8a8a89;
  ${'' /* font-family: Manrope; */}
  font-size: 14px;

  font-weight: 500;
  line-height: 18px;
`;
