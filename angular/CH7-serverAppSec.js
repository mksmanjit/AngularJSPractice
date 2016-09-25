describe('MainCtrl Server Calls', function(){
	beforeEach(module('serverApp'));
	
	var ctrl, mockBacked;
	
	beforeEach(inject(function($controller, $httpBackend) {
		mockBacked = $httpBackend;
		mockBacked.expectGET('/api/note')
		   .respond([{id: 1, label: 'Mock'}]);
		ctrl = $controller('MainCtrl');
	}));
	
	it('should load items from server', function(){
		expect(ctrl.items).toEqual([]);
		
		mockBacked.flush(1);
		
		expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
	});
	
	afterEach(function(){
		mockBacked.verifyNoOutstandingExpectation();
		
		mockBacked.verifyNoOutstandingRequest();
	});
	
});