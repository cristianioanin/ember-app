import Controller from '@ember/controller';

export default Controller.extend({
  selectedOption: null,
  responseMessage: '',

  actions: {

    setSelection: function (selected) {
      this.set('selectedOption', selected);
    },

    setInvitationStatus(id) {
      if (this.get('selectedOption') === null) {
        return false;
      } else {
        const inputStatus = !!Number(this.get('selectedOption'));
        const status = inputStatus ? 'Accepted' : 'Rejected';
        this.store.findRecord('invitation', id).then(invitation => {
          invitation.set('status', status);
          invitation.save().then((invitation) => {
            this.set('responseMessage', `Invitation request with the following id: ${invitation.get('id')} was set as ${invitation.get('status')}`);
          });
        });
      }
    }
  }
});
