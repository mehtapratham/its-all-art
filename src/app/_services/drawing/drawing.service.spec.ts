/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DrawingService } from './drawing.service';

describe('DrawingService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DrawingService]
        });
    });

    it('should ...', inject([DrawingService], (service: DrawingService) => {
        expect(service).toBeTruthy();
    }));
});
