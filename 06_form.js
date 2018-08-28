(function (window, document, $) {
    "use strict";
    $(function () {
        var settings = {
            debug: true, //Später auf false setzen
            errorElement: "label",
            errorClass : "error",
            validClass : "valid",
            // errorLabelContainer : "#fehlerliste",
            errorPlacement : function($error,$element){
                if($element.attr("name") === "geschlecht") {
                    $element.parent().append($error);
                }else if($element.attr("name") === "lieblingssprache"){
                    $element.parent().append($error);
                } else {
                    $error.insertAfter($element);
                }
            },
            highlight: function(element,errorClass, validClass) {
                //$(element).parent().addClass(errorClass);
                 $(element).addClass(errorClass); // Default
            },
            unhighlight: function(element,errorClass, validClass) {
                //$(element).parent().removeClass(errorClass).addClass(validClass);
                 $(element).removeClass(errorClass).addClass(validClass); // Default
            },
            rules: { //Formularfelder über name-Attribt angewählen
                vorname: {
                    required: true,
                    letterswithbasicpunc: true,
                    minlength: 2
                },
                nachname: {
                    required: true,
                    letterswithbasicpunc: true,
                    minlength: 2
                },
                geschlecht: {
                    required: true
                },
                lieblingssprache: {
                    required: true
                },
                sprache: {
                    required: true
                },
                agb: {
                    required: true
                }
            },
            messages: {
                vorname: {
                    required: "Vorname ist ein Pflichtfeld",
                    letterswithbasicpunc: "Nur Buchstaben und Interpunktion erlaubt",
                    minlength: "Bitte mindestens 2 Zeichen eingeben"
                },
                nachname: {
                    required: "Ist ein Pflichtfeld!",
                    letterswithbasicpunc: "Bitte nur Buchstaben und Interpunktion",
                    minlength: "Eingabe muss 2 Zeichen lang sein"
                },
                geschlecht: {
                    required: "Bitte wählen Sie ein Geschlecht."
                },
                lieblingssprache: {
                    required: "Bitte wählen Sie Ihre Lieblingssprache"
                },
                sprache: {
                    required: "Bitte wählen Sie eine Sprache"
                },
                agb: {
                    required: "Bitte die AGB akzeptieren"
                }
            }
        };

        var formvalidate = {
            init: function () {
                console.log("Validate aktiv");
                $("form")
                    .eq(0)
                    .validate(settings);
            }
        };

        formvalidate.init();

    });
}(window, document, jQuery));
