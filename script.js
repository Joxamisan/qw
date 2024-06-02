document.addEventListener('DOMContentLoaded', function() {
    // Находим список, куда будем добавлять элементы
    var familyTree = document.getElementById('familyTree');
  
    // Функция для добавления нового члена семьи
    function addFamilyMember(name, description) {
      // Создаем новый элемент li
      var newMember = document.createElement('li');
  
      // Создаем новую ссылку для имени
      var nameLink = document.createElement('a');
      nameLink.href = '#';
      nameLink.classList.add('name');
      nameLink.textContent = name;
  
      // Создаем блок описания
      var descriptionDiv = document.createElement('div');
      descriptionDiv.classList.add('description');
      descriptionDiv.innerHTML = '<p>' + description + '</p>';
  
      // Добавляем ссылку и описание в новый элемент li
      newMember.appendChild(nameLink);
      newMember.appendChild(descriptionDiv);
  
      // Добавляем нового члена в дерево семьи
      familyTree.appendChild(newMember);
    }
  
    // Обработчик события клика по ссылкам с классом 'name'
    familyTree.addEventListener('click', function(event) {
      if (event.target.classList.contains('name')) {
        // Находим родительский элемент li
        var parentLi = event.target.closest('li');
  
        // Находим элемент с классом 'description' в родительском li
        var description = parentLi.querySelector('.description');
  
        // Переключаем видимость текста
        description.classList.toggle('show');
      }
    });
  
    // Пример добавления членов семьи
    addFamilyMember('Тимур', 'Описание Тимура.');
    addFamilyMember('Джахангир', 'Описание Джахангира.');
    addFamilyMember('Улугбек', 'Описание Улугбека.');
    addFamilyMember('Шахрух', 'Описание Шахруха.');
    addFamilyMember('Мирза-Мухаммад', 'Описание Мирза-Мухаммада.');
  });

  //gjjbhkkn
  document.querySelectorAll('.person[data-children]').forEach(person => {
    person.addEventListener('click', () => {
        document.querySelectorAll('.generation').forEach(gen => {
            gen.classList.add('hidden');
        });
        document.getElementById('second-generation').classList.remove('hidden');
        document.getElementById(person.getAttribute('data-children')).classList.remove('hidden');
    });
});

document.getElementById('temur').addEventListener('click', () => {
    document.querySelectorAll('.generation').forEach(gen => {
        gen.classList.add('hidden');
    });
    document.getElementById('second-generation').classList.remove('hidden');
});