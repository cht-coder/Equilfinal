$(window).on("load", function () {
    gsap.defaults({ delay: 0.25, duration: 1.25 });
    gsap.registerPlugin(ScrollTrigger);
    $(".tm-brand").length && gsap.from(".tm-brand", { opacity: 0, scale: 0 });
    $(".tm-gallery-item").length &&
        $(".tm-gallery-item").each(function (i, _) {
            gsap.from(this, { scale: 0, duration: 2, delay: 0.5 * i });
        });
    $(".tm-media").length &&
        $(".tm-media").each(function () {
            const $img = $(this).find("img");
            const $div = $(this).find("div");
            gsap.from($img, { opacity: 0, x: -120, scrollTrigger: this });
            gsap.from($div, { opacity: 0, x: 120, scrollTrigger: this });
        });
    $(".form-group").length &&
        $(".form-group").each(function () {
            gsap.from(this, { opacity: 0, x: -120, scrollTrigger: this });
        });
    $("#about .tm-content .tm-text-primary").length && gsap.from("#about .tm-content .tm-text-primary", { y: -50 });
    $("#about .tm-content p").length && $("#about .tm-content p").each(function (i, _) {
        gsap.from(this, { x: i % 2 == 0 ? -110 : 110, scrollTrigger: this });
    });
    $("#services .tm-content .tm-text-primary").length && gsap.from("#services .tm-content .tm-text-primary", { y: -50 });
    $("#services .tm-content p").length && $("#services .tm-content p").each(function (i, _) {
        gsap.from(this, { x: i % 2 == 0 ? -110 : 110, scrollTrigger: this });
    });
});
