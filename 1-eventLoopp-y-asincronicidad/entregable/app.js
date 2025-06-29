const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order) {
    // Simular la preparación del pedido usando setTimeout y Promise
     await new Promise(resolve => {
        setTimeout(resolve, Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000); // entre 1 y 5 segundos
    });
    // Actualiza el estado del pedido a "Completado"
    updateOrderStatus(order, 'Completado');
}