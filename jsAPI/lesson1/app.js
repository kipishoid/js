// Загрузка JSON-данных
fetch("schedule.json")
  .then((response) => response.json())
  .then((data) => {
    // Получение элемента для отображения расписания
    const scheduleElement = document.getElementById("schedule");

    // Отображение каждого занятия
    data.forEach((lesson) => {
      // Создание элементов
      const lessonElement = document.createElement("div");
      const titleElement = document.createElement("h2");
      const timeElement = document.createElement("p");
      const maxParticipantsElement = document.createElement("p");
      const currentParticipantsElement = document.createElement("p");
      const buttonElement = document.createElement("button");

      // Добавление классов
      buttonElement.classList.add("btn", "btn-reset");
      lessonElement.classList.add("lesson");
      titleElement.classList.add("title");
      timeElement.classList.add("time");
      maxParticipantsElement.classList.add("max");
      currentParticipantsElement.classList.add("current");

      // Заполнение элементов
      titleElement.textContent = lesson.title;
      timeElement.textContent = `Время проведения: ${lesson.time}`;
      maxParticipantsElement.textContent = `Максимальное количество участников: ${lesson.maxParticipants}`;
      currentParticipantsElement.textContent = `Текущее количество записанных участников: ${lesson.currentParticipants}`;
      buttonElement.textContent = "Записаться";

      // Проверка, достигнуто ли максимальное количество участников при загрузке данных
      if (lesson.currentParticipants >= lesson.maxParticipants) {
        buttonElement.disabled = true;
        buttonElement.classList.add("btn-limit");
      }

      // Обработчик
      buttonElement.addEventListener("click", () => {
        // Проверка, достигнуто ли максимальное количество участников
        if (lesson.currentParticipants < lesson.maxParticipants) {
          // Обновление текущего количества записанных участников
          lesson.currentParticipants++;
          currentParticipantsElement.textContent = `Текущее количество записанных участников: ${lesson.currentParticipants}`;

          // Проверка, достигнуто ли максимальное количество участников после записи
          if (lesson.currentParticipants >= lesson.maxParticipants) {
            buttonElement.disabled = true;
            buttonElement.classList.add("btn-limit");
          }
        }
      });

      // Добавление элементов на страницу
      lessonElement.appendChild(titleElement);
      lessonElement.appendChild(timeElement);
      lessonElement.appendChild(maxParticipantsElement);
      lessonElement.appendChild(currentParticipantsElement);
      lessonElement.appendChild(buttonElement);
      scheduleElement.appendChild(lessonElement);
    });
  });
