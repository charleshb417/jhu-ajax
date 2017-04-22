(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);

function UserService() {
	var firstName = "";
	var lastName = "";
	var phoneNumber = "";
	var favItem = "";
	var userIsRegistered = false;

	// Private Methods

	var setFirstName = function(firstNameIn){
		firstName = firstNameIn;
	}

	var setLastName = function(lastNameIn){
		lastName = lastNameIn;
	}

	var setPhoneNumber = function(phoneIn){
		phoneNumber = phoneIn;
	}

	var setFavoriteItem = function(favItemIn){
		if (favItemIn)
			favItem = favItemIn;
	}

	// Public Methods

	this.getFirstName = function(){
		return firstName;
	}

	this.getLastName = function(){
		return lastName;
	}

	this.getPhoneNumber = function(){
		return phoneNumber;
	}

	this.getFavoriteItem = function(){
		return favItem;
	}

	this.registerUser = function(firstName, lastName, favItem, phone) {
		setFirstName(firstName);
		setLastName(lastName);
		setFavoriteItem(favItem);
		setPhoneNumber(phone);

		userIsRegistered = true;
	}

	this.getUserAsObject = function() {
		return {
			firstName : firstName,
			lastName : lastName,
			phoneNumber : phoneNumber,
			favItem : favItem
		};
	}

	this.isRegistered = function(){
		return userIsRegistered;
	}
}


})();