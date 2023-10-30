let modal;
function readAllOrderDetails() {
    return database.OrderDetails.toArray();
}

function insertOrderDetail(orderDetail, isCloseModal = true) {
    database.OrderDetails.add(orderDetail);
    if (isCloseModal) {
        closeModal();
    }
}

function deleteOrderDetail(orderDetailId) {
    database.OrderDetails.delete(orderDetailId);
}

function printOrder() {
    window.print();
}

function openModal() {
    if (!modal) {
        modal = new bootstrap.Modal(document.getElementById('selectedProductModal'), {});
    }
    modal.show();
}

function closeModal() {
    modal.hide();
}
