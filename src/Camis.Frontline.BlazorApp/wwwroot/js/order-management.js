function readAllOrderDetails() {
    return database.OrderDetails.toArray();
}

function insertOrderDetail(orderDetail) {
    database.OrderDetails.add(orderDetail);
}

function deleteOrderDetail(orderDetailId) {
    database.OrderDetails.delete(orderDetailId);
}

function printOrder() {
    window.print();
}