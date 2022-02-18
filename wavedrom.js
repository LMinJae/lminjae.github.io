document.addEventListener('DOMContentLoaded', () => {
    ('undefined' !== typeof WaveDrom) && !!WaveDrom.ProcessAll && document.body.querySelectorAll('code.language-wavedrom').forEach(n => {
        let s = document.createElement('script');
        s.setAttribute('type', 'WaveDrom');
        s.innerHTML = n.innerHTML;
        n.outerHTML = s.outerHTML;
    });
    WaveDrom.ProcessAll();
});