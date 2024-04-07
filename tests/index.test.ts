import { getHelloMessage } from '../src/index';

describe('Test Template', () => {
  
  it('returns "Hola mundo"', () => {
    expect(getHelloMessage()).toBe('Hola mundo');
  });

	it('does...', () => {
		expect(true).toBe(true);
	});
})