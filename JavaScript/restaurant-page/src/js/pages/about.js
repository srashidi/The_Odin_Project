import familyOwnedImage from '../../img/about/family-owned.png';

export default function aboutPage() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = 'About Us';
    content.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = 'We are a family-owned restaurant dedicated to serving the best food in town.';
    content.appendChild(description);

    const image = document.createElement('img');
    image.src = familyOwnedImage;
    image.id = 'family-owned-image';
    image.alt = 'A family-owned restaurant';
    content.appendChild(image);
}