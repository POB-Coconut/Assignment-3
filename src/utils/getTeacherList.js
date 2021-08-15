export const getTeacherList = (users) => users.filter(({ userType }) => userType === 'teacher');
