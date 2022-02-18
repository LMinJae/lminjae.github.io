document.addEventListener('DOMContentLoaded', () => {
    document.body.querySelectorAll('code.language-bytefield').forEach(n => {
        n.outerHTML = bytefield.generate(n.innerText, { 'embedded': true })
    })
});
