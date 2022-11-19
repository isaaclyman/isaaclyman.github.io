(function enablePullchain() {
  const pullchain = document.getElementById('pullchain');
  const pullchainTarget = document.getElementById('pullchain-target');
  if (!pullchain || !pullchainTarget) {
    return;
  }

  const mouseOffset = 5;
  const falseTarget = document.createElement('span');
  let dragStartY = null;
  let dragging = false;

  function setTargetPosition(y) {
    const junction = y - mouseOffset;
    pullchain.style.height = Math.max(0, junction) + 'px';
    pullchainTarget.style.top = junction + 'px';
  }

  pullchainTarget.addEventListener('dragstart', function (event) {
    dragging = true;
    event.dataTransfer.setDragImage(falseTarget, -9999, -9999);
    pullchain.style.transition = 'none';
    pullchainTarget.style.transition = 'none';
    dragStartY = event.clientY;
    return false;
  });

  document.addEventListener('dragover', function (event) {
    if (!dragging) {
      return;
    }

    setTargetPosition(event.pageY);
  });

  pullchainTarget.addEventListener('dragend', function (event) {
    dragging = false;
    pullchain.style.transition = 'height 200ms ease';
    pullchainTarget.style.transition = 'top 200ms ease';
    
    if (event.clientY < (dragStartY + 30)) {
      setTargetPosition(dragStartY);
      return;
    }
    
    setTargetPosition(-20);
    setTimeout(function() {
      window.location = 'https://isaaclyman.com/faves';
    }, 200);
  });
})();
