import { fromEvent } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>( document, 'click');



click$.pipe(
    tap<PointerEvent>( console.log ),
    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }))
    map( ({ clientX, clientY }) => ({ clientX, clientY })),
    first( event => event.clientY >= 150 )
)
.subscribe({
    next: val => console.log( 'next: ', val ),
    complete: () => console.log('complete') 
    
})





