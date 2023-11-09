const counterEl = document.querySelector('.counter')
const increaseButtonEl = document.querySelector('.counter__button--increase')
const decreaseButtonEl = document.querySelector('.counter__button--decrease')
const resetButtonEl = document.querySelector('.counter__reset-button')
const counterValueEl = document.querySelector('.counter__value')
const counterTitleEl = document.querySelector('.counter__title')

function handleIncreaseValue() {
  const currentValue = +counterValueEl.textContent
  let newValue = currentValue + 1


  if (newValue > 10) {
    newValue = 10

    counterEl.classList.add('counter--limit')
    counterTitleEl.innerHTML = "LIMIT! Buy <b>PRO</b> for >10"

    increaseButtonEl.disabled = true
    decreaseButtonEl.disabled = true
  }

  counterValueEl.textContent = newValue
}

function handleDecreaseValue() {
  const currentValue = +counterValueEl.textContent
  const newValue = currentValue - 1

  if (newValue >= 0) {
    counterValueEl.textContent = newValue
  }
}

function handleResetValue() {
  counterValueEl.textContent = 0
  counterEl.classList.remove('counter--limit')

  increaseButtonEl.disabled = false
  decreaseButtonEl.disabled = false

  counterTitleEl.innerHTML = "Fancy Counter"
}


increaseButtonEl.addEventListener('click', handleIncreaseValue)
decreaseButtonEl.addEventListener('click', handleDecreaseValue)
resetButtonEl.addEventListener('click', handleResetValue)