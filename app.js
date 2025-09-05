// Полные данные приложения с улучшениями
const appData = {
  vasilchenko_male_full: {
    vectors: [
      {
        name: "libido_awakening", 
        label: "Возраст пробуждения либидо (лет)", 
        type: "number",
        explanation: "В каком возрасте у вас впервые появилось половое влечение к противоположному полу? Это не обязательно связано с сексуальной активностью - речь о первом осознанном интересе, эротических мыслях или фантазиях.",
        scoring: {"18+": 1, "17": 2, "16": 3, "15": 4, "14": 5, "13": 6, "12": 7, "11": 8, "10-": 9}
      },
      {
        name: "first_ejaculation", 
        label: "Возраст первой эякуляции (лет)", 
        type: "number",
        explanation: "В каком возрасте произошла первая эякуляция независимо от причины - половой акт, мастурбация или поллюция (непроизвольное семяизвержение во сне)?",
        scoring: {"19+": 1, "18": 2, "17": 3, "16": 4, "15": 5, "14": 6, "13": 7, "12": 8, "11-": 9}
      },
      {
        name: "trochanter_index", 
        label: "Трохантерный индекс", 
        type: "number",
        explanation: "Отношение общего роста к длине ноги от большого вертела бедра до пола. Характеризует пропорции тела и связан с гормональным фоном. Подробная инструкция доступна в калькуляторе.",
        scoring: {"2.03+": 1, "2.01-2.02": 2, "2.00": 3, "1.98-1.99": 4, "1.95-1.97": 5, "1.93-1.94": 6, "1.91-1.92": 7, "1.89-1.90": 8, "1.88-": 9}
      },
      {
        name: "pubic_hair", 
        label: "Характер оволосения лобка", 
        type: "radio",
        explanation: "Тип распределения волос в области лобка отражает особенности гормонального фона. Подробные описания каждого типа см. в справочном разделе.",
        options: [
          {value: 1, label: "По женскому типу", description: "Треугольная форма с четкой горизонтальной верхней границей, волосы не переходят на живот"}, 
          {value: 4, label: "Переходный тип", description: "Промежуточные характеристики между женским и мужским типом"}, 
          {value: 7, label: "По мужскому типу", description: "Ромбовидная форма с переходом волос по белой линии на живот до пупка"}, 
          {value: 9, label: "Гипертрихоз", description: "Избыточное оволосение с распространением на бедра и живот"}
        ]
      },
      {
        name: "max_excess", 
        label: "Максимальное количество эякуляций за 24 часа", 
        type: "number",
        explanation: "Максимальное количество эякуляций, которые вы способны совершить за сутки в период наивысшей сексуальной активности (обычно в возрасте 20-30 лет).",
        scoring: {"1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8-9": 8, "10+": 9}
      },
      {
        name: "ufr_time",
        label: "Время достижения УФР после начала половой жизни (лет)",
        type: "radio",
        explanation: "УФР (условный физиологический ритм) - это устойчивая частота половых актов, которая устанавливается после периода адаптации. Это тот ритм сексуальной активности, который становится для вас комфортным и естественным. Через сколько времени после начала регулярной половой жизни у вас установился такой постоянный ритм? (Относительное время от начала сексуальной активности)",
        options: [
          {value: 1, label: "Не достигается", description: "Ритм так и не установился"},
          {value: 2, label: "Более 10 лет", description: ""},
          {value: 3, label: "6-10 лет", description: ""},
          {value: 4, label: "3-5 лет", description: ""},
          {value: 5, label: "2 года", description: ""},
          {value: 6, label: "1 год", description: ""},
          {value: 7, label: "До 1 года", description: ""}
        ]
      },
      {
        name: "ufr_age",
        label: "Абсолютный возраст достижения УФР (лет)",
        type: "radio",
        explanation: "В каком возрасте у вас установился постоянный, устраивающий вас ритм половой активности? (Календарный возраст, когда установился ритм, независимо от времени начала сексуальной жизни)",
        options: [
          {value: 1, label: "Не достигается", description: "Ритм так и не установился"},
          {value: 2, label: "Более 40 лет", description: ""},
          {value: 3, label: "36-40 лет", description: ""},
          {value: 4, label: "31-35 лет", description: ""},
          {value: 5, label: "26-30 лет", description: ""},
          {value: 6, label: "21-25 лет", description: ""},
          {value: 7, label: "До 20 лет", description: ""}
        ]
      }
    ]
  },
  vasilchenko_female_full: {
    vectors: [
      {
        name: "menarche", 
        label: "Возраст первой менструации (лет)", 
        type: "number",
        explanation: "В каком возрасте у вас началась первая менструация (менархе)? Это важный показатель полового созревания.",
        scoring: {"17+": 1, "16": 2, "15": 3, "14": 4, "13": 5, "12": 6, "11": 7, "10": 8, "9-": 9}
      },
      {
        name: "menstruation_regularity", 
        label: "Регулярность менструаций", 
        type: "radio",
        explanation: "Как быстро после менархе установился регулярный цикл и каков его характер? Оцените общее течение менструаций в подростковом возрасте.",
        options: [
          {value: 1, label: "Нерегулярные, болезненные", description: "Длительные нарушения цикла с сильными болями"}, 
          {value: 2, label: "Нерегулярные", description: "Частые нарушения цикла без сильных болей"}, 
          {value: 3, label: "Редкие нарушения", description: "Периодические сбои цикла"}, 
          {value: 5, label: "Регулярные", description: "Цикл установился в течение года"}, 
          {value: 7, label: "Регулярные с раннего возраста", description: "Цикл установился сразу и протекал без проблем"}
        ]
      },
      {
        name: "pregnancy_onset", 
        label: "Наступление беременности", 
        type: "radio",
        explanation: "Как быстро наступила беременность при попытках зачатия? Если беременностей не было, выберите 'Не было попыток' или оцените по своим ощущениям.",
        options: [
          {value: 0, label: "Не было попыток", description: "Не планировали беременность"}, 
          {value: 1, label: "Не наступает более 2 лет", description: "При активных попытках"}, 
          {value: 2, label: "Через 2-3 года", description: ""}, 
          {value: 3, label: "Через 1-2 года", description: ""}, 
          {value: 4, label: "Через 6-12 месяцев", description: ""}, 
          {value: 5, label: "Через 3-6 месяцев", description: ""}, 
          {value: 6, label: "Через 1-3 месяца", description: ""}, 
          {value: 7, label: "В первый месяц попыток", description: ""}, 
          {value: 8, label: "Сразу/незапланированно", description: ""}
        ]
      },
      {
        name: "pregnancy_course", 
        label: "Течение беременности", 
        type: "radio",
        explanation: "Как протекали ваши беременности? Если беременностей не было, пропустите этот вопрос, выбрав соответствующий вариант.",
        options: [
          {value: 0, label: "Не было беременностей", description: ""}, 
          {value: 2, label: "С серьезными осложнениями", description: "Госпитализации, угрозы, серьезные проблемы"}, 
          {value: 3, label: "С легкими осложнениями", description: "Токсикоз, небольшие проблемы"}, 
          {value: 4, label: "Нормальное течение", description: "Без серьезных проблем"}, 
          {value: 6, label: "Легкое протекание", description: "Минимальный дискомфорт"}, 
          {value: 7, label: "Очень легкое", description: "Практически без неудобств"}, 
          {value: 8, label: "Идеальное", description: "Отличное самочувствие на протяжении всей беременности"}
        ]
      },
      {
        name: "trochanter_index", 
        label: "Трохантерный индекс", 
        type: "number",
        explanation: "Отношение общего роста к длине ноги от большого вертела бедра до пола. У женщин этот показатель обычно выше, чем у мужчин.",
        scoring: {"1.88-1.92": 1, "1.93-1.94": 2, "1.95-1.96": 3, "1.97-1.98": 4, "1.99-2.00": 5, "2.01-2.02": 6, "2.03-2.04": 7, "2.05+": 8}
      },
      {
        name: "pubic_hair", 
        label: "Характер оволосения лобка", 
        type: "radio",
        explanation: "Тип и обильность волос в области лобка. У женщин оценивается интенсивность и форма оволосения.",
        options: [
          {value: 1, label: "Скудное, по мужскому типу", description: "Малое количество волос, ромбовидная форма"}, 
          {value: 3, label: "Умеренное", description: "Средняя густота, переходная форма"}, 
          {value: 5, label: "По женскому типу", description: "Треугольная форма, нормальная густота"}, 
          {value: 8, label: "Очень обильное", description: "Густое оволосение по женскому типу"}
        ]
      },
      {
        name: "libido_awakening", 
        label: "Возраст пробуждения либидо (лет)", 
        type: "number",
        explanation: "В каком возрасте впервые появилось эротическое влечение, интерес к романтическим отношениям или сексуальные фантазии?",
        scoring: {"18+": 1, "17": 2, "16": 3, "15": 4, "14": 5, "13": 6, "12": 7, "11": 8, "10-": 9}
      },
      {
        name: "first_orgasm", 
        label: "Возраст первого оргазма (лет)", 
        type: "number",
        explanation: "В каком возрасте был первый оргазм любым способом - в партнерстве, при мастурбации или спонтанно?",
        scoring: {"35+": 1, "30-34": 2, "26-29": 3, "21-25": 4, "18-20": 5, "17-18": 6, "16-17": 7, "15-16": 8, "15-": 9}
      },
      {
        name: "orgasm_time", 
        label: "Время до первого оргазма после начала половой жизни", 
        type: "radio",
        explanation: "Сколько времени прошло от начала регулярной половой жизни до достижения первого оргазма с партнером?",
        options: [
          {value: 1, label: "Более 3 лет", description: "Долгий процесс адаптации"}, 
          {value: 2, label: "2-3 года", description: ""}, 
          {value: 3, label: "1-2 года", description: ""}, 
          {value: 4, label: "6-12 месяцев", description: ""}, 
          {value: 5, label: "3-6 месяцев", description: ""}, 
          {value: 6, label: "1-3 месяца", description: ""}, 
          {value: 7, label: "До 1 месяца", description: ""}, 
          {value: 8, label: "С первого раза", description: "Сразу при начале половой жизни"}
        ]
      },
      {
        name: "orgasmic_achievement", 
        label: "Достижение оргазма (% случаев)", 
        type: "radio",
        explanation: "В каком проценте случаев половой близости вы достигаете оргазма в настоящее время или достигали в период наибольшей активности?",
        options: [
          {value: 1, label: "Менее 25%", description: "Низкая оргастичность"}, 
          {value: 3, label: "25-50%", description: "Умеренная оргастичность"}, 
          {value: 4, label: "50-75%", description: "Хорошая оргастичность"}, 
          {value: 5, label: "75-90%", description: "Высокая оргастичность"}, 
          {value: 6, label: "90-100%", description: "Очень высокая оргастичность"}, 
          {value: 8, label: "100%", description: "Постоянная оргастичность"}
        ]
      }
    ]
  },
  nagoski_questions_universal: {
    sis: [
      "Пока все не будет «как надо», мне сложно почувствовать сексуальное возбуждение",
      "Когда я возбуждаюсь, любая мелочь способна уничтожить это возбуждение", 
      "Мне крайне важно доверять партнеру, чтобы по-настоящему возбудиться",
      "Если я переживаю, что не смогу быстро возбудиться или достичь оргазма, это блокирует возбуждение",
      "Стеснение и излишние размышления во время секса мешают мне"
    ],
    ses: [
      "Я могу возбуждаться от одного только аромата человека",
      "Когда партнер проявляет талант или ум, это меня возбуждает",
      "Возможность секса в необычном месте меня возбуждает", 
      "Фантазии или мысли о сексе легко вызывают у меня возбуждение",
      "Гормональные изменения усиливают мою возбудимость",
      "Я сильно возбуждаюсь, когда кто-то явно хочет меня"
    ]
  },
  constitution_types: {
    "1.0-1.5": {type: "Чрезвычайно слабая", description: "Очень позднее созревание, минимальная половая активность", color: "#ff6b6b"},
    "1.6-2.5": {type: "Очень слабая", description: "Позднее созревание, низкая активность", color: "#ff8a80"}, 
    "2.6-3.5": {type: "Слабая", description: "Позднее созревание, редкая активность", color: "#ffb74d"},
    "3.6-4.5": {type: "Ослабленная средняя", description: "Умеренно позднее созревание", color: "#fff176"},
    "4.6-5.5": {type: "Средняя", description: "Нормальное развитие, сбалансированная активность", color: "#aed581"},
    "5.6-6.5": {type: "Усиленная средняя", description: "Умеренно раннее созревание", color: "#81c784"},
    "6.6-7.5": {type: "Сильная", description: "Раннее созревание, высокая активность", color: "#66bb6a"},
    "7.6-8.5": {type: "Очень сильная", description: "Очень раннее созревание, очень высокая активность", color: "#4caf50"},
    "8.6-9.0": {type: "Чрезвычайно сильная", description: "Максимально раннее созревание, максимальная активность", color: "#2e7d32"}
  }
};

