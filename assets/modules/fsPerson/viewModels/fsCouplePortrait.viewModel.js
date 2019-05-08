/**
 * Translate spouse1, spouse2, and options data into template variables.
 * @param {object} scope - The object to use as the scope.
 * @returns {object} The scope object to use in the template.
 *
 * @since 1.1.0
 */
function fsCouplePortraitViewModel(scope) {
  scope.spouse1 = scope.spouse1 || {};
  scope.spouse2 = scope.spouse2 || {};
  scope.options = scope.options || {};

  if(!FS || !FS.showEx || !FS.showEx('spaEx')) { 
    scope.husband = scope.husband || {};
    scope.wife = scope.wife || {};
  }

  return scope;
}