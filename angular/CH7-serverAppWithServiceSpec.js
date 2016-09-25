describe('Server App Integeration', function(){
	beforeEach(module('serverApp2'));
	
	var ctrl, mockBackend;
	
	beforeEach(inject(function($controller, $httpBackend) {
		mockBackend = $httpBackend;
		mockBackend.expectGET('/api/note')
		     .respond(404, {msg : 'Not Found'});
		ctrl = $controller('MainCtrl');
	}));
	
	it('should handle error while loading items', function(){
		expect(ctrl.items).toEqual([]);
		
		mockBackend.flush();
		
		expect(ctrl.items).toEqual([]);
		
		expect(ctrl.errorMessage).toEqual('Not Found');
	});
	
	afterEach(function(){
		mockBackend.verifyNoOutstandingExpectation();
		mockBackend.verifyNoOutstandingRequest();
	});
});