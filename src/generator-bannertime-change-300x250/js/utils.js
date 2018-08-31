
function removeElement(elementId) {
  console.log(elementId);
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
  console.log(elementId, "removed");
}

module.exports = {removeElement};
