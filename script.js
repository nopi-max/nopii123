function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("successMsg").innerText =
        "Terima kasih! Pesan berhasil dikirim.";
    this.reset();
});
