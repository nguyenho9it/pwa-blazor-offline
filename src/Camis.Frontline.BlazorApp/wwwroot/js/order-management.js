function readAllOrderDetails() {
    return db.OrderDetails.toArray();
}

function insertOrderDetail(orderDetail) {
    db.OrderDetails.add(orderDetail);
}

function deleteOrderDetail(orderDetailId) {
    db.OrderDetails.delete(orderDetailId);
}

function printOrder() {
    window.print();
}