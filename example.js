
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



            const modal_ok = document.querySelector('*[data-modal-ok=' + name);
            modal_ok.addEventListener('click', function() {
                modal_window.innerHTML = modal_content.innerHTML;
                modal_window.style.display = 'none';
            });

            const modal_cancel = document.querySelector('*[data-modal-cancel=' + name);
            modal_cancel.addEventListener('click', function() {
                modal_window.innerHTML = modal_content.innerHTML;
                modal_window.style.display = 'none';
            });


        };
    });


    const panel_btn_list = document.querySelectorAll('*[data-panel-button]');

    panel_btn_list.forEach(item => {
        item.onclick = function() {


            
            const name = this.dataset['panelButton'];
            const panel_window = document.querySelector('*[data-panel-window=' + name);
            
            if (panel_window.style.transform == 'translate(0px, 0px)') return;
    
            

            panel_window.style.transform = 'translate(0, 0)';

            const panel_title = document.createElement('div');
            panel_title.className = 'panel-title';
            panel_title.innerHTML = '<span>' + panel_window.dataset['panelTitle'] + '</span><span class="material-symbols-outlined">close</span>';

            panel_title.children[1].onclick = function() {

                let sign = 1;
                let distance = 300;

                if (panel_window.dataset['panelDirection'] != 'right') {
                    sign = -1;
                } else {
                    sign = 1;
                }

                if (panel_window.dataset['panelSize'] != 'wide') {
                    distance = 300;
                } else {
                    distance = 500;
                }

                distance *= sign;

                panel_window.style.transform = 'translate(' + distance + 'px, 0)';                
                
                setTimeout(function() {
                    panel_window.removeChild(panel_window.children[0]);
                }, 500);
            };
            

            panel_window.prepend(panel_title);

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