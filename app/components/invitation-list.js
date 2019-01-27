import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteInvitation(invitation) {
      let confirmation = confirm("Are you sure you want to delete this invitation?");
      if (confirmation) {
        invitation.destroyRecord();
      }
    }
  }
});
