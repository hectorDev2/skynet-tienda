export const tShirts = [
  {
    id: '1',
    name: 'Polo Gaming Supreme',
    category: 100,
    price: 25,
    colors: [
      { id: 1, name: 'black' },
      { id: 2, name: 'blue' },
      { id: 3, name: 'red' },
    ],
    description:
      'The ultimate gaming polo for true gamers. Made with premium materials for maximum comfort during those long gaming sessions.',
    image: [
      { id: 1, url: 'https://example.com/image1.jpg' },
      { id: 2, url: 'https://example.com/image2.jpg' },
      { id: 3, url: 'https://example.com/image3.jpg' },
    ],
  },
  {
    id: '2',
    name: 'Player 1 Polo',
    category: 100,
    price: 20,
    colors: [
      { id: 1, name: 'blue' },
      { id: 2, name: 'white' },
      { id: 3, name: 'red' },
    ],
    description:
      'A polo for the first player. Show off your gaming skills with style.',
    image: [
      { id: 1, url: 'https://example.com/image4.jpg' },
      { id: 2, url: 'https://example.com/image5.jpg' },
      { id: 3, url: 'https://example.com/image6.jpg' },
    ],
  },
  {
    id: '3',
    name: 'Retro Gamer Polo',
    category: 100,
    price: 18,
    colors: [
      { id: 1, name: 'green' },
      { id: 2, name: 'yellow' },
      { id: 3, name: 'black' },
    ],
    description:
      'Take a trip down memory lane with this retro-themed gaming polo.',
    image: [
      { id: 1, url: 'https://example.com/image7.jpg' },
      { id: 2, url: 'https://example.com/image8.jpg' },
      { id: 3, url: 'https://example.com/image9.jpg' },
    ],
  },
  {
    id: '4',
    name: "Gamer's Choice Polo",
    category: 100,
    price: 30,
    colors: [
      { id: 1, name: 'red' },
      { id: 2, name: 'black' },
      { id: 3, name: 'blue' },
    ],
    description:
      'The preferred choice of professional gamers. Elevate your gaming wardrobe.',
    image: [
      { id: 1, url: 'https://example.com/image10.jpg' },
      { id: 2, url: 'https://example.com/image11.jpg' },
      { id: 3, url: 'https://example.com/image12.jpg' },
    ],
  },
  {
    id: '5',
    name: 'Elite Gamer Polo',
    category: 100,
    price: 35,
    colors: [
      { id: 1, name: 'black' },
      { id: 2, name: 'green' },
      { id: 3, name: 'white' },
    ],
    description:
      'For the elite gamers who demand nothing but the best. Level up your style.',
    image: [
      { id: 1, url: 'https://example.com/image13.jpg' },
      { id: 2, url: 'https://example.com/image14.jpg' },
      { id: 3, url: 'https://example.com/image15.jpg' },
    ],
  },
  {
    id: '6',
    name: 'Legendary Gamer Polo',
    category: 100,
    price: 40,
    colors: [
      { id: 1, name: 'red' },
      { id: 2, name: 'black' },
      { id: 3, name: 'gold' },
    ],
    description:
      'For the legends of gaming. Make a statement with this legendary polo.',
    image: [
      { id: 1, url: 'https://example.com/image16.jpg' },
      { id: 2, url: 'https://example.com/image17.jpg' },
      { id: 3, url: 'https://example.com/image18.jpg' },
    ],
  },
  {
    id: '7',
    name: 'Pixel Polo',
    category: 100,
    price: 22,
    colors: [
      { id: 1, name: 'blue' },
      { id: 2, name: 'white' },
      { id: 3, name: 'red' },
    ],
    description:
      'Embrace the pixelated world with this stylish polo. Perfect for retro gamers.',
    image: [
      { id: 1, url: 'https://example.com/image19.jpg' },
      { id: 2, url: 'https://example.com/image20.jpg' },
      { id: 3, url: 'https://example.com/image21.jpg' },
    ],
  },
  {
    id: '8',
    name: 'Game On Polo',
    category: 100,
    price: 28,
    colors: [
      { id: 1, name: 'black' },
      { id: 2, name: 'blue' },
      { id: 3, name: 'green' },
    ],
    description:
      'Get ready to play with this dynamic gaming polo. The game is on!',
    image: [
      { id: 1, url: 'https://example.com/image22.jpg' },
      { id: 2, url: 'https://example.com/image23.jpg' },
      { id: 3, url: 'https://example.com/image24.jpg' },
    ],
  },
]

export const getTshirtId = (id: any) => {
  return tShirts.find((t) => t.id === id)
}
