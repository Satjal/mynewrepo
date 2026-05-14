const orders = [
    { day: 1, food: "Burger", price: "$8.99", customer: "John", type: "Eat-in" },
    { day: 2, food: "Salad", price: "$6.99", customer: "Sara", type: "Take-away" },
    { day: 3, food: "Pasta", price: "$10.99", customer: "Ali", type: "Eat-in" },
    { day: 4, food: "Burger", price: "$8.99", customer: "Mina", type: "Take-away" },
    { day: 5, food: "Salad", price: "$6.99", customer: "David", type: "Eat-in" },
    { day: 6, food: "Pasta", price: "$10.99", customer: "Emma", type: "Take-away" },
    { day: 7, food: "Burger", price: "$8.99", customer: "Noah", type: "Eat-in" },
    { day: 8, food: "Salad", price: "$6.99", customer: "Liam", type: "Take-away" },
    { day: 9, food: "Pasta", price: "$10.99", customer: "Olivia", type: "Eat-in" },
    { day: 10, food: "Burger", price: "$8.99", customer: "Ava", type: "Take-away" },
    { day: 11, food: "Salad", price: "$6.99", customer: "Ethan", type: "Eat-in" },
    { day: 12, food: "Pasta", price: "$10.99", customer: "Sophia", type: "Take-away" },
    { day: 13, food: "Burger", price: "$8.99", customer: "Lucas", type: "Eat-in" },
    { day: 14, food: "Salad", price: "$6.99", customer: "Mia", type: "Take-away" },
    { day: 15, food: "Pasta", price: "$10.99", customer: "Henry", type: "Eat-in" },
    { day: 16, food: "Burger", price: "$8.99", customer: "Amelia", type: "Take-away" },
    { day: 17, food: "Salad", price: "$6.99", customer: "James", type: "Eat-in" },
    { day: 18, food: "Pasta", price: "$10.99", customer: "Charlotte", type: "Take-away" },
    { day: 19, food: "Burger", price: "$8.99", customer: "Benjamin", type: "Eat-in" },
    { day: 20, food: "Salad", price: "$6.99", customer: "Ella", type: "Take-away" },
    { day: 21, food: "Pasta", price: "$10.99", customer: "Daniel", type: "Eat-in" },
    { day: 22, food: "Burger", price: "$8.99", customer: "Scarlett", type: "Take-away" },
    { day: 23, food: "Salad", price: "$6.99", customer: "Matthew", type: "Eat-in" },
    { day: 24, food: "Pasta", price: "$10.99", customer: "Aria", type: "Take-away" },
    { day: 25, food: "Burger", price: "$8.99", customer: "Joseph", type: "Eat-in" },
    { day: 26, food: "Salad", price: "$6.99", customer: "Grace", type: "Take-away" },
    { day: 27, food: "Pasta", price: "$10.99", customer: "Samuel", type: "Eat-in" },
    { day: 28, food: "Burger", price: "$8.99", customer: "Chloe", type: "Take-away" }
];

const calendarDiv = document.getElementById("calendar");

for (let i = 1; i <= 28; i++) {
    const dayBox = document.createElement("div");
    dayBox.classList.add("day");

    const date = document.createElement("div");
    date.classList.add("date");
    date.textContent = "Day " + i;

    dayBox.appendChild(date);

    const order = orders.find(o => o.day === i);

    if (order) {
        const orderInfo = document.createElement("div");
        orderInfo.classList.add("order");
        orderInfo.innerHTML = `
            <strong>${order.food}</strong><br>
            Price: ${order.price}<br>
            Customer: ${order.customer}<br>
            Type: ${order.type}
        `;
        dayBox.appendChild(orderInfo);
    }

    calendarDiv.appendChild(dayBox);
}