// Состояние приложения
let currentTest = null;
let currentGender = null;
let currentQuestion = 0;
let testAnswers = {};
let nagoskiAnswers = {};

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
  console.log('App initializing...');
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupTestCards();
  setupGenderSelection();
  setupModalCalculator();
  setupTestNavigation();
  setupNagoskiTest();
  setupGuideCalculators();
  setupContactInfo();

  // Автоматический расчет индекса с значениями по умолчанию
  setTimeout(() => {
    calculateGuideIndex();
    calculateModalIndex();
  }, 100);

  console.log('App initialized successfully');
}

// Главная функция навигации
function setupNavigation() {
  console.log('Setting up navigation...');
  
  // Единый обработчик кликов для всего приложения
  document.addEventListener('click', function(e) {
    console.log('Click detected:', e.target);
    
    // Кнопки назад
    if (e.target.classList.contains('back-btn')) {
      e.preventDefault();
      console.log('Back button clicked');
      const target = e.target.getAttribute('data-target');
      console.log('Target section:', target);
      if (target) {
        showSection(target);
      }
      return;
    }
    
    // Навигационные ссылки в главном меню
    if (e.target.classList.contains('nav-link')) {
      e.preventDefault();
      console.log('Nav link clicked');
      const section = e.target.getAttribute('data-section');
      console.log('Target section:', section);
      if (section) {
        showSection(section);
      }
      return;
    }
    
    // Карточки тестов
    const testCard = e.target.closest('.test-card');
    if (testCard) {
      e.preventDefault();
      console.log('Test card clicked');
      const testType = testCard.getAttribute('data-test');
      console.log('Test type:', testType);
      currentTest = testType;
      
      if (testType === 'vasilchenko') {
        showSection('vasilchenko-info');
      } else if (testType === 'nagoski') {
        showSection('nagoski-info');
      }
      return;
    }
    
    // Кнопки выбора пола
    if (e.target.classList.contains('gender-btn')) {
      e.preventDefault();
      console.log('Gender button clicked');
      const gender = e.target.getAttribute('data-gender');
      console.log('Selected gender:', gender);
      currentGender = gender;
      
      if (gender === 'male') {
        startVasilchenkoTest('male');
      } else if (gender === 'female') {
        startVasilchenkoTest('female');
      }
      return;
    }
    
    // Кнопка начала теста Нагоски
    if (e.target.classList.contains('start-nagoski')) {
      e.preventDefault();
      console.log('Start Nagoski clicked');
      startNagoskiTest();
      return;
    }
    
    // Другие кнопки с data-target
    if (e.target.hasAttribute('data-target') && !e.target.classList.contains('back-btn')) {
      e.preventDefault();
      const target = e.target.getAttribute('data-target');
      if (target) {
        showSection(target);
      }
      return;
    }
    
    // Навигация тестов
    handleTestNavigation(e);
    
    // Модальное окно
    handleModal(e);
    
    // Результаты
    handleResults(e);
  });
}

