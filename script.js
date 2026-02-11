document.addEventListener('DOMContentLoaded', () => {
    
    // --- FITUR JAM OPERASIONAL (Diambil dari Zovastore) ---
    function cekOperasional() {
        const now = new Date();
        // Mengubah ke WIB (UTC+7) secara manual agar akurat di device manapun
        let jam = now.getUTCHours() + 7; 
        
        // Koreksi jika jam lebih dari 24 (misal jam 17 UTC + 7 = 24 -> 00:00)
        if (jam >= 24) jam -= 24;

        const banner = document.getElementById("operasional");
        const textSpan = banner.querySelector("span");

        // Setting Jam Buka (09:00 sampai 21:00)
        // Ubah angka 9 dan 21 sesuai kebutuhan
        if (jam >= 9 && jam < 21) {
            // KONDISI BUKA
            banner.style.background = "#2ecc71"; // Hijau
            textSpan.textContent = "Halo hai sobat raja! saat ini ADMIN AKTIF & FAST RESPON! Jam Operasional: 09:00 - 21:00 WIB. Silahkan Order!";
        } else {
            // KONDISI TUTUP
            banner.style.background = "#e74c3c"; // Merah
            textSpan.textContent = " DILUAR JAM OPERASIONAL (Slow Respon). Admin aktif kembali pukul 09:00 WIB. Silahkan tinggalkan pesan.";
        }
    }

    // Jalankan saat pertama kali load
    cekOperasional();

    // Jalankan ulang setiap 60 detik (agar status update otomatis tanpa refresh)
    setInterval(cekOperasional, 60000);


    // --- SCRIPT INTERAKSI ---
    const waBtn = document.querySelector('.whatsapp');
    if(waBtn) {
        waBtn.addEventListener('mouseenter', () => {
            waBtn.style.animationPlayState = 'paused';
        });
        waBtn.addEventListener('mouseleave', () => {
            waBtn.style.animationPlayState = 'running';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    // ... kode map sebelumnya ...

    // --- FITUR ALERT TOMBOL BARU ---
    const btnStatus = document.getElementById('btn-status');

    if (btnStatus) {
        btnStatus.addEventListener('click', function(e) {
            // Mencegah link berpindah halaman
            e.preventDefault(); 
            
            // Munculkan Alert
            alert("Maaf, fitur ini masih dibuat! \nSilakan hubungi Admin via WhatsApp untuk cek manual.");
        });
    }

});