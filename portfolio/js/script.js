(function (d) {
    var config = {
        kitId: 'fkx0wat',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);

$(function () {
    $('.sp_btn, .sp_nav li').on('click', function () {
        $('.sp_nav').fadeToggle();
        $('.sp_btn').toggleClass('open')
    });
});

$('.header_slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
});

$('.gallery_wrap').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }

        }]
})
