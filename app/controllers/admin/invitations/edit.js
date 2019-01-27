import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
  emailAddress: '',
  selectedOption: null,

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),
  isAccepted: computed('model.status', function () {
    return this.model.status === 'Accepted';
  }),

  actions: {
    setSelection(selected) {
      this.set('selectedOption', selected);
    },

    updateInvitation(invitation) {
      const email = this.get('model.email');
      const inputStatus = !!Number(this.get('selectedOption'));
      const status = inputStatus ? 'Accepted' : 'Rejected';
      console.log(this.get('selectedOption'));
      this.store.findRecord('invitation', invitation.id).then(invitation => {
        if (this.get('selectedOption') !== null) {
          invitation.set('status', status);
        }
        invitation.set('email', email);
        invitation.save().then(() => {
          this.set('selectedOption', null);
          this.transitionToRoute('admin.invitations')
        });
      });
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }

});
