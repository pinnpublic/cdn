
window.onload = () => {

    const list = document.querySelectorAll('input, textarea');

    list.forEach(item => {
        item.setAttribute('autocomplete', 'off');
    });


    const modal_btn_list = document.querySelectorAll('*[data-modal-button]');

    modal_btn_list.forEach(item => {
        item.onclick = function() {
            
            const name = this.dataset['modalButton'];
            const modal_window = document.querySelector('*[data-modal-window=' + name);
            
            const container = document.createElement('div');
            container.className = 'modal-container';
            
            

            const modal_header = document.createElement('div');
            modal_header.textContent = modal_window.dataset['modalTitle'];
            modal_header.className = 'modal-header';
            container.appendChild(modal_header);

            const modal_content = document.createElement('div');
            modal_content.className = 'modal-content';
            container.appendChild(modal_content);

            Array.from(modal_window.childNodes).forEach(item => {
                modal_content.appendChild(item);
            });

            modal_window.appendChild(container);

            modal_window.style.display = 'flex';

            setTimeout(() => {
                modal_window.style.opacity = 1;
                container.style.marginTop = '20px';
                container.style.opacity = 1;    
            }, 50);


            const modal_ok = document.querySelector('*[data-modal-ok=' + name);
            modal_ok.addEventListener('click', function() {
                modal_window.style.opacity = 0;
                container.style.marginTop = '-500px';
                container.style.opacity = 0;    

                setTimeout(() => {
                    modal_window.innerHTML = modal_content.innerHTML;
                    modal_window.style.display = 'none';
                }, 500);
                
            });

            const modal_cancel = document.querySelector('*[data-modal-cancel=' + name);
            modal_cancel.addEventListener('click', function() {

                modal_window.style.opacity = 0;
                container.style.marginTop = '-500px';
                container.style.opacity = 0;    

                setTimeout(() => {
                    modal_window.innerHTML = modal_content.innerHTML;
                    modal_window.style.display = 'none';
                }, 500);
            });


        };
    });


    const sidebar_btn_list = document.querySelectorAll('*[data-sidebar-button]');

    sidebar_btn_list.forEach(item => {
        item.onclick = function() {


            
            const name = this.dataset['sidebarButton'];
            const sidebar_window = document.querySelector('*[data-sidebar-window=' + name);
            
            if (sidebar_window.style.transform == 'translate(0px, 0px)') return;
    
            

            sidebar_window.style.transform = 'translate(0, 0)';

            const sidebar_title = document.createElement('div');
            sidebar_title.className = 'sidebar-title';
            sidebar_title.innerHTML = '<span>' + sidebar_window.dataset['sidebarTitle'] + '</span><span class="material-symbols-outlined">close</span>';

            sidebar_title.children[1].onclick = function() {

                let sign = 1;
                let distance = 300;

                if (sidebar_window.dataset['sidebarDirection'] != 'right') {
                    sign = -1;
                } else {
                    sign = 1;
                }

                if (sidebar_window.dataset['sidebarSize'] != 'wide') {
                    distance = 300;
                } else {
                    distance = 500;
                }

                distance *= sign;

                sidebar_window.style.transform = 'translate(' + distance + 'px, 0)';                
                
                setTimeout(function() {
                    sidebar_window.removeChild(sidebar_window.children[0]);
                }, 500);
            };
            

            sidebar_window.prepend(sidebar_title);

        }
    });

};

// window.onkeydown = function(event) {

//     if (event.keyCode == 27) {
//         if (document.querySelector('[data-modal-window').style.display == 'flex') {
//             document.querySelector('[data-modal-window').style.display = 'none';
//         }
//     }

// };