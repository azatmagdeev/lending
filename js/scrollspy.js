export default function scrollSpy() {

    const sections = document.querySelectorAll("section");
    // console.dir(sections);

    const sectionsTops = {};

    sections.forEach(el => {
        sectionsTops[el.id] = el.offsetTop;
    });

    console.log(sectionsTops);

    window.addEventListener('scroll', ev => {
        const scrollPosition = document.documentElement.scrollTop;
        // console.log(scrollPosition);
        // console.log(window.innerHeight);
        // console.log(window.outerHeight);


        for (const key in sectionsTops) {

            if (sectionsTops[key] <= scrollPosition + 2*window.innerHeight/3) {
                // console.log(key);
                document.querySelector('#active').setAttribute('id', '');

                document.querySelector('a[href*=' + key + ']').parentElement.setAttribute('id', 'active');
            }
        }
    })
}