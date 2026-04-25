import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render loading alert', () => {
    component.alertState = 'loading';
    component.text = 'Cargando datos...';
    fixture.detectChanges();

    const alertElement = fixture.nativeElement.querySelector('.alert');
    expect(alertElement).toBeTruthy();
    expect(alertElement.classList.contains('alert-primary')).toBeTruthy();
  });

  it('should render error alert', () => {
    component.alertState = 'error';
    component.text = 'Error en la carga';
    fixture.detectChanges();

    const alertElement = fixture.nativeElement.querySelector('.alert');
    expect(alertElement).toBeTruthy();
    expect(alertElement.classList.contains('alert-danger')).toBeTruthy();
  });

  it('should return correct alert class', () => {
    component.alertState = 'loading';
    let className = component.getClass();
    expect(className).toContain('alert-primary');

    component.alertState = 'error';
    className = component.getClass();
    expect(className).toContain('alert-danger');
  });
});
