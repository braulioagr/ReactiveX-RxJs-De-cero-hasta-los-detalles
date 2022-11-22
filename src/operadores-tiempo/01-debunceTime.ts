import { fromEvent } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';


const clicks$ = fromEvent<PointerEvent>( document, 'click' )

clicks$
.pipe(
    debounceTime(3000)
)
// .subscribe(
//     console.log
// ) 

// Ejemplo 2
const input = document.createElement( 'input' );
document.querySelector( 'body' ).append( input )

const input$ =  fromEvent<KeyboardEvent>( input, 'keyup' );

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe( ( value ) => console.log( value ) )

