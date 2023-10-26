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

function openModal(modalId) {
    const selectProductModal = new bootstrap.Modal(document.getElementById(modalId), {})
    selectProductModal.show();
}