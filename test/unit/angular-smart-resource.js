import angularSmartResource from '../../src/angular-smart-resource';

describe('angularSmartResource', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(angularSmartResource, 'greet');
      angularSmartResource.greet();
    });

    it('should have been run once', () => {
      expect(angularSmartResource.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(angularSmartResource.greet).to.have.always.returned('hello');
    });
  });
});
