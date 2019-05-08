import { TestBed } from '@angular/core/testing';

import { UnitedeValeurService } from './unitede-valeur.service';

describe('UnitedeValeurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitedeValeurService = TestBed.get(UnitedeValeurService);
    expect(service).toBeTruthy();
  });
});
