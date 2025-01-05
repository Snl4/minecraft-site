const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Устанавливаем размеры canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Создаем массив для частиц
const particles = [];
const numParticles = 150; // Количество частиц

// Функция для создания частиц
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width; // Случайная позиция по X
        this.y = Math.random() * canvas.height; // Случайная позиция по Y
        this.size = Math.random() * 2 + 1; // Размер от 1 до 3
        this.speedX = (Math.random() - 0.5) * 1; // Медленная скорость по X
        this.speedY = (Math.random() - 0.5) * 1; // Медленная скорость по Y
        this.color = 'rgba(128, 128, 128, 0.8)'; // Серый цвет с прозрачностью
    }

    // Рисуем частицу
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size); // Рисуем квадрат
    }

    // Обновляем положение частицы
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Возвращаем частицу, если она выходит за границу
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
}

// Заполняем массив частиц
for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
}

// Анимация частиц
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем canvas

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate); // Запускаем анимацию
}


window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate(); 

function copyIP(event) {
    event.preventDefault();  

    const ip = 'Вот ты и попался ;з';  // Укажите здесь нужный IP

 
    const tempInput = document.createElement('input');
    tempInput.value = ip;
    document.body.appendChild(tempInput);

 
    tempInput.select();
    document.execCommand('copy');


    document.body.removeChild(tempInput);


    const button = document.querySelector('.button__ip');
    button.textContent = 'IP Скопирован!';

  
    setTimeout(() => {
        button.textContent = 'Скопировать IP';
    }, 2000);
}
