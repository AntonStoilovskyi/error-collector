import { ErrorBag } from '../index';

describe('ErrorBag', () => { 
    describe('method hasError() returns', () => {
    let errorBag: ErrorBag;

    beforeEach(() => {
        errorBag = new ErrorBag();
    })
    it('true if has any error', () => {
        errorBag.add(new Error('some test error'));
        expect(errorBag.hasErrors()).toBe(true);        
     });
     it('false if bag is empty', () => {
        expect(errorBag.hasErrors()).toBe(false);
     })
 })
}) 