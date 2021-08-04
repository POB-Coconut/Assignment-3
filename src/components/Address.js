import React, { useState } from 'react';

const Address = () => {
  const [address, setAdress] = useState('');

  function fetchAddressApi() {
    new window.daum.Postcode({
      oncomplete(data) {
        const res = data.userSelectedType === 'R' ? data.roadAddress : data.jibunAddress;
        setAdress(res);
      },
    }).open();
  }
  return (
    <div>
      <button type='button' onClick={fetchAddressApi}>
        주소입력
      </button>
      <div>{address}</div>
    </div>
  );
};
export default Address;
