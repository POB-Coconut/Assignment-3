export const REGEXP = {
  id: /^[a-zA-Z0-9]{4,12}$/,
  password: /^[a-zA-Z0-9]{4,16}$/,
  name: /^[가-힣]{2,4}$/,
};

export const regValidate = (value, regExp) => {
  const reg = new RegExp(regExp);
  return reg.test(value);
};

export function loginValidate(values) {
  const errors = {};
  if (!values.id) {
    errors.id = '아이디를 입력하세요.';
  } else if (!regValidate(values.id, REGEXP.id)) {
    errors.id = '아이디는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.';
  }

  if (!values.password) {
    errors.password = '비밀번호를 입력하세요';
  } else if (!regValidate(values.password, REGEXP.password)) {
    errors.password = '비밀번호는 4~16자의 영문 대소문자와 숫자로만 입력하여 주세요.';
  } else if (values.password === values.id) {
    errors.password = '비밀번호는 아이디와 동일할 수 없습니다.';
  }

  return errors;
}

export function signupValidate(values) {
  const errors = {};
  if (!values.id) {
    errors.id = '아이디를 입력하세요.';
  } else if (!regValidate(values.id, REGEXP.id)) {
    errors.id = '아이디는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.';
  }
  if (!values.password) {
    errors.password = '비밀번호를 입력하세요';
  } else if (!regValidate(values.password, REGEXP.password)) {
    errors.password = '비밀번호는 4~16자의 영문 대소문자와 숫자로만 입력하여 주세요.';
  } else if (values.password === values.id) {
    errors.password = '비밀번호는 아이디와 동일할 수 없습니다.';
  }

  if (!values.checkingPassword) {
    errors.checkingPassword = '비밀번호를 다시 입력하세요.';
  } else if (values.checkingPassword !== values.password) {
    errors.checkingPassword = '비밀번호가 일치하지 않습니다.';
  }

  if (!values.name) {
    errors.name = '이름을 입력하세요.';
  } else if (!regValidate(values.name, REGEXP.name)) {
    errors.name = '특수문자,영어,숫자는 사용할수 없습니다. 한글 2~4자 이내로 입력해주세요.';
  }

  if (!values.age) {
    errors.age = '나이를 입력하세요.';
  } else if (!Number.isInteger(+values.age)) {
    errors.age = '나이는 숫자로 입력해주세요.';
  }

  if (!values.term) {
    alert('이용약관에 동의해주십시오.');
  }

  return errors;
}
