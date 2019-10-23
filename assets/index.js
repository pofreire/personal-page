if ( !Array.prototype.forEach ) {
    Array.prototype.forEach = function(fn, scope) {
      for(var i = 0, len = this.length; i < len; ++i) {
        fn.call(scope, this[i], i, this);
      }
    };
}

function fadeIn(el, display){
    if(!el){
        return;
    }
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
        }
    })();
};

function fadeOut(el){
    if(!el){
        return;
    }
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
        el.style.display = "none";
        } else {
        requestAnimationFrame(fade);
        }
    })();
};


var offheight = 100;
var nav = document.querySelector('.navigation-collapse');
var animateIcon = document.querySelector('.animated-icon');
var navigation = document.querySelector('.navigation');


document.querySelector('.nav-button').addEventListener('click', function () {
    animateIcon.classList.toggle('open');
    nav.classList.toggle('open');
});
document.querySelectorAll('a').forEach(function (element){
    element.addEventListener("click", function () {
        animateIcon.classList.remove('open');
        nav.classList.remove('open');
    });
});

// smooth scroll js
window.addEventListener("scroll", function(element){
    var scrolling = window.pageYOffset;
    if (scrolling >= 100) {
       navigation.classList.add("nav-bg");
    } else {
        navigation.classList.remove("nav-bg");
    }
    calculateNavActive();
});

var calculateNavActive = function(e){
  var scroll = window.screenY;

  try{
    document.querySelector('.nav-link.active').classList.remove('active');
  }catch(e){

  }
  var lastId;
  document.querySelectorAll('[data-section-name]').forEach(function(chapter){
    var id = chapter.id;
        if(chapter.offsetTop-offheight < scroll) {
            lastId = id;
        }
    });

    if(lastId){
        document.querySelector('.nav-link[href=\'#' + lastId + '\']').classList.add('active');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(function (element){
    element.addEventListener("click", function (e) {
        e.preventDefault();

        var href = element.getAttribute("href");
        if(href.length == 1){
            return false;
        }
        var objeto = document.querySelector(href);

        if(objeto){
           scrollTo(objeto.offsetTop);
        }
        return false;
    });
});

function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element,
      });
}

document.querySelector('.alert-button').addEventListener('click', function(){
    fadeOut(document.querySelector('.alert-container'));
    // classList.remove('valid');
});

(function(){
    window.addEventListener("scroll", function(){
        if (window.scrollY > 100) {
            fadeIn(document.querySelector('.scrollup'));
        } else {
            fadeOut(document.querySelector('.scrollup'));
        }
    });

    document.querySelector('.scrollup').addEventListener("click", function(){
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: 0,
          });
    });
    calculateNavActive();

    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('gform');
    // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (form.checkValidity() ) {
                var data = getFormData(form);
                var url = form.action;
                var xhr = new XMLHttpRequest();
                disableAllButtons(form);
                xhr.open('POST', url);
                // xhr.withCredentials = true;
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.onreadystatechange = function() {
                    form.reset();
                    var formElements = form.querySelector(".form-elements")

                    var thankYouMessage = document.querySelector(".alert-container");
                    if (thankYouMessage) {
                        thankYouMessage.style.display = "flex";
                    }
                    form.classList.remove('was-validated');
                    return;
                };
                // url encode form data for sending as post data
                var encoded = Object.keys(data).map(function(k) {
                    return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
                }).join('&');
                xhr.send(encoded);
            }
            form.classList.add('was-validated');
        }, false);
        });
    }, false);


    // get all data in form and return object
    function getFormData(form) {
        var elements = form.elements;

        var fields = Object.keys(elements).filter(function(k) {
            return (elements[k].name !== "honeypot");
        }).map(function(k) {
        if(elements[k].name !== undefined) {
            return elements[k].name;
        // special case for Edge's html collection
        }else if(elements[k].length > 0){
            return elements[k].item(0).name;
        }
        }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
        });

        var formData = {};
        fields.forEach(function(name){
        var element = elements[name];

        // singular form elements just have one value
        formData[name] = element.value;

        // when our element has multiple items, get their values
        if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
                data.push(item.value);
            }
            }
            formData[name] = data.join(', ');
        }
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

        console.log(formData);
        return formData;
    }

    function disableAllButtons(form) {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        }
    }
})();