import { of } from 'rxjs';



// const obs$ = of(1,2,3,4,5,6);
const obs$ = of(...[1,2,3,4,5,6],2,3,4,5);
//const obs$ = of([1,2],{ a:1, b:2}, Function(), true, Promise.resolve(true) );


console.log('Inicio del obs$');
obs$.subscribe({
    next: next => console.log('next: ', next),
    complete: () => console.log('terminamos la secuencia')
});
console.log('Fin del obs$');





