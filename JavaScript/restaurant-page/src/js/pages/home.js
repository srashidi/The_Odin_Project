import foodImage from '../../img/home/food.png';

export default function homePage() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to My Restaurant';
    content.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = 'We serve the best food in town!';
    content.appendChild(description);

    const image = document.createElement('img');
    image.src = foodImage;
    image.id = 'food-image';
    image.alt = 'Delicious food';
    content.appendChild(image);
}
