// Số lượng bông tuyết
const NUMBER_OF_SNOWFLAKES = 40;

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  
  // Ký tự bông tuyết
  snowflake.textContent = '❄';

  // Random vị trí ngang (left)
  snowflake.style.left = Math.random() * 100 + 'vw';
  // Random độ trễ rơi
  snowflake.style.animationDelay = Math.random() * 5 + 's';
  // Random thời gian rơi
  snowflake.style.animationDuration = 5 + Math.random() * 5 + 's';
  // Random kích thước
  const size = Math.floor(Math.random() * 20) + 15; 
  snowflake.style.fontSize = size + 'px';

  // Thêm bông tuyết vào body
  document.body.appendChild(snowflake);
}
