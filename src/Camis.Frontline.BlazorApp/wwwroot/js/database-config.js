//Define the database
const database = new Dexie("Frontline");
database.version(1).stores({
    OrderDetails: "++id, productId, productName, quantity, price, total"
});