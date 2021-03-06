function elementCreator(howMany, parentId, childElement) {
  stateArray = ['Minas Gerais', 'São Paulo', 'Rio Grande Do Sul', 'Amapá']

  for (let i = 0; i < howMany; i += 1) {
    let optionCreator = document.getElementById(parentId).appendChild(document.createElement(childElement))

    document.getElementById(parentId).children[i].innerHTML = stateArray[i]
  }
}

elementCreator(4, 'estado', 'option')

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
  onSelect: function () {
    console.log(this.getMoment().format('Do MMMM YYYY'));
  }
});

document.getElementById('submit').addEventListener('click', function preventDefaultAction(event) {
  event.preventDefault();
});