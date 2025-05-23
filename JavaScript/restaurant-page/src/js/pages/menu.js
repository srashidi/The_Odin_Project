export default function menuPage() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
    content.appendChild(headline);

    const menuItems = [
        { name: 'Pizza', price: '$10' },
        { name: 'Burger', price: '$8' },
        { name: 'Pasta', price: '$12' },
        { name: 'Salad', price: '$7' },
    ];

    const menuList = document.createElement('ul');
    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price}`;
        menuList.appendChild(listItem);
    });
    content.appendChild(menuList);
}