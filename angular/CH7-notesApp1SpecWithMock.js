describe('ItemCtrl with global mock', function(){
	var ctrl;
	beforeEach(module('notesApp1'));
	beforeEach(module('notesApp1Mocks'));
	
	beforeEach(inject(function($controller){
		ctrl = $controller('ItemCtrl');
	}));
	
	it('Should load mocked out items', function(){
		expect(ctrl.items).toEqual([{id:1, label: 'Mock'}]);
	});
});