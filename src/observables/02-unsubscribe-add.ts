import { Observable, Observer, Subscription } from 'rxjs'

const observer: Observer<any> = {
     next: (valor) => console.log('next: ',valor),
     error: (error) => console.warn('error: ',error),
     complete: () => console.info('complete') 
}


const intervalo$ =  new Observable<number>( subscriber =>{

    //Crear un contador 1,2,3,4,5,...

    let count: number = 1;

    const interval = setInterval( () =>{
        //cada segundo
        subscriber.next(count++);
        console.log(count)
    }, 1000);

    setTimeout(() => {
        subscriber.complete()
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
    
});

const subs1: Subscription = intervalo$.subscribe( observer );
const subs2: Subscription = intervalo$.subscribe( observer );
const subs3: Subscription = intervalo$.subscribe( observer );

subs1.add( subs2 );
subs1.add( subs3 );

setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log('Completado timeout');
}, 6000);



