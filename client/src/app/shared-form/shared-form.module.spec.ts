import { SharedFormModule } from './shared-form.module';

describe('SharedFormModule', () => {
  let sharedFormModule: SharedFormModule;

  beforeEach(() => {
    sharedFormModule = new SharedFormModule();
  });

  it('should create an instance', () => {
    expect(sharedFormModule).toBeTruthy();
  });
});
