import { fromEvent, interval } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'DetenerTimer';

document.querySelector('body').append( button ) 



const count$ = interval(1000);
// const clickBtn$ = fromEvent( button, 'click' )
const clickBtn$ = fromEvent( button, 'click' ).pipe(
    tap( ()=> console.log('tap antes de skip') ),
    skip( 1 ),
    tap( ()=> console.log('tap despues de skip') ),
)


count$.pipe(
    takeUntil( clickBtn$ )
    )
    .subscribe({
        next: val => console.log( 'next: ', val ),
        complete: () => console.log('complete') 
    })
