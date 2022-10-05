export const selectController = ({
  openBtn,
  openBlock,
  closeBtn,
  changeBlock,
  handlerChange = () => {},
}) => {
  const btn = document.querySelector(openBtn);
  const selectBlock = document.querySelector(openBlock);

  const categoryTitle = document.querySelector(changeBlock);

  const data = {
    handlerChange,
    onChange: (handlerChange) => {
      data.handlerChange = handlerChange;
    },
    value: '',
  }

  const openSelectBlock = () => {
  selectBlock.style.display = 'block';
  };

  const closeSelectBlock = () => {
    selectBlock.style.display = '';
  };

  const toggleSelectBlock = () => {
    selectBlock.style.display = selectBlock.style.display === 'block' ? '' : 'block' ;
  };

  btn.addEventListener('click', toggleSelectBlock);

  selectBlock.addEventListener('click', ({target}) => {
    const option = target.closest(closeBtn);
    if (option) {
      closeSelectBlock();
      categoryTitle.innerHTML = option.textContent.trim();
      data.value = option.dataset.value 
      ? option.dataset.value
      : option.textContent;

      data.handlerChange(data.value);
    }
  })

  return data;
}