function showSection(sectionId) {
    console.log('Showing section:', sectionId);

    // Скрыть все секции
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Показать целевую секцию
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        console.log('Section shown successfully:', sectionId);

        // Небольшая задержка для обеспечения корректной работы анимаций
        setTimeout(() => {
            // Прокрутка к верху страницы с улучшенными параметрами
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }, 50);
    } else {
        console.error('Section not found:', sectionId);
    }
}

// Обработчик навигации тестов
function handleTestNavigation(e) {
  const target = e.target;
  
  // Предыдущий вопрос
  if (target.id === 'prev-question' || target.id === 'prev-question-f' || target.id === 'prev-question-n') {
    e.preventDefault();
    console.log('Previous question clicked');
    if (currentQuestion > 0) {
      currentQuestion--;
      
      if (target.id === 'prev-question-n') {
        renderNagoskiQuestion();
      } else {
        const gender = target.id === 'prev-question' ? 'male' : 'female';
        const vectors = appData[`vasilchenko_${gender}_full`].vectors;
        renderVasilchenkoQuestion(vectors, gender);
      }
    }
    return;
  }
  
  // Следующий вопрос
  if (target.id === 'next-question' || target.id === 'next-question-f' || target.id === 'next-question-n') {
    e.preventDefault();
    console.log('Next question clicked');
    
    if (target.id === 'next-question-n') {
      saveCurrentNagoskiAnswer();
      const totalQuestions = appData.nagoski_questions_universal.sis.length + appData.nagoski_questions_universal.ses.length;
      if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        renderNagoskiQuestion();
      }
    } else {
      const gender = target.id === 'next-question' ? 'male' : 'female';
      if (saveCurrentAnswer(gender)) {
        const vectors = appData[`vasilchenko_${gender}_full`].vectors;
        if (currentQuestion < vectors.length - 1) {
          currentQuestion++;
          renderVasilchenkoQuestion(vectors, gender);
        }
      }
    }
    return;
  }
  
  // Завершить тест
  if (target.id === 'finish-test' || target.id === 'finish-test-f' || target.id === 'finish-test-n') {
    e.preventDefault();
    console.log('Finish test clicked');
    
    if (target.id === 'finish-test-n') {
      saveCurrentNagoskiAnswer();
      finishNagoskiTest();
    } else {
      const gender = target.id === 'finish-test' ? 'male' : 'female';
      if (saveCurrentAnswer(gender)) {
        finishVasilchenkoTest(gender);
      }
    }
    return;
  }
  
  // Калькулятор трохантера
  if (target.hasAttribute('data-action') && target.getAttribute('data-action') === 'open-calculator') {
    e.preventDefault();
    console.log('Calculator button clicked');
    openTrochanterCalculator();
    return;
  }
  
  // Описание трохантерного индекса
  if (target.hasAttribute('data-action') && target.getAttribute('data-action') === 'open-description') {
    e.preventDefault();
    console.log('Description button clicked');
    openTrochanterDescription();
    return;
  }
}

