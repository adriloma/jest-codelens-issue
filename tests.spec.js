import sum from 'sum.js';

// uncomment this line to trigger the issue
// jest.mock('sum', () => (foo) => foo);

describe('test index.js', () => {
        it('checks true', () => {
            expect(true).toBe(true);
        });
});