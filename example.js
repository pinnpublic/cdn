
window.onload = () => {

    const list = document.querySelectorAll('input, textarea');

    list.forEach(item => {
        item.setAttribute('autocomplete', 'off');
        console.log(item);
    });

};