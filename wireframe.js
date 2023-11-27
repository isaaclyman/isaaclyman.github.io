// Note to self: `::after` pseudo-elements don't work on img elements
const wireframeables = [
  '.introduction',
  '.name > span',
  '.details > span',
  '.link-header > span',
  '.linkout a',
  '.book-header > span',
  '.book span',
  '.book-links a',
  '.writing-header > span',
  '.writing-name',
  '.writing-publisher',
  '.writing-description',
  '.project-header > span',
  '.project-name',
  '.project-role',
  '.project-description',
  '.project-tech',
  '.tech-header > span',
  '.tech span'
];

(function enableWireframe() {
  const elementsToWireframe = document.querySelectorAll(wireframeables.join(', '));

  for (const el of elementsToWireframe) {
    const wrapper = document.createElement('span');
    wrapper.classList.add('wf-wrapper');
    const hFrame = document.createElement('span');
    hFrame.classList.add('wf-h-frame');
    const vFrame = document.createElement('span');
    vFrame.classList.add('wf-v-frame');

    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(hFrame);
    wrapper.appendChild(vFrame);
    wrapper.appendChild(el);

    el.classList.add('wf-hoverable');

    el.addEventListener('mouseover', function(_) {
      el.setAttribute('data-dim', `${wrapper.clientWidth} x ${wrapper.clientHeight}`);
    });

    if (el.classList.contains('wf-observe')) {
      const observer = new MutationObserver(function() {
        el.setAttribute('data-dim', `${wrapper.clientWidth} x ${wrapper.clientHeight}`);
  
      });
      observer.observe(el, {
        childList: true,
        subtree: true
      });
    }
  }
})();