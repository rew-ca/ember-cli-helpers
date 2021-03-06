export function initialize( /* container, application */ ) {
  Ember.TextField.reopen({
    didInsertElement() {
      this._super(...arguments);

      // the reason why we need this is browsers don't obey
      // autofocus attribute if the page is not fully refreshing.
      if (this.get('autofocus')) {
        this.$().focus();
      }
    }
  });
}

export default {
  name: 'text-field',
  initialize: initialize
};
