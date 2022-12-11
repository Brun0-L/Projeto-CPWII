/*Aplica a cor #BECCC3 no background do body da página
  *Tarefa/Issue  1
   *
   * Desenvolva uma função capaz de trocar a cor do fundo da página, ou seja,
   * alterar o background do body para a cor #BECCC3.
   */
function background() {
  document.body.style.backgroundColor = "#BECCC3";
}

/**
 * Recupera os valores dos campos de texto cujo o id='fname' e id='lname'
 * e apresente o nome e o sobrenome de uma pessoa (separado por um espaço)
 * na div id='result'
 */
function show() {
  /*
   * Issue  2
   *
   * Recupera os valores dos campos de texto cujo o id='fname' e id='lname' e apresente o nome
   * e o sobrenome de uma pessoa (separado por um espaço) na div id='result'
   */

  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  document.getElementById("result").innerHTML = firstName + " " + lastName;
}

/**
 * Filtra o array de objetos (data) de acordo com os caracteres
 * digitados no campo de texto id='name'
 */
function search() {
  var data = [
    { name: "Rodrigo" },
    { name: "Ricardo" },
    { name: "Fabio" },
    { name: "Alex" },
    { name: "Sílvia" },
  ];

  /**
   * Issue 3
   *
   * Utilizando o array (data) de objetos JSON acima, desenvolva um código que permita com que os
   * usuários procurem pelo nome de pessoas. Assim, quando o usuário digitar a letra 'r' no campo
   * de texto (id='name'), todas as pessoas que iniciarem com essa letra devem ser apresentados.
   * Consequentemente, quando for digitado 'ro' o sistema deve filtrar e apresentar na div com o
   * id='search' as pessoas cujo o nome inicia com 'ro'.
   *
   * Segue algumas funções que podem auxiliar na resolução da questão:
   *      substr - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
   *      length - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length
   *      toUpperCase - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
   *
   * Além disso, a função removeAllChildren abaixo também pode ser útil para o desenvolvimento da solução
   */
  let name = document.getElementById("name").value;
  if (name == "") {
    return "";
  }

  let element = document.getElementById("search");
  const size = name.length;

  element.innerHTML = "";

  for (i in data) {
    if (name.toUpperCase() == data[i].name.substr(0, size).toUpperCase()) {
      element.innerHTML += "<div>" + data[i].name + "</div>";
    }
  }
}

/**
 * Remove todos os filhos de um nó
 *
 * @param {*} node Um objeto HTML Node
 */
function removeAllChildren(node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
}
