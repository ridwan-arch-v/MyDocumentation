// Fungsi untuk memuat konten HTML dan CSS dari file yang dipilih
function loadContent(htmlFile, cssFile) {
    const contentArea = document.getElementById('content-area'); // Elemen konten utama
    contentArea.innerHTML = "<p class='text-center text-muted'>Memuat konten...</p>"; // Menampilkan loading

    // Menghapus CSS lama dan memuat CSS baru
    let oldStyle = document.getElementById('dynamic-style');
    if (oldStyle) {
        oldStyle.remove();
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'dynamic-style';
    link.href = cssFile;
    document.head.appendChild(link);

    // Menggunakan fetch untuk mengambil file HTML
    fetch(htmlFile)
        .then(response => {
            if (response.ok) {
                return response.text(); // Mengambil konten dalam format teks
            }
            throw new Error("File tidak ditemukan.");
        })
        .then(data => {
            contentArea.innerHTML = data; // Menampilkan konten dari file yang dipilih
        })
        .catch(error => {
            contentArea.innerHTML = "<p class='text-center text-danger'>Gagal memuat konten: " + error.message + "</p>";
        });
}
