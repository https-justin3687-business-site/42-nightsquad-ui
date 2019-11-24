const root = document.documentElement;
const themeName = '42-nightsquad-ui';

module.exports = {
  activate(state) {
    atom.config.observe(`${themeName}.coal`, setCoal);

    // DEPRECATED: This can be removed at some point (added in Atom 1.17/1.18ish)
    // It removes `layoutMode`
    if (atom.config.get(`${themeName}.layoutMode`)) {
      atom.config.unset(`${themeName}.layoutMode`);
    }
  },
};


// Tab Close Button -----------------------

function setCoal(Coal) {
  if (Coal === 'The Order') {
	  document.body.style.setProperty("--data-color", '#FF6C52');
  }
  else if (Coal === 'The Assembly') {
	document.body.style.setProperty("--data-color", '#A061D1');
  }
  else if (Coal === 'The Alliance') {
   document.body.style.setProperty("--data-color", '#32C47F');
  }
  else if (Coal === 'The Federation') {
   document.body.style.setProperty("--data-color", '#417FDB');
  }
  else{
	  document.body.style.setProperty("--data-color", 'yellow');
  }
}
