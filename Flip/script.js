// Hàm flipCard() sẽ được gọi khi một lá bài được nhấp
function flipCard(card) {
    var cardContainer = document.querySelector('.card-container');
    var selectedCardNames = document.getElementById('selected-card-names');

    // Lấy tên của lá bài từ thuộc tính data-name
    var cardName = card.getAttribute('data-name');

    // Lật lá bài bằng cách thêm hoặc loại bỏ lớp 'is-flipped'
    card.classList.toggle('is-flipped');

    // Nếu lá bài đang được lật
    if (card.classList.contains('is-flipped')) {
        // Thêm tên của lá bài vào phần tử hiển thị
        var nameElement = document.createElement('div');
        nameElement.textContent = cardName;
        selectedCardNames.appendChild(nameElement);
    } else { // Nếu lá bài không được lật
        // Xóa tên của lá bài
        selectedCardNames.textContent = "";
    }
}

// Hàm flipAllCards() sẽ được gọi khi nút "Flip Card" được nhấp
function flipAllCards() {
    var cardContainer = document.querySelector('.card-container');
    var cards = cardContainer.querySelectorAll('.card');
    var selectedCardNames = document.getElementById('selected-card-names');

    // Xóa tất cả các tên lá bài cũ
    selectedCardNames.textContent = "";

    // Duyệt qua tất cả các lá bài và lấy tên của chúng
    cards.forEach(function(card) {
        var cardName = card.getAttribute('data-name');

        // Thêm tên của lá bài vào phần tử hiển thị
        var nameElement = document.createElement('div');
        nameElement.textContent = cardName;
        selectedCardNames.appendChild(nameElement);

        // Lật lá bài
        card.classList.add('is-flipped');
    });
}
