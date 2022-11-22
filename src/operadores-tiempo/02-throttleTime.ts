import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';


const clicks$ = fromEvent<PointerEvent>( document, 'click' )

clicks$
.pipe(
    throttleTime(3000)
)//.subscribe( console.log )

// Ejemplo 2
const input = document.createElement( 'input' );
document.querySelector( 'body' ).append( input )

const input$ =  fromEvent<KeyboardEvent>( input, 'keyup' );

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe( ( value ) => console.log( value ) )