// Обработчик модального окна
function handleModal(e) {
  const calculatorModal = document.getElementById('trochanter-modal');
  const descriptionModal = document.getElementById('trochanter-description-modal');

  // Закрытие модального окна
  if (e.target.classList.contains('modal-close')) {
    console.log('Modal close clicked');
    if (calculatorModal) calculatorModal.classList.add('hidden');
    if (descriptionModal) descriptionModal.classList.add('hidden');
    return;
  }
  
  // Закрытие по клику на фон модального окна
  if ((e.target === calculatorModal && calculatorModal && calculatorModal.classList.contains('modal')) ||
      (e.target === descriptionModal && descriptionModal && descriptionModal.classList.contains('modal'))) {
    console.log('Modal background clicked');
    if (e.target === calculatorModal) calculatorModal.classList.add('hidden');
    if (e.target === descriptionModal) descriptionModal.classList.add('hidden');
    return;
  }



  // Использование рассчитанного значения
  if (e.target.id === 'use-trochanter') {
    console.log('Use trochanter clicked');
    e.preventDefault();
    e.stopPropagation();
    
    // Проверить, не заблокирована ли кнопка
    if (e.target.disabled) {
      console.log('Button is disabled, ignoring click');
      return;
    }
    
    const resultSpan = document.getElementById('trochanter-result');
    const index = parseFloat(resultSpan.textContent);
    console.log('Index value:', index);
    
    if (index && !isNaN(index)) {
      const trochanterInput = document.getElementById('answer-trochanter_index');
      if (trochanterInput) {
        trochanterInput.value = index;
        testAnswers['trochanter_index'] = index;
        console.log('Value applied to input:', index);
      }
      
      // Закрыть модальное окно калькулятора
      const calculatorModal = document.getElementById('trochanter-modal');
      console.log('Calculator modal element:', calculatorModal);
      if (calculatorModal) {
        calculatorModal.classList.add('hidden');
        console.log('Modal closed');
      } else {
        console.error('Calculator modal not found!');
      }
      
      // Показать уведомление об успешном использовании значения
      console.log('Trochanter index value applied:', index);
    } else {
      console.error('Invalid index value:', index);
    }
    return;
  }
}

// Обработчик результатов
function handleResults(e) {
  const target = e.target;
  
  if (target.id === 'share-results') {
    e.preventDefault();
    const text = generateResultsText('vasilchenko');
    if (navigator.share) {
      navigator.share({text});
    } else {
      copyToClipboard(text);
    }
    return;
  }
  
  if (target.id === 'share-nagoski-results') {
    e.preventDefault();
    const text = generateResultsText('nagoski');
    if (navigator.share) {
      navigator.share({text});
    } else {
      copyToClipboard(text);
    }
    return;
  }
  
  if (target.classList.contains('restart-test')) {
    e.preventDefault();
    if (confirm('Вы уверены, что хотите начать тест заново? Все ответы будут потеряны.')) {
      testAnswers = {};
      currentQuestion = 0;
      if (currentGender === 'male') {
        startVasilchenkoTest('male');
      } else if (currentGender === 'female') {
        startVasilchenkoTest('female');
      }
    }
    return;
  }
  
  if (target.classList.contains('restart-nagoski')) {
    e.preventDefault();
    if (confirm('Вы уверены, что хотите начать тест заново? Все ответы будут потеряны.')) {
      nagoskiAnswers = {};
      currentQuestion = 0;
      startNagoskiTest();
    }
    return;
  }
}

// Настройка карточек тестов (уже обработано в setupNavigation)
function setupTestCards() {
  console.log('Test cards setup completed (handled by main navigation)');
}

// Выбор пола (уже обработано в setupNavigation)
function setupGenderSelection() {
  console.log('Gender selection setup completed (handled by main navigation)');
}

// Начало теста Васильченко
function startVasilchenkoTest(gender) {
  console.log('Starting Vasilchenko test for:', gender);
  currentQuestion = 0;
  testAnswers = {};
  
  const sectionId = `vasilchenko-${gender}`;
  showSection(sectionId);
  
  const vectors = appData[`vasilchenko_${gender}_full`].vectors;
  renderVasilchenkoQuestion(vectors, gender);
}

// Отображение вопроса Васильченко
function renderVasilchenkoQuestion(vectors, gender) {
  console.log('Rendering Vasilchenko question:', currentQuestion, 'for gender:', gender);
  const container = document.getElementById(`${gender}-questions`);
  if (!container) {
    console.error('Question container not found for gender:', gender);
    return;
  }
  
  const vector = vectors[currentQuestion];
  console.log('Current vector:', vector);
  
  container.innerHTML = '';

  const questionDiv = document.createElement('div');
  questionDiv.className = 'question current';
  
  let questionHTML = `
    <h3>${vector.label}</h3>
    <div class="question-explanation">
      <h4>💡 Пояснение:</h4>
      <p>${vector.explanation}</p>
    </div>
  `;

  if (vector.type === 'number') {
    if (vector.name === 'trochanter_index') {
      questionHTML += `
        <div class="number-input-group">
          <input type="number" step="0.01" class="form-control" id="answer-${vector.name}" placeholder="Например: 1.95">
          <button class="btn btn--outline trochanter-calculator-btn" data-action="open-calculator">
            📏 Открыть калькулятор
          </button>
        </div>
        <div class="info-highlight">
          <strong>Подсказка:</strong> Если не знаете свой трохантерный индекс, воспользуйтесь <a href="#" data-action="open-calculator" style="color: var(--color-primary); text-decoration: underline;">онлайн-калькулятором</a> или изучите <a href="#" data-action="open-description" style="color: var(--color-primary); text-decoration: underline;">как измерить трохантерный индекс</a>
        </div>
      `;
    } else {
      questionHTML += `
        <div class="number-input-group">
          <input type="number" class="form-control" id="answer-${vector.name}" placeholder="Введите возраст">
          <span class="input-helper">лет</span>
        </div>
      `;
    }
  } else if (vector.type === 'radio') {
    questionHTML += '<div class="radio-group">';
    vector.options.forEach(option => {
      questionHTML += `
        <label class="radio-option">
          <input type="radio" name="answer-${vector.name}" value="${option.value}">
          <div class="radio-option-content">
            <div class="radio-option-label">${option.label}</div>
            ${option.description ? `<div class="radio-option-description">${option.description}</div>` : ''}
          </div>
        </label>
      `;
    });
    questionHTML += '</div>';
  }

  questionDiv.innerHTML = questionHTML;
  container.appendChild(questionDiv);

  // Обработчики для радио кнопок
  if (vector.type === 'radio') {
    questionDiv.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        questionDiv.querySelectorAll('.radio-option').forEach(opt => {
          opt.classList.remove('selected');
        });
        e.target.closest('.radio-option').classList.add('selected');
        testAnswers[vector.name] = parseInt(e.target.value);
        console.log('Radio answer saved:', vector.name, testAnswers[vector.name]);
      });
    });
  }

  // Обработчики для числовых полей
  if (vector.type === 'number') {
    const input = document.getElementById(`answer-${vector.name}`);
    if (input) {
      input.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value) && value > 0) {
          testAnswers[vector.name] = value;
          e.target.classList.remove('error');
          console.log('Number answer saved:', vector.name, testAnswers[vector.name]);
        }
      });
    }
  }

  // Восстановление сохраненного ответа
  if (testAnswers[vector.name] !== undefined) {
    if (vector.type === 'number') {
      const input = document.getElementById(`answer-${vector.name}`);
      if (input) input.value = testAnswers[vector.name];
    } else if (vector.type === 'radio') {
      const radio = questionDiv.querySelector(`input[value="${testAnswers[vector.name]}"]`);
      if (radio) {
        radio.checked = true;
        radio.closest('.radio-option').classList.add('selected');
      }
    }
  }

  updateProgress(currentQuestion + 1, vectors.length, gender);
  updateNavButtons(vectors.length, gender);
}

