// NOT work -- TODO: Why?
describe('When the user is logged in', function() {
    let user = MyFixtures.anyUser

    beforeEach(function() {
        // Do something, potentially complicated, that causes the system to run
        // with `user` logged in.
    });

    it('does some things that apply to any user', function() {
        // ...
    });

    describe('as an admin', function() {
        beforeEach(function() {
            user = MyFixtures.adminUser;
        });

        it('shows the admin controls', function() {
            // ...
        });
    });

    describe('as a non-admin', function() {
        beforeEach(function() {
            user = MyFixtures.nonAdminUser;
        });

        it('does not show the admin controls', function() {
            // ...
        });
    });
});