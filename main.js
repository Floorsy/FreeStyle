'use strict';

// --- Валидация и логика формы ---

/**
 * Обрабатывает отправку формы записи:
 * валидирует поля и в демонстрационном режиме показывает уведомление.
 * @param {SubmitEvent} event - событие отправки формы
 */
function handleFormSubmit(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.replace(/\D/g, ''); // Удаляем все нецифровые символы
    const service = document.getElementById('service').value;
    const datetime = document.getElementById('datetime').value;

    // Проверка имени
    if (name.length < 2) {
        alert('Пожалуйста, введите ваше имя.');
        return;
    }

    // Проверка телефона (для РФ 11 цифр, начинается с 7)
    if (phone.length !== 11 || !phone.startsWith('7')) {
        alert('Пожалуйста, введите корректный номер телефона в формате +7...');
        return;
    }

    // Проверка выбора услуги
    if (!service) {
        alert('Пожалуйста, выберите услугу.');
        return;
    }

    // Проверка выбора даты
    if (!datetime) {
        alert('Пожалуйста, выберите дату и время.');
        return;
    }

    // Демонстрационный режим: данные никуда не отправляются
    alert('Демонстрационный режим: заявка не отправлена. Спасибо за заполнение тестовой формы!');

    // Очистка формы после успешной "отправки"
    event.target.reset();
}

// --- Инициализация обработчиков после загрузки DOM ---
document.addEventListener('DOMContentLoaded', () => {
    // Плавная прокрутка к форме записи по кнопке «Записаться онлайн»
    const bookingButton = document.querySelector('.hero .btn-primary');
    if (bookingButton) {
        bookingButton.addEventListener('click', () => {
            document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Навешивание обработчика отправки формы записи
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleFormSubmit);
    }
});