// Настройка навигации теста (уже обработано в setupNavigation)
function setupTestNavigation() {
  console.log('Test navigation setup completed (handled by main navigation)');
}

// Сохранение текущего ответа
function saveCurrentAnswer(gender) {
  console.log('Saving current answer for gender:', gender);
  const vectors = appData[`vasilchenko_${gender}_full`].vectors;
  const vector = vectors[currentQuestion];
  
  if (vector.type === 'number') {
    const input = document.getElementById(`answer-${vector.name}`);
    if (!input) return false;
    
    const value = parseFloat(input.value);
    
    if (!value || value <= 0) {
      showValidationError(input, 'Пожалуйста, введите корректное значение');
      return false;
    }
    
    testAnswers[vector.name] = value;
  } else if (vector.type === 'radio') {
    if (testAnswers[vector.name] === undefined) {
      const radioGroup = document.querySelector(`input[name="answer-${vector.name}"]`);
      if (radioGroup) {
        showValidationError(radioGroup.closest('.radio-group'), 'Пожалуйста, выберите один из вариантов');
      }
      return false;
    }
  }
  
  clearValidationErrors();
  console.log('Answer saved successfully');
  return true;
}

function showValidationError(element, message) {
  clearValidationErrors();
  element.classList.add('error');
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message show';
  errorDiv.textContent = message;
  
  element.parentNode.appendChild(errorDiv);
  element.focus();
}

function clearValidationErrors() {
  document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
  document.querySelectorAll('.error-message').forEach(el => el.remove());
}

// Обновление кнопок навигации
function updateNavButtons(totalQuestions, gender) {
  const suffix = gender === 'male' ? '' : '-f';
  const prevBtn = document.getElementById(`prev-question${suffix}`);
  const nextBtn = document.getElementById(`next-question${suffix}`);
  const finishBtn = document.getElementById(`finish-test${suffix}`);
  
  if (prevBtn) prevBtn.disabled = currentQuestion === 0;
  
  if (currentQuestion === totalQuestions - 1) {
    if (nextBtn) nextBtn.classList.add('hidden');
    if (finishBtn) finishBtn.classList.remove('hidden');
  } else {
    if (nextBtn) nextBtn.classList.remove('hidden');
    if (finishBtn) finishBtn.classList.add('hidden');
  }
}

// Обновление прогресса
function updateProgress(current, total, context) {
  let progressBar;
  
  if (context === 'male' || context === 'female') {
    progressBar = document.querySelector(`#vasilchenko-${context} .progress-fill`);
  } else if (context === 'nagoski') {
    progressBar = document.querySelector('#nagoski-test .progress-fill');
  }
  
  if (progressBar) {
    const percentage = (current / total) * 100;
    progressBar.style.width = `${percentage}%`;
  }
}

// Калькулятор трохантерного индекса
function setupModalCalculator() {
  console.log('Modal calculator setup completed (handled by main navigation)');
  
  // Обновление калькулятора при вводе
  document.addEventListener('input', function(e) {
    if (e.target.id === 'height-input' || e.target.id === 'leg-length-input') {
      calculateModalIndex();
    }
  });
  
  // Специальный обработчик для кнопки "Использовать это значение"
  document.addEventListener('click', function(e) {
    if (e.target.id === 'use-trochanter') {
      console.log('Use trochanter button clicked directly');
      e.preventDefault();
      e.stopPropagation();
      
      const resultSpan = document.getElementById('trochanter-result');
      const index = parseFloat(resultSpan.textContent);
      console.log('Direct handler - Index value:', index);
      
      if (index && !isNaN(index)) {
        const trochanterInput = document.getElementById('answer-trochanter_index');
        if (trochanterInput) {
          trochanterInput.value = index;
          testAnswers['trochanter_index'] = index;
          console.log('Direct handler - Value applied to input:', index);
        }
        
        // Закрыть модальное окно калькулятора
        const calculatorModal = document.getElementById('trochanter-modal');
        if (calculatorModal) {
          calculatorModal.classList.add('hidden');
          console.log('Direct handler - Modal closed');
        }
      }
    }
  });
}

function calculateModalIndex() {
  const heightInput = document.getElementById('height-input');
  const legLengthInput = document.getElementById('leg-length-input');
  const resultSpan = document.getElementById('trochanter-result');
  const useBtn = document.getElementById('use-trochanter');
  const modalInterpretationResult = document.getElementById('modal-interpretation-result');
  
  if (!heightInput || !legLengthInput || !resultSpan || !useBtn) return;
  
  const height = parseFloat(heightInput.value);
  const legLength = parseFloat(legLengthInput.value);
  
  if (height && legLength && legLength > 0) {
    const index = (height / legLength).toFixed(2);
    resultSpan.textContent = index;
    useBtn.disabled = false;
    
    // Показать интерпретацию результата в модальном окне
    if (modalInterpretationResult) {
      const interpretation = getIndexInterpretation(parseFloat(index));
      modalInterpretationResult.innerHTML = interpretation;
      modalInterpretationResult.classList.add('visible');
    }
  } else {
    resultSpan.textContent = '—';
    useBtn.disabled = true;
    
    if (modalInterpretationResult) {
      modalInterpretationResult.classList.remove('visible');
    }
  }
}

