import { ErrorBag } from '../index';

describe('ErrorBag', () => { 
    let errorBag: ErrorBag;
    
    beforeEach(() => {
        errorBag = new ErrorBag();
    });
    describe('method hasError() returns', () => {
        describe('true', () => { 
            it('when has any error', () => {
                errorBag.add(new Error('some test error'));
                expect(errorBag.hasErrors()).toBe(true);        
            });
         });
         describe('false', () => { 
            it('when bag is empty', () => {
                expect(errorBag.hasErrors()).toBe(false);
            });     
            it('when method add() tried to add non Error type argument', () => {
                errorBag.add('test');
                expect(errorBag.hasErrors()).toBe(false);
            });
        });
    });
    describe('method getErrors() returns', () => {
        it('empty Error array when bag is empty', () => {
            expect(errorBag.getErrors()).toBeInstanceOf(Array);
            expect(errorBag.getErrors().length).toBe(0);
        });
        it('non empty Error array when bag is not empty', () => {
            const errors = ['first error', 'second error'];
            errors.forEach(error => {
                errorBag.add(new Error(error));
            });
            
            expect(errorBag.getErrors()).toBeInstanceOf(Array);
            expect(errorBag.getErrors().length).toBe(errors.length);            
        });
    })
}) 