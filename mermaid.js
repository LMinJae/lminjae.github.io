mermaid.initialize({startOnLoad:true});

document.addEventListener('DOMContentLoaded', () => {
    document.body.querySelectorAll('code.language-mermaid').forEach(n => {
        n.className = 'mermaid';
    })
});
