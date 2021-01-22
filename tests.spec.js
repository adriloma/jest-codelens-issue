import sum from 'sum.js';

jest.mock('sum', () => {
    return (foo) => {
        return foo;
    };
});
// uncomment this line to trigger the issue
// jest.mock('sum', () => (foo) => foo);

describe('test index.js', () => {
        it('checks true', () => {
            expect(true).toBe(true);
        });
});