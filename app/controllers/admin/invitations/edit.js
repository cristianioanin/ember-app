import Controller from '@ember/controller';

export default Controller.extend({
  selectedOption: null,
  actions: {

    setSelection: function (selected) {
      this.set('selectedOption', selected);
    },

    setInvitationStatus(id) {
      const inputStatus = !!Number(this.get('selectedOption'));
      const status = inputStatus ? 'Accepted' : 'Rejected';
      this.store.findRecord('invitation', id).then(invitation => {
        invitation.set('status', status);
        invitation.save();
      });
    }
  }
});
