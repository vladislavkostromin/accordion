document.querySelectorAll('accordion-item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parrent = item.parrentNode;

        if (parrent.classlist.contains('accordion-item--active')) {
            parrent.classlist.remove('accordion-item--active');
        } else {
            document
                .querySelectorAll('.accordion-item')
                .forEach((child) => child.classList.remove('accordion-item--active'))

            parrent.classlist.toggle('accordion-item--active');
        }
    })
)