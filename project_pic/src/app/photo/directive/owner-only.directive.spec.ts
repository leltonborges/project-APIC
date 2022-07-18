import { OwnerOnlyDirective } from './owner-only.directive';

describe('OwnerOnlyDirective', () => {
  it('should create an instance', () => {
    const directive = new OwnerOnlyDirective();
    expect(directive).toBeTruthy();
  });
});
