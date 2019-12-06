(function(window, utils) {
    function createDesign() {
        var div = document.createElement('div');
        div.className = 'ready_cart_wrapper';
        div.id = 'ready_cart_wrapper';

        var divTitle = document.createElement('div');
        divTitle.className = 'ready_cart_title_section';
        div.appendChild(divTitle);

        var title = document.createElement('p');
        title.className = 'ready_cart_title';
        title.innerText = 'Your cart is ready when you are';
        divTitle.appendChild(title);

        var icon = document.createElement('img');
        icon.className = 'ready_cart_cross_icon';
        icon.src = "//cdn.optimizely.com/img/15721220395/3aa1366323cf493ebdb3098e1f58b3ea.png";
        icon.addEventListener('click', function() {
            div.classList.add('bun_hide');
        });

        divTitle.appendChild(icon);

        var divDesc = document.createElement('div');
        divDesc.className = 'ready_cart_desc_section';
        div.appendChild(divDesc);

        var desc = document.createElement('p');
        desc.className = 'ready_cart_desc';
        desc.innerText = 'If you place a Click & Collect order before 4pm, your items will be ready to collect after 9am the next day.';
        divDesc.appendChild(desc);

        var btnSec = document.createElement('div');
        btnSec.className = 'ready_cart_btn-section';
        divDesc.appendChild(btnSec);
      
        var cartUrl = 'https://www.bunnings.com.au/cart';
        var link = document.createElement('a');
        link.className = 'view_cart_anc';
        link.href = cartUrl;
        link.innerText = 'View your Cart';
        btnSec.appendChild(link);
      
        return div;
    }

    utils
        .waitForElement('.header_navbar-link.is-populated')
        .then(function(){
            var design = createDesign();
            if (design === null) {
                return;
            }
            var desktopDiv = document.querySelector('.header_navbar-link.is-populated');
            setTimeout(function () {
                desktopDiv.parentElement.append(design);
            }, 1000);
      			window.sessionStorage.setItem('optimizely.viewed_bun055', true);
        });
    

  })(window, window.optimizely.get('utils'));