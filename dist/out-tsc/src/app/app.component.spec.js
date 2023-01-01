import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
describe('AppComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    it("should have as title 'manufacture-portal'", function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.componentInstance;
        expect(app.title).toEqual('manufacture-portal');
    });
    it('should render title', function () {
        var fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        var compiled = fixture.nativeElement;
        expect(compiled.querySelector('.content span').textContent).toContain('manufacture-portal app is running!');
    });
});
//# sourceMappingURL=app.component.spec.js.map