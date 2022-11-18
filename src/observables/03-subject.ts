import { Observable, Observer, Subject, Subscription } from 'rxjs';

const observer: Observer<any> = {
     next: (valor) => console.log('next: ',valor),
     error: (error) => console.warn('error: ',error),
     complete: () => console.info('complete') 
}


const intervalo$ =  new Observable<number>( subs =>{
    
    const intervalId = setInterval(
        () => subs.next( Math.random() ),
        1000
    )
    
    return () => {
        clearInterval( intervalId );
        console.log('Intervalo destruido');
        
    };
});
/**
 * 1.- Casteo multiple
 * 2.- Tambien es un Observer
 * 3.- Next, error y complete
 */
const subject$ = new Subject();
intervalo$.subscribe( subject$ )
const subscription: Subscription =  intervalo$.subscribe( subject$ );

// const subs1 =  intervalo$.subscribe( rnd => console.log('subs1: ', rnd) )
// const subs2 =  intervalo$.subscribe( rnd => console.log('subs2: ', rnd) )

const subs1 =  subject$.subscribe( observer )
const subs2 =  subject$.subscribe( observer )


setTimeout(() => {
    subject$.next(10)
    subject$.complete();
    subscription.unsubscribe();
}, 3500);