function openTrochanterCalculator() {
  console.log('Opening trochanter calculator');
  const modal = document.getElementById('trochanter-modal');
  if (modal) {
    modal.classList.remove('hidden');
    // Установить значения по умолчанию
    const heightInput = document.getElementById('height-input');
    const legLengthInput = document.getElementById('leg-length-input');
    
    if (heightInput) heightInput.value = '175';
    if (legLengthInput) legLengthInput.value = '90';
    
    // Рассчитать и показать результат
    setTimeout(() => {
      calculateModalIndex();
    }, 100);
  }
}

function openTrochanterDescription() {
  console.log('Opening trochanter description');
  const modal = document.getElementById('trochanter-description-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

// Калькуляторы в справочных разделах
function setupGuideCalculators() {
  document.addEventListener('input', function(e) {
    if (e.target.id === 'height-calc' || e.target.id === 'leg-calc') {
      calculateGuideIndex();
    }
  });
}

function calculateGuideIndex() {
  const heightCalc = document.getElementById('height-calc');
  const legCalc = document.getElementById('leg-calc');
  const calcResult = document.getElementById('calc-result');
  const interpretationResult = document.getElementById('interpretation-result');
  
  if (!heightCalc || !legCalc || !calcResult || !interpretationResult) return;
  
  const height = parseFloat(heightCalc.value || 0);
  const legLength = parseFloat(legCalc.value || 0);
  
  if (height && legLength && legLength > 0) {
    const index = (height / legLength).toFixed(2);
    calcResult.textContent = index;
    
    // Показать интерпретацию результата
    const interpretation = getIndexInterpretation(parseFloat(index));
    interpretationResult.innerHTML = interpretation;
    interpretationResult.classList.add('visible');
  } else {
    calcResult.textContent = '—';
    interpretationResult.classList.remove('visible');
  }
}

function getIndexInterpretation(index) {
  let maleInterpretation = '';
  let femaleInterpretation = '';
  
  // Интерпретация для мужчин
  if (index <= 1.99) {
    maleInterpretation = 'сильная';
  } else if (index >= 2.00 && index <= 2.02) {
    maleInterpretation = 'средняя';
  } else if (index >= 2.03) {
    maleInterpretation = 'слабая';
  } else {
    maleInterpretation = 'нетипичная';
  }
  
  // Интерпретация для женщин
  if (index >= 1.88 && index <= 1.96) {
    femaleInterpretation = 'слабая';
  } else if (index >= 1.97 && index <= 2.00) {
    femaleInterpretation = 'средняя';
  } else if (index >= 2.01 && index <= 2.05) {
    femaleInterpretation = 'сильная';
  } else if (index > 2.05) {
    femaleInterpretation = 'нетипичная (очень сильная)';
  } else {
    femaleInterpretation = 'нетипичная (очень слабая)';
  }
  
  return `<strong>Трохантерный индекс: ${index}</strong><br>
          • Для мужчин: <strong>${maleInterpretation} конституция</strong><br>
          • Для женщин: <strong>${femaleInterpretation} конституция</strong>`;
}

// Завершение теста Васильченко
function finishVasilchenkoTest(gender) {
  console.log('Finishing Vasilchenko test for gender:', gender);
  const vectors = appData[`vasilchenko_${gender}_full`].vectors;
  let totalScore = 0;
  let validAnswers = 0;
  
  vectors.forEach(vector => {
    const answer = testAnswers[vector.name];
    if (answer !== undefined && answer !== 0) {
      let score = 0;
      
      if (vector.type === 'number') {
        score = calculateNumberScore(answer, vector.scoring);
      } else if (vector.type === 'radio') {
        score = answer;
      }
      
      totalScore += score;
      validAnswers++;
    }
  });
  
  const averageScore = validAnswers > 0 ? (totalScore / validAnswers).toFixed(1) : 0;
  console.log('Final score:', averageScore);
  showVasilchenkoResults(averageScore);
}

// Расчет баллов для числовых ответов
function calculateNumberScore(answer, scoring) {
  for (const [range, score] of Object.entries(scoring)) {
    if (range.includes('+')) {
      const minValue = parseInt(range.replace('+', ''));
      if (answer >= minValue) return score;
    } else if (range.includes('-')) {
      if (range.endsWith('-')) {
        const maxValue = parseInt(range.replace('-', ''));
        if (answer <= maxValue) return score;
      } else {
        const [min, max] = range.split('-').map(Number);
        if (answer >= min && answer <= max) return score;
      }
    } else {
      const exactValue = parseFloat(range);
      if (Math.abs(answer - exactValue) < 0.005) return score;
    }
  }
  return 1;
}

// Отображение результатов Васильченко
function showVasilchenkoResults(score) {
  console.log('Showing Vasilchenko results with score:', score);
  showSection('vasilchenko-results');
  
  const totalScoreElement = document.getElementById('total-score');
  if (totalScoreElement) totalScoreElement.textContent = score;
  
  const constitutionInfo = getConstitutionType(score);
  
  const typeElement = document.getElementById('constitution-type');
  if (typeElement) {
    typeElement.textContent = constitutionInfo.type;
    typeElement.style.color = constitutionInfo.color;
  }
  
  const marker = document.querySelector('.score-marker');
  if (marker) {
    const position = ((parseFloat(score) - 1) / 8) * 100;
    marker.style.left = `${Math.max(0, Math.min(100, position))}%`;
  }
  
  const description = document.getElementById('result-description');
  if (description) {
    description.innerHTML = `
      <h4>Ваш тип половой конституции: ${constitutionInfo.type}</h4>
      <p><strong>Характеристика:</strong> ${constitutionInfo.description}</p>
      <p><strong>Что это означает:</strong></p>
      <ul>
        <li>Ваша половая конституция формируется биологическими факторами</li>
        <li>Каждый тип имеет свои особенности и преимущества</li>
        <li>Понимание своего типа помогает лучше узнать себя</li>
        <li>Совместимость в отношениях зависит не только от типа конституции</li>
      </ul>
      <p><strong>Рекомендации:</strong></p>
      <ul>
        <li>Принимайте свою индивидуальность - все типы конституции нормальны</li>
        <li>Учитывайте свои особенности при построении отношений</li>
        <li>При возникновении вопросов обращайтесь к специалисту</li>
        <li>Помните: гармония достигается пониманием и принятием</li>
      </ul>
    `;
  }
}

function getConstitutionType(score) {
  const numScore = parseFloat(score);
  
  for (const [range, info] of Object.entries(appData.constitution_types)) {
    const [min, max] = range.split('-').map(Number);
    if (numScore >= min && numScore <= max) {
      return info;
    }
  }
  
  if (numScore < 1.6) return appData.constitution_types['1.0-1.5'];
  if (numScore > 8.5) return appData.constitution_types['8.6-9.0'];
  
  return appData.constitution_types['4.6-5.5'];
}

// Тест Нагоски (уже обработано в setupNavigation)
function setupNagoskiTest() {
  console.log('Nagoski test setup completed (handled by main navigation)');
}

function startNagoskiTest() {
  console.log('Starting Nagoski test');
  currentQuestion = 0;
  nagoskiAnswers = {};
  showSection('nagoski-test');
  renderNagoskiQuestion();
}

function renderNagoskiQuestion() {
  console.log('Rendering Nagoski question:', currentQuestion);
  const container = document.getElementById('nagoski-questions');
  if (!container) {
    console.error('Nagoski question container not found');
    return;
  }
  
  const allQuestions = [...appData.nagoski_questions_universal.sis, ...appData.nagoski_questions_universal.ses];
  const totalQuestions = allQuestions.length;
  
  const questionText = allQuestions[currentQuestion];
  const questionType = currentQuestion < appData.nagoski_questions_universal.sis.length ? 'sis' : 'ses';
  
  container.innerHTML = '';

  const questionDiv = document.createElement('div');
  questionDiv.className = 'question current';
  
  const typeLabel = questionType === 'sis' ? '🛑 Система торможения (SIS)' : '🚀 Система возбуждения (SES)';
  const typeColor = questionType === 'sis' ? 'var(--color-error)' : 'var(--color-success)';
  
  questionDiv.innerHTML = `
    <div class="question-type" style="color: ${typeColor}; margin-bottom: 16px; font-weight: 500;">
      ${typeLabel}
    </div>
    <h3>${questionText}</h3>
    <div class="question-explanation">
      <h4>💡 Как отвечать:</h4>
      <p>Оцените, насколько это утверждение описывает именно вас. Нет правильных или неправильных ответов - важна ваша честная самооценка.</p>
    </div>
    <div class="scale-group">
      <div class="scale-labels">
        <span>Совсем не про меня</span>
        <span>Полностью про меня</span>
      </div>
      <div class="scale-container">
        <input type="range" min="0" max="4" value="2" step="1" class="scale-slider" id="nagoski-slider">
        <div class="scale-value">
          <span id="scale-value-text">2</span> из 4
        </div>
      </div>
    </div>
  `;

  container.appendChild(questionDiv);
  
  const slider = document.getElementById('nagoski-slider');
  const valueText = document.getElementById('scale-value-text');
  
  if (slider && valueText) {
    slider.addEventListener('input', (e) => {
      valueText.textContent = e.target.value;
    });
    
    // Установка сохраненного значения
    if (nagoskiAnswers[currentQuestion] !== undefined) {
      slider.value = nagoskiAnswers[currentQuestion];
      valueText.textContent = nagoskiAnswers[currentQuestion];
    }
  }
  
  updateProgress(currentQuestion + 1, totalQuestions, 'nagoski');
  updateNagoskiNavButtons();
}

function saveCurrentNagoskiAnswer() {
  const slider = document.getElementById('nagoski-slider');
  if (slider) {
    nagoskiAnswers[currentQuestion] = parseInt(slider.value);
    console.log('Nagoski answer saved:', currentQuestion, nagoskiAnswers[currentQuestion]);
    return true;
  }
  return false;
}

function updateNagoskiNavButtons() {
  const totalQuestions = appData.nagoski_questions_universal.sis.length + appData.nagoski_questions_universal.ses.length;
  const prevBtn = document.getElementById('prev-question-n');
  const nextBtn = document.getElementById('next-question-n');
  const finishBtn = document.getElementById('finish-test-n');
  
  if (prevBtn) prevBtn.disabled = currentQuestion === 0;
  
  if (currentQuestion === totalQuestions - 1) {
    if (nextBtn) nextBtn.classList.add('hidden');
    if (finishBtn) finishBtn.classList.remove('hidden');
  } else {
    if (nextBtn) nextBtn.classList.remove('hidden');
    if (finishBtn) finishBtn.classList.add('hidden');
  }
}

function finishNagoskiTest() {
  console.log('Finishing Nagoski test');
  const sisQuestions = appData.nagoski_questions_universal.sis.length;
  
  let sisTotal = 0;
  let sesTotal = 0;
  
  // Расчет SIS
  for (let i = 0; i < sisQuestions; i++) {
    sisTotal += nagoskiAnswers[i] || 0;
  }
  
  // Расчет SES
  for (let i = sisQuestions; i < Object.keys(nagoskiAnswers).length; i++) {
    sesTotal += nagoskiAnswers[i] || 0;
  }
  
  const sisAverage = (sisTotal / sisQuestions).toFixed(1);
  const sesAverage = (sesTotal / (Object.keys(nagoskiAnswers).length - sisQuestions)).toFixed(1);
  
  console.log('Nagoski scores - SIS:', sisAverage, 'SES:', sesAverage);
  showNagoskiResults(sisAverage, sesAverage);
}

function showNagoskiResults(sisScore, sesScore) {
  console.log('Showing Nagoski results');
  showSection('nagoski-results');
  
  const sisScoreElement = document.getElementById('sis-score');
  const sesScoreElement = document.getElementById('ses-score');
  
  if (sisScoreElement) sisScoreElement.textContent = sisScore;
  if (sesScoreElement) sesScoreElement.textContent = sesScore;
  
  const sisBar = document.querySelector('.sis-fill');
  const sesBar = document.querySelector('.ses-fill');
  
  if (sisBar) sisBar.style.width = `${(sisScore / 4) * 100}%`;
  if (sesBar) sesBar.style.width = `${(sesScore / 4) * 100}%`;
  
  const temperamentInfo = getNagoskiTemperament(sisScore, sesScore);
  
  const temperamentElement = document.getElementById('temperament-type');
  if (temperamentElement) {
    temperamentElement.innerHTML = `
      <h3>${temperamentInfo.title}</h3>
      <p>${temperamentInfo.subtitle}</p>
    `;
  }
  
  const description = document.getElementById('nagoski-result-description');
  if (description) {
    description.innerHTML = `
      <h4>Интерпретация ваших результатов</h4>
      <p><strong>SIS (Система торможения): ${sisScore}/4</strong></p>
      <p>${getSisInterpretation(sisScore)}</p>
      <p><strong>SES (Система возбуждения): ${sesScore}/4</strong></p>
      <p>${getSesInterpretation(sesScore)}</p>
      <h4>Практические рекомендации</h4>
      <ul>
        ${temperamentInfo.recommendations.map(rec => `<li>${rec}</li>`).join('')}
      </ul>
      <p><em>Помните: этот тест универсален и подходит для людей любого пола и ориентации. Результаты помогают лучше понять свои индивидуальные особенности.</em></p>
    `;
  }
}

function getNagoskiTemperament(sis, ses) {
  const sisNum = parseFloat(sis);
  const sesNum = parseFloat(ses);
  
  if (sisNum >= 2.5 && sesNum >= 2.5) {
    return {
      title: "🎢 Сложный темперамент",
      subtitle: "Высокая чувствительность к стимулам и помехам",
      recommendations: [
        "Создавайте максимально комфортную и предсказуемую обстановку",
        "Устраняйте отвлекающие факторы (стресс, шум, переживания)",
        "Используйте техники релаксации и медитации",
        "Экспериментируйте с новыми стимулами только в безопасной среде",
        "Обращайте особое внимание на эмоциональную близость с партнером"
      ]
    };
  } else if (sisNum < 2.5 && sesNum < 2.5) {
    return {
      title: "😌 Спокойный темперамент", 
      subtitle: "Низкая чувствительность к стимулам и помехам",
      recommendations: [
        "Используйте разнообразные и интенсивные стимулы для возбуждения",
        "Экспериментируйте с новыми практиками и техниками",
        "Не переживайте о внешних факторах и помехах",
        "Фокусируйтесь на усилении положительных стимулов",
        "Уделяйте больше времени прелюдии и настройке"
      ]
    };
  } else if (sisNum >= 2.5 && sesNum < 2.5) {
    return {
      title: "🛡️ Осторожный темперамент",
      subtitle: "Высокое торможение, умеренное возбуждение", 
      recommendations: [
        "Минимизируйте стресс и отвлекающие факторы",
        "Используйте проверенные, комфортные способы возбуждения",
        "Создавайте предсказуемую и безопасную среду",
        "Работайте над снижением тревожности",
        "Уделяйте особое внимание доверию и эмоциональной близости"
      ]
    };
  } else {
    return {
      title: "🚀 Активный темперамент",
      subtitle: "Умеренное торможение, высокое возбуждение",
      recommendations: [
        "Вы легко возбуждаетесь от различных стимулов",
        "Можете быть более спонтанными в интимности",
        "Учитывайте потребности менее активного партнера",
        "Используйте разнообразие в сексуальной жизни",
        "Помните о важности эмоциональной связи, а не только физических стимулов"
      ]
    };
  }
}

function getSisInterpretation(score) {
  if (score >= 3) return "Высокая чувствительность к отвлекающим факторам. Стресс, усталость или беспокойство сильно влияют на возбуждение.";
  if (score >= 2) return "Умеренная чувствительность к помехам. Иногда внешние факторы могут мешать возбуждению.";
  return "Низкая чувствительность к отвлекающим факторам. Внешние помехи редко влияют на ваше возбуждение.";
}

function getSesInterpretation(score) {
  if (score >= 3) return "Высокая чувствительность к возбуждающим стимулам. Вы легко и быстро реагируете на сексуальные сигналы.";
  if (score >= 2) return "Умеренная чувствительность к стимулам. Для возбуждения нужны определенные условия и стимулы.";
  return "Низкая чувствительность к стимулам. Для возбуждения требуется больше времени и более интенсивные стимулы.";
}

function generateResultsText(testType) {
    if (testType === 'vasilchenko') {
        const scoreElement = document.getElementById('total-score');
        const typeElement = document.getElementById('constitution-type');
        const score = scoreElement?.textContent || 'N/A';
        const type = typeElement?.textContent || 'N/A';
        return `Мои результаты теста половой конституции по Васильченко:\n\nСредний балл: ${score}\nТип конституции: ${type}\n\nПройти тест: ${window.location.href}`;
    } else {
        const sisScoreElement = document.getElementById('sis-score');
        const sesScoreElement = document.getElementById('ses-score');
        const sisScore = sisScoreElement?.textContent || 'N/A';
        const sesScore = sesScoreElement?.textContent || 'N/A';
        return `Мои результаты универсального теста сексуального темперамента по Нагоски:\n\nSIS (торможение): ${sisScore}/4\nSES (возбуждение): ${sesScore}/4\n\nПройти тест: ${window.location.href}`;
    }
}

// Функции для шеринга результатов
function shareToTelegram(text) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

function shareToVK(text) {
    const url = `https://vk.com/share.php?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent('Результаты теста сексуального здоровья')}&description=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Результаты скопированы в буфер обмена!');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        showNotification('Результаты скопированы в буфер обмена!');
    } catch (err) {
        showNotification('Не удалось скопировать результаты. Пожалуйста, выделите и скопируйте текст вручную.');
    }

    document.body.removeChild(textArea);
}

function showNotification(message) {
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.className = 'notification show';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-success, #4CAF50);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        font-size: 14px;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    // Удаляем уведомление через 3 секунды
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Обработчики для кнопок шеринга
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('share-btn') || e.target.closest('.share-btn')) {
        const button = e.target.classList.contains('share-btn') ? e.target : e.target.closest('.share-btn');
        const platform = button.getAttribute('data-platform');

        // Определяем тип теста по текущему разделу
        let testType = 'vasilchenko';
        if (document.getElementById('nagoski-results').style.display !== 'none') {
            testType = 'nagoski';
        }

        const text = generateResultsText(testType);

        switch (platform) {
            case 'telegram':
                shareToTelegram(text);
                break;
            case 'vk':
                shareToVK(text);
                break;
            case 'copy':
                copyToClipboard(text);
                break;
        }
    }
});

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Результаты скопированы в буфер обмена!');
    }).catch(() => {
      fallbackCopyToClipboard(text);
    });
  } else {
    fallbackCopyToClipboard(text);
  }
}

function fallbackCopyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    alert('Результаты скопированы в буфер обмена!');
  } catch (err) {
    alert('Не удалось скопировать результаты. Пожалуйста, выделите и скопируйте текст вручную.');
  }
  
  document.body.removeChild(textArea);
}