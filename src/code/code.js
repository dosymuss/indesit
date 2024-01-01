export const orderList = [
  {
    id: 1,
    name: "Иван Петров",
    number: "123-456-789",
    day: "2023-10-26",
    purchasedItems: [
      { itemName: "Ноутбук", price: 1200 },
      { itemName: "Смартфон", price: 800 },
    ],
  },
  {
    id: 2,
    name: "Мария Сидорова",
    number: "987-654-321",
    day: "2023-10-25",
    purchasedItems: [
      { itemName: "Кофемашина", price: 300 },
      { itemName: "Наушники", price: 100 },
    ],
  },
  {
    id: 3,
    name: "Алексей Иванов",
    number: "555-123-789",
    day: "2023-10-24",
    purchasedItems: [
      { itemName: "Телевизор", price: 600 },
      { itemName: "Микроволновка", price: 70 },
    ],
  },
  {
    id: 4,
    name: "Екатерина Козлова",
    number: "321-789-456",
    day: "2023-10-23",
    purchasedItems: [
      { itemName: "Холодильник", price: 900 },
      { itemName: "Стиральная машина", price: 400 },
    ],
  },
  {
    id: 5,
    name: "Сергей Зайцев",
    number: "666-999-111",
    day: "2023-10-22",
    purchasedItems: [
      { itemName: "Кофеварка", price: 50 },
      { itemName: "Утюг", price: 30 },
    ],
  },
  // Добавьте еще заявки по аналогии
];

export const summFunc = (arr=[1,2,3,4,5,67,87]) => {
  let sum = 0
  arr.forEach(item => sum += item)
  return sum
}

export const timeFunc = (time) => {
  const givenDate = new Date(time);

  // Текущая дата
  const currentDate = new Date();

  // Разница между заданной и текущей датой в миллисекундах
  const timeDifference = currentDate - givenDate;

  // Преобразование разницы в дни, часы, минуты и секунды
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  if(minutes === -1){
      return `0m`
  }
  if (days === 0 && hours === 0) {
      return `${minutes}m`
  }
  if (!minutes && !hours && !days) {
      return `${seconds}s`
  }
  if (days === 0 && hours !== 0) {
      return `${hours}h`
  }
  if (days !== 0) {
      return `${days}d`
  }

}