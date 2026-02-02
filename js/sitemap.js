const nodes = document.querySelectorAll('.page-node, .child-node');

nodes.forEach((node) => {
  node.addEventListener('mouseover', () => {
    node.setAttribute('fill', '#ccc');
  });

  node.addEventListener('mouseout', () => {
    node.setAttribute('fill', 'blue');
  });

  node.addEventListener('click', () => {
    // Navigate to the corresponding page URL
    // based on the node's id attribute
    const pageUrl = `#${node.parentNode.id}`;
    console.log(`Navigating to ${pageUrl}`);
  });
});