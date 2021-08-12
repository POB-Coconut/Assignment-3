import React from 'react';

const Address = ({ address, handleChange }) => {
  const fetchAddressApi = () => {
    new window.daum.Postcode({
      oncomplete(data) {
        handleChange({ target: { name: 'address', value: `${data.sido} ${data.sigungu}` } });
      },
    }).open();
  };

  return (
    <input
      type='text'
      name='address'
      value={address}
      onClick={fetchAddressApi}
      placeholder='주소를 입력해주세요 ( 시군구 까지만 입력됩니다. )'
      readOnly
    />
  );
};
export default Address;
