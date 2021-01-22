
jest.mock('some-module', () => {
    return (foo) => {
        return foo;
    };
});
// uncomment this line to trigger the issue
// jest.mock('some-module', () => (foo) => foo);

describe('test index.js', () => {
        it('checks true', () => {
            expect(true).toBe(true);
        });
});