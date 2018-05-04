"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(UserResponse) {
        this.login = UserResponse.login; //
        this.fullName = UserResponse.name; //
        this.repoCount = UserResponse.public_repos; //
        this.followercount = UserResponse.followers; //property
    }
    return User;
}());
exports.User = User;
