

/**
 * @Script js for (kawsarbinsiraj.com)
 *
 * @project     - kawsarbinsiraj.com
 * @author      - kawsarbinsiraj
 * @created_by  - kawsarbinsiraj
 * @created_at  - 19.03.2018
 * @modified_by -
 */


// Use for Main Menu
if ($('#menu').length) {
    (function () {
        function SVGMenu(el, options) {
            this.el = el;
            this.init();
        }
        SVGMenu.prototype.init = function () {
            this.trigger = this.el.querySelector('button.menu__handle');
            this.shapeEl = this.el.querySelector('div.morph-shape');

            var s = Snap(this.shapeEl.querySelector('svg'));
            this.pathEl = s.select('path');
            this.paths = {
                reset: this.pathEl.attr('d'),
                open: this.shapeEl.getAttribute('data-morph-open'),
                close: this.shapeEl.getAttribute('data-morph-close')
            };

            this.isOpen = false;

            this.initEvents();
        };

        SVGMenu.prototype.initEvents = function () {
            this.trigger.addEventListener('click', this.toggle.bind(this));
        };

        SVGMenu.prototype.toggle = function () {
            var self = this;

            if (this.isOpen) {
                classie.remove(self.el, 'menu--anim');
                setTimeout(function () {
                    classie.remove(self.el, 'menu--open');
                }, 250);

                this.pathEl.stop().animate({ 'path': this.paths.close }, 350, mina.easeout, function () {
                    self.pathEl.stop().animate({ 'path': self.paths.reset }, 700, mina.elastic);
                });
            } else {
                classie.add(self.el, 'menu--anim');
                setTimeout(function () {
                    classie.add(self.el, 'menu--open');
                }, 250);

                this.pathEl.stop().animate({ 'path': this.paths.open }, 350, mina.backin, function () {
                    self.pathEl.stop().animate({ 'path': self.paths.reset }, 700, mina.elastic);
                });
            }
            this.isOpen = !this.isOpen;
        };
        new SVGMenu(document.getElementById('menu'));
    })();
}


$(document).ready(function () {

    // toggleClass on menu__handle
    $('.menu__handle').on('click', function () {
        $('#body').toggleClass('stylish', 1000);
        $(this).toggleClass('normal');
    });

    // Bootstrap Modal Animation
    $(".modal").each(function (l) {
        $(this).on("show.bs.modal", function (l) {
            var o = $(this).attr("data-easein");
            "shake" == o ? $(".modal-dialog").velocity("callout." + o) : "pulse" == o ? $(".modal-dialog").velocity("callout." + o) : "tada" == o ? $(".modal-dialog").velocity("callout." + o) : "flash" == o ? $(".modal-dialog").velocity("callout." + o) : "bounce" == o ? $(".modal-dialog").velocity("callout." + o) : "swing" == o ? $(".modal-dialog").velocity("callout." + o) : $(".modal-dialog").velocity("transition." + o)
        })
    });

    // MenuStyleAfterScroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height() - 100) {
            $('.menu__handle').addClass('main-color');
        } else {
            $('.menu__handle').removeClass('main-color');
        }
    });


//     // Add smooth scrolling to all links
//     $(".menu__inner ul li > a").on('click', function (event) {

//         // Make sure this.hash has a value before overriding default behavior
//         if (this.hash !== "") {
//             // Prevent default anchor click behavior
//             event.preventDefault();

//             // Store hash
//             var hash = this.hash;

//             // Using jQuery's animate() method to add smooth page scroll
//             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function () {

//                 // Add hash (#) to URL when done scrolling (default click behavior)
//                 window.location.hash = hash;
//             });
//         } // End if
//     });

    // back-to-top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn('slow');
        } else {
            $(".back-to-top").fadeOut('slow');
        }
    });
    $(".back-to-top").click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600);
    });


    // lightcase Init
    $(function () {
        $('a[data-rel^=lightcase]').length ? $('a[data-rel^=lightcase]').lightcase() : null;
    })

    // load more
    $(function () {
        if ($('#portfolio').length) {
            $("#portfolio .templates_item").slice(0, 16).show();
            $("#loadMore").on('click', function (e) {
                e.preventDefault();
                $("#portfolio .templates_item:hidden").slice(0, 4).slideDown();
                if ($("#portfolio .templates_item:hidden").length == 0) {
                    $("#loadMore").fadeOut('slow');
                }
                $('html,body').animate({
                    scrollTop: $(this).offset().top
                }, 1500);
            });
        }
    });

    // bootstrap tooltip 
    $(function () {
        $('[data-toggle="tooltip"]').length ? $('[data-toggle="tooltip"]').tooltip() : null;
    })

    // Responsiveness with JQ
    if ($(window).width() < 576) {
        $('.xsNone').remove();
    }

});
