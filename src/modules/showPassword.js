export const showPassword = ({
  inputPass,
  btnEye,
  btnEyeShow,

}) => {
  const inputPassword = document.querySelectorAll(inputPass);
  const btnEyePassword = document.querySelectorAll(btnEye);

  btnEyePassword.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle(btnEyeShow);
      inputPassword[i].type = btn.classList.contains(btnEyeShow)
      ? 'text'
      : 'password'
      ;
    })
  })
};