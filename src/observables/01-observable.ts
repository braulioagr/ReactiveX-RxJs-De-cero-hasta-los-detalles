import { Observable, Observer } from 'rxjs'

// const obs$ = Observable.create()

const observer: Observer<any> = {
     next: (valor) => console.log('next: ',valor),
     error: (error) => console.warn('error: ',error),
     complete: () => console.info('complete') 
}

const obs$ = new Observable<string>( subscriber => {

    subscriber.next('Hola');
    subscriber.next('Mundo');

    subscriber.next('Hola');
    subscriber.next('Mundo');

    //Forzar un error
    // const a = undefined;
    // a.nombre = 'Fernando'

    subscriber.complete();

    subscriber.next('Hola');
    subscriber.next('Mundo');

});

//obs$.subscribe( console.log )

// obs$.subscribe( response => {
//     console.log( response );
// });

// obs$.subscribe({
//     next: (valor) => console.log('next: ',valor),
//     error: (error) => console.warn('error: ',error),
//     complete: () => console.info('complete') 
// });

obs$.subscribe( observer );





